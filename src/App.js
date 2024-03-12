// src/App.js
import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherForecast from './components/WeatherForecast';
import WeatherService from './services/WeatherService';
import './App.css';

function App() {
  const [forecast, setForecast] = useState(null);

  const getWeather = async (location) => {
    try {
      const data = await WeatherService.getWeatherData(location);
      setForecast(data.list); // Adjust based on the API response structure
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <WeatherForm getWeather={getWeather} />
      {forecast && <WeatherForecast forecast={forecast} />}
    </div>
  );
}

export default App;
