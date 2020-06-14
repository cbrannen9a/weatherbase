import React, { FC } from "react";
import styled from "styled-components";

const LocationDetails: FC<Props> = ({ cityName, country }) => (
  <LocationContainer>
    <h4> Location | {cityName} </h4>
    <h4> Country | {country} </h4>
  </LocationContainer>
);

interface Props {
  cityName: string;
  country: string;
}

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #595959;
  margin-top: 1rem;
`;

export default LocationDetails;
