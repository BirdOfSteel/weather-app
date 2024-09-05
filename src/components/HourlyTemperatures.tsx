import React from 'react';
import mapTemperatures from '../hooks/useMapTemperatures.tsx';

export default function HourlyTemperatures({ weatherObject, interval, extraHourlyInfo, setExtraHourlyInfo }) {

    return (
        <>
        <h1 id="hourly-header">Hourly:</h1>
        <div id="hourly-forecast-div">
            {mapTemperatures(weatherObject, interval, extraHourlyInfo, setExtraHourlyInfo)}
        </div>
        </>
    )
}