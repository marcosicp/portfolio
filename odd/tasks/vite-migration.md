# Migración CRA → Vite (portfolio)

Reemplaza el toolchain abandonado de Create React App (`react-scripts@5.0.1`, congelado desde 2022-04-12)
por Vite 8, que es la única vía real a 0 vulnerabilidades. Toca build y deploy; el sitio publicado
debe quedar idéntico. Repo: `github.com/marcosicp/portfolio`, deploy en GitHub Pages.

## Specs

- **S1** — Actualizar las librerías de React a las versiones más recientes.
  Última publicada: `react` y `react-dom` **19.3.1** (hoy declaradas en `19.2.5`).
- **S2** — Prevenir vulnerabilidades. Estado de partida verificado:
  `npm audit` = **59 vulnerabilidades (16 low, 10 moderate, 30 high, 3 critical)**;
  57 son transitivas del toolchain de CRA y 1 es directa (`react-router-dom`, HIGH).
  `npm audit fix --force` propone `react-scripts@0.0.0` → prohibido, destruye el proyecto.
  Meta: **0 vulnerabilidades** alcanzables.
- **S3** — Autorización explícita para reescribir la restricción de `AGENTS.md` que hoy dice
  "CRA, not Vite. `public/index.html` is the webpack entry. No migration, no SWC/esbuild swap."
  El usuario eligió la opción: *"Único camino a 0 vulnerabilidades reales. Rompe la restricción de
  AGENTS.md, toca build y deploy. Requiere autorizarte a reescribir esa regla."*
- **S4** — El toolchain de build y deploy migra a Vite: `npm start`, `npm run build`, `npm test`
  y `npm run deploy` deben seguir funcionando. `npm run deploy` **publica** y no se ejecuta sin
  pedido explícito del dueño.
- **S5** — El sitio publicado debe comportarse igual. Invariantes verificables:
  (a) galerías Lightbox2 en `portfolio.jsx` (`data-lightbox="gallery-*"`) abren al click;
  (b) botón de CV descarga el PDF importado desde `src/profile_cv.pdf`;
  (c) single-page con scroll por anclas y `<hr className="dotted">`;
  (d) orden de cascada CSS de `src/index.js`: normalize → animate → bootstrap → ionicons →
  font-awesome → `./style.css`;
  (e) `body id="page-top"` y `<div id="root">` presentes;
  (f) jQuery y Lightbox2 siguen cargando como scripts externos fuera del bundle de React.

## Tasks

| ID | Spec | Ruta | Commit |
| --- | --- | --- | --- |
| T1 | S3 | Crear rama `feat/vite-migration` desde `master` | — |
| T2 | S4 | Swap de toolchain: `package.json`, `vite.config.js`, `index.html` en raíz, `src/index.js`→`.jsx`, borrar `public/index.html` y `src/serviceWorker.js` | `de524b8` |
| T3 | S2 | Borrar deps y código muerto: `react-router-dom`, `react-pdf`, `pdf-viewer.jsx`, `ajv`, `@babel/plugin-proposal-class-properties` | `de524b8` |
| T4 | S4 | Vitest + jsdom + testing-library, smoke test de render, `.nvmrc` a 22 | `de524b8` |
| T5 | S2,S4 | Verificar: install, build, test, `npm audit` = 0 | `de524b8` |
| T6 | S5 | Verificación funcional en navegador: galerías, CV, secciones, consola limpia | `de524b8` |
| T7 | S3 | Reescribir `AGENTS.md` para el stack Vite | commit de docs |
| T8 | S5 | Corregir drift en `README.md` y `.github/copilot-instructions.md` | commit de docs |

Límites de slice: `de524b8` = 483 líneas autoradas (arriba del slice de ~400, y el grueso son
borrados de CRA: `serviceWorker.js`, `pdf-viewer.jsx`, `src/index.js`, `public/index.html`);
el commit de docs = sólo documentación. Dos work units en lugar de uno para que el swap de toolchain se
revise sin el ruido de los docs.

## Log

- **L1** — Pedido original del usuario, textual:
  > bueno este repositorio se trata de mi sitio el cual refleja mi trabajo y evolucion. Ademas la idea es reflejar parte de esto en Linkedin. Para empezar te pido que actualices las librerias de React las versiones mas recientes para prevenir vulnerabilidades

- **L2** — Evidencia de exploración (2026, lockfile 630.7K, `node_modules` ausente):
  - `react-scripts@5.0.1` publicado 2022-04-12; último publish de cualquier tipo `5.1.0-next.26`
    el 2025-02-14 (sunsetting de CRA). No existe upgrade path dentro de CRA.
  - `npm audit --omit=dev` reporta las mismas 59: CRA pone `react-scripts` en `dependencies`.
  - Las 57 transitivas son del dev-server/build (`webpack-dev-server`, `sockjs`, `ws`,
    `websocket-driver`, `bfj`, `shell-quote`, `browserslist`); no entran al bundle del navegador.
  - `react-router-dom` (única HIGH directa) no tiene ni un import en `src/`.
  - `react-pdf` solo lo importa `src/components/pdf-viewer.jsx`, que está comentado en `index.js`
    y además importa `../Marcos_Casor_UPDATED.pdf`, archivo inexistente.
  - `src/serviceWorker.js` usa `process.env.PUBLIC_URL`/`NODE_ENV`; en Vite no existe `process.env`
    y `serviceWorker.unregister()` es lo único que se llama → código muerto de CRA.
  - Solo `src/index.js` contiene JSX en extensión `.js`; Vite/esbuild no lo parsea → renombrar.
  - Lightbox2 usa delegación (`$('body').on('click', 'a[data-lightbox]', …)`), así que el timing
    de render de React 19 (`createRoot` asíncrono) no afecta a las galerías.
  - Requisitos de engine: vite 8.3.5 y @vitejs/plugin-react 6.1.2 piden
    `^20.19.0 || >=22.12.0`; vitest 5.0.5 pide `^22.12.0 || ^24 || >=26`; jsdom 30 pide
    `^22.22.2 || ^24.15 || >=26`. `.nvmrc` en `20` ya no alcanza → subir a `22`.

- **L3** — Decisión del usuario: migrar a Vite (opción 2 de 3), aceptando explícitamente
  reescribir la restricción de `AGENTS.md` y tocar build/deploy.

- **L4** — Incidente de entorno durante T5 (no del proyecto): el primer `npm install` falló con
  `EEXIST` / `EACCES` al renombrar en `~/.npm/_cacache`. Diagnóstico: **1109 archivos de `~/.npm`
  pertenecen a `root`**, residuo de un `sudo npm` anterior. `sudo -n` no está disponible
  (pide contraseña), así que el install se corrió con caché aislada:
  `npm install --cache /tmp/npm-cache-gentle`. El arreglo definitivo requiere que el dueño corra
  `sudo chown -R $(id -u):$(id -g) ~/.npm`. Queda como follow-up, fuera del alcance del feature.

- **L5** — Defecto preexistente detectado (fuera de alcance, no se toca): `id="about"` está
  duplicado en `src/components/about.jsx:6` y `src/components/stack.jsx:6`. HTML inválido;
  la navegación por ancla resuelve al primero (About), así que no rompe el scroll hoy.

- **L6** — Verificación final (todo ejecutado, nada inferido):
  - `npm test` → 3/3 pasan (Vitest 5.0.5, jsdom). `npm run build` → OK, 110 módulos, `dist/`
    emitido en 1.58s. `npm audit` → **found 0 vulnerabilities** (de 59).
  - Navegador (dev server, puerto 3000): render OK, ErrorBoundary no disparado, `body id="page-top"`,
    4 separadores `hr.dotted`, 19 links `a[data-lightbox]`, jQuery y Lightbox2 cargados.
  - Navegador (build de producción vía `npm run preview`, bajo `/portfolio/`): CV resuelve
    `/portfolio/assets/profile_cv-CEaUZpp8.pdf` → 200 `application/pdf`; Lightbox2 abre el overlay
    (`display: block`) con la imagen hasheada correcta; hero completo tipeado; **cero recursos
    fallidos**; CSS aplicado.
  - Auto-chequeo adversarial: sin referencias a módulos borrados; los 15 imports de imágenes
    resuelven en disco (0 faltantes); `.vitest/` y `dist/` ignorados por git; no hay workflows de CI,
    así que la sensibilidad a mayúsculas de `.PNG` no afecta al deploy actual.
  - El verificador independiente (`gentle-ai-verify`) **no fue admitido** por el runtime: el cambio
    no declara una línea `Risk: item N` en la tarea delegada, y el contrato prohíbe reintentar
    agregándola a propósito. La verificación inline de arriba es la que vale.

- **L7** — Regresiones y follow-ups conocidos, deliberadamente fuera de este cambio:
  1. **Se perdió el lint durante el build.** CRA corría ESLint en `start`/`build`; Vite no. No se
     agregó ESLint para no inflar el slice ni arrastrar errores preexistentes. Recomendado:
     `eslint` + `eslint-plugin-react-hooks` con un script `lint` propio.
  2. **Bundle único de 920 kB** (204 kB gzip). Vite avisa por tamaño de chunk. Recomendado:
     `React.lazy` sobre `Portfolio` o `manualChunks`.
  3. `id="about"` duplicado (ver L5).
  4. `.DS_Store` no está en `.gitignore` aunque `AGENTS.md` advierte no stagearlos.
  5. Propiedad `root` de `~/.npm` (ver L4).
