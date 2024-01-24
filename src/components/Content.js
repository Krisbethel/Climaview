// Content.js
import React from 'react';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';
import { FaSearch } from 'react-icons/fa';
import './Content.css';

const Content = ({ city, setCity, fetchWeather, weatherData, forecastData }) => {
  const shortenedForecast = forecastData?.data?.slice(0, 6) || [];
// eslint-disable-next-line no-unused-vars
const updateBackground = (data) => {
  try {
    const weatherCode = data.data[0].weather.code;

    // Assuming you have an element with the ID "app"
    const appElement = document.getElementById('app');

    // Remove existing background image
    appElement.style.background = 'none';

    switch (true) {
      case weatherCode >= 200 && weatherCode < 600:
        appElement.style.backgroundColor = '#3498db'; // Blue color for rain
        break;
      case weatherCode >= 600 && weatherCode < 700:
        appElement.style.backgroundColor = '#ecf0f1'; // Light gray color for snow
        break;
      case weatherCode === 800:
        appElement.style.backgroundColor = '#3498db'; // Blue color for clear sky
        break;
      default:
        appElement.style.backgroundColor = '#bdc3c7'; // Default color for cloudy
        break;
    }
  } catch (error) {
    console.error('Error updating background:', error);
  }
};

  

  return (
    <div className="content-container">
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="search-input"
        />
        <button onClick={fetchWeather} className="search-button">
          <FaSearch />
        </button>
      </div>

      {weatherData && (
        <>
          <WeatherInfo weatherData={weatherData} />
          <Forecast forecastData={shortenedForecast} />
        </>
      )}
    </div>
  );
};

export default Content;
