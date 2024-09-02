import React, { MouseEvent } from 'react';
import './App.css';

import Header from './components/Header.tsx';
import WeatherSummary from './components/WeatherSummary.tsx';
import HourlyTemperatures from './components/HourlyTemperatures.tsx';
import DailyWeather from './components/DailyWeather.tsx';
import Footer from './components/Footer.tsx';

import useGetCoordinates from './hooks/useGetCoordinates.tsx';
import useFetchWeather from './hooks/useFetchWeather.tsx';

function App() {
  const { positionData } = useGetCoordinates();
  const weatherData = useFetchWeather(positionData);

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const weatherEntryElement = target.closest('.weather-entry-div');

    // checks if an element containing the weather-entry-div class has been found, 
    // and that it does not already contain the 'expanded' style class.
    if (weatherEntryElement && !weatherEntryElement.classList.contains('weather-entry-expanded')) {
      weatherEntryElement.classList.add('weather-entry-expanded');
      console.log(weatherEntryElement.classList)
    } 
    // else if (weatherEntryElement) { // else, check that it's still a valid element.
    //   weatherEntryElement.classList.remove('weather-entry-expanded');
    //   console.log(weatherEntryElement.classList)
    // }
  })

  // RUNS REPEATEDLY


  // FIND NEW WAY TO CHECK IF RESPONSE FAILED DUE TO EXCESS REQUESTS
  // if (currentWeatherData.weatherData?.cod === 429) {
  //   return (
  //     <div className="App">
  //       <h1>Requests exceeded for the day</h1>
  //     </div>
  //   )
  // }

  // returns loading text if isLoading is true
  if (weatherData.isLoading) {
    return (
      <div className="App">
        <h1 style={{"width": "100%", "height": "100%"}}>LOADING...</h1>
      </div>
    )
  }
  
  //returns error text if error data is available
  if (weatherData.error) {
    return (
      <div className="App">
        <h1 style={{"width": "100%", "height": "100%"}}>Error: {weatherData.error}</h1>
      </div>
    )
  }


  return (
    <div className="App">
      
      <Header />
      <WeatherSummary weatherObject={weatherData} />
      <div id="forecast-div">
        <HourlyTemperatures weatherObject={weatherData} interval='hourly' />
        <DailyWeather weatherObject={weatherData} interval='daily' />
      </div>
      <Footer />

    </div>
  );
}

export default App;