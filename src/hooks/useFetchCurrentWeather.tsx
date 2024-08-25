import React from 'react';

const APIKEY = '3408dd4727846c89ae71a899bfd3ac35'; // Ideally this would be hidden behind a private backend server.
const BASEURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';
    // !! units=metric is currently hardcoded into BASEURL.
    // make this toggleable later.

type OpenWeatherResponse = {
    coord: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    base: string;
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
    visibility: number;
    wind: { speed: number; deg: number; gust?: number };
    rain?: { "1h"?: number };
    clouds: { all: number };
    dt: number;
    sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
    timezone: number;
    id: number;
    name: string;
    cod: number;
};

type OpenWeatherErrorResponse = {
    cod: number;
    message: string;
};

export default function useTodayWeather() {
    const [latitude, setLatitude] = React.useState<number | null>(null);
    const [longitude, setLongitude] = React.useState<number | null>(null);

    const [weatherData, setWeatherData] = React.useState<OpenWeatherResponse | OpenWeatherErrorResponse | null>(null);
    // NOTE: research appropriate type for weatherData 
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // This useEffect handles getting the user's co-ordinates on mount.
    React.useEffect(() => {
        if (navigator.geolocation) {
            function geolocationSuccessCallback(position: GeolocationPosition) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }
            
            function geolocationErrorCallback(error: GeolocationPositionError) {
                console.error(`Error: (${error.code}) ${error.message}`);
            }

            // checks device co-ordinates
            navigator.geolocation.getCurrentPosition(geolocationSuccessCallback, geolocationErrorCallback)
        } else {
            console.error("Geolocation is not supported by this browser.")
        }
    },[]) // Empty array means this only runs on mount. Add a dependency later to make it run if the person searches weather for a different location, for example.

    React.useEffect(() => {
        if (latitude != null && longitude != null) {
            async function fetchWeather() {
                setLoading(true); // reset loading state
                setError(null); // reset error state

                try {
                    const APIURL = `${BASEURL}lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
                    const res = await fetch(APIURL);
                    const data = await res.json();

                    // implement data.cod check here

                    setWeatherData(data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            }

            fetchWeather()
        }
    },[latitude, longitude])


    return {weatherData, loading, error};
}



