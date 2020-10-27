import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Update from "./Update";
import { DashboardProvider } from "../../../context/DashboardContext";

test("renders Update", () => {
  const div = document.createElement("div");
  render(
    <DashboardProvider>
      <Update />
    </DashboardProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
