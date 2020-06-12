import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

const LocationForm: FC = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="locationInput">
      <input
        type="text"
        placeholder="Enter Location..."
        name="location"
        onChange={(event) => setLocation(slugify(event.target.value))}
        required
      />
      <Link to={`/weather/${location}`}>
        <span>ENTER</span>
      </Link>
    </div>
  );
};

export default LocationForm;
