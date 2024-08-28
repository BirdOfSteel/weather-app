import React from 'react';

const APIKEY = '3408dd4727846c89ae71a899bfd3ac35'; // Ideally this would be hidden behind a private backend server.
const BASEURL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?units=metric&';

type positionObjectType = {
    latitude: number;
    longitude: number;
}

// THIS FILE IS UNDER CONSIDERATION FOR DELETION.

// OKAY SO, I don't have pro so we'll need to find a new API to handle the hourly data.

export default function useFetchHourlyWeather(userPosition: positionObjectType | null) {
    const [weatherData, setWeatherData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (userPosition) {
            const { latitude, longitude } = userPosition;

            async function fetchHourlyWeather() {
                setIsLoading(true); // reset loading state
                setError(null); // reset error state

                try {
                    const res = await fetch(`${BASEURL}lat=${latitude}&lon=${longitude}&appid=${APIKEY}`)
                    const data = await res.json();
                    setWeatherData(data)
                } catch (err) {
                    setError(err);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchHourlyWeather();
        }
    },[userPosition])

    return { weatherData, isLoading, error};
}