import React from 'react';
import './App.css';

import Header from './components/Header.tsx';
import WeatherSummary from './components/WeatherSummary.tsx';
import HourlyTemperatures from './components/HourlyTemperatures.tsx';
import DailyWeather from './components/DailyWeather.tsx';
import Footer from './components/Footer.tsx';

import useGetCoordinates from './hooks/useGetCoordinates.tsx';
import useFetchWeather from './hooks/useFetchWeather.tsx';
import useFetchHourlyWeather from './hooks/useFetchHourlyWeather.tsx';

function App() {
  const { positionData } = useGetCoordinates();
  const weatherData = useFetchWeather(positionData);
  // RUNS REPEATEDLY


  // FIND NEW WAY TO CHECK IF RESPONSE FAILED TO EXCESS REQUESTS
  // if (currentWeatherData.weatherData?.cod === 429) {
  //   return (
  //     <div className="App">
  //       <h1>Requests exceeded for the day</h1>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      
      <Header />
      <WeatherSummary weatherObject={weatherData} />
      <HourlyTemperatures weatherObject={weatherData} />
      <DailyWeather />
      <Footer />

    </div>
  );
}

export default App;