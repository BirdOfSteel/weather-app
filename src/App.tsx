import React from 'react';
import './App.css';

import Header from './components/Header.tsx';
import WeatherSummary from './components/WeatherSummary.tsx';
import HourlyTemperatures from './components/HourlyTemperatures.tsx';
import DailyWeather from './components/DailyWeather.tsx';
import Footer from './components/Footer.tsx';

import useGetCoordinates from './hooks/useGetCoordinates.tsx';
import useFetchCurrentWeather from './hooks/useFetchCurrentWeather.tsx';
import useFetchHourlyWeather from './hooks/useFetchHourlyWeather.tsx';

function App() {
  const { positionData } = useGetCoordinates();
  const { weatherData, loading, error } = useFetchCurrentWeather(positionData); 
  const hourlyWeatherData = useFetchHourlyWeather(positionData);


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

  if (weatherData?.cod === 429) {
    return (
      <div className="App">
        <h1>Requests exceeded for the day</h1>
      </div>
    )
  }

  return (
    <div className="App">
      
      <Header />
      <WeatherSummary weatherData={weatherData} />
      <HourlyTemperatures hourlyWeatherData={hourlyWeatherData}/>
      <DailyWeather />
      <Footer />

    </div>
  );
}

export default App;
