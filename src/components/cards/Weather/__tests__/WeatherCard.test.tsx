import React from "react";
import { render } from "@testing-library/react";
import Card from "../WeatherCard";

const rendered = () =>
  render(
    <Card
      weatherIcon={"THUNDER"}
      temperature={"99°"}
      humidity={"10%"}
      windSpeed={"22 mph"}
      conditions={"Random"}
    />
  );

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
