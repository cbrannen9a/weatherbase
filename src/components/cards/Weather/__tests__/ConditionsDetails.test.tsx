import React from "react";
import { render } from "@testing-library/react";
import ConditionsDetails from "../ConditionsDetails";

const rendered = () =>
  render(<ConditionsDetails humidity={"10%"} windSpeed={"22 mph"} />);

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
