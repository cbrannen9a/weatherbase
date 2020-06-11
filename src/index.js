import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

//Views
import App from "./views/App";
import Home from "./views/Home";
import CurrentWeather from "./views/CurrentWeather";
import ErrorDisplay from "./views/ErrorDisplay";

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/current-weather" component={CurrentWeather} />
      <Route exact path="/error" component={ErrorDisplay} />
    </App>
  </Router>,

  document.getElementById("root")
);

registerServiceWorker();
