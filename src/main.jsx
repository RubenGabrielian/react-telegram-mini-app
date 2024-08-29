import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WebApp from "@twa-dev/sdk";
WebApp.ready();
WebApp.expand();

console.log(WebApp.viewportHeight)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
