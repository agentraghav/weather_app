import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../services/action';
import '../styles/styles.css';
export const WeatherBody = () => {
  const [loc, setLoc] = useState('jodhpur');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [country, setCountry] = useState('');
  const [hum, setHum] = useState('');
  const [feels, setFeels] = useState('');
  const handleChange = (e) => {
    setLoc(e.target.value);
  };

  useEffect(() => {
    async function check() {
      const response = await fetchWeather(loc);
      console.log(response);
      console.log(response.weather[0].icon);
      setDesc(response.weather[0].description);
      setCountry(response.sys.country);
      setHum(response.main.humidity);
      let te = Math.floor(response.main.temp - 273.15);
      let te1 = Math.floor(response.main.feels_like - 273.15);
      setCity(loc);
      setFeels(te1);
      setTemp(te);
      setIcon(
        `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
      );
    }
    check();
  }, [loc]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 card'>
          <div className='header'>
            <span className='city'>
              {city},{country}{' '}
              <img
                alt='flag'
                src={`https://www.countryflags.io/${country}/
flat/64.png`}
              />
            </span>
          </div>
          <span className='weather-icon'>
            <img src={icon} alt='icon for forecast' className='icon' />
          </span>
          <div className='weather'>
            <span id='desc'>{desc}</span>
          </div>
          <div className='temp'>Current Temperature {temp}&deg;C</div>
          <div className='temp'>Humidity {hum}%</div>
          <div className='temp'>
            Current Temperature {temp}&deg;C | Feels Like {feels}&deg;C
          </div>
          <div className='search'>
            <input
              type='text'
              className='location'
              placeholder='Search city'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
