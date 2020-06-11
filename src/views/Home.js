import React from "react";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h2>Weather Forecast</h2>
      </div>
      <div className="instructions">
        <p>
          Enter a Location below to get the current weather conditions for that
          area.
        </p>
      </div>
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
    </div>
  );
};

export default Home;
