import React from 'react';
import convertFromCelsius from '../utils/convertFromCelsius.tsx';
import convertFromShortMetric from '../utils/convertFromShortMetric.tsx';
import convertFromMetresPerSecond from '../utils/convertFromMetresPerSecond.tsx';
import secondsToHoursAndMinutes from '../utils/secondsToHoursAndMinutes.tsx';

export default function DailyWeatherInfo({ extraDailyInfo, units }) {
    const data = extraDailyInfo;

    return (    
        <div id="daily-forecast-info-div" className='forecast-info-div'>
            <div className="forecast-info-inner-div">
                <h1>Temperature</h1>
                <p>Minimum temperature: &nbsp;
                    <span> {/* Remember to check temperature values are rounded */}
                        {convertFromCelsius(data.min_temp, units)}
                    </span>
                </p>
                <p>Maximum temperature: &nbsp;
                    <span>
                        {convertFromCelsius(data.max_temp, units)}
                    </span>
                </p>
                <p> Minimum 'feels like':&nbsp;
                    <span>
                        {convertFromCelsius(data.app_min_temp, units)}
                    </span>
                </p>
                <p> Maximum 'feels like':&nbsp;
                    <span>
                        {convertFromCelsius(data.app_max_temp, units)}
                    </span>
                </p>
            </div>

            <div className="forecast-info-inner-div">
                <h1>Precipitation & Wind</h1>
                <p>Probability: &nbsp;
                    <span>
                        {data.pop}%
                    </span>
                </p>
                <p>Total precipitation: &nbsp;
                    <span>
                        {convertFromShortMetric(data.pop, units)}
                    </span>
                </p>
                <p>Maximum wind speed: &nbsp;
                    <span>
                        {convertFromMetresPerSecond(data.wind_speed, units)}
                    </span>
                </p>
                <p>Maximum gust speed: &nbsp;
                    <span>
                        {convertFromMetresPerSecond(data.gust_speed, units)}
                    </span>
                </p>
            </div>

            <div className="forecast-info-inner-div">
                <h1>Sunlight</h1>
                <p>Sunrise: &nbsp;
                    <span>
                        {data.sunrise}
                    </span>
                </p>
                <p>Sunset: &nbsp;
                    <span>
                        {data.sunset}
                    </span>
                </p>
                <p>Sun duration: &nbsp;
                    <span>
                        {secondsToHoursAndMinutes(data.daylight_duration)}
                    </span>
                </p>
                <p>Maximum UV Index: &nbsp;
                    <span>
                        {data.uv_index}
                    </span>
                </p>
            </div>
        </div>
    )
}