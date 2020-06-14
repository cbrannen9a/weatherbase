import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../LocationDetails";

const rendered = () =>
  render(<LocationDetails cityName={"Weather City"} country={"Anon"} />);

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
