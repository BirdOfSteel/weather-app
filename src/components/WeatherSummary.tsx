import React from 'react';
import { format, fromUnixTime } from 'date-fns';

import sunriseIcon from '../assets/sunrise-icon.png';
import sunsetIcon from '../assets/sunset-icon.png';
import capitaliseFirstLetter from '../utils/capitaliseFirstLetter.tsx';

export default function WeatherSummary({ weatherData }) {
    console.log(weatherData)
    console.log(weatherData.weather[0].main.description)

    let tempUnit = "°C";

    const location = weatherData.name;
    const currentTemperature = Math.round(weatherData.main.temp);
    const weatherIconURL = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const weatherDescription = capitaliseFirstLetter(weatherData.weather[0].description);
    const feelsLikeTemp = Math.round(weatherData.main.feels_like);
    const maxTemp = Math.round(weatherData.main.temp_max);
    const minTemp = Math.round(weatherData.main.temp_min);

    const sunriseDate = fromUnixTime(weatherData.sys.sunrise);
    const sunriseTime = format(sunriseDate, 'HH:mm');
    const sunsetDate = fromUnixTime(weatherData.sys.sunset);
    const sunsetTime = format(sunsetDate, 'HH:mm');
    
    console.log(sunriseTime + " | " + sunsetTime)

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