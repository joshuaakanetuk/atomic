import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

test("renders Login", () => {
  const div = document.createElement("div");
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
