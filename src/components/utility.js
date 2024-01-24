// Utility.js
import React from 'react';

export const getWeatherIcon = (weatherCode, large = false) => {
  const fontSize = large ? '2em' : '1em';

  switch (weatherCode) {
    case 't01d':
    case 't01n':
      return <span style={{ fontSize }}>⛈</span>; // Thunderstorm with light rain

    case 't02d':
    case 't02n':
      return <span style={{ fontSize }}>⛈</span>; // Thunderstorm with rain

    case 't03d':
    case 't03n':
      return <span style={{ fontSize }}>⛈</span>; // Thunderstorm with heavy rain

    case 't04d':
    case 't04n':
      return <span style={{ fontSize }}>⛈</span>; // Thunderstorm with light drizzle

    case 't05d':
    case 't05n':
      return <span style={{ fontSize }}>⛈</span>; // Thunderstorm with hail

    case 'd01d':
    case 'd01n':
      return <span style={{ fontSize }}>🌦</span>; // Light Drizzle

    case 'd02d':
    case 'd02n':
      return <span style={{ fontSize }}>🌦</span>; // Drizzle

    case 'd03d':
    case 'd03n':
      return <span style={{ fontSize }}>🌧</span>; // Heavy Drizzle

    case 'r01d':
    case 'r01n':
      return <span style={{ fontSize }}>🌧</span>; // Light Rain

    case 'r02d':
    case 'r02n':
      return <span style={{ fontSize }}>🌧</span>; // Moderate Rain

    case 'r03d':
    case 'r03n':
      return <span style={{ fontSize }}>🌧</span>; // Heavy Rain

    case 'f01d':
    case 'f01n':
      return <span style={{ fontSize }}>🌧</span>; // Freezing rain

    case 'r04d':
    case 'r04n':
      return <span style={{ fontSize }}>🌧</span>; // Light shower rain

    case 'r05d':
    case 'r05n':
      return <span style={{ fontSize }}>🌧</span>; // Shower rain

    case 'r06d':
    case 'r06n':
      return <span style={{ fontSize }}>🌧</span>; // Heavy shower rain

    case 's03d':
    case 's03n':
      return <span style={{ fontSize }}>❄️</span>; // Heavy Snow

    case 's04d':
    case 's04n':
      return <span style={{ fontSize }}>🌨</span>; // Mix snow/rain

    case 's05d':
    case 's05n':
      return <span style={{ fontSize }}>🌨</span>; // Sleet

    case 's01d':
    case 's01n':
      return <span style={{ fontSize }}>🌨</span>; // Snow shower

    case 's02d':
    case 's02n':
      return <span style={{ fontSize }}>🌨</span>; // Heavy snow shower

    case 's06d':
    case 's06n':
      return <span style={{ fontSize }}>❄️</span>; // Flurries

    case 'a01d':
    case 'a01n':
      return <span style={{ fontSize }}>🌫</span>; // Mist

    case 'a02d':
    case 'a02n':
      return <span style={{ fontSize }}>🌫</span>; // Smoke

    case 'a03d':
    case 'a03n':
      return <span style={{ fontSize }}>🌫</span>; // Haze

    case 'a04d':
    case 'a04n':
      return <span style={{ fontSize }}>🌫</span>; // Sand/dust

    case 'a05d':
    case 'a05n':
      return <span style={{ fontSize }}>🌫</span>; // Fog

    case 'a06d':
    case 'a06n':
      return <span style={{ fontSize }}>🌫</span>; // Freezing Fog

    case 'c01d':
    case 'c01n':
      return <span style={{ fontSize }}>☀️</span>; // Clear sky

    case 'c02d':
    case 'c02n':
      return <span style={{ fontSize }}>🌤</span>; // Few clouds

    case 'c03d':
    case 'c03n':
      return <span style={{ fontSize }}>⛅</span>; // Scattered clouds

    case 'c04d':
    case 'c04n':
      return <span style={{ fontSize }}>🌥</span>; // Broken clouds

    case 'c05d':
    case 'c05n':
      return <span style={{ fontSize }}>☁️</span>; // Overcast clouds

    default:
      return <span style={{ fontSize }}>❓</span>; // Default icon for unknown weather codes
  }
};
