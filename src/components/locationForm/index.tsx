import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import styled from "styled-components";

const LocationForm: FC = () => {
  const [location, setLocation] = useState("");

  return (
    <LocationFormContainer>
      <LocationFormInput
        type="text"
        placeholder="Enter Location..."
        name="location"
        onChange={(event) => setLocation(slugify(event.target.value))}
        required
      />
      <LocationFormLink to={`/weather/${location}`}>
        <span>ENTER</span>
      </LocationFormLink>
    </LocationFormContainer>
  );
};

const LocationFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LocationFormInput = styled.input`
  margin: 1rem;
  padding: 0.75rem;
  min-width: 200px;
  border: none;
  border-radius: 2px;
  background: #e8e8e8;
  box-shadow: 1px 1px 2px #333;
`;

const LocationFormLink = styled(Link)`
  margin: 1rem;
  padding: 0.75rem;
  border-radius: 2px;
  margin-left: 4px;
  border: none;
  background: #000;
  color: #fff;
  box-shadow: 1px 1px 4px #333;
  text-decoration: none;
`;

export default LocationForm;
