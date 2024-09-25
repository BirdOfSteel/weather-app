export default function convertBearingToDirection(bearing) {
    const cardinalDirectionsArray = [
        'N',
        'N/NE', 
        'NE', 
        'E/NE',
        'E',
        'E/SE', 
        'SE', 
        'S/SE',
        'S', 
        'S/SW',
        'SW', 
        'W/SW',
        'W', 
        'W/NW',
        'NW',
        'N/NW',
    ];

    let direction = cardinalDirectionsArray[Math.trunc(bearing / 22.5)];

    if (bearing === 360) {
        direction = 'N';
    }

    return direction;
}