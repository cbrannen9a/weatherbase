import React from "react";
import { render } from "@testing-library/react";
import Header from "..";

test("renders title", () => {
  const { getByText } = render(<Header title={"Test"} />);
  const headerElement = getByText(/Test/i);
  expect(headerElement).toBeInTheDocument();
});
