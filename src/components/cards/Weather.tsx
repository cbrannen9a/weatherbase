import React, { FC } from "react";
import { Link } from "react-router-dom";
import Icon from "../icon";
import { WeatherData } from "../../types";

const Weather: FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="homeBtn">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div className="weatherLocation">
        <h4> Location | {data.cityName} </h4>
        <h4> Country | {data.country} </h4>
      </div>
      <div className="weatherCardContainer">
        <div className="weatherCard">
          <Icon icon={data.weatherIcon} />
          <div className="conditionsOverview">
            <p>{data.temperature}</p>
            <p>{data.conditions}</p>
          </div>
          <div className="conditionDetails">
            <p>Humidity: {data.humidity} </p>
            <p>Wind Speed: {data.windSpeed} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  data: WeatherData;
}

export default Weather;
