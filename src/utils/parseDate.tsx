export default function parseDate(date: string) {
    const day = date.substring(8);
    const month = date.substring(5,7);
    
    return `${day}/${month}`
}