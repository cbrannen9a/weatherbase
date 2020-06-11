import React, { FC } from "react";
import Header from "../../components/header";
import Instructions from "../../components/instructions";
import LocationForm from "../../components/locationForm";

const Home: FC = () => (
  <>
    <Header title="Weather Forecast" />
    <Instructions
      text="Enter a Location below to get the current weather conditions for that
      area."
    />
    <LocationForm />
  </>
);

export default Home;
