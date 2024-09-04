import React from 'react';
import mapTemperatures from '../utils/mapTemperatures.tsx';

export default function HourlyTemperatures({ weatherObject, interval, setExtraHourlyInfo }) {

    return (
        <>
        <h1 id="hourly-header">Hourly:</h1>
        <div id="hourly-forecast-div">
            {mapTemperatures(weatherObject, interval, setExtraHourlyInfo)}
        </div>
        </>
    )
}