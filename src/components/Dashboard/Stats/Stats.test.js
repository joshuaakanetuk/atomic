import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Stats from "./Stats";
import { DashboardProvider } from "../../../context/DashboardContext";

test("renders Stats", () => {
  const div = document.createElement("div");
  render(
      <DashboardProvider>
          <Stats />
      </DashboardProvider>
      ,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
