export default function convertFromLongMetric(metricValue, units) {
    const scale = units.longDistance;

    if (scale === 'km') {
        return Math.round(metricValue * 10) / 10 + scale;
        
    } else if (scale === 'metres') {
        return (metricValue * 1000) + 'm';

    } else if (scale === 'miles') {
        const miles = metricValue * 0.621371
        return Math.round(miles * 10) / 10 + 'mi';
    }
}