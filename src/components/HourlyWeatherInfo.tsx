import React from 'react';
import convertFromCelsius from '../utils/convertFromCelsius.tsx';
import convertFromLongMetric from '../utils/convertFromLongMetric.tsx';
import convertFromShortMetric from '../utils/convertFromShortMetric.tsx';
import convertFromMillibar from '../utils/convertFromMillibar.tsx';

export default function HourlyWeatherInfo({ extraHourlyInfo, units }) {
    const data = extraHourlyInfo;
    console.log(data)


    return (
        <div id="hourly-forecast-info-div" className='forecast-info-div'>
            <div className="forecast-info-inner-div">
                <h1>General</h1>
                <p>Temperature: &nbsp;
                    <span>
                        {convertFromCelsius(data.temperature, units)}
                    </span>
                </p>
                <p>Feels like: &nbsp;
                    <span>
                        {convertFromCelsius(data.app_temp, units)}
                    </span>
                </p>
                <p>UV index: &nbsp;
                    <span>
                        {data.uv_index}
                    </span>
                </p>
                <p>Visbility: &nbsp;
                    <span>
                        {convertFromLongMetric(data.visibility, units)}
                    </span>
                </p>
            </div>

            <div className="forecast-info-inner-div">
                <h1>Precipitation</h1>
                <p>Probability: &nbsp;
                    <span>
                        {data.pop}%
                    </span>
                </p>
                <p>Total rain: &nbsp;
                    <span>
                        {convertFromShortMetric(data.total_rain, units)}
                    </span>
                </p>
                <p>Total snowfall: &nbsp;
                    <span>
                        {convertFromShortMetric(data.total_snowfall, units)}
                    </span>
                </p>
                <p>Snow depth: &nbsp;
                    <span>
                        {convertFromShortMetric(data.snow_depth, units)}
                    </span>
                </p>
            </div>

            <div className="forecast-info-inner-div">
                <h1>Clouds</h1>
                <p>Total coverage: &nbsp;
                    <span>
                     {data.clouds}%
                    </span>
                </p>
                <p>0-3km altitude: &nbsp;
                    <span>
                     {data.clouds_low}%
                    </span>
                </p>
                <p>3-8km altitude: &nbsp;
                    <span>
                        {data.clouds_mid}%
                    </span>
                </p>
                <p>8+km altitude: &nbsp;
                    <span>
                        {data.clouds_high}%
                    </span>
                </p>
            </div>
            <div className="forecast-info-inner-div">
                <h1>Air</h1>
                <p>Humidity: &nbsp;
                    <span>
                        {data.relative_humidity}%
                    </span>
                </p>
                <p>Dew point: &nbsp;
                    <span>
                        {convertFromCelsius(data.dew_point, units)}
                    </span>
                </p>
                <p>Pressure: &nbsp;
                     <span>
                        {convertFromMillibar(data.surface_pressure, units)}
                    </span>
                </p>
                <p>Sea-level pressure: &nbsp;
                    <span>
                        {convertFromMillibar(data.msl_pressure, units)}
                    </span>
                </p>
            </div>
        </div>
    )
}