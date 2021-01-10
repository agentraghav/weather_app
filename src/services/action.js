import axios from 'axios';
const API_KEY = 'b79c53789d71b2773271fb04741a9f56';
const API_CALL = 'https://api.openweathermap.org/data/2.5/weather?q=';

async function fetchWeather(loc) {
  const response = await axios.get(`${API_CALL}${loc}&appid=${API_KEY}`);
  const data = await response.data;
  return data;
}

export { fetchWeather };
