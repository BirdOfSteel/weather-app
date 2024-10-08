import { unitsObject } from "../types/customDataObjects";

export default function convertFromShortMetric(metricValue: number, units: unitsObject) {
    const scale = units.shortDistance;

    if (scale === 'mm') {
        return Math.round(metricValue * 10) / 10 + ' mm';
        
    } else if (scale === 'in') {
        const inch = metricValue / 25.4;
        return Math.round(inch * 100) / 100 + '"';
    }
}