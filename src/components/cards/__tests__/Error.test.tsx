import React from "react";
import { render } from "@testing-library/react";
import Error from "../Error";
import { BrowserRouter as Router } from "react-router-dom";

const rendered = () =>
  render(
    <Router>
      <Error />
    </Router>
  );

test("renders header with message Location Not Found", () => {
  const { getByText } = rendered();
  const headerElement = getByText(/Location Not Found/i);
  expect(headerElement).toBeInTheDocument();
});

test("render icon with alt No Location Found", () => {
  const { getByAltText } = rendered();
  const iconElement = getByAltText(/No Location Found/i);
  expect(iconElement).toBeInTheDocument();
});

test("renders Try Again", () => {
  const { getByText } = rendered();
  const linkElement = getByText(/Try again/i);
  expect(linkElement).toBeInTheDocument();
});
