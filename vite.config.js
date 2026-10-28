import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// `base` must match the GitHub Pages project path (https://marcosicp.github.io/portfolio).
// It replaces CRA's `homepage` field: every absolute URL in index.html and every asset
// emitted by the build gets this prefix.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  css: {
    // CRA ran autoprefixer from the `browserslist` field in package.json. Keep that
    // behaviour so the emitted CSS keeps the same vendor prefixes.
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
    include: ["src/**/*.{test,spec}.{js,jsx}"],
  },
});
