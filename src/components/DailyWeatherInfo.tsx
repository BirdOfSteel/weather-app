import React from 'react';

export default function DailyWeatherInfo({ extraDailyInfo }) {
    const data = extraDailyInfo;

    return (    
        <div id="forecast-info-div">
            <div className="forecast-info-inner-div">
                <h1>Temperature</h1>
                <p>Minimum temperature: &nbsp;
                    <span> {/* Remember to check temperature values are rounded */}
                    {Math.round((data.min_temp * 100) / 100)}°C
                    </span>
                </p>
                <p>Maximum temperature: &nbsp;
                    <span>
                        {Math.round((data.max_temp * 100) / 100)}°C
                    </span>
                </p>
                <p> Minimum temperature (feels like):&nbsp;
                    <span>
                        {Math.round((data.app_min_temp * 100) / 100)}°C
                    </span>
                </p>
                <p> Maximum temperature (feels like):&nbsp;
                    <span>
                        {Math.round((data.app_max_temp * 100) / 100)}°C
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