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

import backgroundGradientSelector from './utils/backgroundGradientSelector.tsx';


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
  
  const [backgroundGradientObject, setBackgroundGradientObject] = React.useState(backgroundGradientSelector(null));

  const [units, setUnits] = React.useState({ 
    temperature: '°C', // C, F, K
    longDistance: 'km', // km, metres, miles
    shortDistance: 'mm', // mm, inch
    cloudDistance: 'km', // km, metres, ft
    velocity: 'm/s', // m/s, km/h, mph, knots
    pressure: 'mb', // mb, pascal, hectopascal, mm mercury, inches mercury
  }); 


  // NOTE: CUT OUT SPENT HOURS FROM HOURLY WEATHER ARRAY.
  // FUNCTION CAN TAKE CURRENT HOUR, SUBRACT 1, AND USE
  // RESULTING VALUE AS INDEX TO REMOVE SPECIFIED AMOUNT
  // OF ITEMS.

  // fetches background gradient when weatherData is updated
  React.useEffect(() => {
    if(weatherData.weatherData) {
      const appDiv = document.querySelector('.App');
      const currentTimestamp = weatherData.weatherData.hourly_forecast_array[0].timestamp;
      const newGradientObject = backgroundGradientSelector(currentTimestamp);
      
      appDiv?.style.setProperty('--myColor1', newGradientObject.A);
      appDiv?.style.setProperty('--myColor2', newGradientObject.B);
      appDiv?.style.setProperty('--myColor3', newGradientObject.C);
      appDiv?.style.setProperty('--myColor4', newGradientObject.D);
      appDiv?.style.setProperty('--myColor5', newGradientObject.E);

      setBackgroundGradientObject(newGradientObject);
    }
  },[weatherData.weatherData])


  // FIND NEW WAY TO CHECK IF RESPONSE FAILED DUE TO EXCESS REQUESTS
  // if (currentweatherData.weatherData?.cod === 429) {
  //   return (
  //     <div className="App">
  //       <h1>Requests exceeded for the day</h1>
  //     </div>
  //   )
  // }


  
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
    console.log(weatherData.error)
    return (
      <div className="App">
        <h1 style={{"width": "100%", "height": "100%"}}>Error: {weatherData.error}</h1>
      </div>
    )
  }

  const gradients = [
    "linear-gradient(red, purple)", // Warm tones
    "linear-gradient(green, blue)" // Cool to warm transition
  ];
  
  return (
    <div 
      className="App"
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Menu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        units={units} 
        setUnits={setUnits}
        />

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
        
        <Footer />
      </div>
    </div>
  );
}

export default App;