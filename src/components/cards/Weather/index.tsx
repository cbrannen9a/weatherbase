import React, { FC } from "react";
import { WeatherData } from "../../../types";
import HomeLink from "./HomeLink";
import LocationDetails from "./LocationDetails";
import Card from "./WeatherCard";

const Weather: FC<Props> = ({ data }) => {
  const {
    cityName,
    country,
    weatherIcon,
    temperature,
    humidity,
    conditions,
    windSpeed,
  } = data;
  return (
    <>
      <Card
        weatherIcon={weatherIcon}
        temperature={temperature}
        humidity={humidity}
        conditions={conditions}
        windSpeed={windSpeed}
      />
      <LocationDetails cityName={cityName} country={country} />
      <HomeLink />
    </>
  );
};

interface Props {
  data: WeatherData;
}

export default Weather;
