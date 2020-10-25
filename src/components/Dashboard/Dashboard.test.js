import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("renders Dashboard", () => {
  const div = document.createElement("div");
  render(
      <Dashboard />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
