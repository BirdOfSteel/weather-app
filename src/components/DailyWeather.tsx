import React from 'react';
import mapDailyTemperatures from '../utils/mapDailyWeatherInfoProps.tsx';
import { DailyWeatherProps } from '../types/componentTypes.ts';

const DailyWeather: React.FC<DailyWeatherProps> = ({ weatherObject, extraDailyInfo, setExtraDailyInfo, units }) => {
    
    return (
        <>
        <header>
            <h2 id="daily-forecast-header">Daily forecast:</h2>
        </header>
        <ul id="daily-forecast-list">
            {mapDailyTemperatures(weatherObject, extraDailyInfo, setExtraDailyInfo, units)}
        </ul>
        </>
    )
}

export default DailyWeather