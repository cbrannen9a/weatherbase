import React from "react";
import { render } from "@testing-library/react";
import Weather from "../Weather";
import { BrowserRouter as Router } from "react-router-dom";

const rendered = () =>
  render(
    <Router>
      <Weather
        data={{
          weatherIcon: "THUNDER",
          temperature: "99°",
          humidity: "10%",
          windSpeed: "22 mph",
          conditions: "Random",
          cityName: "Weather city",
          country: "Anon",
        }}
      />
    </Router>
  );
test("renders Home", () => {
  const { getByText } = rendered();
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders header with message Location Weather City", () => {
  const { getByText } = rendered();
  const headerElement = getByText(/Location | Weather City/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders header with message Country Anon", () => {
  const { getByText } = rendered();
  const headerElement = getByText(/Country | Anon/i);
  expect(headerElement).toBeInTheDocument();
});

test("render icon with alt Thunder", () => {
  const { getByAltText } = rendered();
  const iconElement = getByAltText(/Thunder/i);
  expect(iconElement).toBeInTheDocument();
});

test("renders text with Temperature", () => {
  const { getByText } = rendered();
  const textElement = getByText(/99°/i);
  expect(textElement).toBeInTheDocument();
});

test("renders text with Conditions", () => {
  const { getByText } = rendered();
  const textElement = getByText(/Random/i);
  expect(textElement).toBeInTheDocument();
});

test("renders text with Humidity", () => {
  const { getByText } = rendered();
  const textElement = getByText(/10%/i);
  expect(textElement).toBeInTheDocument();
});

test("renders text with WindSpeed", () => {
  const { getByText } = rendered();
  const textElement = getByText(/22 mph/i);
  expect(textElement).toBeInTheDocument();
});
