import React, { FC } from "react";
import { useWeatherFetch } from "../../hooks/useWeatherFetch";
import Loading from "../../components/cards/Loading";
import Error from "../../components/cards/Error";
import WeatherCard from "../../components/cards/Weather";

const Weather: FC = () => {
  const weather = useWeatherFetch();
  switch (weather.type) {
    case "loading":
      return <Loading />;
    case "success":
      return <WeatherCard data={weather.data} />;
    default:
      return <Error />;
  }
};

export default Weather;
