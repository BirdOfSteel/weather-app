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

                <dl>
                    <div>
                        <dt>Minimum temperature:</dt>
                        <dd>{convertFromCelsius(data.min_temp, units)}</dd>
                    </div>

                    <div>
                        <dt>Maximum temperature:</dt>
                        <dd>{convertFromCelsius(data.max_temp, units)}</dd>
                    </div>

                    <div>
                        <dt>Minimum 'feels like':</dt>
                        <dd>{convertFromCelsius(data.app_min_temp, units)}</dd>
                    </div>

                    <div>
                        <dt> Maximum 'feels like':</dt>
                        <dd>{convertFromCelsius(data.app_max_temp, units)}</dd>
                    </div>
                </dl>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Precipitation & Wind</h4>
                
                <dl>
                    <div>
                        <dt>Probability:</dt>
                        <dd>{data.pop}%</dd>
                    </div>

                    <div>
                        <dt>Total precipitation:</dt>
                        <dd>{convertFromShortMetric(data.pop, units)}</dd>
                    </div>

                    <div>
                        <dt>Maximum wind speed:</dt>
                        <dd>{convertFromMetresPerSecond(data.wind_speed, units)}</dd>
                    </div>

                    <div>
                        <dt>Maximum gust speed:</dt>
                        <dd>{convertFromMetresPerSecond(data.gust_speed, units)}</dd>
                    </div>
                </dl>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Sunlight</h4>

                <dl>
                    <div>
                        <dt>Sunrise:</dt>
                        <dd>{data.sunrise}</dd>
                    </div>

                    <div>
                        <dt>Sunset:</dt>
                        <dd>{data.sunset}</dd>   
                    </div>

                    <div>
                        <dt>Sun duration:</dt>
                        <dd>{secondsToHoursAndMinutes(data.daylight_duration)}</dd>
                    </div>
                    
                    <div>
                        <dt>Maximum UV Index:</dt>
                        <dd>{data.uv_index}</dd>
                    </div>
                </dl>
            </section>
        </section>
    )
}

export default DailyWeatherInfo