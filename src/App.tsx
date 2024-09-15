import React from 'react';
import './App.css';

import Header from './components/Header.tsx';
import WeatherSummary from './components/WeatherSummary.tsx';
import HourlyTemperatures from './components/HourlyTemperatures.tsx';
import DailyWeather from './components/DailyWeather.tsx';
import Footer from './components/Footer.tsx';

import useGetCoordinates from './hooks/useGetCoordinates.tsx';
import useFetchWeather from './hooks/useFetchWeather.tsx';

import HourlyWeatherInfo from './components/HourlyWeatherInfo.tsx';
import DailyWeatherInfo from './components/DailyWeatherInfo.tsx';
import Menu from './components/Menu.tsx';


// TO DO:
// Design converter function for temp, distance, and pressure
// Apply converter function to units being displayed.

function App() {
  const { positionData } = useGetCoordinates();

  const weatherData = useFetchWeather(positionData); 
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);  
  const [extraHourlyInfo, setExtraHourlyInfo] = React.useState(null);
  //CHANGE TO NULL AFTER FINISHING IMPLEMENTATION
  const [extraDailyInfo, setExtraDailyInfo] = React.useState(null);
  
  const [units, setUnits] = React.useState({ 
    temperature: '°C', // C, F, K
    longDistance: 'km', // km, metres, miles
    shortDistance: 'mm', // mm, inch
    windSpeed: 'm/s', // m/s, km/h, mph, knots
    pressure: 'mmHg' // mb, pascal, hectopascal, mm mercury, inches mercury
  }); 

  console.log(weatherData)



  // RUNS REPEATEDLY


  // FIND NEW WAY TO CHECK IF RESPONSE FAILED DUE TO EXCESS REQUESTS
  // if (currentweatherData.weatherData?.cod === 429) {
  //   return (
  //     <div className="App">
  //       <h1>Requests exceeded for the day</h1>
  //     </div>
  //   )
  // }

  // returns loading text if isLoading is true
  React.useEffect(() => {
    console.log("1: " + extraHourlyInfo)
  },[extraHourlyInfo])

  React.useEffect(() => {
    console.log("2: " + extraDailyInfo)
  },[extraDailyInfo])

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
      
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <WeatherSummary weatherObject={weatherData} units={units} />
      <div id="forecast-div">

        <HourlyTemperatures 
          weatherObject={weatherData} 
          interval='hourly' 
          extraHourlyInfo={extraHourlyInfo}
          setExtraHourlyInfo={(data) => setExtraHourlyInfo(data)} // passes up data
          units={units}
       />
        
        { /* runs if extraHourlyInfo state is changed */
          extraHourlyInfo &&
          <HourlyWeatherInfo 
            extraHourlyInfo={extraHourlyInfo}
            units={units}
          />
        } {/* TRY KEYFRAMES */}
        
        <DailyWeather 
          weatherObject={weatherData} 
          interval='daily'
          extraDailyInfo={extraDailyInfo}
          setExtraDailyInfo={(data) => setExtraDailyInfo(data)} // passes up data
          units={units}
       />

        {/* runs if extraDailyInfo state is changed */}
        {extraDailyInfo && 
          <DailyWeatherInfo 
            extraDailyInfo={extraDailyInfo}
            units={units}
          />
        }

      </div>
      <Footer />

    </div>
  );
}

export default App;