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
                <h5>Temperature:
                    <span>
                        {convertFromCelsius(data.temperature, units)}
                    </span>
                </h5>
                <h5>Feels like:
                    <span>
                        {convertFromCelsius(data.app_temp, units)}
                    </span>
                </h5>
                <h5>UV index:
                    <span>
                        {data.uv_index}
                    </span>
                </h5>
                <h5>Visbility:
                    <span>
                        {convertFromLongMetric(data.visibility, units)}
                    </span>
                </h5>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Precipitation</h4>
                <h5>Probability:
                    <span>
                        {data.pop}%
                    </span>
                </h5>
                <h5>Total rain:
                    <span>
                        {convertFromShortMetric(data.total_rain, units)}
                    </span>
                </h5>
                <h5>Total snowfall:
                    <span>
                        {convertFromShortMetric(data.total_snowfall, units)}
                    </span>
                </h5>
                <h5>Snow depth:
                    <span>
                        {convertFromShortMetric(data.snow_depth, units)}
                    </span>
                </h5>
            </section>

            <section className="forecast-info-inner-section">
                <h4>Cloud coverage</h4>
                <h5>Total:
                    <span>
                     {data.clouds}%
                    </span>
                </h5>
                <h5>{cloudDistanceObject?.low} altitude:
                    <span>
                     {data.clouds_low}%
                    </span>
                </h5>
                <h5>{cloudDistanceObject?.mid} altitude:
                    <span>
                        {data.clouds_mid}%
                    </span>
                </h5>
                <h5>{cloudDistanceObject?.high} altitude:
                    <span>
                        {data.clouds_high}%
                    </span>
                </h5>
            </section>
            <section className="forecast-info-inner-section">
                <h4>Air</h4>
                <h5>Humidity: &nbsp;
                    <span>
                        {data.relative_humidity}%
                    </span>
                </h5>
                <h5>Dew point: &nbsp;
                    <span>
                        {convertFromCelsius(data.dew_point, units)}
                    </span>
                </h5>
                <h5>Pressure: &nbsp;
                     <span>
                        {convertFromMillibar(data.surface_pressure, units)}
                    </span>
                </h5>
                <h5>Sea-level pressure: &nbsp;
                    <span>
                        {convertFromMillibar(data.msl_pressure, units)}
                    </span>
                </h5>
            </section>
        </section>
    )
}

export default HourlyWeatherInfo