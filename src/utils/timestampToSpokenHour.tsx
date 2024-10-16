// this function converts a 24 hour time into 12 hour AM/PM times
export default function timestampToSpokenHour(timestamp: string) {
    const hour = timestamp.substring(0,1) === '0' ? parseInt(timestamp.substring(1,2)) : parseInt(timestamp.substring(0,2));

    if (hour === 0) {

        return `12 AM`
    } else if (hour >= 1 && hour <= 11) {

        return `${hour} AM`
    } else if (hour === 12 ) {

        return `12 PM`
    } else if (hour >= 13 && hour <= 23) {

        return `${hour-12} PM`
    }

}