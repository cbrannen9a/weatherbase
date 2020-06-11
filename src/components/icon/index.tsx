import React, { FC } from "react";
import Thunder from "../../assets/Thunder.svg";
import Rain from "../../assets/Rain.svg";
import Snow from "../../assets/Snow.svg";
import Clear from "../../assets/Clear.svg";
import Clouds from "../../assets/Clouds.svg";
import NoLocationFound from "../../assets/NoLocation.svg";
import Loading from "../../assets/Loading.svg";

const Icon: FC<Props> = ({ icon }) => {
  switch (icon) {
    case "THUNDER":
      return <img src={Thunder} alt="Thunder" />;
    case "RAIN":
      return <img src={Rain} alt="Rain" />;
    case "SNOW":
      return <img src={Snow} alt="Snow" />;
    case "CLEAR":
      return <img src={Clear} alt="Clear" />;
    case "CLOUDS":
      return <img src={Clouds} alt="Clouds" />;
    case "NO_LOCATION":
      return <img src={NoLocationFound} alt="No Location Found" />;
    default:
      return <img src={Loading} alt="Loading" />;
  }
};

interface Props {
  icon: Icons;
}

export type Icons =
  | "THUNDER"
  | "RAIN"
  | "SNOW"
  | "CLEAR"
  | "CLOUDS"
  | "NO_LOCATION"
  | "LOADING"
  | "UNKNOWN";

export default Icon;
