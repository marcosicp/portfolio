import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";

// Flat config. Replaces the `eslintConfig: { extends: "react-app" }` block that
// react-scripts read, which disappeared with CRA.
export default [
  {
    // `public/**` and `src/libs/**` are vendored template/vendor assets: Vite copies
    // public/ verbatim and never puts it through the module graph, so linting it
    // reports on code that does not run. Keep lint aimed at the code you build.
    ignores: ["dist/**", "node_modules/**", "build/**", "public/**", "src/libs/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]", argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["src/**/*.{test,spec}.{js,jsx}", "src/test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["vite.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
