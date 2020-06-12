import { Icons } from "../components/icon";
import { WeatherDataResponse, WeatherData } from "../types";

export const getWeatherIconName = (weatherId: number): Icons => {
  if (weatherId <= 232) {
    return "THUNDER";
  } else if (weatherId >= 300 && weatherId <= 531) {
    return "RAIN";
  } else if (weatherId >= 600 && weatherId <= 622) {
    return "SNOW";
  } else if (weatherId === 800) {
    return "CLEAR";
  } else if (weatherId >= 801 && weatherId <= 804) {
    return "CLOUDS";
  }
  return "UNKNOWN";
};

export const formatTemperature = (temp: number) => Math.round(+temp) + "°";

export const formatHumidity = (humidity: number) => humidity + "%";

export const formatWindSpeed = (windSpeed: number) =>
  Math.round(+windSpeed) + " mph";

export const normaliseWeatherData = (
  responseData: WeatherDataResponse
): WeatherData => {
  return {
    weatherIcon: getWeatherIconName(responseData.list[0].weather[0].id),
    temperature: formatTemperature(responseData.list[0].main.temp),
    humidity: formatHumidity(responseData.list[0].main.humidity),
    windSpeed: formatWindSpeed(responseData.list[0].wind.speed),
    conditions: responseData.list[0].weather[0].description,
    cityName: responseData.city.name,
    country: responseData.city.country,
  };
};
