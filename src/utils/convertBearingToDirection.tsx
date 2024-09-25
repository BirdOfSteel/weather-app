export default function convertBearingToDirection(bearing) {
    const cardinalDirectionsArray = ['N', 'E', 'S', 'W', 'N']
    let direction: string = '';
    
    const cardinalDirection = cardinalDirectionsArray[Math.trunc(bearing / 90)];
    console.log(cardinalDirection)

    return direction 
}