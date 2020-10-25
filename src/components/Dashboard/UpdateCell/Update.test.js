import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Update from "./Update";

test("renders Update", () => {
  const div = document.createElement("div");
  render(
      <Update />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
