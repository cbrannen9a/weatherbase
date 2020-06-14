import React, { FC } from "react";
import styled from "styled-components";

const LocationDetails: FC<Props> = ({ cityName, country }) => (
  <LocationContainer>
    <span> Location | {cityName} </span>
    <span> Country | {country} </span>
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
  justify-content: space-between;
`;

export default LocationDetails;
