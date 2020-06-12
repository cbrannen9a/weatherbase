import { Icons } from "./components/icon";

export type WeatherData = {
  cityName: string;
  country: string;
  weatherIcon: Icons;
  temperature: string;
  conditions: string;
  humidity: string;
  windSpeed: string;
};

export type WeatherDataResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDataListItemResponse[];
  city: WeatherDataCityItemResponse;
};

export type WeatherDataListItemResponse = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type WeatherDataCityItemResponse = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};
