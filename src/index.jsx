import { createRoot } from "react-dom/client";

// Import order is the CSS cascade order — do not reorder.
// normalize -> animate -> bootstrap -> ionicons -> font-awesome -> style.css
import "normalize.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "./style.css";

// JS libraries that attach to the global scope / need side effects
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
