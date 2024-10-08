import React from 'react';

import convertBearingToDirection from '../utils/convertBearingToDirection.tsx';
import openMeteoIconConverter from '../utils/openMeteoIconConverter.tsx';
import parseDate from '../utils/parseDate.tsx';

import { OpenMeteoResponse, CustomOpenMeteoError } from '../types/openMeteoAPI.ts';
import { OpenWeatherResponse, CustomOpenWeatherError } from '../types/openWeatherAPI.ts';
import { CustomHourlyWeatherData, CustomDailyWeatherData, CustomWeatherObject } from '../types/customDataObjects.ts';
import { positionObject } from '../types/positionData.ts';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function useFetchCurrentWeather(userPosition: positionObject | null) {
    const [weatherData, setWeatherData] = React.useState<CustomWeatherObject | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<CustomOpenMeteoError | CustomOpenWeatherError | null>(null);
    console.log(weatherData)
    React.useEffect(() => {
        if (!userPosition) { // does not run if there is no latitude/longitude.
            return;
        }   

        const { latitude, longitude } = userPosition; 

        async function fetchWeather() {
            setIsLoading(true); // reset loading state
            setError(null); // reset error state

            try {
                const PRESENT_WEATHER_URL = 
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
                
                const forecastDays = 14; // used in open-meteo call to specify number of data points.
                
                const FORECAST_WEATHER_URL = 
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,rain,snowfall,snow_depth,pressure_msl,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index,weather_code,is_day&wind_speed_unit=ms&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,weather_code&forecast_days=${forecastDays}&timezone=Europe%2FLondon`;

                const presentWeatherResponse = await fetch(PRESENT_WEATHER_URL);
                const forecastWeatherResponse = await fetch(FORECAST_WEATHER_URL);
                const presentWeatherData: OpenWeatherResponse = await presentWeatherResponse.json();
                const forecastWeatherData: OpenMeteoResponse = await forecastWeatherResponse.json();

                // checks if open weather API call returns a bad status code.
                if ('message' in presentWeatherData) {
                    const errorObject: CustomOpenWeatherError = {
                        api: 'Unsuccessful response from OpenWeather API.',
                        error: presentWeatherData.cod,
                        description: presentWeatherData.message
                    } 
                
                    throw errorObject
                };

                // checks if open-meteo API call returns an error.
                if ('error' in forecastWeatherData) {
                    const errorObject: CustomOpenMeteoError = {
                        api: 'Unsuccessful response from Open-Meteo API.',
                        error: forecastWeatherData.error,
                        description: forecastWeatherData.reason
                    }

                    throw errorObject
                }
                
                let hourlyForecastArray: CustomHourlyWeatherData[] = []; // empty array will store custom hourly data objects
                let dailyForecastArray: CustomDailyWeatherData[] = []; // empty array will store custom daily data objects

                const currentHour = new Date().getHours();

                for (let i = 0; i !== currentHour + 25; i++) { // only iterates from the current hour, for 24 instances.
                    if (currentHour > i) { // this will prevent an object from being made if current iterant's hour has already passed.
                        continue
                    }

                    const isDay = forecastWeatherData.hourly.is_day[0] ? true : false;

                    const hourlyForecastObject: CustomHourlyWeatherData = { // structure of data object for each hour
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
                        date: parseDate(forecastWeatherData.hourly.time[i], 'daily'),
                        timestamp: parseDate(forecastWeatherData.hourly.time[i], 'hourly'),
                        icon: openMeteoIconConverter(forecastWeatherData.hourly.weather_code[i], isDay)
                    };

                    hourlyForecastArray.push(hourlyForecastObject);
                }

                for (let i = 0; i !== forecastDays-1; i++) {
                    const dailyForecastObject: CustomDailyWeatherData = { // structure of data object for each day
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
                        timestamp: parseDate(forecastWeatherData.daily.time[i], 'daily'),
                        icon: openMeteoIconConverter(forecastWeatherData.daily.weather_code[i])
                    }

                    dailyForecastArray.push(dailyForecastObject);
                }

                const weatherObject: CustomWeatherObject = { // contains all the data we use.
                    location: presentWeatherData.name,
                    current_temp: presentWeatherData.main.temp,
                    feels_like: presentWeatherData.main.feels_like,
                    min_temp: presentWeatherData.main.temp_min,
                    max_temp: presentWeatherData.main.temp_max,
                    description: presentWeatherData.weather[0].description,
                    icon: presentWeatherData.weather[0].icon,
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
            } catch (err: unknown) {
                if (isCustomErr(err)) {

                } else {
                    console.error(`Unknown error: ${err}`)
                }
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchWeather()
    },[userPosition])
    
    return {weatherData, isLoading, error};
}
