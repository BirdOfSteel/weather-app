import React from 'react';
import mapTemperatures from '../hooks/useMapTemperatures.tsx';

export default function DailyWeather({ weatherObject, interval, extraDailyInfo, setExtraDailyInfo, units }) {
    
    return (
        <>
        <h1 id="daily-header">Daily:</h1>
        <div id="daily-forecast-div">
            {mapTemperatures(weatherObject, interval, extraDailyInfo, setExtraDailyInfo, units)}
        </div>
        </>
    )
}