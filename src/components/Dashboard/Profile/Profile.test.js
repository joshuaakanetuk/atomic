import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Profile from "./Profile";

test("renders Profile", () => {
  const div = document.createElement("div");
  render(
      <Profile />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
