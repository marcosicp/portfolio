import React from "react";
import { createRoot } from "react-dom/client";

//import css in order
import "normalize.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "./style.css";

//import js libraries
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.min.js";

import * as serviceWorker from "./serviceWorker";

//import components
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";
import BackToTop from "./components/back-top.jsx";
import Preloader from "./components/preloader";
import Stack from "./components/stack.jsx";
// import PdfViewer from './components/pdf-viewer';

const root = createRoot(document.getElementById("root"));
root.render(
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
      {/* <PdfViewer/> */}
      <Contact />
      <BackToTop />
      <Preloader />
    </React.Fragment>
  </ErrorBoundary>
);
// pdfjs.GlobalWorkerOptions.workerSrc = "cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
