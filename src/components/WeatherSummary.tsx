import cloudyIcon from '../assets/cloudy-icon.png';
import humidityIcon from '../assets/humidity-icon.png';
import gustIcon from '../assets/gust-icon.png';
import windIcon from '../assets/wind-icon.png';
import compassIcon from '../assets/compass-icon.png';
import convertFromCelsius from '../utils/convertFromCelsius.tsx';
import convertFromMetresPerSecond from '../utils/convertFromMetresPerSecond.tsx';
import { WeatherSummaryProps } from '../types/componentTypes.ts';

const WeatherSummary: React.FC<WeatherSummaryProps> = ({ weatherObject, units }) => { 
    if (weatherObject.weatherData) {
        const weatherData = weatherObject.weatherData;

        const location = weatherData.location;
        const currentTemperature = convertFromCelsius(weatherData.current_temp, units);
        const weatherIconURL = ` https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`
        const weatherDescription = weatherData.description;
        const feelsLikeTemp = convertFromCelsius(weatherData.feels_like, units);
        const minTemp = convertFromCelsius(weatherData.min_temp, units);
        const maxTemp = convertFromCelsius(weatherData.max_temp, units);
        
        return (
            <section id="weather-summary-section">
                
                {/* left weather container */}
                <div id="current-weather-div">
                    <div id="weather-summary-row-one">
                        <h2>{location}</h2>
                    </div>

                    <div id="weather-summary-row-two">
                        <h2 id='current-temperature'>{currentTemperature}</h2>
                        <img id="weather-icon" src={weatherIconURL}/>
                    </div>

                    <div id="weather-summary-row-three">
                        <p id="weather-description-text">{weatherDescription}</p>
                    </div>
                    
                    <div id="weather-summary-row-four">
                        <h2 id="temp-feel-heading">Feels like {feelsLikeTemp}</h2>
                        <h2 id="min-max-temp-heading">Max: {maxTemp} | Min: {minTemp}</h2>
                    </div>
                </div>


                {/* right weather container */}
                <div id="additional-weather-info-div">
                    <h2 
                        id="wind-speed-heading" 
                        className="additional-weather-info-element">
                            Wind speed
                    </h2>
                    <p 
                        id="wind-speed" 
                        className="additional-weather-info-element">
                            <img 
                                id="wind-speed-icon" 
                                src={windIcon}/>
                                    {convertFromMetresPerSecond(weatherData.wind_speed, units)}
                    </p>

                    <h2 
                        id="gust-speed-heading" 
                        className="additional-weather-info-element">
                            Gust speed
                    </h2>
                    <p 
                        id="gust-speed" 
                        className="additional-weather-info-element">
                            <img 
                                id="gust-speed-icon" 
                                src={gustIcon} 
                            />
                                {convertFromMetresPerSecond(weatherData.gust_speed, units)}
                    </p>

                    <h2 
                        id="wind-direction-heading" 
                        className="additional-weather-info-element">
                            Wind direction
                    </h2>
                    <h2 
                        id="wind-direction" 
                        className="additional-weather-info-element">
                            <img 
                                id="wind-direction-icon" 
                                src={compassIcon}/>
                            {weatherData.wind_direction_degrees}°
                            ({weatherData.wind_direction_full})
                    </h2>
                    
                    <div id="additional-weather-div-row-one">
                        <h2 
                            id="cloud-coverage-heading" 
                            className="additional-weather-info-element">
                                Cloud coverage
                        </h2>
                        <p 
                            id="cloud-coverage" 
                            className="additional-weather-info-element">
                                <img 
                                    id="cloud-coverage-icon" 
                                    src={cloudyIcon}/>
                                        {weatherData.cloud_coverage}%
                        </p>

                        <h2 
                            title='relative-humidity-definition' 
                            id="relative-humidity-heading" 
                            className="additional-weather-info-element">
                                Relative humidity
                        </h2>
                        <p 
                            id="relative-humidity" 
                            className="additional-weather-info-element">
                                <img 
                                    id="relative-humidity-icon" 
                                    src={humidityIcon}/>
                                    {weatherData.relative_humidity}%
                        </p>
                    </div>
                </div>

            </section>
        )
    }
    
}

export default WeatherSummary