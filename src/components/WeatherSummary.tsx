import React from 'react';
import { format, fromUnixTime } from 'date-fns'; // REMOVE

import sunriseIcon from '../assets/sunrise-icon.png';
import sunsetIcon from '../assets/sunset-icon.png';
import capitaliseFirstLetter from '../utils/capitaliseFirstLetter.tsx';

export default function WeatherSummary({ weatherObject }) {
    // pod value to control day or night?

    // returns loading text if isLoading is true
    if (weatherObject.isLoading) {
        return (
            <div id="weather-summary-div">
                <h1 style={{"width": "100%", "height": "100%"}}>LOADING...</h1>
            </div>
        )
    }
    
    //returns error text if error data is available
    if (weatherObject.error) {
        return (
            <div id="weather-summary-div">
                <h1 style={{"width": "100%", "height": "100%"}}>Error: {weatherObject.error.message}</h1>
            </div>
        )
    }

    const weatherData = weatherObject.weatherData;

    let tempUnit = "°C";
    
    const location = weatherData.location;
    const currentTemperature = Math.round(weatherData.current_temp);
    const weatherIconURL = `https://www.weatherbit.io/static/img/icons/${weatherData.icon}.png`
    const weatherDescription = weatherData.description;
    const feelsLikeTemp = Math.round(weatherData.feels_like);
    const minTemp = Math.round(weatherData.min_temp);
    const maxTemp = Math.round(weatherData.max_temp);

    const sunriseTime = weatherData.sunrise;
    const sunsetTime = weatherData.sunset;

    return (
        <div id="weather-summary-div">
            <div id="current-weather-div">
                <div id="weather-summary-row-one">
                    <h2>{location}</h2>
                </div>

                <div id="weather-summary-row-two">
                    <h1>{currentTemperature}</h1>
                    <h1 id="current-temperature-unit">{tempUnit}</h1>
                    <img id="weather-icon" src={weatherIconURL}/>
                </div>

                <div id="weather-summary-row-three">
                    <p id="weather-description-text">{weatherDescription}</p>
                </div>
                
                <div id="weather-summary-row-four">
                    <p id="temp-feel-text">Feels like {feelsLikeTemp}{tempUnit}</p>
                    <p id="min-max-temp-text">Max: {maxTemp}{tempUnit} | Min: {minTemp}{tempUnit}</p>
                </div>

                <div id="weather-summary-row-five">
                    <img 
                        className="sunrise-sunset-icon" 
                        src={sunriseIcon} 
                    />
                    <p id="sunrise-text">{sunriseTime}</p>
                    <img
                        className="sunrise-sunset-icon" 
                        src={sunsetIcon} 
                    />
                    <p id="sunset-text" >{sunsetTime}</p>
                </div>
            </div>
        </div>
    )
}