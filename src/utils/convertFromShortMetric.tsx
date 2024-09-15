export default function convertFromShortMetric(metricValue, units) {
    const scale = units.shortDistance;

    if (scale === 'mm') {
        return Math.round(metricValue * 10) / 10 + ' mm';
        
    } else if (scale === 'inches') {
        const inch = metricValue / 25.4;
        return Math.round(inch * 100) / 100 + '"';
    }
}