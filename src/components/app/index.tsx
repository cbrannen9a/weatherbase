import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import Weather from "../../pages/weather";
import GlobalStyles from "../../styles/globalStyles";

const App: FC = () => (
  <Router>
    <GlobalStyles />
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
