from pathlib import Path

import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import numpy as np
import pandas as pd
import requests

# Fetch the data.
df = pd.read_csv("https://ourworldindata.org/grapher/exponential-growth-of-parameters-in-notable-ai-systems.csv?v=1&csvType=full&useColumnShortNames=true", storage_options = {'User-Agent': 'Our World In Data data fetch/1.0'})

# Fetch the metadata
metadata = requests.get("https://ourworldindata.org/grapher/exponential-growth-of-parameters-in-notable-ai-systems.metadata.json?v=1&csvType=full&useColumnShortNames=true").json()

# Drop OWID's synthetic trendline pseudo-entities; keep only real systems.
df = df.dropna(subset=["parameters", "entity"])
df = df[~df["entity"].str.contains(r"x/year", regex=True)]
df = df[df["parameters"] > 0].copy()

# Fractional year for the x-axis and for the fit.
day = pd.to_datetime(df["day"])
df["year"] = day.dt.year + (day.dt.dayofyear - 1) / 365.25

x = df["year"].to_numpy()
y = np.log2(df["parameters"].to_numpy())

# Three-segment exponential fit to the *trend* of model size. Individual systems
# released in the same year span ~10 orders of magnitude, which caps R^2 for any
# fit through the raw points at ~0.75 — so we fit the 2-year-bin mean of
# log2(parameters) instead, and pick the two breakpoint years by grid search.
trend = np.log2(df["parameters"]).groupby((df["year"] // 2) * 2).mean()
tx = trend.index.to_numpy() + 1.0  # bin centers
ty = trend.to_numpy()

# Continuous piecewise-linear (in log2) model via hinge basis:
# ty ≈ c0 + c1*t + c2*max(0, t-bp1) + c3*max(0, t-bp2)
def hinge_design(t, bp1, bp2):
    return np.column_stack([np.ones_like(t), t,
                            np.maximum(0, t - bp1), np.maximum(0, t - bp2)])

best = None
for cand1 in np.arange(1958.0, 2012.0, 1.0):
    for cand2 in np.arange(cand1 + 8.0, 2024.0, 1.0):
        X = hinge_design(tx, cand1, cand2)
        coef, *_ = np.linalg.lstsq(X, ty, rcond=None)
        sse = np.sum((ty - X @ coef) ** 2)
        if best is None or sse < best[0]:
            best = (sse, (cand1, cand2), coef)

sse, (bp1, bp2), coef = best
r2 = 1 - sse / np.sum((ty - ty.mean()) ** 2)
slopes = [coef[1], coef[1] + coef[2], coef[1] + coef[2] + coef[3]]
rates = [2 ** s for s in slopes]

# Landmark systems to highlight (must match dataset entity names exactly).
# entity -> (label, (dx, dy) offset in points, draw_arrow)
HIGHLIGHTS = {
    "Perceptron Mark I":     ("Perceptron Mark I",  (8, -14),   False),
    "ADALINE":               ("ADALINE",            (8, 4),     False),
    "Neocognitron":          ("Neocognitron",       (-8, 10),   False),
    "LeNet-5":               ("LeNet-5",            (8, -12),   False),
    "AlexNet":               ("AlexNet",            (-60, -4),  False),
    "Transformer (2017)":    ("Transformer",        (26, -34),  True),
    "GPT-2 (1.5B)":          ("GPT-2",              (-46, 4),   True),
    "GPT-3 175B (davinci)":  ("GPT-3",              (-48, -4),  True),
    "GPT-4 (Mar 2023)":      ("GPT-4",              (-38, 14),  True),
    "Llama 3.1-405B":        ("Llama 3.1",          (26, -16),  True),
    "DeepSeek-R1":           ("DeepSeek-R1",        (24, 8),    True),
}

# --- Plot (palette: surface #fcfcfb, ink #0b0b0b/#52514e, blue highlight, orange fit) ---
SURFACE, INK, INK2, MUTED = "#fcfcfb", "#0b0b0b", "#52514e", "#898781"
GRID, BASELINE = "#e1e0d9", "#c3c2b7"
BLUE, ORANGE = "#2a78d6", "#eb6834"
DOT_GRAY = "#b3b1aa"

fig, ax = plt.subplots(figsize=(10, 6), dpi=200)
fig.patch.set_facecolor(SURFACE)
ax.set_facecolor(SURFACE)

hl = df["entity"].isin(HIGHLIGHTS)
ax.scatter(x[~hl], df.loc[~hl, "parameters"], s=10, color=DOT_GRAY, alpha=0.8,
           linewidths=0, zorder=2)
ax.scatter(x[hl], df.loc[hl, "parameters"], s=60, color=BLUE,
           edgecolors=SURFACE, linewidths=1.2, zorder=5)
for _, row in df[hl].iterrows():
    label, offset, arrow = HIGHLIGHTS[row["entity"]]
    ax.annotate(label, (row["year"], row["parameters"]),
                xytext=offset, textcoords="offset points",
                fontsize=9.5, color=INK, fontweight="bold", zorder=6,
                arrowprops=dict(arrowstyle="-", color=MUTED, lw=0.9,
                                shrinkA=2, shrinkB=4) if arrow else None)

# The fitted trend of 2-year average model size: the bin means as open markers,
# the three exponential segments as lines through them.
ax.scatter(tx, 2 ** ty, s=26, facecolors="none", edgecolors=ORANGE,
           linewidths=1.3, zorder=4)
xf = np.linspace(x.min(), x.max(), 300)
ax.plot(xf, 2 ** (hinge_design(xf, bp1, bp2) @ coef), color=ORANGE,
        linewidth=2, zorder=4)
ax.annotate(
    f"Average model size ($\\circ$ = 2-year mean, $R^2$ = {r2:.2f}):\n"
    f"{rates[0]:.2f}$\\times$/year $\\rightarrow$ "
    f"{rates[1]:.2f}$\\times$/year after {bp1:.0f} $\\rightarrow$ "
    f"{rates[2]:.2f}$\\times$/year after {bp2:.0f}\n"
    f"$\\Rightarrow$ doubling every {12/slopes[2]:.1f} months since {bp2:.0f}",
    xy=(0.03, 0.80), xycoords="axes fraction",
    fontsize=11, color=ORANGE, fontweight="bold",
)

ax.set_yscale("log", base=2)
ax.yaxis.set_major_locator(mticker.LogLocator(base=2, numticks=12))
ax.yaxis.set_major_formatter(
    mticker.FuncFormatter(lambda v, _: f"$2^{{{int(round(np.log2(v)))}}}$")
)
ax.yaxis.set_minor_locator(mticker.NullLocator())

ax.set_title("Number of parameters in notable AI systems", color=INK, fontsize=15, pad=14, loc="left")
ax.set_xlabel("Year", color=INK2, fontsize=12)
ax.set_ylabel("Parameters", color=INK2, fontsize=12)
ax.tick_params(colors=MUTED, labelsize=10)
ax.grid(True, axis="y", color=GRID, linewidth=0.8, zorder=0)
for side in ("top", "right"):
    ax.spines[side].set_visible(False)
for side in ("left", "bottom"):
    ax.spines[side].set_color(BASELINE)
ax.set_xticks(np.arange(1950, 2031, 10))
ax.set_xlim(x.min() - 2, 2032)
ax.set_ylim(df["parameters"].min() / 4, df["parameters"].max() * 8)

fig.text(0.99, 0.01, "Data: Epoch (2026), via Our World in Data",
         ha="right", fontsize=9, color=MUTED)
fig.tight_layout()

out = Path(__file__).with_name("ai_model_size.png")
fig.savefig(out, facecolor=SURFACE, bbox_inches="tight")
print(f"n = {len(df)}, breaks {bp1:.0f}/{bp2:.0f}: "
      + " -> ".join(f"{r:.2f}x/yr" for r in rates)
      + f", doubling every {12/slopes[2]:.1f} months since {bp2:.0f}, R^2 = {r2:.3f} (2-yr means)")
print("highlighted:", int(hl.sum()), "of", len(HIGHLIGHTS))
print(f"saved {out}")
