export type positionObject = {
    latitude: number;
    longitude: number;
}

export type weatherObjectType = {
    weatherData: weatherDataObject | null;
    isLoading: boolean;
    error: object | null;
}

export type dailyForecastObjectType = {
    temp: number;
    date: string;
    pop: number;
    icon: string;
    index: number;
}

export type hourlyForecastObjectType = {
    temp: number;
    hour: string;
    pop: number;
    icon: string;
    index: number;
}

export type weatherDataObject = {
    current_temp: number;
    description: string;
    feels_like: number;
    icon: string;
    location: string;
    max_temp: number;
    min_temp: number;
    wind_speed: number;
    wind_direction_short: string;
    wind_direction_full: string;
    gust_speed: number;
    cloud_coverage: number;
    relative_humidity: number;
    sunrise: string;
    sunset: string;
    dailyForecastArray: dailyForecastObjectType[];
    hourlyForecastArray: hourlyForecastObjectType[];
}

