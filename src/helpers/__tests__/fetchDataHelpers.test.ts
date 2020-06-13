import { getWeatherDataQueryUrl } from "../fetchDataHelpers";
const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules(); // this is important - it clears the cache
  process.env = { ...OLD_ENV, REACT_APP_OPENWEATHERMAPAPI: "1234" };
});

afterEach(() => {
  process.env = OLD_ENV;
});

test("getWeatherDataQueryUrl to return url with location param", () => {
  expect(getWeatherDataQueryUrl("Leeds")).toBe(
    "https://api.openweathermap.org/data/2.5/forecast?q=Leeds&appid=1234&units=metric"
  );
});

test("getWeatherDataQueryUrl to return url without location param", () => {
  expect(getWeatherDataQueryUrl("")).toBe(
    "https://api.openweathermap.org/data/2.5/forecast?q=&appid=1234&units=metric"
  );
});
