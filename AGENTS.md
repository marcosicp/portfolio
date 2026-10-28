# Portfolio — agent context

Personal portfolio for Marcos (full-stack dev: .NET/Angular/React/Flutter). React 19 on
**Vite 8**, deployed to GitHub Pages at https://marcosicp.github.io/portfolio.

Read this before touching code. The code is the source of truth; `README.md` and
`.github/copilot-instructions.md` have described features that do not exist (see "Known doc drift").

## Commands

```bash
npm install          # Node 22.22.2+ (.nvmrc pins 22; jsdom 30 needs ^22.22.2); Vite 8
npm start            # dev server, http://localhost:3000
npm run build        # production build into dist/
npm run preview      # serve the built dist/ locally
npm run deploy       # predeploy=build, then gh-pages -d dist  -> PUBLISHES, ask first
npm test             # vitest run (jsdom)
npm run test:watch   # vitest watch
npm run lint         # eslint . (also runs automatically as prebuild)
npm run cv:pdf       # render CV_Marcos_Casor_2026.md -> public/CV_Marcos_Casor_2026.pdf
```

`dist/` is generated output — never edit it, never commit it.

## Hard constraints

- **Vite, not CRA.** `index.html` at the repo root is the Vite entry; `src/index.jsx` is the
  module it loads. `react-scripts` was removed on purpose — it was frozen since 2022-04-12 and
  carried 57 of the 59 known vulnerabilities. Do not reintroduce CRA, and never run
  `npm audit fix --force`: it tries to install `react-scripts@0.0.0`.
- **`base: "/portfolio/"` in `vite.config.js` is load-bearing.** It replaces CRA's `homepage`
  field and prefixes every absolute URL in `index.html` plus every emitted asset. Changing it
  breaks the deployed site under its GitHub Pages subpath.
- **Plain JavaScript + JSX.** No TypeScript, no `.ts`/`.tsx`. JSX must live in `.jsx` files —
  Vite's esbuild does not parse JSX inside `.js`.
- **Import order in `src/index.jsx` matters**: normalize → animate → bootstrap → ionicons →
  font-awesome → `./style.css`. Reordering changes the cascade.
- **`src/style.css` is the only stylesheet.** The old template themes
  (`public/css/style-{green,orange,purple,red,sky-blue}.css`) and `public/js/main.js` were deleted in
  the Vite cleanup — nothing ever loaded them, they only inflated the deployed bundle. Do not
  reintroduce theme switching by adding them back.
- **Project galleries depend on globals.** Root `index.html` loads jQuery and Lightbox2 as classic
  scripts from `public/lib/`, outside the React bundle; `src/components/portfolio.jsx` triggers
  them with `data-lightbox="gallery-*"`. Removing those `<script>`/`<link>` tags breaks the
  galleries with no build error. They must stay in that order (Lightbox2 needs jQuery) and stay
  classic — the React bundle is a module and is therefore deferred, so it always runs after them.
  Lightbox2 binds via delegation (`$('body').on('click', 'a[data-lightbox]', …)`), so React 19's
  asynchronous `createRoot` timing does not affect it.
- **The CV PDF is generated from the markdown, never hand-edited.** `npm run cv:pdf` renders
  `CV_Marcos_Casor_2026.md` into `public/CV_Marcos_Casor_2026.pdf` using the local Chrome for
  print-to-PDF (`scripts/build-cv-pdf.mjs`), and `contact.jsx` links it via
  `import.meta.env.BASE_URL` so the GitHub Pages base path is respected. Edit the markdown and
  re-run the script; do not touch the PDF. The layout is deliberately **one column**: applicant
  tracking systems mis-parse two-column CVs, which is the most common way a CV is discarded before
  a human reads it. The file lives in `public/` (not `src/`) so the URL stays clean and shareable:
  `https://marcosicp.github.io/portfolio/CV_Marcos_Casor_2026.pdf`.
- **Single-page scroll, not routed.** Layout is one page with `<hr className="dotted">` separators
  and anchor navigation from `navbar.jsx`; `body id="page-top"`. `react-router-dom` was removed as
  unused — do not add routing to "match the README".
- **Autoprefixer runs from `browserslist`.** `vite.config.js` wires `autoprefixer` and the
  `browserslist` field in `package.json` drives it, mirroring what CRA did. Keep both.
- **`npm run lint` runs as `prebuild`.** ESLint 10 flat config in `eslint.config.js` replaces the
  `eslintConfig: { extends: "react-app" }` block that CRA read, so lint-on-build is back. It covers
  the code you build: `src/`, `vite.config.js` and the config itself. `public/**` and `src/libs/**`
  are vendored template assets that Vite copies verbatim or never imports, so they are ignored on
  purpose — do not widen the ignores to hide real findings. A lint **error** fails the build;
  warnings do not. `npx vite build` bypasses the check when you deliberately need it.
- **Section ids are unique and tested.** Each section owns one anchor: `#home`, `#about`, `#stack`,
  `#work`, `#credentials`, `#contact`, and the navbar links to each. `src/App.test.jsx` asserts both
  that every anchor exists and that no element id is duplicated — keep it that way when adding a
  section.
- **Skill data is plain strings, not percentages.** `src/data/skills.js` exports string arrays that
  `stack.jsx` renders as `.chip` tags. The old `porcentage`/`value` fields were dead data and
  misleading (they put C# at 70%). Do not reintroduce numeric proficiency scores.

## Where to edit

| Change | File |
| --- | --- |
| Skill chips (labels only) | `src/data/skills.js` (single source of truth) |
| Projects: cards, links, screenshots | `src/components/portfolio.jsx` + `src/img/proyects/<project>/` |
| Bio, photo, strengths | `src/components/about.jsx` |
| Hero typing lines, Lottie | `src/components/intro.jsx` (`src/img/animation.json`) |
| Contact, CV button | `src/components/contact.jsx` |
| Colors, spacing, layout | `src/style.css` |
| Page title, meta, external scripts | `index.html` (repo root) |
| Build, base path, test config | `vite.config.js` |
| Starfield background | `src/components/stars.scss` (imported by `intro.jsx`) |

Conventions: function components only, local `useState`/`useEffect`, no state library, no
component CSS modules — styles are global in `src/style.css` and keyed by the template's
`sect-*`, `title-*`, `box-shadow-*` class names. `src/App.jsx` holds the page tree and is
exported so tests can render it in isolation.

## Known doc drift

`README.md` and `.github/copilot-instructions.md` have claimed React Router 7 routing, swappable
color themes, and an integrated react-pdf CV viewer. None of those are live, and both `react-router-dom`
and `react-pdf` have been removed from `package.json`. Do not implement features to reconcile the
docs; if you touch those files, correct them instead.

## Repo hygiene

- `.atl/` (skill registry) and `.codegraph/` (symbol index) are local AI state — never commit,
  never hand-edit.
- `.DS_Store` files are present in the tree; do not stage them.
- Commits: Conventional Commits, one reviewable unit per commit.
- Receipt-driven development is on globally; high-risk candidates get reviewed through
  `gentle-ai`. Review never authorizes publishing: push, PR, and `npm run deploy` are the owner's
  decision.
