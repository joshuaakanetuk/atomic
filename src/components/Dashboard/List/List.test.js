import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import List from "./List";

test("renders List", () => {
  const div = document.createElement("div");
  render(
      <List />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
