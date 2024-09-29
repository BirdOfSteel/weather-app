import React from 'react';
import './App.css';

import WeatherSummary from './components/WeatherSummary.tsx';
import Menu from './components/Menu.tsx';
import HourlyWeather from './components/HourlyWeather.tsx';
import HourlyWeatherInfo from './components/HourlyWeatherInfo.tsx';
import DailyWeather from './components/DailyWeather.tsx';
import DailyWeatherInfo from './components/DailyWeatherInfo.tsx';

import useGetCoordinates from './hooks/useGetCoordinates.tsx';
import useFetchWeather from './hooks/useFetchWeather.tsx';

import backgroundGradientSelector from './utils/backgroundGradientSelector.tsx';

// NOTES:
// fix typescript

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

  // calls backgroundGradientSelector utility. 
  React.useEffect(() => {
    if (weatherData.weatherData) {
      const currentTimestamp = weatherData.weatherData.hourly_forecast_array[0].timestamp;
      backgroundGradientSelector(currentTimestamp);
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
      <div 
        className="App"
        style={{'display': 'flex', 'alignItems': 'start', 'paddingTop': '5em'}}
      >
        <h1 className='error-text'>{weatherData.error.message}</h1>
        <h2 className='error-text'>Error: {weatherData.error.error}</h2>
        <p className='error-text'>Description: {weatherData.error.description}</p>
      </div>
    )
  }
  
  return (
    <div className="App">

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
          setExtraHourlyInfo={(data) => setExtraHourlyInfo(data)} // passes up data for HourlyWeatherInfo to display
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
          setExtraDailyInfo={(data) => setExtraDailyInfo(data)} // passes up data for DailyWeatherData to display
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
  )
}

export default App;