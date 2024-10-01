// custom error object
export type CustomOpenWeatherError = {
    api: string;
    error: number;
    description: string;
}


// openweather success object
export interface OpenWeatherData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
}

// openweather error response
type OpenWeatherError = {
    cod: number;
    message: string;
}

export type OpenWeatherResponse = OpenWeatherData | OpenWeatherError