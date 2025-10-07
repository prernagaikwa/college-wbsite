// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // 👈 import BrowserRouter
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>   {/* 👈 Wrap App inside */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
