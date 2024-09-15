export default function convertFromMillibar(millibar, units) {
    const scale = units.pressure;

    if (scale === 'millibar') {
        return millibar.toLocaleString() + ' mb';
        
    } else if (scale === 'hectopascal') {
        return millibar.toLocaleString() + ' hPa';

    } else if (scale === 'pascal') {
        return (millibar * 100).toLocaleString() + ' Pa';

    } else if (scale === 'mmHg') {
        const mmHg = millibar * 0.75006;
        return Math.round(mmHg * 100) / 100 + ' mmHg';

    } else if (scale === 'inHg') {
        let inchesOfMercury = millibar / 33.864;
        inchesOfMercury = Math.round(inchesOfMercury * 100) / 100;

        // toFixed(2) adds zeroes to the end if there's no decimal points.
        return inchesOfMercury.toFixed(2) + ' inHg';
    }
}