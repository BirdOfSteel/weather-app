// custom weather object for each hour
export interface CustomHourlyWeatherData {
    temperature: number;            // Current temperature in degrees Celsius
    app_temp: number;               // Apparent temperature (feels-like) in degrees Celsius
    uv_index: number;               // UV index (rounded to one decimal place)
    visibility: number;             // Visibility in kilometers
    pop: number;                    // Probability of precipitation (0-100)
    total_rain: number;             // Total rainfall amount in mm
    total_snowfall: number;         // Total snowfall amount in mm
    snow_depth: number;             // Snow depth in mm
    clouds: number;                 // Total cloud cover (0-100)
    clouds_low: number;             // Low-level cloud cover (0-100)
    clouds_mid: number;             // Mid-level cloud cover (0-100)
    clouds_high: number;            // High-level cloud cover (0-100)
    relative_humidity: number;      // Relative humidity percentage (0-100)
    dew_point: number;              // Dew point temperature in degrees Celsius
    surface_pressure: number;       // Surface pressure in hPa
    msl_pressure: number;           // Mean sea level pressure in hPa
    date: string;                   // Date in "DD/MM" format
    timestamp: string;              // Time in "HH:mm" format
    icon: string;                   // Weather icon code (e.g., "04d")
}

// custom weather object for each day
export interface CustomDailyWeatherData {
    app_max_temp: number;          // Apparent maximum temperature
    app_min_temp: number;          // Apparent minimum temperature
    daylight_duration: number;     // Daylight duration in seconds
    gust_speed: number;            // Wind gust speed
    icon: string;                  // Weather icon code
    max_temp: number;              // Maximum temperature
    min_temp: number;              // Minimum temperature
    pop: number;                   // Probability of precipitation
    sunrise: string;               // Sunrise time in "HH:mm" format
    sunset: string;                // Sunset time in "HH:mm" format
    timestamp: string;             // Date in "DD/MM" format
    total_precipitation: number;   // Total precipitation amount
    uv_index: number;              // UV index value
    wind_speed: number;            // Wind speed
}

export interface CustomWeatherObject {
    cloud_coverage: number;          // Cloud coverage percentage
    current_temp: number;             // Current temperature
    daily_forecast_array: CustomDailyWeatherData[]; // Array of daily forecasts
    description: string;               // Weather description
    feels_like: number;                // Feels like temperature
    gust_speed: number;                // Wind gust speed
    hourly_forecast_array: CustomHourlyWeatherData[]; // Array of hourly forecasts
    icon: string;                      // Weather icon code
    location: string;                  // Location name
    max_temp: number;                  // Maximum temperature
    min_temp: number;                  // Minimum temperature
    relative_humidity: number;         // Relative humidity percentage
    wind_direction_degrees: number;    // Wind direction in degrees
    wind_direction_full: string;        // Full wind direction (e.g., NW)
    wind_speed: number;                 // Wind speed
}