import React, { FC } from "react";

const LocationForm: FC = () => (
  <div className="locationInput">
    <form method="POST" action="/fns/search-location">
      <input
        type="text"
        placeholder="Enter Location.."
        name="location"
        required
      />
      <button>ENTER</button>
    </form>
  </div>
);

export default LocationForm;
