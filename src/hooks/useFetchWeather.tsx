import React from 'react';

const APIKEY = '422be4fee4f14d83a668e941af0e8b16'; // Ideally this would be hidden behind a private backend server.
const CURRENT_WEATHER_URL = `https://api.weatherbit.io/v2.0/current?key=${APIKEY}&`;
const DAILY_WEATHER_URL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${APIKEY}&`;
    // !! make units toggleable later

type weatherObjectType = {
    location: string;
    current_temp: number;
    feels_like: number;
    sunrise: string;
    sunset: string;
}

type positionObjectType = {
    latitude: number;
    longitude: number;
}

export default function useFetchCurrentWeather(userPosition: positionObjectType | null) {
    const [weatherData, setWeatherData] = React.useState<weatherObjectType | null>(null);
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
                const currentWeatherURL = `${CURRENT_WEATHER_URL}lat=${latitude}&lon=${longitude}`;
                const dailyWeatherURL = `${DAILY_WEATHER_URL}lat=${latitude}&lon=${longitude}`;
                const currentWeatherResponse = await fetch(currentWeatherURL);
                const dailyWeatherResponse = await fetch(dailyWeatherURL);
                const currentWeatherData = await currentWeatherResponse.json();
                const dailyWeatherData = await dailyWeatherResponse.json();
                console.log(dailyWeatherData)
                // implement response code check here?

                const weatherObject = {
                    location: currentWeatherData.data[0].city_name,
                    current_temp: currentWeatherData.data[0].temp,
                    feels_like: currentWeatherData.data[0].app_temp,
                    min_temp: dailyWeatherData.data[0].min_temp,
                    max_temp: dailyWeatherData.data[0].max_temp,
                    sunrise: currentWeatherData.data[0].sunrise,
                    sunset: currentWeatherData.data[0].sunset,
                    description: currentWeatherData.data[0].weather.description,
                    icon: currentWeatherData.data[0].weather.icon
                }

                setWeatherData(weatherObject);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchWeather()
    },[userPosition])

    return {weatherData, isLoading, error};
}



