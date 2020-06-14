import React from "react";
import HomeLink from "../HomeLink";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const rendered = () =>
  render(
    <Router>
      <HomeLink />
    </Router>
  );

test("HomeLink renders Home", () => {
  const { getByText } = rendered();
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
