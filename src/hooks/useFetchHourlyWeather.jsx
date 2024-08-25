import React from 'react';

export default function useFetchHourlyWeather() {
    const [weatherData, setWeatherData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (weatherData != null) {
            // runs when weatherData is equal to something
        }
    },[weatherData])

    return { weatherData, loading, error};
}