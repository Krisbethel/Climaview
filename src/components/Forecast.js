// Forecast.js
import React from 'react';
import { getWeatherIcon } from './utility';
import './Forecast.css';

const Forecast = ({ forecastData }) => (
  <div className="forecast-container">
    <h3 className="forecast-heading">6-Day Forecast</h3>
    <div className="forecast-cards">
      {forecastData &&
        forecastData.map((day) => (
          <div key={day.ts} className="forecast-card">
            <div className="forecast-icon">{getWeatherIcon(day.weather.icon, true)}</div>
            <div className="forecast-details">
              <p className="forecast-date">{day.valid_date}</p>
              <p className="forecast-description">{day.weather.description}</p>
              <p className="forecast-temperature">{day.temp}°C</p>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default Forecast;
