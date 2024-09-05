import React from 'react';

export default function HourlyWeatherInfo({ extraHourlyInfo, setExtraHourlyInfo }) {
    const data = extraHourlyInfo;

    return (
        <div id="hourly-info-div"
            onClick={() => setExtraHourlyInfo(null)}
        >
            <div className="hourly-info-inner-div">
                <h1>General</h1>
                <p>Temperature: 
                    <span>
                        {Math.round(data.temp)}°C
                    </span>
                </p>
                <p>Feels like: 
                    <span>
                        {Math.round(data.app_temp)}°C
                    </span>
                </p>
                <p>UV index:
                        <span>
                        {data.uv}
                    </span>
                </p>
                <p>Visbility: <span>{data.vis}km</span></p>
            </div>

            <div className="hourly-info-inner-div">
                <h1>Precipitation</h1>
                <p>Probability: <span>{data.pop}%</span></p>
                <p>Total liquid: <span>{Math.round(data.precip * 10) / 10}mm</span></p>
                <p>Total snowfall: <span>{Math.round(data.snow * 10) / 10}mm</span></p>
                <p>Snow depth: <span>{Math.round(data.snow * 10) / 10}mm</span></p>
            </div>

            <div className="hourly-info-inner-div">
                <h1>Clouds</h1>
                <p>Total coverage: <span>{data.clouds}%</span></p>
                <p>0-3km AGL: <span>{data.clouds_low}%</span></p>
                <p>3-5km AGL: <span>{data.clouds_mid}%</span></p>
                <p>5+km AGL: <span>{data.clouds_hi}%</span></p>
            </div>
            <div className="hourly-info-inner-div">
                <h1>Air</h1>
                <p>Humidity: <span>{data.rh}%</span></p>
                <p>Dew point: <span>{data.dewpt}°C</span></p>
                <p>Pressure: <span>{data.pres}mb</span></p>
                <p>Sea-level pres.: <span>{data.slp}mb</span></p>
            </div>
            <p onClick={() => setExtraHourlyInfo(null)} id="close-hourly-info-div">X</p>
        </div>
    )
}