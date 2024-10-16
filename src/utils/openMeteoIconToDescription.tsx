export default function openMeteoIconToDescription(meteoIconCode: number) {
    let description: string = '';

    switch (meteoIconCode) {
        case 0: // clear
            description = 'clear';
            break;
        case 1: // mainly clear
            description = 'mainly clear';
            break;
        case 2: // partly cloudy
            description = 'partly cloudy';
            break;
        case 3: // overcast
            description = 'overcast';
            break;
        case 45: // fog
            description = 'fog';
            break;
        case 48: // deposting rime fog
            description = 'depositing rime fog';
            break;
        case 51: // light drizzle
            description = 'light drizzle';
            break;
        case 53: // moderate drizzle
            description = 'moderate drizzle';
            break;
        case 55: // dense drizzle
            description = 'dense drizzle';
            break;
        case 56: // freezing light drizzle
            description = 'freezing light drizzle';
            break;
        case 57: // freezing dense drizzle
            description = 'freezing dense drizzle';
            break;
        case 61: // light rain
            description = 'light rain';
            break;
        case 63: // moderate rain
            description = 'moderate rain';
            break;
        case 65: // heavy rain
            description = 'heavy rain';
            break;
        case 66: // freezing light rain
            description = 'freezing light rain';
            break;
        case 67: // freezing heavy rain
            description = 'freezing heavy rain';
            break;
        case 71: // light snowfall
            description = 'light snowfall';
            break;
        case 73: // moderate snowfall
            description = 'moderate snowfall';
            break;
        case 75: // heavy snowfall
            description = 'heavy snowfall';
            break;
        case 77: // snow grains
            description = 'snow grains';
            break;
        case 80: // light rain shower
            description = 'light rain shower';
            break;
        case 81: // moderate rain shower
            description = 'moderate rain shower';
            break;
        case 82: // violent rain shower
            description = 'violent rain shower';
            break;
        case 85: // light snow shower
            description = 'light snow shower';
            break;
        case 86: // heavy snow shower
            description = 'heavy snow shower';
            break;
        case 95: // light to moderate thunderstorm
            description = 'light to moderate thunderstorm';
            break;
        case 96: // thunderstorm with light hail
            description = 'thunderstorm with light hail';
            break;
        case 99: // thunderstorm with heavy hail
            description = 'thunderstorm with heavy hail';
            break;
    }

    return description;
}