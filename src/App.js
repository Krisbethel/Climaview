import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css';

const API_KEY = 'bf9eb93656d24651a469f8c69297d24e';
const API_BASE_URL_CURRENT = 'https://api.weatherbit.io/v2.0/current';
const API_BASE_URL_FORECAST = 'https://api.weatherbit.io/v2.0/forecast/daily';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = () => {
    if (city) {
      fetch(`${API_BASE_URL_CURRENT}?key=${API_KEY}&city=${city}`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
          updateBackground(data);
        })
        .catch(error => console.error('Error fetching current weather:', error));

      fetch(`${API_BASE_URL_FORECAST}?key=${API_KEY}&city=${city}`)
        .then(response => response.json())
        .then(data => {
          setForecastData(data);
        })
        .catch(error => console.error('Error fetching weather forecast:', error));
    } else {
      alert('Please enter a valid city.');
    }
  };

  const updateBackground = (data) => {
    try {
      console.log(data);
      const weatherCode = data.data[0].weather.code;

      // Pass the weatherCode to the Content component
      setWeatherData({ ...data, weatherCode });
    } catch (error) {
      console.error('Error updating background:', error);
    }
  };

  return (
    <div className="app" id='app'>
      <Navbar />
      <Content
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
        weatherData={weatherData}
        forecastData={forecastData}
      />
      <Footer />
    </div>
  );
}

export default App;
