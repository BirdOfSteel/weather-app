export default function convertFromMetresPerSecond(metresPerSecond, units) {
    const scale = units.velocity;
    
    if (scale === 'm/s') {
        const metresPerSecondOneDecimal = Math.round(metresPerSecond * 10) / 10;
        return metresPerSecondOneDecimal + ' m/s';
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