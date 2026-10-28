import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom does not implement HTMLCanvasElement#getContext, and lottie-web grabs a 2D
// context at import time, so merely importing intro.jsx throws. The animation is a
// decorative hero background, so stub it: these are DOM-structure tests, not
// animation tests.
vi.mock("lottie-web", () => ({
  default: {
    loadAnimation: () => ({ destroy: () => {} }),
  },
}));
