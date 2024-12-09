import React from "react";
import ReactDOM from "react-dom/client"; // Corrigido para React 18
import App from "./App";
import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
