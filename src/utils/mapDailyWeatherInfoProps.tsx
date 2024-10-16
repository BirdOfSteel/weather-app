import React from 'react';

import humidityIcon from '../assets/droplets-icon.png';
import convertFromCelsius from './convertFromCelsius.tsx';

import { CustomDailyWeatherData, CustomWeatherDataPackage, unitsObject } from '../types/customDataObjects.ts';
import timestampToDate from './datestampToSpokenDate.tsx';

const mapTemperatures = (
    weatherObject: CustomWeatherDataPackage, 
    extraDailyInfo: CustomDailyWeatherData | null, 
    setExtraDailyInfo: React.Dispatch<React.SetStateAction<CustomDailyWeatherData | null>>, 
    units: unitsObject ) => {
        
    const [selectedDailyElement, setSelectedDailyElement] = React.useState<number | null>(null);

    // runs on first render. sets selectedDailyElement to first daily array item.
    React.useEffect(() => {
        if (!extraDailyInfo && weatherObject.weatherData) {
            const firstElement = weatherObject.weatherData.daily_forecast_array[0];
            setSelectedDailyElement(0);
            setExtraDailyInfo(firstElement);
        }
    },[])

 
    if (weatherObject.weatherData) { 
        const dailyForecastArray = weatherObject.weatherData.daily_forecast_array;
        
        const dailyForecastMapped = dailyForecastArray.map((dailyForecastObject:any, index: number) => {
            const iconURL = `https://openweathermap.org/img/wn/${dailyForecastObject.icon}@2x.png`;
            const isDailyElementSelected = selectedDailyElement === index;
            const temperature = convertFromCelsius(dailyForecastObject.max_temp, units);

            // for aria-label
            const spokenDate = timestampToDate('01/01')

            return ( // daily element:
                <li 
                    onClick={() => {
                        setExtraDailyInfo((prevInfo) => {
                            return prevInfo === dailyForecastObject ?
                                null : dailyForecastObject;
                        })

                        setSelectedDailyElement(!isDailyElementSelected ? index : null)
                    }}
                    className="weather-entry-li" 
                    key={index} 
                    style={isDailyElementSelected ? {'background': 'rgba(0,0,0,0.3)'} : {}}
                    role="button"
                    tabIndex={0}
                    aria-label={`On ${spokenDate}, the weather will be ${dailyForecastObject.weather_description}. The temperature will be ${temperature}, with ${dailyForecastObject.pop} percent chance of precipitation.`}
                >
                    <p>{temperature}</p>
                    <img className="weather-entry-icon" alt='' src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" alt='' src={humidityIcon} />
                        <p>{dailyForecastObject.pop}%</p>
                    </div>
                    <p>{dailyForecastObject.timestamp}</p>
                </li>
            )
        })

        return dailyForecastMapped
    }
}

export default mapTemperatures