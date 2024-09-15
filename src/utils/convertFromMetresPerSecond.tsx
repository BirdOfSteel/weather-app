export default function convertFromMetresPerSecond(metresPerSecond, units) {
    const scale = units.windSpeed;

    if (scale === 'm/s') {
        return metresPerSecond + ' m/s';
    } else if (scale === 'km/h') {
        const kilometresPerHour = metresPerSecond * 3.6
        return Math.round(kilometresPerHour) + ' km/h'
    } else if (scale === 'mph') {
        const milesPerHour = metresPerSecond * 2.236936;
        return Math.round(milesPerHour) + ' mph';
    } else if (scale === 'knots') {
        const knots = metresPerSecond * 1.94384;
        return Math.round(knots * 10) / 10 + ' knots';
    }
}