import { Icons } from "../components/icon";

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

export const formatTemperature = (temp: string) => Math.round(+temp) + "°";

export const formatHumidity = (humidity: string) => humidity + "%";

export const formatWind = (windSpeed: string) =>
  Math.round(+windSpeed) + " mph";
