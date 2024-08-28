import React from 'react';

import { weatherDataState, forecastObjectType } from '../types/weatherTypes.tsx';

export default function mapTemperatures(weatherObject: weatherDataState) {
    if (weatherObject.weatherData) { 
        const hourlyForecastArray = weatherObject.weatherData.hourlyForecastArray;
        console.log(weatherObject.weatherData.hourlyForecastArray)

        // research type for forecastObject 
        const hourlyForecastMapped = hourlyForecastArray.map((forecastObject: forecastObjectType, index: number) => {
            console.log(forecastObject)
            let timestamp = forecastObject.timestamp_utc.substring(11,16);
            const iconURL = `https://www.weatherbit.io/static/img/icons/${forecastObject.weather.icon}.png`

            return (
                <div className="weather-entry-div">
                    <p>{Math.round(forecastObject.temp)}°C</p>
                    <img className="weather-entry-icon" src={iconURL}/>
                    <p>{timestamp}</p>
                </div>
            )
        })

        return hourlyForecastMapped
    }
}