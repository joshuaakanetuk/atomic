import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import PrivateRoute from "./Private";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

test("renders Private (Route)", () => {
  const div = document.createElement("div");
  render(
    <BrowserRouter>
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
