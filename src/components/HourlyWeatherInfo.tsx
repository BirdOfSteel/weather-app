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
        <div id="hourly-forecast-info-div" className='forecast-info-div'>
            <div className="forecast-info-inner-div">
                <h1>General</h1>
                <p>Temperature:
                    <span>
                        {convertFromCelsius(data.temperature, units)}
                    </span>
                </p>
                <p>Feels like:
                    <span>
                        {convertFromCelsius(data.app_temp, units)}
                    </span>
                </p>
                <p>UV index:
                    <span>
                        {data.uv_index}
                    </span>
                </p>
                <p>Visbility:
                    <span>
                        {convertFromLongMetric(data.visibility, units)}
                    </span>
                </p>
            </div>

            <div className="forecast-info-inner-div">
                <h1>Precipitation</h1>
                <p>Probability:
                    <span>
                        {data.pop}%
                    </span>
                </p>
                <p>Total rain:
                    <span>
                        {convertFromShortMetric(data.total_rain, units)}
                    </span>
                </p>
                <p>Total snowfall:
                    <span>
                        {convertFromShortMetric(data.total_snowfall, units)}
                    </span>
                </p>
                <p>Snow depth:
                    <span>
                        {convertFromShortMetric(data.snow_depth, units)}
                    </span>
                </p>
            </div>

            <div className="forecast-info-inner-div">
                <h1>Cloud coverage</h1>
                <p>Total:
                    <span>
                     {data.clouds}%
                    </span>
                </p>
                <p>{cloudDistanceObject?.low} altitude:
                    <span>
                     {data.clouds_low}%
                    </span>
                </p>
                <p>{cloudDistanceObject?.mid} altitude:
                    <span>
                        {data.clouds_mid}%
                    </span>
                </p>
                <p>{cloudDistanceObject?.high} altitude:
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

export default HourlyWeatherInfo