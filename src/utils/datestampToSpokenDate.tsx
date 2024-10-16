// converts a date from from format like '17/04' to 'April 17'
export default function datestampToSpokenDate(datestamp: string) {
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    if (datestamp.length === 5) {
        const day = datestamp[0] === '0' ? parseInt(datestamp.substring(1,2)) : parseInt(datestamp.substring(0,2));
        const month = datestamp[3] != '0' ? parseInt(datestamp.substring(4,5))-1 : monthArray[parseInt(datestamp.substring(3,5))-1]
 
        return `${month} ${day}`;
    }

}