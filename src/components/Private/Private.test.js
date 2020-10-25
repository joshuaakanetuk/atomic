import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import PrivateRoute from "./Private";

test("renders Private (Route)", () => {
  const div = document.createElement("div");
  render(
      <PrivateRoute />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
