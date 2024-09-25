export default function openMeteoIconConverter(meteoIconCode, isDay = true) {
    console.log(meteoIconCode)
    let newIconCode: string = '';

    switch (meteoIconCode) {
        case 0: // clear
            newIconCode = 
                isDay ?
                '01d' : 
                '01n';
            break;
        case 1: // mainly clear
            newIconCode =
                isDay ?
                '02d' :
                '02n';
            break; 
        case 2: // partly cloudy
            newIconCode = '03d';
            break;
        case 3: // overcast
            newIconCode = '04d';
            break;
        case 45: // fog
        case 48: // deposting rime fog
            newIconCode = '50d';
            break;
        case 51: // light drizzle
        case 53: // moderate drizzle
            newIconCode = '10d';
            break;
        case 55: // dense drizzle
        case 56: // freezing light drizzle
        case 57: // freezing dense drizzle
            newIconCode = '13d';
            break;
        case 61: // light rain
            newIconCode =  
                isDay ?
                '10d' :
                '10n';
            break;
        case 63: // moderate rain
        case 65: // heavy rain
            newIconCode = '09d';
            break;
        case 66: // freezing light rain
        case 67: // freezing heavy rain
            newIconCode = '13d';
            break;
            
    }

    return newIconCode;
}