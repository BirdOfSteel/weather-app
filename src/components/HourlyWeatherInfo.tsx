import React from 'react';
import convertFromCelsius from '../utils/convertFromCelsius.tsx';
import convertFromLongMetric from '../utils/convertFromLongMetric.tsx';
import convertFromShortMetric from '../utils/convertFromShortMetric.tsx';
import convertFromMillibar from '../utils/convertFromMillibar.tsx';

export default function HourlyWeatherInfo({ extraHourlyInfo, units }) {
    const data = extraHourlyInfo;

    return (
        <div id="forecast-info-div">
            <div className="forecast-info-inner-div">
                <h1>General</h1>
                <p>Temperature: &nbsp;
                    <span>
                        {convertFromCelsius(data.temp, units)}
                    </span>
                </p>
                <p>Feels like: &nbsp;
                    <span>
                        {convertFromCelsius(data.app_temp, units)}
                    </span>
                </p>
                <p>UV index: &nbsp;
                    <span>
                        {data.uv}
                    </span>
                </p>
                <p>Visbility: &nbsp;
                    <span>
                        {convertFromLongMetric(data.vis, units)}
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
                <p>Total liquid: &nbsp;
                    <span>
                        {convertFromShortMetric(data.precip, units)}
                    </span>
                </p>
                <p>Total snowfall: &nbsp;
                    <span>
                        {convertFromShortMetric(data.snow, units)}
                    </span>
                </p>
                <p>Snow depth: &nbsp;
                    <span>
                        {convertFromShortMetric(data.snow, units)}
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
                <p>0-3km AGL: &nbsp;
                    <span>
                     {data.clouds_low}%
                    </span>
                </p>
                <p>3-5km AGL: &nbsp;
                    <span>
                        {data.clouds_mid}%
                    </span>
                </p>
                <p>5+km AGL: &nbsp;
                    <span>
                        {data.clouds_hi}%
                    </span>
                </p>
            </div>
            <div className="forecast-info-inner-div">
                <h1>Air</h1>
                <p>Humidity: &nbsp;
                    <span>
                        {data.rh}%
                    </span>
                </p>
                <p>Dew point: &nbsp;
                    <span>
                        {convertFromCelsius(data.dewpt, units)}
                    </span>
                </p>
                <p>Pressure: &nbsp;
                     <span>
                        {convertFromMillibar(data.pres, units)}
                    </span>
                </p>
                <p>Sea-level pressure: &nbsp;
                    <span>
                        {convertFromMillibar(data.slp, units)}
                    </span>
                </p>
            </div>
        </div>
    )
}