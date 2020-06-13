import React, { FC, useEffect, useState } from "react";
import Loading from "../../components/cards/Loading";
import Error from "../../components/cards/Error";
import WeatherCard from "../../components/cards/Weather";
import { useParams } from "react-router-dom";
import { getWeatherDataQueryUrl } from "../../helpers/fetchDataHelpers";
import { success, error, loading, AppStatus } from "../../helpers/AppStatus";
import { WeatherData } from "../../types";
import { normaliseWeatherData } from "../../helpers/weather";

const Weather: FC = () => {
  const [status, setStatus] = useState<AppStatus<WeatherData>>(loading());

  const { location } = useParams();

  useEffect(() => {
    const fetchData = () => {
      const callApi = async () => {
        try {
          const result = await fetch(getWeatherDataQueryUrl(location));
          const data = await result.json();

          setStatus(success(normaliseWeatherData(data)));
        } catch (e) {
          setStatus(error(e));
        }
      };

      callApi();
    };

    fetchData();
  }, [location]);

  switch (status.type) {
    case "success":
      return <WeatherCard data={status.data} />;
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
  }
};

export default Weather;
