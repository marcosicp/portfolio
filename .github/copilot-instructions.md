# Portfolio — Copilot Instructions

## What is this project?

Personal portfolio website for **Marcos**, a full-stack software developer. Built with React 19 on
Vite 8 and deployed to GitHub Pages at `https://marcosicp.github.io/portfolio`.

## Stack

- **Framework**: React 19 (Vite 8)
- **Styling**: SCSS + Bootstrap 5
- **Animations**: Lottie Web, react-typed
- **Galleries**: jQuery + Lightbox2, loaded as external classic scripts from `public/lib/`
- **Tests**: Vitest + Testing Library (jsdom)
- **Deploy**: gh-pages (`npm run deploy` → builds `dist/` and pushes to the `gh-pages` branch)

## Project Structure

```
index.html         # Vite entry: title, meta, external scripts, <div id="root">
vite.config.js     # base path, React plugin, autoprefixer, Vitest config
src/
  index.jsx        # Bundle entry: CSS/JS imports in cascade order, mounts <App />
  App.jsx          # Page tree, exported for tests
  App.test.jsx     # Render smoke tests
  test/setup.js    # jsdom setup + lottie-web stub
  components/      # One JSX file per section
    intro.jsx      # Hero section with Lottie animation + Typed.js
    about.jsx      # Bio, photo, strengths
    stack.jsx      # Skill chips grouped by area
    portfolio.jsx  # Projects showcase (data-lightbox galleries)
    credentials.jsx # Education, certifications, languages
    contact.jsx    # CV download + contact details
    navbar.jsx     # Navigation
    preloader.jsx  # Loading screen
    back-top.jsx   # Scroll to top button
    stars.scss     # Starfield background
  data/
    skills.js      # Chip labels by area: frontend, backend, mobile, data, cloud, exploring
  img/
    animation.json # Lottie animation (hero section)
    profile.jpg    # Developer photo
    proyects/      # Project screenshots
public/
  lib/             # Vendor JS/CSS (Bootstrap, jQuery, Lightbox2, etc.)
  team.png         # Favicon
  manifest.json    # Web app manifest
```

## Owner / Person

- **Name**: Marcos
- **Graduated from**: Cervantes Institute
- **Expertise**: .NET (backend), Angular + React (frontend), Flutter + MAUI + Xamarin (mobile)
- **Skills**: HTML5, CSS3, SCSS, JavaScript, Angular, React, AngularJS, Flutter, Xamarin, MAUI, Android Native (Java), Node, C#, Firebase Functions, Azure Functions, CosmosDB, MongoDB, SQL, SQLite, MySQL, Firestore
- **CI/CD tools**: Firebase, Azure, GitHub, GitLab, BitBucket, Octopus, TeamCity, CodeMagic

## Conventions

- Components are plain functions (no class components)
- No TypeScript — pure JavaScript + JSX, and JSX must be in `.jsx` files (Vite's esbuild does not
  parse JSX in `.js`)
- `base: "/portfolio/"` in `vite.config.js` is required for the GitHub Pages subpath — it replaces
  CRA's `homepage` field
- CSS import order in `src/index.jsx` is the cascade order — do not reorder
- Static vendor libs are in `public/lib/` (not bundled via npm) and referenced from root `index.html`
- `src/data/skills.js` is the single source of truth for skill percentages — edit there to update the stack section
- No state management library — local state only (useState/useEffect)
- ESLint 10 flat config in `eslint.config.js`; `npm run lint` also runs as `prebuild`, so a lint
  error fails the build. `public/**` and `src/libs/**` are vendored and ignored on purpose
- Never run `npm audit fix --force`: it tries to install `react-scripts@0.0.0`

## Common Tasks

- **Add a project**: edit `src/components/portfolio.jsx`, add image to `src/img/proyects/`
- **Update skills**: edit `src/data/skills.js`
- **Update bio**: edit `src/components/about.jsx`
- **Change page title or meta**: edit `index.html` at the repo root
- **Deploy**: `npm run deploy` (publishes — owner's decision)
- **Dev server**: `npm start`
- **Build**: `npm run build` → `dist/` (runs `npm run lint` first)
- **Tests**: `npm test`
- **Lint**: `npm run lint`
