import convertFromCelsius from '../utils/convertFromCelsius.tsx';
import convertFromShortMetric from '../utils/convertFromShortMetric.tsx';
import convertFromMetresPerSecond from '../utils/convertFromMetresPerSecond.tsx';
import secondsToHoursAndMinutes from '../utils/secondsToHoursAndMinutes.tsx';
import { DailyWeatherInfoProps } from '../types/componentTypes.ts';

const DailyWeatherInfo: React.FC<DailyWeatherInfoProps> = ({ extraDailyInfo, units }) => {
    const data = extraDailyInfo;

    return (    
        <section id="daily-forecast-info-section" className='forecast-info-section'>
            <section className="forecast-info-inner-section">
                <h4>Temperature</h4>
                <h5>Minimum temperature: &nbsp;
                    <span> {/* Remember to check temperature values are rounded */}
                        {convertFromCelsius(data.min_temp, units)}
                    </span>
                </h5>
                <h5>Maximum temperature: &nbsp;
                    <span>
                        {convertFromCelsius(data.max_temp, units)}
                    </span>
                </h5>
                <h5> Minimum 'feels like':&nbsp;
                    <span>
                        {convertFromCelsius(data.app_min_temp, units)}
                    </span>
                </h5>
                <h5> Maximum 'feels like':&nbsp;
                    <span>
                        {convertFromCelsius(data.app_max_temp, units)}
                    </span>
                </h5>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Precipitation & Wind</h4>
                <h5>Probability: &nbsp;
                    <span>
                        {data.pop}%
                    </span>
                </h5>
                <h5>Total precipitation: &nbsp;
                    <span>
                        {convertFromShortMetric(data.pop, units)}
                    </span>
                </h5>
                <h5>Maximum wind speed: &nbsp;
                    <span>
                        {convertFromMetresPerSecond(data.wind_speed, units)}
                    </span>
                </h5>
                <h5>Maximum gust speed: &nbsp;
                    <span>
                        {convertFromMetresPerSecond(data.gust_speed, units)}
                    </span>
                </h5>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Sunlight</h4>
                <h5>Sunrise: &nbsp;
                    <span>
                        {data.sunrise}
                    </span>
                </h5>
                <h5>Sunset: &nbsp;
                    <span>
                        {data.sunset}
                    </span>
                </h5>
                <h5>Sun duration: &nbsp;
                    <span>
                        {secondsToHoursAndMinutes(data.daylight_duration)}
                    </span>
                </h5>
                <h5>Maximum UV Index: &nbsp;
                    <span>
                        {data.uv_index}
                    </span>
                </h5>
            </section>
        </section>
    )
}

export default DailyWeatherInfo