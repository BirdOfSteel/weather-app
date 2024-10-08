import React from 'react';
import mapHourlyTemperatures from '../utils/mapHourlyWeatherInfoProps.tsx';
import { HourlyWeatherProps } from '../types/componentTypes.ts';

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ weatherObject, extraHourlyInfo, setExtraHourlyInfo, units }) => {

    return (
        <>
        <h1 id="hourly-header">Hourly:</h1>
        <div id="hourly-forecast-div">
            {mapHourlyTemperatures(weatherObject, extraHourlyInfo, setExtraHourlyInfo, units)}
        </div>
        </>
    )
}

export default HourlyWeather