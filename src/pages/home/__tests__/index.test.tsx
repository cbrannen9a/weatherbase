import React from "react";
import { render } from "@testing-library/react";
import Home from "..";
import { BrowserRouter as Router } from "react-router-dom";

const rendered = () =>
  render(
    <Router>
      <Home />
    </Router>
  );

test("Home renders Header Weather Forecast", () => {
  const { getByText } = rendered();
  const headerElement = getByText(/Weather Forecast/i);
  expect(headerElement).toBeInTheDocument();
  const textElement = getByText(
    /Enter a Location below to get the current weather conditions for that area./i
  );
  expect(textElement).toBeInTheDocument();
});

test("Home renders Instructions text", () => {
  const { getByText } = rendered();

  const textElement = getByText(
    /Enter a Location below to get the current weather conditions for that area./i
  );
  expect(textElement).toBeInTheDocument();
});
