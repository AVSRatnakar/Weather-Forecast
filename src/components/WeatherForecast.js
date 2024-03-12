import React from 'react';

const WeatherForecast = ({ forecast }) => {
  return (
    <div>
      <h2>Weather Forecast</h2>
      <div className="forecast-container">
        {forecast.map((entry, index) => (
          <div key={index} className="forecast-entry">
            <p>Date: {entry.dt_txt}</p>
            <p>Temperature: {entry.main.temp} °F</p>
            <p>Weather: {entry.weather[0].description}</p>
            {/* Add more details based on your API response */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
