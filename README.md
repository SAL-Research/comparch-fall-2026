# CS 423/520 — Computer Architecture (Bilkent University, Fall 2026)

Public course website, published via GitHub Pages at
<https://sal-research.github.io/comparch-fall-2026/>.

## How it works

The site follows the SAL-Research lab-site architecture: pages are Handlebars
templates populated from metadata — never hand-written HTML.

- `src/metadata/metadata-comparch-fall_2026.js` — **all course content lives here**:
  weeks → days → lectures (numbers like `L4c` are computed by the build),
  homeworks (handout / git repo / deadline / submission), and reading
  materials (cited with structured author/venue/year fields).
- `src/templates/_course.html` — course page template
- `src/templates/_course_readings.html` — readings page template
- `assets/` — files copied verbatim into the site root
  (`slides/`, `homeworks/` hold exported lecture decks and handout PDFs)
- `build.js` — renders `dist/` (`npm run build`; `npm start` for a local preview)

## Publishing

Every push to `main` builds and deploys the site via
`.github/workflows/deploy.yml` (GitHub Pages, Actions source).

## Updating during the semester

1. Export final slide PDFs/PPTX and homework handouts into `assets/slides/`
   and `assets/homeworks/` (never commit solutions or rubrics here — this
   repo is public).
2. Replace the matching `'TBA'` fields in the metadata with the file paths
   (e.g. `pptx: 'slides/l1b-introduction_and_basics.pptx'`) or external URLs
   (YouTube links, homework git repos, submission links).
3. Commit and push — Actions rebuilds the site.
