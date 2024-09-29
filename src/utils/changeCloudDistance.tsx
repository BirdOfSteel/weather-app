export default function convertCloudDistance(unit: string) {
    if (unit === 'km') {
        return {
            low: '0-3 km',
            mid: '3-8 km',
            high: '8+ km'
        }
    } 

    else if (unit === 'ft') {
        return {
            low: '0-10,000 ft',
            mid: '10,000-26,000 ft',
            high: '26,000 ft+'
        }
    } 
    
    else if (unit === 'm') {
        return {
            low: '0-3,000 m',
            mid: '3-8,000 m',
            high: '8,000+ m'
        };
    }
}