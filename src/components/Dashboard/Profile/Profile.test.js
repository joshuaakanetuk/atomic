import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Profile from "./Profile";
import { DashboardProvider } from "../../../context/DashboardContext";

test("renders Profile", () => {
  const div = document.createElement("div");
  render(
    <DashboardProvider>
      <Profile />
    </DashboardProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
