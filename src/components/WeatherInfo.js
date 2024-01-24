// WeatherInfo.js
import React from 'react';

const WeatherInfo = ({ weatherData }) => (
  <div id="weatherInfo">
    <h2>{weatherData.data[0].city_name}</h2>
    <p>Temperature: {weatherData.data[0].temp}°C</p>
    <p>Weather: {weatherData.data[0].weather.description}</p>
  </div>
);

export default WeatherInfo;
