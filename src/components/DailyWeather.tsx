import React from 'react';
import mapTemperatures from '../utils/mapTemperatures.tsx';
import { DailyWeatherProps } from '../types/componentTypes.ts';

const DailyWeather: React.FC<DailyWeatherProps> = ({ weatherObject, interval, extraDailyInfo, setExtraDailyInfo, units }) => {
    
    return (
        <>
        <h1 id="daily-header">Daily:</h1>
        <div id="daily-forecast-div">
            {mapTemperatures(weatherObject, interval, extraDailyInfo, setExtraDailyInfo, units)}
        </div>
        </>
    )
}

export default DailyWeather