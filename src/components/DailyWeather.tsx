import React from 'react';
import mapTemperatures from '../utils/mapTemperatures.tsx';

export default function DailyWeather({ weatherObject, interval }) {
    const weatherData = weatherObject.weatherData;

    return (
        <>
        <h1 id="daily-header">Daily:</h1>
        <div id="daily-forecast-div">
            {mapTemperatures(weatherObject, interval)}
        </div>
        </>
    )
}