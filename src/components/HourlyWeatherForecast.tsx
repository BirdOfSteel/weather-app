import convertFromCelsius from '../utils/convertFromCelsius.tsx';
import convertFromLongMetric from '../utils/convertFromLongMetric.tsx';
import convertFromShortMetric from '../utils/convertFromShortMetric.tsx';
import convertFromMillibar from '../utils/convertFromMillibar.tsx';
import changeCloudDistance from '../utils/changeCloudDistance.tsx';
import { HourlyWeatherInfoProps } from '../types/componentTypes.ts';

const HourlyWeatherInfo: React.FC<HourlyWeatherInfoProps> = ({ extraHourlyInfo, units }) => {
    const data = extraHourlyInfo;
    const cloudDistanceObject = changeCloudDistance(units.cloudDistance);

    return (
        <section id="hourly-forecast-info-section" className='forecast-info-section'>
            <section className="forecast-info-inner-section">
                <h4>General</h4>

                <dl>
                    <div>
                        <dt>Temperature:</dt>
                        <dd>{convertFromCelsius(data.temperature, units)}</dd>
                    </div>
                    
                    <div>
                        <dt>Feels like:</dt>
                        <dd>{convertFromCelsius(data.app_temp, units)}</dd>        
                    </div>

                    <div>
                        <dt>UV index:</dt>
                        <dd>{data.uv_index}</dd> 
                    </div>

                    <div>
                        <dt>Visbility:</dt>
                        <dd>{convertFromLongMetric(data.visibility, units)}</dd>
                    </div>
                </dl>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Precipitation</h4>
                
                <dl>
                    <div>
                        <dt>Probability:</dt>
                        <dd>{data.pop}%</dd>
                    </div>

                    <div>
                        <dt>Total rain:</dt>
                        <dd>{convertFromShortMetric(data.total_rain, units)}</dd>
                    </div>

                    <div>
                        <dt>Total snowfall:</dt>
                        <dd>{convertFromShortMetric(data.total_snowfall, units)}</dd>
                    </div>

                    <div>
                        <dt>Snow depth:</dt>
                        <dd>{convertFromShortMetric(data.snow_depth, units)}</dd>
                    </div>
                </dl>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Cloud coverage</h4>

                <dl>
                    <div>
                        <dt>Total:</dt>
                        <dd>{data.clouds}%</dd>
                    </div>

                    <div>
                        <dt>{cloudDistanceObject?.low} altitude:</dt>
                        <dd>{data.clouds_low}%</dd>
                    </div>

                    <div>
                        <dt>{cloudDistanceObject?.mid} altitude:</dt>
                        <dd>{data.clouds_mid}%</dd>    
                    </div>

                    <div>
                        <dt>{cloudDistanceObject?.high} altitude:</dt>
                        <dd>{data.clouds_high}%</dd>    
                    </div>
                </dl>
            </section>
            
            <section className="forecast-info-inner-section">
                <h4>Air</h4>

                <dl>
                    <div>
                        <dt>Humidity:</dt>
                        <dd>{data.relative_humidity}%</dd>
                    </div>

                    <div>
                        <dt>Dew point:</dt>
                        <dd>{convertFromCelsius(data.dew_point, units)}</dd>
                    </div>

                    <div>
                        <dt>Pressure:</dt> 
                        <dd>{convertFromMillibar(data.surface_pressure, units)}</dd>
                    </div>

                    <div>
                        <dt>Sea-level pressure:</dt>
                        <dd>{convertFromMillibar(data.msl_pressure, units)}</dd>    
                    </div>
                </dl>
            </section>
        </section>
    )
}

export default HourlyWeatherInfo