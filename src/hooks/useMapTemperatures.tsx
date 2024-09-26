import React from 'react';

import humidityIcon from '../assets/droplets-icon.png';
import { dailyForecastObjectType, hourlyForecastObjectType, weatherObjectType } from '../types/weatherTypes.ts';
import parseDate from '../utils/parseDate.tsx';
import convertFromCelsius from '../utils/convertFromCelsius.tsx';

// CONVERT FUNCTION TO PRODUCE FORECAST FOR DAILY

export default function useMapTemperatures(weatherObject, interval, extraInfo, setExtraInfo, units) {
    const [selectedHourlyElement, setSelectedHourlyElement] = React.useState<number | null>(null);
    const [selectedDailyElement, setSelectedDailyElement] = React.useState<number | null>(null);
   
    React.useEffect(() => {
        if (!extraInfo && interval === 'hourly') {
            const firstElement = weatherObject.weatherData.hourly_forecast_array[0];
            setSelectedHourlyElement(0);
            setExtraInfo(firstElement);
        } else if (!extraInfo && interval === 'daily') {
            const firstElement = weatherObject.weatherData.daily_forecast_array[0];
            setSelectedDailyElement(0);
            setExtraInfo(firstElement);
        }
    },[])

    if (interval === 'hourly' && weatherObject.weatherData) { 
        const hourly_forecast_array = weatherObject.weatherData.hourly_forecast_array;
        
        const hourlyForecastMapped = hourly_forecast_array.map((hourlyForecastObject, index: number) => {
            const iconURL = `https://openweathermap.org/img/wn/${hourlyForecastObject.icon}@2x.png`;
            const isHourlyElementSelected = selectedHourlyElement === index;

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
                    <p>{convertFromCelsius(hourlyForecastObject.temperature, units)}</p>
                    <img className="weather-entry-icon" src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" src={humidityIcon} />
                        <p>{hourlyForecastObject.pop}%</p>
                    </div>
                    <p>{hourlyForecastObject.timestamp}</p>
                </div>
            )
        })

        return hourlyForecastMapped
    }

    // runs if weatherData exists and interval prop is 'daily'
    if (interval === 'daily' && weatherObject.weatherData) { 
        const dailyForecastArray = weatherObject.weatherData.daily_forecast_array;
        console.log(dailyForecastArray)
        const dailyForecastMapped = dailyForecastArray.map((dailyForecastObject, index: number) => {
            const iconURL = `https://openweathermap.org/img/wn/${dailyForecastObject.icon}@2x.png`;

            const isDailyElementSelected = selectedDailyElement === index;

            return (
                <div className="weather-entry-div" 
                    key={index} 
                    onClick={() => {
                        setExtraInfo((prevInfo) => {
                            return prevInfo === dailyForecastObject ?
                                null : dailyForecastObject;
                        })

                        setSelectedDailyElement(!isDailyElementSelected ? index : null)
                    }}
                    style={isDailyElementSelected ? {'background': 'rgba(0,0,0,0.3)'} : {}}
                >
                    <p>{convertFromCelsius(dailyForecastObject.max_temp, units)}</p>
                    <img className="weather-entry-icon" src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" src={humidityIcon} />
                        <p>{dailyForecastObject.pop}%</p>
                    </div>
                    <p>{dailyForecastObject.timestamp}</p>
                </div>
            )
        })

        return dailyForecastMapped
    }
}