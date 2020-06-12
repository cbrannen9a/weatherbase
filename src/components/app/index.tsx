import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import Weather from "../../pages/weather";

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/weather/:location">
        <Weather />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
