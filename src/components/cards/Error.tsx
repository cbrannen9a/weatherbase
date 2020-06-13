import React, { FC } from "react";
import { Link } from "react-router-dom";
import Icon from "../icon";

const Error: FC = () => (
  <div className="weatherCardContainer">
    <div className="weatherCardError">
      <h4>Location Not Found</h4>
      <Icon icon="NO_LOCATION" />
      <Link to="/">
        <span>Try Again</span>
      </Link>
    </div>
  </div>
);

export default Error;
