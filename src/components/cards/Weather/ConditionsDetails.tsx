import React, { FC } from "react";
import styled from "styled-components";

const ConditionsDetails: FC<Props> = ({ humidity, windSpeed }) => (
  <Container>
    <span>Humidity: {humidity}</span>
    <span>Wind Speed: {windSpeed}</span>
  </Container>
);

interface Props {
  humidity: string;
  windSpeed: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  justify-content: space-between;
`;

export default ConditionsDetails;
