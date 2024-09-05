import React from 'react';

import humidityIcon from '../assets/droplets-icon.png';
import { dailyForecastObjectType, hourlyForecastObjectType, weatherObjectType } from '../types/weatherTypes.ts';
import parseDate from '../utils/parseDate.tsx';

// CONVERT FUNCTION TO PRODUCE FORECAST FOR DAILY

export default function useMapTemperatures(weatherObject: weatherObjectType, interval: string, extraInfo, setExtraInfo) {
    const [selectedHourlyElement, setSelectedHourlyElement] = React.useState<number | null>(null);
    const [selectedDailyElement, setSelectedDailyElement] = React.useState<number | null>(null);

    if (interval === 'hourly' && weatherObject.weatherData) { 
        const hourlyForecastArray = weatherObject.weatherData.hourlyForecastArray;
        
        const hourlyForecastMapped = hourlyForecastArray.map((hourlyForecastObject, index: number) => {
            const iconURL = `https://www.weatherbit.io/static/img/icons/${hourlyForecastObject.weather.icon}.png`;

            const isHourlyElementSelected = selectedHourlyElement === index;
            console.log(isHourlyElementSelected)
            return (
                <div 
                    className="weather-entry-div" 
                    key={index} 
                    onClick={() => {
                        setExtraInfo((prevInfo) => {
                            return prevInfo === hourlyForecastObject ?
                                null : hourlyForecastObject;
                        })

                        setSelectedHourlyElement(!isHourlyElementSelected ? index : null)
                    }}
                    style={isHourlyElementSelected ? {'background': 'rgba(0,0,0,0.3)'} : {}}
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

            const isDailyElementSelected = selectedDailyElement === index;

            return (
                <div className="weather-entry-div" 
                    key={index} 
                    onClick={() => {
                        setExtraInfo(dailyForecastObject)
                        setSelectedDailyElement(index)
                    }}
                    style={isDailyElementSelected ? {'background': 'rgba(0,0,0,0.3)'} : {}}
                >
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