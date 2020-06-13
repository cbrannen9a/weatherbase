import React from "react";
import { render } from "@testing-library/react";
import Instructions from "..";

test("renders text", () => {
  const { getByText } = render(<Instructions text={"Test"} />);
  const textElement = getByText(/Test/i);
  expect(textElement).toBeInTheDocument();
});
