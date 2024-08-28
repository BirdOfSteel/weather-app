import React from 'react';

export default function HourlyTemperatures({ weatherObject }) {
    
    console.log(weatherObject)

    function mapHourlyTemperatures() {
        if (weatherObject.weatherData) { 
            const hourlyForecastArray = weatherObject.weatherData.hourlyForecastArray;

            type forecastObjectType = {
                timestamp_utc: string;
                temp: number;
                weather: {
                    icon: string;
                };
            }

            // research type for forecastObject 
            const hourlyForecastMapped = hourlyForecastArray.map((forecastObject: forecastObjectType, index: number) => {
                let timestamp = forecastObject.timestamp_utc.substring(11,16);
                const iconURL = `https://www.weatherbit.io/static/img/icons/${forecastObject.weather.icon}.png`
                console.log(iconURL)
                return (
                    <div className="hourly-temperature-div">
                        <p>{Math.round(forecastObject.temp)}°C</p>
                        <img className="hourly-weather-icon" src={iconURL}/>
                        <p>{timestamp}</p>
                    </div>
                )
            })
            console.log(hourlyForecastMapped)
            return hourlyForecastMapped
        }
    }

    return (
        <div id="forecast-temperatures-div">
            <div id="hourly-forecast-div">
                {mapHourlyTemperatures()}
            </div>
        </div>
    )
}