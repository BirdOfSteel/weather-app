import React from 'react';
import cloudyIcon from '../assets/cloudy-icon.png';
import humidityIcon from '../assets/humidity-icon.png';
import gustIcon from '../assets/gust-icon.png';
import windIcon from '../assets/wind-icon.png';
import compassIcon from '../assets/compass-icon.png';
import convertFromCelsius from '../utils/convertFromCelsius.tsx';
import convertFromMetresPerSecond from '../utils/convertFromMetresPerSecond.tsx';

// import sunriseIcon from '../assets/sunrise-icon.png';
// import sunsetIcon from '../assets/sunset-icon.png';

export default function WeatherSummary({ weatherObject, units }) {
    const weatherData = weatherObject.weatherData;
    
    const location = weatherData.location;
    const currentTemperature = convertFromCelsius(weatherData.current_temp, units);
    const weatherIconURL = ` https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`
    const weatherDescription = weatherData.description;
    const feelsLikeTemp = convertFromCelsius(weatherData.feels_like, units);
    const minTemp = convertFromCelsius(weatherData.min_temp, units);
    const maxTemp = convertFromCelsius(weatherData.max_temp, units);
    
    return (
        <div id="weather-summary-div">
            <div id="current-weather-div">
                <div id="weather-summary-row-one">
                    <h2>{location}</h2>
                </div>

                <div id="weather-summary-row-two">
                    <h1>{currentTemperature}</h1>
                    <h1 id="current-temperature-unit"></h1>
                    <img id="weather-icon" src={weatherIconURL}/>
                </div>

                <div id="weather-summary-row-three">
                    <p id="weather-description-text">{weatherDescription}</p>
                </div>
                
                <div id="weather-summary-row-four">
                    <p id="temp-feel-text">Feels like {feelsLikeTemp}</p>
                    <p id="min-max-temp-text">Max: {maxTemp} | Min: {minTemp}</p>
                </div>
            </div>

            <div id="additional-weather-info-div">
                <h1 id="wind-speed-heading" className="additional-weather-info-element">Wind speed</h1>
                <p id="wind-speed" className="additional-weather-info-element"><img id="wind-speed-icon" src={windIcon}/>{convertFromMetresPerSecond(weatherData.wind_speed, units)}</p>
                <h1 id="gust-speed-heading" className="additional-weather-info-element">Gust speed</h1>
                <p id="gust-speed" className="additional-weather-info-element"><img id="gust-speed-icon" src={gustIcon} />{convertFromMetresPerSecond(weatherData.gust_speed, units)}</p>
                <h1 id="wind-direction-heading" className="additional-weather-info-element">Wind direction</h1>
                <p id="wind-direction" className="additional-weather-info-element"><img id="wind-direction-icon" src={compassIcon}/>{weatherData.wind_direction_degrees}° ({weatherData.wind_direction_full})</p>
                
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