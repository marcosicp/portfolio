#!/usr/bin/env node
// Renders CV_Marcos_Casor_2026.md into public/CV_Marcos_Casor_2026.pdf.
//
// The markdown is the single source of truth: edit it, run `npm run cv:pdf`, and
// the file the "Download CV" button serves is regenerated. Without this, the PDF
// drifts from the CV — which is exactly what happened with the old LinkedIn export.
//
// Uses the locally installed Chrome for print-to-PDF, so there is no LaTeX or
// pandoc dependency. The layout is deliberately ONE COLUMN: two-column CVs are
// parsed out of order by applicant tracking systems, which is the most common way
// a CV gets discarded before a human ever reads it.

import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm, writeFile, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceName = "CV_Marcos_Casor_2026.md";
const sourcePath = path.join(root, sourceName);
const outputPath = path.join(root, "public", sourceName.replace(/\.md$/, ".pdf"));

const CHROME_CANDIDATES = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];

function findChrome() {
  const found = CHROME_CANDIDATES.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error(
      `No Chrome/Chromium found. Looked in:\n  ${CHROME_CANDIDATES.join("\n  ")}\n` +
        "Install Chrome, or export the PDF by hand and skip `npm run cv:pdf`.",
    );
  }
  return found;
}

const printStyles = `
  @page {
    size: A4;
    margin: 14mm 15mm;
  }

  :root {
    --ink: #1a1a1a;
    --muted: #5c5c5c;
    --rule: #d5d5d5;
    --accent: #1f4e79;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 9.6pt;
    line-height: 1.45;
    color: var(--ink);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  h1 {
    margin: 0 0 2pt;
    font-size: 20pt;
    letter-spacing: -0.4pt;
    color: var(--accent);
  }

  /* The line right under the name is the role tagline. */
  h1 + p {
    margin: 0 0 4pt;
    font-size: 11pt;
    font-weight: 600;
    color: var(--ink);
  }

  h2 {
    margin: 14pt 0 5pt;
    padding-bottom: 2pt;
    font-size: 10.5pt;
    text-transform: uppercase;
    letter-spacing: 0.7pt;
    color: var(--accent);
    border-bottom: 0.75pt solid var(--rule);
    break-after: avoid;
  }

  h3 {
    margin: 9pt 0 1pt;
    font-size: 10pt;
    break-after: avoid;
  }

  /* The italic line under each role carries dates and location. */
  h3 + p em,
  h3 + p {
    color: var(--muted);
    font-size: 8.8pt;
  }

  p {
    margin: 0 0 5pt;
  }

  ul {
    margin: 2pt 0 6pt;
    padding-left: 13pt;
  }

  li {
    margin-bottom: 1.5pt;
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  strong {
    color: var(--ink);
  }

  hr {
    height: 0;
    margin: 8pt 0;
    border: 0;
    border-top: 0.75pt solid var(--rule);
  }

  /* Never split a job entry or a bullet across pages. */
  h3,
  li,
  p {
    break-inside: avoid;
  }

  /* Keep the role header glued to its first bullet. */
  h3 + p + ul {
    break-before: avoid;
  }
`;

function buildHtml(markdownHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Marcos Casor — CV</title>
<style>${printStyles}</style>
</head>
<body>
${markdownHtml}
</body>
</html>
`;
}

async function main() {
  if (!existsSync(sourcePath)) {
    throw new Error(`Source not found: ${sourcePath}`);
  }

  const markdown = await readFile(sourcePath, "utf8");
  // HTML comments in the markdown are notes to self (unresolved placeholders);
  // they never reach the rendered page.
  const html = buildHtml(marked.parse(markdown, { gfm: true, mangle: false, headerIds: false }));

  const chrome = findChrome();
  const workDir = await mkdtemp(path.join(tmpdir(), "cv-pdf-"));
  const htmlPath = path.join(workDir, "cv.html");
  await writeFile(htmlPath, html, "utf8");

  try {
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=10000",
        `--print-to-pdf=${outputPath}`,
        `file://${htmlPath}`,
      ],
      { stdio: ["ignore", "ignore", "pipe"] },
    );
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }

  const { size } = await stat(outputPath);
  if (size < 10_000) {
    throw new Error(`PDF looks empty (${size} bytes): ${outputPath}`);
  }

  const relative = path.relative(root, outputPath);
  // Explicit streams instead of the ambient `console` global: this script runs in
  // Node, and importing what it uses keeps it self-contained for any linter.
  process.stdout.write(`Wrote ${relative} (${(size / 1024).toFixed(1)} kB)\n`);
}

main().catch((error) => {
  process.stderr.write(`cv:pdf failed — ${error.message}\n`);
  process.exit(1);
});
