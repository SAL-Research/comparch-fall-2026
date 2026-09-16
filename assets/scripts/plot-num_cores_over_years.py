from pathlib import Path
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np


# Curating a representative dataset of historical CPU and GPU core counts
data = [
    # CPUs
    {"Type": "CPU", "Year": 1971, "Cores": 1, "Model": "Intel 4004"},
    {"Type": "CPU", "Year": 1978, "Cores": 1, "Model": "Intel 8086"},
    {"Type": "CPU", "Year": 1989, "Cores": 1, "Model": "Intel 80486"},
    {"Type": "CPU", "Year": 1993, "Cores": 1, "Model": "Pentium"},
    {"Type": "CPU", "Year": 2001, "Cores": 2, "Model": "IBM POWER4"},
    {"Type": "CPU", "Year": 2005, "Cores": 2, "Model": "Pentium D / Athlon 64 X2"},
    {"Type": "CPU", "Year": 2006, "Cores": 4, "Model": "Core 2 Quad"},
    {"Type": "CPU", "Year": 2010, "Cores": 12, "Model": "AMD Opteron 6100"},
    {"Type": "CPU", "Year": 2011, "Cores": 16, "Model": "AMD Interlagos"},
    {"Type": "CPU", "Year": 2014, "Cores": 18, "Model": "Intel Haswell-EP"},
    {"Type": "CPU", "Year": 2017, "Cores": 32, "Model": "AMD EPYC Naples"},
    {"Type": "CPU", "Year": 2019, "Cores": 64, "Model": "AMD EPYC Rome"},
    {"Type": "CPU", "Year": 2022, "Cores": 96, "Model": "AMD EPYC Genoa"},
    {"Type": "CPU", "Year": 2023, "Cores": 128, "Model": "AMD EPYC Bergamo"},
    {"Type": "CPU", "Year": 2024, "Cores": 288, "Model": "Intel Sierra Forest"},
    # GPUs (Shader units / CUDA cores / Stream processors)
    {"Type": "GPU", "Year": 1999, "Cores": 4, "Model": "GeForce 256"},
    {"Type": "GPU", "Year": 2001, "Cores": 4, "Model": "GeForce 3"},
    {"Type": "GPU", "Year": 2002, "Cores": 8, "Model": "Radeon 9700"},
    {"Type": "GPU", "Year": 2004, "Cores": 16, "Model": "GeForce 6800 Ultra"},
    {"Type": "GPU", "Year": 2006, "Cores": 128, "Model": "GeForce 8800 GTX"},
    {"Type": "GPU", "Year": 2008, "Cores": 240, "Model": "GeForce GTX 280"},
    {"Type": "GPU", "Year": 2009, "Cores": 1600, "Model": "Radeon HD 5870"},
    {"Type": "GPU", "Year": 2010, "Cores": 480, "Model": "GeForce GTX 480"},
    {"Type": "GPU", "Year": 2012, "Cores": 1536, "Model": "GeForce GTX 680"},
    {"Type": "GPU", "Year": 2013, "Cores": 2880, "Model": "GeForce GTX 780 Ti"},
    {"Type": "GPU", "Year": 2015, "Cores": 3072, "Model": "GeForce GTX Titan X"},
    {"Type": "GPU", "Year": 2016, "Cores": 3584, "Model": "Titan X Pascal"},
    {"Type": "GPU", "Year": 2017, "Cores": 5120, "Model": "Titan V"},
    {"Type": "GPU", "Year": 2018, "Cores": 4352, "Model": "GeForce RTX 2080 Ti"},
    {"Type": "GPU", "Year": 2020, "Cores": 10496, "Model": "GeForce RTX 3090"},
    {"Type": "GPU", "Year": 2022, "Cores": 16384, "Model": "GeForce RTX 4090"},
    {"Type": "GPU", "Year": 2024, "Cores": 16896, "Model": "Nvidia H200"}
]

df = pd.DataFrame(data)

SURFACE, INK, INK2, MUTED = "#fcfcfb", "#0b0b0b", "#52514e", "#898781"
GRID, BASELINE = "#e1e0d9", "#c3c2b7"
BLUE, ORANGE = "#2a78d6", "#eb6834"
DOT_GRAY = "#b3b1aa"

fig, ax = plt.subplots(figsize=(10, 6), dpi=200)
fig.patch.set_facecolor(SURFACE)
ax.set_facecolor(SURFACE)

cpus = df[df['Type'] == 'CPU']
gpus = df[df['Type'] == 'GPU']

ax.scatter(cpus['Year'], cpus['Cores'], color='#1f77b4', s=80, label='CPU', alpha=0.8, edgecolors='k')
ax.scatter(gpus['Year'], gpus['Cores'], color='#ff7f0e', s=80, label='GPU', alpha=0.8, edgecolors='k')

# Setting y-axis to log2 scale
ax.set_yscale('log', base=2)

ax.set_xlabel('Release Year', fontsize=12, fontweight='bold')
ax.set_ylabel('Number of Cores (log2 scale)', fontsize=12, fontweight='bold')
ax.set_title('CPU vs GPU Core Counts Over Time', fontsize=14, fontweight='bold')

# Make yticklabels show as 2, 4, 8, 16, 32,... 
ax.set_yticks([2**i for i in range(int(np.log2(df['Cores'].min())), int(np.log2(df['Cores'].max())) + 1)])
ax.set_yticklabels([str(2**i) for i in range(int(np.log2(df['Cores'].min())), int(np.log2(df['Cores'].max())) + 1)])

ax.grid(True, which="both", ls="--", alpha=0.5)
ax.legend(fontsize=12)

fig.tight_layout()
out = Path(__file__).with_name("num_cores_over_years.png")
fig.savefig(out, facecolor=SURFACE, bbox_inches="tight")