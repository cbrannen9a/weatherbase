import React, { FC } from "react";
import Icon, { Icons } from "../../icon";
import CardContainer from "../base";
import ConditionsOverview from "./ConditionsOverview";
import ConditionsDetails from "./ConditionsDetails";

const Card: FC<Props> = ({
  weatherIcon,
  temperature,
  conditions,
  humidity,
  windSpeed,
}) => (
  <CardContainer>
    <Icon icon={weatherIcon} />
    <ConditionsOverview temperature={temperature} conditions={conditions} />
    <ConditionsDetails humidity={humidity} windSpeed={windSpeed} />
  </CardContainer>
);

interface Props {
  weatherIcon: Icons;
  temperature: string;
  conditions: string;
  humidity: string;
  windSpeed: string;
}

export default Card;
