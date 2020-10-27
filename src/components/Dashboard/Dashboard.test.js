import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";
import { DashboardProvider } from "../../context/DashboardContext";

test("renders Dashboard", () => {
  const div = document.createElement("div");
  render(
    <BrowserRouter>
      <DashboardProvider>
      <Dashboard />
      </DashboardProvider>
      </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
