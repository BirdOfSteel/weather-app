import React from 'react';

import { positionObject } from '../types/positionData.ts';

export default function useGetCoordinates() {
    const [positionData, setPositionData] = React.useState<positionObject | null>(null)

    React.useEffect(() => { // this useEffect gets approximate device co-ordinates through JavaScript's Geolocation API. Runs on first render.
        if (navigator.geolocation) {
            function geolocationSuccessCallback(position: GeolocationPosition) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                if (latitude && longitude) {
                    const positionObject = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }

                    setPositionData(positionObject);
                }
            }
            
            function geolocationErrorCallback(error: GeolocationPositionError) {
                console.error(`Error: (${error.code}) ${error.message}`);
            }
        
            // checks device co-ordinates
            navigator.geolocation.getCurrentPosition(geolocationSuccessCallback, geolocationErrorCallback)
        } else {
            console.error("Geolocation is not supported by this browser or was denied access.");
        }
    },[])


    return { positionData };
}

