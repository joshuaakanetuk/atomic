import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DashboardProvider } from "./context/DashboardContext";

ReactDOM.render(
  <BrowserRouter>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
