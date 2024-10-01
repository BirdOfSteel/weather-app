// daily weather data within open-meteo response
interface DailyWeatherData {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_sum: number[];
    precipitation_probability_max: number[];
    sunrise: string[];
    sunset: string[];
    daylight_duration: number[];
    uv_index_max: number[];
    weather_code: number[];
    wind_speed_10m_max: number[];
    wind_gusts_10m_max: number[];
  }
  
// daily units object within open-meteo response
interface DailyUnits {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_sum: string;
    precipitation_probability_max: string;
    sunrise: string;
    sunset: string;
    daylight_duration: string;
    uv_index_max: string;
    weather_code: string;
    wind_speed_10m_max: string;
    wind_gusts_10m_max: string;
}

// hourly weather data within open-meteo response
interface HourlyWeatherData {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    dew_point_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    rain: number[];
    snowfall: number[];
    snow_depth: number[];
    pressure_msl: number[];
    surface_pressure: number[];
    cloud_cover: number[];
    cloud_cover_low: number[];
    cloud_cover_mid: number[];
    cloud_cover_high: number[];
    visibility: number[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
    wind_gusts_10m: number[];
    uv_index: number[];
    weather_code: number[];
    is_day: number[];
}

// hourly units object within open-meteo response
interface HourlyUnits {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    dew_point_2m: string;
    apparent_temperature: string;
    precipitation_probability: string;
    rain: string;
    snowfall: string;
    snow_depth: string;
    pressure_msl: string;
    surface_pressure: string;
    cloud_cover: string;
    cloud_cover_low: string;
    cloud_cover_mid: string;
    cloud_cover_high: string;
    visibility: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
    uv_index: string;
    weather_code: string;
    is_day: string;
}

// open-meteo response if API fails
type OpenMeteoError = {
    error: true;
    reason: string;
}

// open-meteo API response on success
export interface OpenMeteoData {
    latitude: number;
    longitude: number;
    elevation: number;
    generationtime_ms: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
    daily: DailyWeatherData;
    daily_units: DailyUnits;
    hourly: HourlyWeatherData;
    hourly_units: HourlyUnits;
}

// type for custom error object
export type CustomOpenMeteoError = {
    api: string;
    error: boolean;
    description: string;
}

export type OpenMeteoResponse = OpenMeteoData | OpenMeteoError;

