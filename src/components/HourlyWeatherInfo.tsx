import React from 'react';

export default function HourlyWeatherInfo({ extraHourlyInfo }) {
    const data = extraHourlyInfo;

    return (
        <div id="forecast-info-div">
            <div className="forecast-info-inner-div">
                <h1>General</h1>
                <p>Temperature: &nbsp;
                    <span>
                        {Math.round(data.temp)}°C
                    </span>
                </p>
                <p>Feels like: &nbsp;
                    <span>
                        {Math.round(data.app_temp)}°C
                    </span>
                </p>
                <p>UV index: &nbsp;
                    <span>
                        {data.uv}
                    </span>
                </p>
                <p>Visbility: &nbsp;
                    <span>
                        {data.vis}km
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
                        {Math.round(data.precip * 10) / 10}mm
                    </span>
                </p>
                <p>Total snowfall: &nbsp;
                    <span>
                        {Math.round(data.snow * 10) / 10}mm
                    </span>
                </p>
                <p>Snow depth: &nbsp;
                    <span>
                        {Math.round(data.snow * 10) / 10}mm
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
                        {data.dewpt}°C
                    </span>
                </p>
                <p>Pressure: &nbsp;
                     <span>
                        {data.pres}mb
                    </span>
                </p>
                <p>Sea-level pressure: &nbsp;
                    <span>
                        {data.slp}mb
                    </span>
                </p>
            </div>
        </div>
    )
}