import React, { FC } from "react";
import { Link } from "react-router-dom";
import Icon from "../icon";
import { WeatherData } from "../../types";
import {
  getWeatherIconName,
  formatTemperature,
  formatHumidity,
  formatWind,
} from "../../helpers/weather";

const Weather: FC<Props> = ({ data }) => (
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
        <Icon icon={getWeatherIconName(+data.weatherId)} />
        <div className="conditionsOverview">
          <p>{formatTemperature(data.temperature)}</p>
          <p>{data.conditions}</p>
        </div>
        <div className="conditionDetails">
          <p>Humidity: {formatHumidity(data.humidity)} </p>
          <p>Wind Speed: {formatWind(data.wind.speed)} </p>
        </div>
      </div>
    </div>
  </div>
);

interface Props {
  data: WeatherData;
}

export default Weather;
