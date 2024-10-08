import React from 'react';
import mapTemperatures from '../utils/mapTemperatures.tsx';
import { HourlyWeatherProps } from '../types/componentTypes.ts';

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ weatherObject, interval, extraHourlyInfo, setExtraHourlyInfo, units }) => {

    return (
        <>
        <h1 id="hourly-header">Hourly:</h1>
        <div id="hourly-forecast-div">
            {mapTemperatures(weatherObject, interval, extraHourlyInfo, setExtraHourlyInfo, units)}
        </div>
        </>
    )
}

export default HourlyWeather