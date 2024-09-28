export default function convertCloudDistance(valueInKm, units) {
    const scale = units.cloudDistance;

    if (scale === 'km') {
        return Math.round(valueInKm * 10) / 10 + scale;
        
    } else if (scale === 'm') {
        return (valueInKm * 1000) + 'm';

    } else if (scale === 'ft') {
        const ft = valueInKm * 3280.84;
        return Math.round(ft * 10) / 10 + 'ft';
    }
}