import React from "react";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";
import BackToTop from "./components/back-top.jsx";
import Preloader from "./components/preloader.jsx";
import Stack from "./components/stack.jsx";

// Single-page layout: one scroll with dotted separators, navigated by anchors.
// Kept as a named export so it can be rendered in isolation by tests.
export function App() {
  return (
    <ErrorBoundary>
      <React.Fragment>
        <Navbar />
        <Intro />
        <hr className="dotted"></hr>
        <About />
        <hr className="dotted"></hr>
        <Stack />
        <hr className="dotted"></hr>
        <Portfolio />
        <hr className="dotted"></hr>
        <Contact />
        <BackToTop />
        <Preloader />
      </React.Fragment>
    </ErrorBoundary>
  );
}

export default App;
