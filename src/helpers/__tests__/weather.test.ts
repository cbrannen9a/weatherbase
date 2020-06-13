import {
  getWeatherIconName,
  formatTemperature,
  formatHumidity,
  formatWindSpeed,
  normaliseWeatherData,
} from "../weather";
import { WeatherDataResponse } from "../../types";

test("getWeatherIconName, Thunder", () => {
  expect(getWeatherIconName(0)).toBe("THUNDER");
  expect(getWeatherIconName(232)).toBe("THUNDER");
});

test("getWeatherIconName, Rain", () => {
  expect(getWeatherIconName(300)).toBe("RAIN");
  expect(getWeatherIconName(531)).toBe("RAIN");
});

test("getWeatherIconName, Snow", () => {
  expect(getWeatherIconName(600)).toBe("SNOW");
  expect(getWeatherIconName(622)).toBe("SNOW");
});

test("getWeatherIconName, Clear", () => {
  expect(getWeatherIconName(800)).toBe("CLEAR");
});

test("getWeatherIconName, Clouds", () => {
  expect(getWeatherIconName(801)).toBe("CLOUDS");
  expect(getWeatherIconName(804)).toBe("CLOUDS");
});

test("getWeatherIconName, Unknown", () => {
  expect(getWeatherIconName(233)).toBe("UNKNOWN");
  expect(getWeatherIconName(299)).toBe("UNKNOWN");
  expect(getWeatherIconName(532)).toBe("UNKNOWN");
  expect(getWeatherIconName(599)).toBe("UNKNOWN");
  expect(getWeatherIconName(623)).toBe("UNKNOWN");
  expect(getWeatherIconName(799)).toBe("UNKNOWN");
  expect(getWeatherIconName(805)).toBe("UNKNOWN");
});

test("formatTemperature", () => {
  expect(formatTemperature(10)).toBe("10°");
  expect(formatTemperature(10.5)).toBe("11°");
  expect(formatTemperature(10.45)).toBe("10°");
  expect(formatTemperature(10.9)).toBe("11°");
});

test("formatHumidity", () => {
  expect(formatHumidity(10)).toBe("10%");
});

test("formatWindSpeed", () => {
  expect(formatWindSpeed(10)).toBe("10 mph");
  expect(formatWindSpeed(10.5)).toBe("11 mph");
  expect(formatWindSpeed(10.45)).toBe("10 mph");
  expect(formatWindSpeed(10.9)).toBe("11 mph");
});

test("normaliseWeatherData", () => {
  const response = {
    cod: "200",
    message: 200,
    cnt: 100,
    list: [
      {
        dt: 999,
        main: {
          temp: 99,
          feels_like: 1000,
          temp_min: 1,
          temp_max: 1234,
          pressure: 45,
          sea_level: 6000,
          grnd_level: 3000,
          humidity: 10,
          temp_kf: 666,
        },
        weather: [
          {
            id: 133,
            main: "wet",
            description: "Random",
            icon: "ico",
          },
        ],
        clouds: {
          all: 345,
        },
        wind: {
          speed: 22,
          deg: 90,
        },
        sys: {
          pod: "yes",
        },
        dt_txt: "text",
      },
    ],
    city: {
      id: 101,
      name: "Weather city",
      coord: {
        lat: 123,
        lon: 456,
      },
      country: "Anon",
      population: 99,
      timezone: 2,
      sunrise: 123455,
      sunset: 123456,
    },
  };

  const expected = {
    weatherIcon: "THUNDER",
    temperature: "99°",
    humidity: "10%",
    windSpeed: "22 mph",
    conditions: "Random",
    cityName: "Weather city",
    country: "Anon",
  };

  expect(normaliseWeatherData(response as WeatherDataResponse)).toStrictEqual(
    expected
  );
});
