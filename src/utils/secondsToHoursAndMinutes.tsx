export default function secondsToHoursAndMinutes(seconds: number) {
    const secondsAsHours = seconds / 3600;
    const hours = Math.trunc(secondsAsHours);
    const minuteDecimal = secondsAsHours - hours;
    const minutes = Math.round(minuteDecimal * 60);

    return `${hours}h ${minutes}m`;
}