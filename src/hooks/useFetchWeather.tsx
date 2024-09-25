import React from 'react';

import { weatherDataObject, positionObject } from '../types/weatherTypes.ts'

import convertBearingToDirection from '../utils/convertBearingToDirection.tsx';
import parseDate from '../utils/parseDate.tsx';

import presentWeatherDataTest from '../presentWeatherDataTest.js';
import forecastWeatherDataTest from '../forecastWeatherDataTest.js';

const APIKEY = '3408dd4727846c89ae71a899bfd3ac35'; // Ideally this would be hidden behind a private backend server.

export default function useFetchCurrentWeather(userPosition: positionObject | null) {
    const [weatherData, setWeatherData] = React.useState<weatherDataObject | null>(null);
    // NOTE: research appropriate type for weatherData 
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (!userPosition) {
            return;
        }   

        const { latitude, longitude } = userPosition; 

        async function fetchWeather() {
            setIsLoading(true); // reset loading state
            setError(null); // reset error state

            try {
                // const presentWeatherURL = `${PRESENT_WEATHER_URL}location=${latitude},${longitude}`;
                // console.log(presentWeatherURL)
                // const forecastWeatherURL = `${FORECAST_WEATHER_URL}location=${latitude},${longitude}`;
                // console.log(forecastWeatherURL)
                // const presentWeatherResponse = await fetch(presentWeatherURL);
                // const forecastWeatherResponse = await fetch(forecastWeatherURL);
                // const presentWeatherData = await presentWeatherResponse.json();
                // const forecastWeatherData = await forecastWeatherResponse.json();
                const PRESENT_WEATHER_URL = 
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKEY}`;
                
                const forecastDays = 14;
                
                const FORECAST_WEATHER_URL = 
                    `https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,rain,snowfall,snow_depth,pressure_msl,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index&wind_speed_unit=ms&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&forecast_days=${forecastDays}&timezone=Europe%2FLondon`;

                const presentWeatherResponse = await fetch(PRESENT_WEATHER_URL);
                const forecastWeatherResponse = await fetch(FORECAST_WEATHER_URL);
                const presentWeatherData = await presentWeatherResponse.json();
                const forecastWeatherData = await forecastWeatherResponse.json();
                console.log(presentWeatherData)
                console.log(FORECAST_WEATHER_URL)
                console.log(forecastWeatherData)
                console.log(forecastWeatherData.hourly.temperature_2m)
                console.log(forecastWeatherData.hourly.apparent_temperature[0])


                console.log(convertBearingToDirection(360));

                // implement response code check here?
              
                // if (presentWeatherData.error) {
                //     throw new Error("ERROR!")
                // }

                //forecastWeatherDataTest.timelines.hourly[0].values.temperatureApparent

                console.log(forecastWeatherDataTest.timelines.daily[0].values.temperatureMin)
               
                let hourlyForecastArray = [];
                let dailyForecastArray = [];

                for (let i = 0; i != forecastDays * 24; i++) {
                    const hourlyForecastObject = {
                        temperature: forecastWeatherData.hourly.temperature_2m[i],
                        app_temp: forecastWeatherData.hourly.apparent_temperature[i],
                        uv_index: Math.round((forecastWeatherData.hourly.uv_index[i] * 10) / 10),
                        visibility: forecastWeatherData.hourly.visibility[i] / 1000,
                        pop: forecastWeatherData.hourly.precipitation_probability[i],
                        total_rain: forecastWeatherData.hourly.rain[i],
                        total_snowfall: forecastWeatherData.hourly.snowfall[i],
                        snow_depth: forecastWeatherData.hourly.snow_depth[i],
                        clouds: forecastWeatherData.hourly.cloud_cover[i],
                        clouds_low: forecastWeatherData.hourly.cloud_cover_low[i],
                        clouds_mid: forecastWeatherData.hourly.cloud_cover_mid[i],
                        clouds_high: forecastWeatherData.hourly.cloud_cover_high[i],
                        relative_humidity: forecastWeatherData.hourly.relative_humidity_2m[i],
                        dew_point: forecastWeatherData.hourly.dew_point_2m[i],
                        surface_pressure: forecastWeatherData.hourly.surface_pressure[i],
                        msl_pressure: forecastWeatherData.hourly.pressure_msl[i],
                        timestamp: parseDate(forecastWeatherData.hourly.time[i], 'hourly'),
                        icon: presentWeatherData.weather[0].id
                    };

                    hourlyForecastArray.push(hourlyForecastObject);
                }

                for (let i = 0; i != forecastDays-1; i++) {
                    const dailyForecastObject = {
                        min_temp: forecastWeatherData.daily.temperature_2m_min[i],
                        max_temp: forecastWeatherData.daily.temperature_2m_max[i],
                        app_min_temp: forecastWeatherData.daily.apparent_temperature_min[i],
                        app_max_temp: forecastWeatherData.daily.apparent_temperature_max[i],
                        pop: forecastWeatherData.daily.precipitation_probability_max[i],
                        total_precipitation: forecastWeatherData.daily.precipitation_sum[i],
                        wind_speed: forecastWeatherData.daily.wind_speed_10m_max[i],
                        gust_speed: forecastWeatherData.daily.wind_gusts_10m_max[i],
                        sunrise: parseDate(forecastWeatherData.daily.sunrise[i], 'hourly'),
                        sunset: parseDate(forecastWeatherData.daily.sunset[i], 'hourly'),
                        daylight_duration: forecastWeatherData.daily.daylight_duration[i],
                        uv_index: Math.round(forecastWeatherData.daily.uv_index_max[i] * 10) / 10,
                        timestamp: parseDate(forecastWeatherData.daily.time[i], 'daily')
                    }

                    dailyForecastArray.push(dailyForecastObject);
                }

                console.log(hourlyForecastArray)

                const weatherObject = {
                    location: presentWeatherData.name,
                    current_temp: presentWeatherData.main.temp,
                    feels_like: presentWeatherData.main.feels_like,
                    min_temp: presentWeatherData.main.temp_min,
                    max_temp: presentWeatherData.main.temp_max,
                    description: presentWeatherData.weather[0].description,
                    icon: presentWeatherData.weather[0].id,
                    wind_speed: presentWeatherData.wind.speed,
                    wind_direction_degrees: presentWeatherData.wind.deg,
                    wind_direction_full: convertBearingToDirection(presentWeatherData.wind.deg),
                    gust_speed: forecastWeatherData.hourly.wind_gusts_10m[0],
                    cloud_coverage: forecastWeatherData.hourly.cloud_cover[0],
                    relative_humidity: forecastWeatherData.hourly.relative_humidity_2m[0],
                    daily_forecast_array: dailyForecastArray,
                    hourly_forecast_array: hourlyForecastArray
                }

                setWeatherData(weatherObject);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchWeather()
    },[userPosition])
    console.log("TEST:")
    return {weatherData, isLoading, error};
}
