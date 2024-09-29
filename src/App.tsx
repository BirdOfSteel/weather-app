import React from 'react';
import './App.css';

import WeatherSummary from './components/WeatherSummary.tsx';
import HourlyWeather from './components/HourlyWeather.tsx';
import HourlyWeatherInfo from './components/HourlyWeatherInfo.tsx';
import DailyWeather from './components/DailyWeather.tsx';
import DailyWeatherInfo from './components/DailyWeatherInfo.tsx';

import useGetCoordinates from './hooks/useGetCoordinates.tsx';
import useFetchWeather from './hooks/useFetchWeather.tsx';

import Menu from './components/Menu.tsx';

import backgroundGradientSelector from './utils/backgroundGradientSelector.tsx';


// TO DO:
// Design converter function for temp, distance, and pressure
// Apply converter function to units being displayed.

// NOTES:
// change menu icon colour depending on if day/night? maybe just use white
// fix typescript
// fix cloud altitude symbols
// implement error checking (throw error if either API fails)

function App() {
  const { positionData } = useGetCoordinates();

  const weatherData = useFetchWeather(positionData); 
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);  

  const [extraHourlyInfo, setExtraHourlyInfo] = React.useState(null);
  const [extraDailyInfo, setExtraDailyInfo] = React.useState(null);
  
  const [units, setUnits] = React.useState({ 
    temperature: '°C', // C, F, K
    longDistance: 'km', // km, metres, miles
    shortDistance: 'mm', // mm, inch
    cloudDistance: 'km', // km, m, ft
    velocity: 'm/s', // m/s, km/h, mph, knots
    pressure: 'mb', // mb, pascal, hectopascal, mm mercury, inches mercury
  }); 

  // fetches then sets background gradient when weatherData is updated
  React.useEffect(() => {
    if(weatherData.weatherData) {
      const appDiv = document.querySelector('.App') as HTMLElement;
      const currentTimestamp = weatherData.weatherData.hourly_forecast_array[0].timestamp;
      
      const newGradientObject = backgroundGradientSelector(currentTimestamp);
      
      appDiv?.style.setProperty('--myColor1', newGradientObject.A);
      appDiv?.style.setProperty('--myColor2', newGradientObject.B);
      appDiv?.style.setProperty('--myColor3', newGradientObject.C);
      appDiv?.style.setProperty('--myColor4', newGradientObject.D);
      appDiv?.style.setProperty('--myColor5', newGradientObject.E);
    }
  },[weatherData.weatherData])

  // returns loading text/image
  if (weatherData.isLoading) {
    return (
      <div className="App">
        <h1 style={{"width": "100%", "height": "100%"}}>LOADING...</h1>
      </div>
    )
  }
  
  // returns error text if error data is available
  if (weatherData.error) {
    return (
      <div className="App">
        <h1 style={{"width": "100%", "height": "100%"}}>Error: {weatherData.error}</h1>
      </div>
    )
  }
  
  return (
    <div 
      className="App"
    >

      <Menu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        units={units} 
        setUnits={setUnits}
      />

      <WeatherSummary weatherObject={weatherData} units={units} />
      
      <div id="forecast-div">
        <HourlyWeather
          weatherObject={weatherData} 
          interval='hourly' 
          extraHourlyInfo={extraHourlyInfo}
          setExtraHourlyInfo={(data) => setExtraHourlyInfo(data)} // passes up data
          units={units}
        />
        
        { /* runs if extraHourlyInfo state is active */
          extraHourlyInfo &&
          <HourlyWeatherInfo 
            extraHourlyInfo={extraHourlyInfo}
            units={units}
          />
        }

        <DailyWeather 
          weatherObject={weatherData} 
          interval='daily'
          extraDailyInfo={extraDailyInfo}
          setExtraDailyInfo={(data) => setExtraDailyInfo(data)} // passes up data
          units={units}
        />

        { /* runs if extraDailyInfo state is active */
          extraDailyInfo && 
          <DailyWeatherInfo 
            extraDailyInfo={extraDailyInfo}
            units={units}
          />
        }
      </div>
    </div>
  );
}

export default App;