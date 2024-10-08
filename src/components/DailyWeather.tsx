import React from 'react';
import mapDailyTemperatures from '../utils/mapDailyWeatherInfoProps.tsx';
import { DailyWeatherProps } from '../types/componentTypes.ts';

const DailyWeather: React.FC<DailyWeatherProps> = ({ weatherObject, extraDailyInfo, setExtraDailyInfo, units }) => {
    
    return (
        <>
        <h1 id="daily-header">Daily:</h1>
        <div id="daily-forecast-div">
            {mapDailyTemperatures(weatherObject, extraDailyInfo, setExtraDailyInfo, units)}
        </div>
        </>
    )
}

export default DailyWeather