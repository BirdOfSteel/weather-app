import React from 'react';

import humidityIcon from '../assets/droplets-icon.png';
import { dailyForecastObjectType, hourlyForecastObjectType, weatherObjectType } from '../types/weatherTypes.tsx';

// CONVERT FUNCTION TO PRODUCE FORECAST FOR DAILY

export default function mapTemperatures(weatherObject: weatherObjectType, interval: string) {
    // runs if weatherData exists and interval prop is 'hourly'
    
    if (interval === 'hourly' && weatherObject.weatherData) { 
        const hourlyForecastArray = weatherObject.weatherData.hourlyForecastArray;
        
        const hourlyForecastMapped = hourlyForecastArray.map((hourlyForecastObject: hourlyForecastObjectType, index: number) => {
            const iconURL = `https://www.weatherbit.io/static/img/icons/${hourlyForecastObject.icon}.png`
            const [expanded, setExpanded] = React.useState(false);

            return (
                <div 
                    className="weather-entry-div" 
                    key={index} 
                    onClick={() => setExpanded(!expanded)}
                    style={{'width': `${expanded ? '200px' : '50px'}`}}
                    >
                    <p>{Math.round(hourlyForecastObject.temp)}°C</p>
                    <img className="weather-entry-icon" src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" src={humidityIcon} />
                        <p>{hourlyForecastObject.pop}%</p>
                    </div>
                    <p>{hourlyForecastObject.hour}</p>
                </div>
            )
        })

        return hourlyForecastMapped
    }

    // runs if weatherData exists and interval prop is 'daily'
    if (interval === 'daily' && weatherObject.weatherData) { 
        const dailyForecastArray = weatherObject.weatherData.dailyForecastArray;

        const dailyForecastMapped = dailyForecastArray.map((dailyForecastObject: dailyForecastObjectType, index: number) => {
            const iconURL = `https://www.weatherbit.io/static/img/icons/${dailyForecastObject.icon}.png`

            return (
                <div className="weather-entry-div" key={index}>
                    <p>{Math.round(dailyForecastObject.temp)}°C</p>
                    <img className="weather-entry-icon" src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" src={humidityIcon} />
                        <p>{dailyForecastObject.pop}%</p>
                    </div>
                    <p>{dailyForecastObject.date}</p>
                </div>
            )
        })

        return dailyForecastMapped
    }
}