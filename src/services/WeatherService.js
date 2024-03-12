import axios from 'axios';

const API_KEY = 'API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const getWeatherData = async (location) => {
  const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`);
  return response.data;
};

export default { getWeatherData };
