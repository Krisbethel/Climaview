// Utility.js
import React from 'react';
import { TiWeatherStormy } from 'react-icons/ti'; // Thunderstorm
import { IoMdRainy } from 'react-icons/io'; // Rain
import { IoMdSnow } from 'react-icons/io'; // Snow
import { IoMdPartlySunny } from 'react-icons/io'; // Drizzle
import { IoMdCloudy } from 'react-icons/io'; // Cloudy
import { IoMdSunny } from 'react-icons/io'; // Clear Sky
import { IoMdHelpBuoy } from 'react-icons/io'; // Default Icon
//nice
export const getWeatherIcon = (weatherCode, large = false) => {
  const Icon = large ? '2em' : '1em';

  switch (weatherCode) {
    case 't01d':
    case 't01n':
    case 't02d':
    case 't02n':
    case 't03d':
    case 't03n':
    case 't04d':
    case 't04n':
    case 't05d':
    case 't05n':
      return <TiWeatherStormy style={{ fontSize: Icon }} />; // Thunderstorm

    case 'd01d':
    case 'd01n':
    case 'd02d':
    case 'd02n':
    case 'd03d':
    case 'd03n':
      return <IoMdPartlySunny style={{ fontSize: Icon }} />; // Drizzle

    case 'r01d':
    case 'r01n':
    case 'r02d':
    case 'r02n':
    case 'r03d':
    case 'r03n':
    case 'f01d':
    case 'f01n':
    case 'r04d':
    case 'r04n':
    case 'r05d':
    case 'r05n':
    case 'r06d':
    case 'r06n':
      return <IoMdRainy style={{ fontSize: Icon }} />; // Rain

    case 's01d':
    case 's01n':
    case 's02d':
    case 's02n':
    case 's03d':
    case 's03n':
    case 's04d':
    case 's04n':
    case 's05d':
    case 's05n':
    case 's06d':
    case 's06n':
      return <IoMdSnow style={{ fontSize: Icon }} />; // Snow

    case 'a01d':
    case 'a01n':
    case 'a02d':
    case 'a02n':
    case 'a03d':
    case 'a03n':
    case 'a04d':
    case 'a04n':
    case 'a05d':
    case 'a05n':
    case 'a06d':
    case 'a06n':
      return <IoMdHelpBuoy style={{ fontSize: Icon }} />; // Atmospheric

    case 'c01d':
    case 'c01n':
      return <IoMdSunny style={{ fontSize: Icon }} />; // Clear Sky

    case 'c02d':
    case 'c02n':
      return <IoMdPartlySunny style={{ fontSize: Icon }} />; // Few Clouds

    case 'c03d':
    case 'c03n':
      return <IoMdCloudy style={{ fontSize: Icon }} />; // Scattered Clouds

    case 'c04d':
    case 'c04n':
      return <IoMdCloudy style={{ fontSize: Icon }} />; // Broken Clouds

    case 'c05d':
    case 'c05n':
      return <IoMdCloudy style={{ fontSize: Icon }} />; // Overcast Clouds

    default:
      return <IoMdHelpBuoy style={{ fontSize: Icon }} />; // Default icon for unknown weather codes
  }
};
