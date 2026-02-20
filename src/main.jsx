import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bulma/css/bulma.min.css";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
