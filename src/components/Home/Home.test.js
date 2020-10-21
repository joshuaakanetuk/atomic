import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

test("renders Home", () => {
  const div = document.createElement("div");
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
