import React from 'react';

import humidityIcon from '../assets/droplets-icon.png';
import { dailyForecastObjectType, hourlyForecastObjectType, weatherObjectType } from '../types/weatherTypes.tsx';
import parseDate from '../utils/parseDate.tsx';

// CONVERT FUNCTION TO PRODUCE FORECAST FOR DAILY

export default function mapTemperatures(weatherObject: weatherObjectType, interval: string, setExtraInfo) {
    // runs if weatherData exists and interval prop is 'hourly'
    console.log("ran")
    if (interval === 'hourly' && weatherObject.weatherData) { 
        const hourlyForecastArray = weatherObject.weatherData.hourlyForecastArray;
        
        const hourlyForecastMapped = hourlyForecastArray.map((hourlyForecastObject, index: number) => {
            const iconURL = `https://www.weatherbit.io/static/img/icons/${hourlyForecastObject.weather.icon}.png`;

            return (
                <div 
                    className="weather-entry-div" 
                    key={index} 
                    onClick={() => setExtraInfo("test1")}
                >
                    <p>{Math.round(hourlyForecastObject.temp)}°C</p>
                    <img className="weather-entry-icon" src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" src={humidityIcon} />
                        <p>{hourlyForecastObject.pop}%</p>
                    </div>
                    <p>{hourlyForecastObject.timestamp_utc.substring(11,16)}</p>
                </div>
            )
        })

        return hourlyForecastMapped
    }

    // runs if weatherData exists and interval prop is 'daily'
    if (interval === 'daily' && weatherObject.weatherData) { 
        const dailyForecastArray = weatherObject.weatherData.dailyForecastArray;

        const dailyForecastMapped = dailyForecastArray.map((dailyForecastObject, index: number) => {
            const iconURL = `https://www.weatherbit.io/static/img/icons/${dailyForecastObject.weather.icon}.png`

            return (
                <div className="weather-entry-div" key={index} onClick={() => setExtraInfo("test2")}>
                    <p>{Math.round(dailyForecastObject.temp)}°C</p>
                    <img className="weather-entry-icon" src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" src={humidityIcon} />
                        <p>{dailyForecastObject.pop}%</p>
                    </div>
                    <p>{parseDate(dailyForecastObject.valid_date)}</p>
                </div>
            )
        })

        return dailyForecastMapped
    }
}