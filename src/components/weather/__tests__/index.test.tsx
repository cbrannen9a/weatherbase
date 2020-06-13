import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Weather from "..";

afterEach(cleanup);

const rendered = () => {
  const history = createMemoryHistory();
  const route = "/weather/leeds";
  history.push(route);

  return render(
    <Router history={history}>
      <Weather />
    </Router>
  );
};

test("should initially be Loading ", () => {
  const { getByAltText } = rendered();
  const iconElement = getByAltText(/Loading/i);
  expect(iconElement).toBeInTheDocument();
});
