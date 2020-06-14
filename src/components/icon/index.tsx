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
      return <img src={Thunder} alt="Thunder" height={"150px"} />;
    case "RAIN":
      return <img src={Rain} alt="Rain" height={"150px"} />;
    case "SNOW":
      return <img src={Snow} alt="Snow" height={"150px"} />;
    case "CLEAR":
      return <img src={Clear} alt="Clear" height={"150px"} />;
    case "CLOUDS":
      return <img src={Clouds} alt="Clouds" height={"150px"} />;
    case "NO_LOCATION":
      return (
        <img src={NoLocationFound} alt="No Location Found" height={"150px"} />
      );
    default:
      return <img src={Loading} alt="Loading" height={"150px"} />;
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
