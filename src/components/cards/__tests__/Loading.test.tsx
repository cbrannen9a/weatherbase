import React from "react";
import { render } from "@testing-library/react";
import Loading from "../Loading";

test("render icon with alt Loading", () => {
  const { getByAltText } = render(<Loading />);
  const iconElement = getByAltText(/Loading/i);
  expect(iconElement).toBeInTheDocument();
});
