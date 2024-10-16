import React from 'react';

import humidityIcon from '../assets/droplets-icon.png';
import convertFromCelsius from './convertFromCelsius.tsx';
import timestampToHour from './timestampToSpokenHour.tsx';

import { CustomHourlyWeatherData, CustomWeatherDataPackage, unitsObject } from '../types/customDataObjects.ts';

const mapHourlyTemperatures = (
    weatherObject: CustomWeatherDataPackage,
    extraHourlyInfo: CustomHourlyWeatherData | null, 
    setExtraHourlyInfo: React.Dispatch<React.SetStateAction<CustomHourlyWeatherData | null>>, 
    units: unitsObject) => {
    const [selectedHourlyElement, setSelectedHourlyElement] = React.useState<number | null>(null);

    // runs on first render. sets selectedHourlyElement and selectedDailyElement to first hourly/daily array items..
    React.useEffect(() => {
        if (!extraHourlyInfo && weatherObject.weatherData) {
            const firstElement = weatherObject.weatherData.hourly_forecast_array[0];
            setSelectedHourlyElement(0);
            setExtraHourlyInfo(firstElement);
        }
    },[])

    // runs if given interval is 'hourly'. Handles creating hourly forecast elements.
    if (weatherObject.weatherData) { 
        const hourly_forecast_array = weatherObject.weatherData.hourly_forecast_array;
        const hourlyForecastMapped = hourly_forecast_array.map((hourlyForecastObject:any, index: number) => {
            const iconURL = `https://openweathermap.org/img/wn/${hourlyForecastObject.icon}@2x.png`;
            const isHourlyElementSelected = selectedHourlyElement === index;
            const temperature = convertFromCelsius(hourlyForecastObject.temperature, units);
        
            // for aria-label
            const spokenHour = timestampToHour(hourlyForecastObject.timestamp);

            return ( // hourly element:
                <li 
                    onClick={() => {
                        setExtraHourlyInfo((prevInfo) => {
                        return prevInfo === hourlyForecastObject ?
                            null : hourlyForecastObject;
                        })   

                        setSelectedHourlyElement(!isHourlyElementSelected ? index : null);
                    }}
                    className="weather-entry-li" 
                    key={index} 
                    style={isHourlyElementSelected ? {'background': 'rgba(0,0,0,0.3)'} : {}}
                    role="button"
                    tabIndex={0}
                    aria-label={`At ${spokenHour}, the weather will be ${hourlyForecastObject.weather_description}. The temperature will be ${temperature}, with ${hourlyForecastObject.pop} percent chance of precipitation.`}
                >
                    <p>{temperature}</p>
                    <img className="weather-entry-icon" alt='' src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" alt='' src={humidityIcon} />
                        <p>{hourlyForecastObject.pop}%</p>
                    </div>
                    <p>{hourlyForecastObject.timestamp}</p>
                </li>
            )
        })

        return hourlyForecastMapped
    }
}

export default mapHourlyTemperatures