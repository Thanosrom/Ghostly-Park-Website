import React from "react";
import ReactDOM from "react-dom/client";
import App from "./View/Screens/App.tsx";
import "./View/CSS/index.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
