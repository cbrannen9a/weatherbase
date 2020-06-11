import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import CurrentWeather from "../../views/CurrentWeather";

const App: FC<Props> = () => (
  <Router>
    <Switch>
      <Route exact path="/current-weather">
        <CurrentWeather />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

interface Props {}

export default App;
