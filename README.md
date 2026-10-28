<div align="center">

# 🚀 Personal Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen?style=for-the-badge&logo=github)](https://marcosicp.github.io/portfolio)

**Portfolio personal desarrollado con React — diseñado para mostrar proyectos, habilidades y experiencia.**

[🌐 Ver en vivo](https://marcosicp.github.io/portfolio) · [📬 Contacto](#contacto)

</div>

---

## ✨ Características

- ⭐ **Animaciones** con Lottie y Animate.css
- 🖼️ **Galerías de proyectos** con Lightbox2
- 🌌 **Fondo de estrellas** animado
- 📄 **Descarga de CV** en PDF
- 📱 **Diseño responsive** con Bootstrap 5
- 🚀 **Deploy automático** a GitHub Pages con `gh-pages`

---

## 🛠️ Tech Stack

| Categoría | Tecnologías |
|-----------|-------------|
| **UI** | React 19, Bootstrap 5, SASS |
| **Build** | Vite 8 |
| **Animaciones** | Lottie Web, Animate.css, React Typed |
| **Galerías** | jQuery + Lightbox2 (scripts externos, sin bundlear) |
| **Tests** | Vitest + Testing Library (jsdom) |
| **Deploy** | GitHub Pages, gh-pages |

---

## 📁 Estructura del proyecto

```
index.html            # Entry de Vite (meta, scripts externos, <div id="root">)
vite.config.js        # base path, plugins, autoprefixer, config de tests
src/
├── index.jsx         # Entry del bundle: imports de CSS/JS y montaje de React
├── App.jsx           # Árbol de la página
├── components/
│   ├── intro.jsx       # Sección hero con typing effect
│   ├── about.jsx       # Sobre mí
│   ├── stack.jsx       # Habilidades técnicas
│   ├── portfolio.jsx   # Proyectos
│   ├── contact.jsx     # Formulario de contacto
│   ├── navbar.jsx      # Navegación
│   └── ...
├── data/
│   └── skills.js       # Skills configurables
└── img/                # Assets e imágenes
public/
└── lib/                # Vendor JS/CSS (jQuery, Lightbox2, Bootstrap, etc.)
```

---

## ⚡ Inicio rápido

Requiere Node 22 (ver `.nvmrc`).

```bash
# Instalar dependencias
npm install

# Correr en modo desarrollo
npm start

# Build para producción (genera dist/)
npm run build

# Previsualizar el build
npm run preview

# Correr el lint
npm run lint

# Correr los tests
npm test

# Deploy a GitHub Pages (publica)
npm run deploy
```

La app corre en [http://localhost:3000](http://localhost:3000).

---

## 📬 Contacto

Podés encontrarme en [marcosicp.github.io/portfolio](https://marcosicp.github.io/portfolio) o abrir un issue en este repo.

---

<div align="center">
  <sub>Hecho con ❤️ y React</sub>
</div>
