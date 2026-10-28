import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App.jsx";

// Smoke coverage for the Vite migration: the whole page tree has to mount without
// tripping the ErrorBoundary, and the DOM hooks the template depends on have to
// survive. These are the invariants that break silently if the toolchain swaps
// something out (asset imports, SCSS, JSX runtime).
describe("App", () => {
  it("mounts the full page without tripping the ErrorBoundary", () => {
    const { container } = render(<App />);

    expect(container.textContent).not.toMatch(/Something went wrong/i);
    expect(container.querySelectorAll("section").length).toBeGreaterThanOrEqual(5);
  });

  it("keeps the anchor targets the navbar scrolls to", () => {
    const { container } = render(<App />);

    for (const id of ["home", "about", "stack", "work", "credentials", "contact"]) {
      expect(container.querySelector(`#${id}`), `missing anchor #${id}`).not.toBeNull();
    }
  });

  it("has no duplicate element ids", () => {
    const { container } = render(<App />);

    const ids = [...container.querySelectorAll("[id]")].map((el) => el.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicates, `duplicate ids: ${duplicates.join(", ")}`).toEqual([]);
  });

  it("keeps the Lightbox2 gallery hooks on the project links", () => {
    const { container } = render(<App />);

    const galleries = container.querySelectorAll("a[data-lightbox]");
    expect(galleries.length).toBeGreaterThan(0);
  });
});
