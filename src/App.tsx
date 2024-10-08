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

import { 
  CustomDailyWeatherData, 
  CustomHourlyWeatherData, 
  CustomWeatherDataPackage,
  unitsObject 
} from './types/customDataObjects.ts';


function App() {
  const { positionData } = useGetCoordinates();

  const weatherData: CustomWeatherDataPackage = useFetchWeather(positionData); 
  
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);  

  const [extraHourlyInfo, setExtraHourlyInfo] = React.useState<CustomHourlyWeatherData | null>(null);
  const [extraDailyInfo, setExtraDailyInfo] = React.useState<CustomDailyWeatherData | null>(null);
  
  const [units, setUnits] = React.useState<unitsObject>({ 
    temperature: '°C', // C, F, K
    longDistance: 'km', // km, metres, miles
    shortDistance: 'mm', // mm, inch
    cloudDistance: 'km', // km, m, ft
    velocity: 'm/s', // m/s, km/h, mph, knots
    pressure: 'mb', // mb, pascal, hecopascal, mm mercury, inches mercury
  });

  // calls backgroundGradientSelector utility. 
  React.useEffect(() => {
    if (weatherData.weatherData) {
      const currentTimestamp = weatherData.weatherData.hourly_forecast_array[0].timestamp;
      backgroundGradientSelector(currentTimestamp);
    }
  },[weatherData.weatherData])

  // returns loading spinner
  if (weatherData.isLoading) {
    return (
      <div className="App" style={{'width':'100vw'}}>
        <span className='loader'></span>
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
        <h1 className='error-text'>{weatherData.error.api}</h1>
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