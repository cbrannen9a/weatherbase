import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../views/Home";
import CurrentWeather from "../../views/CurrentWeather";
import ErrorDisplay from "../../views/ErrorDisplay";

const App: FC<Props> = () => (
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/current-weather">
      <CurrentWeather />
    </Route>
    <Route exact path="/error">
      <ErrorDisplay />
    </Route>
  </Router>
);

interface Props {}

export default App;
