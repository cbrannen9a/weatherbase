import React, { FC } from "react";
import Icon, { Icons } from "../../icon";

const Card: FC<Props> = ({
  weatherIcon,
  temperature,
  conditions,
  humidity,
  windSpeed,
}) => (
  <>
    <div className="weatherCardContainer">
      <div className="weatherCard">
        <Icon icon={weatherIcon} />
        <div className="conditionsOverview">
          <p>{temperature}</p>
          <p>{conditions}</p>
        </div>
        <div className="conditionDetails">
          <p>Humidity: {humidity} </p>
          <p>Wind Speed: {windSpeed} </p>
        </div>
      </div>
    </div>
  </>
);

interface Props {
  weatherIcon: Icons;
  temperature: string;
  conditions: string;
  humidity: string;
  windSpeed: string;
}

export default Card;
