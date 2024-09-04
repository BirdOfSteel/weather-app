import React from 'react';
import { format, fromUnixTime } from 'date-fns'; // REMOVE
import cloudyIcon from '../assets/cloudy-icon.png';
import humidityIcon from '../assets/humidity-icon.png';
import gustIcon from '../assets/gust-icon.png';
import windIcon from '../assets/wind-icon.png';
import compassIcon from '../assets/compass-icon.png';

// import sunriseIcon from '../assets/sunrise-icon.png';
// import sunsetIcon from '../assets/sunset-icon.png';

export default function WeatherSummary({ weatherObject }) {
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

                {/* <div id="weather-summary-row-five">
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
                </div> */}
            </div>

            <div id="additional-weather-info-div">
                <h1 id="wind-speed-heading" className="additional-weather-info-element">Wind speed</h1>
                <p id="wind-speed" className="additional-weather-info-element"><img id="wind-speed-icon" src={windIcon}/>{Math.round(weatherData.wind_speed)} m/s</p>
                <h1 id="gust-speed-heading" className="additional-weather-info-element">Gust speed</h1>
                <p id="gust-speed" className="additional-weather-info-element"><img id="gust-speed-icon" src={gustIcon} />{Math.round(weatherData.gust_speed)} m/s</p>
                <h1 id="wind-direction-heading" className="additional-weather-info-element">Wind direction</h1>
                <p id="wind-direction" className="additional-weather-info-element"><img id="wind-direction-icon" src={compassIcon}/>{weatherData.wind_direction_short}</p>
                
                <div id="additional-weather-div-row-one">
                    <h1 id="cloud-coverage-heading" className="additional-weather-info-element">Cloud coverage</h1>
                    <p id="cloud-coverage" className="additional-weather-info-element"><img id="cloud-coverage-icon" src={cloudyIcon}/>{weatherData.cloud_coverage}%</p>
                    <h1 title='relative-humidity-definition' id="relative-humidity-heading" className="additional-weather-info-element">Relative humidity</h1>
                    <p id="relative-humidity" className="additional-weather-info-element"><img id="relative-humidity-icon" src={humidityIcon}/>{weatherData.relative_humidity}%</p>
                </div>
            </div>
            
                
        </div>
    )
}

/* 
    clouds - cloud coverage %
    uv - uv index from 0-11+
    
    wind_spd - wind speed m/s
    gust - gust speed m/s
    wind_cdir_full - wind direction

    rh - relative humidity
    dewpt - dew point in celsius
    
    clouds - cloud coverage %
    vis - visibility in km
    
*/