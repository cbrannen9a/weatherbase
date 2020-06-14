import React from "react";
import { render } from "@testing-library/react";
import ConditionsOverview from "../ConditionsOverview";

const rendered = () =>
  render(<ConditionsOverview temperature={"99°"} conditions={"Random"} />);

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
