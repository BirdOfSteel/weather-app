import React from 'react';
import mapHourlyTemperatures from '../utils/mapHourlyWeatherInfoProps.tsx';
import { HourlyWeatherProps } from '../types/componentTypes.ts';

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ weatherObject, extraHourlyInfo, setExtraHourlyInfo, units }) => {

    return (
        <>
        <section className='forecast-section'>
            <header>
                <h2 id="hourly-forecast-header">Hourly forecast:</h2>
            </header> 
            <ul id="hourly-forecast-list">
                {mapHourlyTemperatures(weatherObject, extraHourlyInfo, setExtraHourlyInfo, units)}
            </ul>
        </section>
        </>
    )
}

export default HourlyWeather