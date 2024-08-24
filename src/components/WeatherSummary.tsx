import React from 'react';

import sunnyMostlyIcon from '../assets/sunny-mostly-icon.svg';

export default function WeatherSummary({ weatherData }) {
    console.log(weatherData)
    console.log(weatherData.weather[0].main.description)

    let tempUnit = "°C";

    const location = weatherData.name;
    const currentTemperature = Math.round(weatherData.main.temp);
    const weatherIconURL = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const weatherDescription = weatherData.weather[0].description;
    const feelsLikeTemp = Math.round(weatherData.main.feels_like);
    const maxTemp = Math.round(weatherData.main.temp_max);
    const minTemp = Math.round(weatherData.main.temp_min);
    // implement switch statement for getting weather symbol from
    // weatherData.weather[0].main.description. 

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
            </div> 
        </div>
    )
}