import React from "react";
import { render } from "@testing-library/react";
import App from "..";

test("renders App", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Weather Forecast/i);
  expect(headerElement).toBeInTheDocument();
});
