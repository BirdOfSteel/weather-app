export default function convertFromCelsius(celsius, units) {
    const scale = units.temperature;

    if (scale === '°C') {
        return Math.round(celsius) + scale;
        
    } else if (scale === '°F') {
        const fahrenheit = (celsius * 9/5) + 32;
        return Math.round(fahrenheit) + scale;

    } else if (scale === '°K') {
        const kelvin = celsius + 273.15;
        return Math.round(kelvin) + scale;
    }
};