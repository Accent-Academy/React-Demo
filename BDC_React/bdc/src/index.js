import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/Layout/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route } from "react-router-dom";
import route from "./routes";
import "./scss/style.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  window.location.pathname === "/" ||
    window.location.pathname === "/contact" ? (
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
