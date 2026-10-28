# Contenido del sitio desde el CV 2026

Actualiza el contenido del portfolio para que refleje `CV_Marcos_Casor_2026.md` (raíz del repo).
El CV es la fuente de verdad. Sin post de LinkedIn. Repo: `github.com/marcosicp/portfolio`.

## Specs

- **S1** — Pedido textual del usuario:
  > Arme un CV que te lo deje en la raiz del directorio con el nombre "CV_Marcos_Casor_2026.md"
  > esta completisimo y la idea es sacar info de ahi para completar o actualizar el sitio
- **S2** — Textual: *"No hay que hacer ningun post."* Nada de contenido para LinkedIn en este cambio.
- **S3** — Contacto: se usan los datos del CV (el usuario eligió "Los del CV").
  Email `marcosicp2012@gmail.com`, LinkedIn `linkedin.com/in/marcos-casor`, teléfono `+54 351 715 1105`,
  ubicación Córdoba, Argentina. El sitio tenía un email y una URL de LinkedIn distintos.
- **S4** — Secciones: **sí** agregar Certificaciones + Idiomas + Educación.
  **No** agregar timeline de Experiencia laboral ni sección de Docencia.
  Lo que sí se actualiza: About, Skills, Contacto, Hero.
- **S5** — Skills: etiquetas agrupadas por área, **sin porcentajes**.
  Nota: `stack.jsx` ya renderiza `.chip` (sin barras); los campos `porcentage`/`value` de
  `src/data/skills.js` son datos muertos que nadie lee. El trabajo es corregir los datos, no el UI.

## Hallazgos que justifican el cambio

- **Contacto roto**: el sitio publicaba `marcos.casor@gmail.com` y una URL de LinkedIn con
  `pressacco-086ab321`, distintas de las del CV. Un email equivocado en un portfolio es una
  oportunidad perdida.
- **Skills que subestiman**: `C#` figuraba al 70% mientras `AngularJS` y `JavaScript` estaban al 90%,
  para un Senior .NET Backend Engineer con .NET desde 2011. Además faltaban SQL Server (central en
  .NET), Oracle, Redis, TypeScript y Python; y sobraba `AndroidNative(Kotlin) 90%`, que el CV no
  menciona. Typos: `Octupus` → Octopus, `ADO Azure` → Azure DevOps.
- **About genérico**: "Full-Stack Mastery", "Team Player", "CI/CD Champion" no dicen nada. El
  resumen del CV sí: migraciones que nadie quiere tocar (.NET 4.0→4.8 con EF, Xamarin→MAUI,
  Angular 12→14), dos productos propios, docencia, y LLM/RAG en curso.
- **Hero desactualizado**: decía *"TEACHING PROGRAMMING AT INSTITUTO CERVANTES"* en presente, pero
  la docencia terminó en agosto 2025 según el CV.

## Tasks

| ID | Spec | Ruta | Commit |
| --- | --- | --- | --- |
| T1 | S1 | Rama `feat/site-content-from-cv` desde `master` | — |
| T2 | S5 | `src/data/skills.js`: grupos alineados al CV, sin `porcentage`/`value` | C1 |
| T3 | S3 | `src/components/contact.jsx`: email, LinkedIn, teléfono y ubicación del CV | C1 |
| T4 | S4 | `src/components/about.jsx`: reescribir con el resumen del CV | C2 |
| T5 | S4 | `src/components/intro.jsx`: corregir la línea de docencia en presente | C2 |
| T6 | S4 | Nueva sección Certificaciones + Idiomas + Educación (`credentials.jsx`), wire en `App.jsx` y link en `navbar.jsx` | C2 |
| T7 | S1 | `index.html`: descripción y título alineados al perfil senior .NET | C2 |
| T8 | — | Verificar: lint, tests, build, navegador (desktop + nav mobile) | C2 |
| T9 | — | Docs: AGENTS.md / README / copilot-instructions con la sección nueva | C2 |

## Log

- **L1** — Pedido original, textual (ver S1 y S2).
- **L2** — Respuestas del usuario a las tres definiciones:
  1. Contacto → "Los del CV".
  2. Secciones → seleccionó "Certificaciones e idiomas" **y** "Ninguna, solo actualizar lo existente".
     Interpretado como: agregar Certificaciones/Idiomas/Educación, no agregar Experiencia ni Docencia.
     Declarado explícitamente al usuario para que corrija si no era eso.
  3. Skills → "Reemplazar barras por etiquetas".
- **L3** — Exploración: `stack.jsx` ya usa `<div className="chip">`, no barras. `.chip` está estilado en
  `src/components/stars.scss:89` (`inline-block`, `border-radius: 25px`). `porcentage`/`value` no se
  leen en ningún archivo. Por lo tanto S5 se resuelve corrigiendo datos, sin tocar componente ni CSS.

- **L4** — Commits y límites de slice: `ba1370c` = fix del menú mobile (14 líneas, work unit
  propio porque es un defecto independiente del contenido); `ad20431` = contenido (367 líneas);
  el commit de docs = documentación. Total 454 líneas autoradas en 3 slices revisables.
- **L5** — Hallazgo no pedido pero bloqueante: el menú hamburguesa **nunca funcionó** desde que el
  proyecto pasó a Bootstrap 5. `navbar.jsx` tenía `data-toggle`/`data-target` (Bootstrap 4) con
  Bootstrap 5.3.8 instalado. Verificado contra `master`: el defecto es preexistente, no lo introdujo
  este cambio. Se corrigió a `data-bs-toggle`/`data-bs-target` porque sin eso las secciones nuevas
  son inalcanzables en celular, que es donde se mira un portfolio. Verificado con emulación de
  viewport 390×844: el menú abre con los 6 links, navega a Credentials y se cierra.
- **L6** — `CV_Marcos_Casor_2026.md` queda **sin trackear a propósito**: contiene teléfono y email
  personales y el repo es público, así que commitearlo los publicaría en el historial de git. Es
  decisión del dueño. El sitio sí muestra esos datos porque él lo autorizó explícitamente.
