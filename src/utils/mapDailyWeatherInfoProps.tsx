import React from 'react';

import humidityIcon from '../assets/droplets-icon.png';
import convertFromCelsius from './convertFromCelsius.tsx';

import { CustomDailyWeatherData, CustomWeatherDataPackage, unitsObject } from '../types/customDataObjects.ts';

const mapTemperatures = (
    weatherObject: CustomWeatherDataPackage, 
    extraDailyInfo: CustomDailyWeatherData | null, 
    setExtraDailyInfo: React.Dispatch<React.SetStateAction<CustomDailyWeatherData | null>>, 
    units: unitsObject) => {
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

            return ( // daily element:
                <div className="weather-entry-div" 
                    key={index} 
                    onClick={() => {
                        setExtraDailyInfo((prevInfo) => {
                            return prevInfo === dailyForecastObject ?
                                null : dailyForecastObject;
                        })

                        setSelectedDailyElement(!isDailyElementSelected ? index : null)
                    }}
                    style={isDailyElementSelected ? {'background': 'rgba(0,0,0,0.3)'} : {}}
                >
                    <p>{convertFromCelsius(dailyForecastObject.max_temp, units)}</p>
                    <img className="weather-entry-icon" alt='Weather icon' src={iconURL}/>
                    <div className="humidity-entry-div">
                        <img className="humidity-icon" alt='Precipitation icon' src={humidityIcon} />
                        <p>{dailyForecastObject.pop}%</p>
                    </div>
                    <p>{dailyForecastObject.timestamp}</p>
                </div>
            )
        })

        return dailyForecastMapped
    }
}

export default mapTemperatures