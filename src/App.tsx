import React from 'react';
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

  const [extraHourlyInfo, setExtraHourlyInfo] = React.useState(null);
  const [extraDailyInfo, setExtraDailyInfo] = React.useState(null);

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
      
      <Header />
      <WeatherSummary weatherObject={weatherData} />
      <div id="forecast-div">
        <HourlyTemperatures 
          weatherObject={weatherData} 
          interval='hourly' 
          setExtraHourlyInfo={(data) => setExtraHourlyInfo(data)}
        />
        
        {extraHourlyInfo &&
          <div id="hourly-extra-info-div">
            <div id="hourly-precipitation-div">
              <h1>Precipitation</h1>
              <p>Total liquid:</p>
              <p>snowfall:</p>
              <p>snow depth:</p>
            </div>

          </div>
        }
        
        <DailyWeather 
          weatherObject={weatherData} 
          interval='daily'
          setExtraDailyInfo={(data) => setExtraDailyInfo(data)} 
        />

        {extraDailyInfo && 
          <div>
            <p>{extraDailyInfo}</p>
          </div>
        }
      </div>
      <Footer />

    </div>
  );
}

export default App;

/* HOURLY
Precipitation:
  -probablity of precipitation
  -precipitation
  -snowfall
  -snow depth

Clouds:
  -cloudiness
  -clouds 0-3km AGL
  -clouds 3-5km AGL
  -clouds >5km AGL

Wind:
  -Wind speed
  -Wind gust speed
  -Wind direction

Air:
  -humidity
  -dew point
  -pressure (mb)
  -sea level pressure (mb)
  
Atmospheric
  -ozone
  -UV index
  -visibility
*/