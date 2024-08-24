import React from 'react';
import './App.css';

import Header from './components/Header.tsx';
import WeatherSummary from './components/WeatherSummary.tsx';
import HourlyTemperatures from './components/HourlyTemperatures.tsx';
import DailyWeather from './components/DailyWeather.tsx';
import Footer from './components/Footer.tsx';

import useFetchCurrentWeather from './hooks/useFetchCurrentWeather.tsx';

function App() {
  const { weatherData, loading, error } = useFetchCurrentWeather();

  if (loading) {
    return (
      <div className="App">
        <h1>LOADING...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className="App">
        <h1>ERROR...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      
      <Header />
      <WeatherSummary weatherData={weatherData} />
      <HourlyTemperatures />
      <DailyWeather />
      <Footer />

    </div>
  );
}

export default App;
