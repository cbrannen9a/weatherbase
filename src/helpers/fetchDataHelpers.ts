import { weatherUrl } from "../constants";

export const getWeatherDataQueryUrl = (location: string) => {
  return (
    weatherUrl +
    "?q=" +
    location +
    "&appid=" +
    process.env.REACT_APP_OPENWEATHERMAPAPI +
    "&units=metric"
  );
};
