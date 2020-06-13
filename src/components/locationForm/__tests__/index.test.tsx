import React from "react";
import { render } from "@testing-library/react";
import LocationForm from "..";
import { BrowserRouter as Router } from "react-router-dom";

const rendered = () =>
  render(
    <Router>
      <LocationForm />
    </Router>
  );

test("LocationForm renders input with placeholder text", () => {
  const { getByPlaceholderText } = rendered();
  const inputElement = getByPlaceholderText(/Enter Location.../i);
  expect(inputElement).toBeInTheDocument();
});

test("LocationForm renders Enter", () => {
  const { getByText } = rendered();
  const linkElement = getByText(/Enter/i);
  expect(linkElement).toBeInTheDocument();
});
