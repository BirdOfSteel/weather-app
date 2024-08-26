import React from 'react';


export default function useGetCoordinates() {
    const [positionData, setPositionData] = React.useState<positionObjectType | null>(null)

    type positionObjectType = {
        latitude: number;
        longitude: number;
    }

    React.useEffect(() => {

        if (navigator.geolocation) {
            function geolocationSuccessCallback(position: GeolocationPosition) {
                const positionObject = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                
                setPositionData(positionObject);
            }
            
            function geolocationErrorCallback(error: GeolocationPositionError) {
                console.error(`Error: (${error.code}) ${error.message}`);
            }
        
            // checks device co-ordinates
            navigator.geolocation.getCurrentPosition(geolocationSuccessCallback, geolocationErrorCallback)
        } else {
            console.error("Geolocation is not supported by this browser.")
        }
    },[])


    return { positionData };
}

