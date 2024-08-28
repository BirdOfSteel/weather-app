export type weatherDataState = {
    weatherData: weatherDataObject | null;
    isLoading: boolean;
    error: object | null;
}

export type hourlyForecastArrayObject = {
    temp: number;
    timestamp_utc: string;
    weather: {
        icon: string;
    }
}


export type weatherDataObject = {
    current_temp: number;
    description: string;
    feels_like: number;
    icon: string;
    location: string;
    max_temp: number;
    min_temp: number;
    sunrise: string;
    sunset: string;
    hourlyForecastArray: hourlyForecastArrayObject[]
}

export type forecastObjectType = {
    timestamp_utc: string;
    temp: number;
    weather: {
        icon: string;
    };
}