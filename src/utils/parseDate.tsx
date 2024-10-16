// returns specified date info
export default function parseDate(date: string, interval: string) {
    if (interval === 'hourly') {
        const hour = date.substring(11);
        return hour
    }
    
    if (interval === 'daily') {
        const day = date.substring(8,10);
        const month = date.substring(5,7);
        return `${day}/${month}`
    }
    
    return 'ERROR'
}