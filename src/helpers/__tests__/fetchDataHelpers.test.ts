import { getWeatherDataQueryUrl } from "../fetchDataHelpers";

test("getWeatherDataQueryUrl to return url with location param", () => {
  expect(getWeatherDataQueryUrl("Leeds")).toBe(
    "https://api.openweathermap.org/data/2.5/forecast?q=Leeds&appid=undefined&units=metric"
  );
});

test("getWeatherDataQueryUrl to return url without location param", () => {
  expect(getWeatherDataQueryUrl("")).toBe(
    "https://api.openweathermap.org/data/2.5/forecast?q=&appid=undefined&units=metric"
  );
});
