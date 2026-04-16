# Portfolio — Copilot Instructions

## What is this project?

Personal portfolio website for **Marcos**, a full-stack software developer. Built with React 19 and deployed to GitHub Pages at `https://marcosicp.github.io/portfolio`.

## Stack

- **Framework**: React 19 (Create React App)
- **Styling**: SCSS + Bootstrap 5 + custom CSS themes (style-green, style-orange, etc.)
- **Animations**: Lottie Web, react-typed
- **PDF Viewer**: react-pdf
- **Routing**: react-router-dom v7
- **Deploy**: gh-pages (`npm run deploy` → builds + pushes to `gh-pages` branch)

## Project Structure

```
src/
  components/      # One JSX file per section
    intro.jsx      # Hero section with Lottie animation + Typed.js
    about.jsx      # Bio, photo, strengths
    stack.jsx      # Skills progress bars
    portfolio.jsx  # Projects showcase
    contact.jsx    # Contact form
    navbar.jsx     # Navigation
    pdf-viewer.jsx # Resume PDF viewer
    preloader.jsx  # Loading screen
    back-top.jsx   # Scroll to top button
    stars.scss     # Starfield background
  data/
    skills.js      # Skill sets: frontend, mobile, backend, DB, CI/CD
  img/
    animation.json # Lottie animation (hero section)
    profile.jpg    # Developer photo
    proyects/      # Project screenshots
public/
  css/             # Static CSS themes and overrides
  js/main.js       # jQuery-based interactions (counterup, waypoints)
  lib/             # Vendor JS/CSS (Bootstrap, jQuery, lightbox, etc.)
```

## Owner / Person

- **Name**: Marcos
- **Graduated from**: Cervantes Institute
- **Expertise**: .NET (backend), Angular + React (frontend), Flutter + MAUI + Xamarin (mobile)
- **Skills**: HTML5, CSS3, SCSS, JavaScript, Angular, React, AngularJS, Flutter, Xamarin, MAUI, Android Native (Java), Node, C#, Firebase Functions, Azure Functions, CosmosDB, MongoDB, SQL, SQLite, MySQL, Firestore
- **CI/CD tools**: Firebase, Azure, GitHub, GitLab, BitBucket, Octopus, TeamCity, CodeMagic

## Conventions

- Components are plain functions (no class components)
- No TypeScript — pure JavaScript + JSX
- CSS themes live in `public/css/` and are swapped via class on `<body>`
- Static vendor libs are in `public/lib/` (not bundled via npm)
- `src/data/skills.js` is the single source of truth for skill percentages — edit there to update the stack section
- No state management library — local state only (useState/useEffect)

## Common Tasks

- **Add a project**: edit `src/components/portfolio.jsx`, add image to `src/img/proyects/`
- **Update skills**: edit `src/data/skills.js`
- **Update bio**: edit `src/components/about.jsx`
- **Change color theme**: swap stylesheet in `public/index.html` (style-green/orange/purple/red/sky-blue)
- **Deploy**: `npm run deploy`
- **Dev server**: `npm start`
