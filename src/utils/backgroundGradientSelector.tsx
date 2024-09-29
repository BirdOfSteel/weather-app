export default function backgroundGradientSelector(timestamp: string|null) {
    let gradientObject: object;

    // this is triggered at first render when backgroundGradient state uses this function
    if (timestamp === null) {  
        gradientObject = {
            A: '#386ebe', 
            B: '#4d80ce', 
            C: '#6793d7', 
            D: '#80a7df', 
            E: '#9abbe7'
        }

        return gradientObject
    }

    const hour = parseInt(timestamp.substring(0,2));
    const appDiv = document.querySelector('.App') as HTMLElement;

    switch (hour) {
        case 0:
            gradientObject = {
                A: '#001f33', // Midnight blue
                B: '#002b40', // Dark navy
                C: '#003b4d', // Deep navy
                D: '#004a5d', // Dark blue-grey
                E: '#005b6e'  // Dark slate blue
            };
            break;
        case 1:
            gradientObject = {
                A: '#002b3d', // Dark navy
                B: '#003b47', // Deep navy
                C: '#004a57', // Dark slate blue
                D: '#005b68', // Blue-grey
                E: '#006a7a'  // Slate blue
            };
            break;
        case 2:
            gradientObject = {
                A: '#002d4d', // Darker navy
                B: '#003e5f', // Deep blue
                C: '#00506f', // Blue-grey
                D: '#00617f', // Rich blue
                E: '#007293'  // Bright blue
            };
            break;
        case 3:
            gradientObject = {
                A: '#003f66', // Midnight blue
                B: '#00507f', // Blue-grey
                C: '#006c98', // Bright blue
                D: '#007da7', // Light blue
                E: '#0092bc'  // Sky blue
            };
            break;
        case 4:
            gradientObject = {
                A: '#004b78', // Dark navy
                B: '#005f8a', // Blue
                C: '#00709c', // Bright sky blue
                D: '#0082b2', // Azure
                E: '#0095c6'  // Light blue
            };
            break;
        case 5:
            gradientObject = {
                A: '#006f8c', // Bright azure
                B: '#0083a1', // Bright sky blue
                C: '#0097b3', // Light azure
                D: '#00abc2', // Light sky blue
                E: '#00bcd8'  // Light turquoise
            };
            break;
        case 6:
            gradientObject = {
                A: '#004e6c', // Dark teal
                B: '#006680', // Darker teal
                C: '#007d8c', // Medium teal
                D: '#00969c', // Bright teal
                E: '#00a4ab'  // Light teal
            };
            break;
        case 7:
            gradientObject = {
                A: '#005e8c', // Darker blue
                B: '#0076a2', // Medium blue
                C: '#008cb5', // Light blue
                D: '#009fc6', // Bright sky blue
                E: '#00b1d3'  // Light blue
            };
            break;
        case 8:
            gradientObject = {
                A: '#0075b0', // Darker sky blue
                B: '#0082c1', // Medium sky blue
                C: '#0091d4', // Bright azure
                D: '#00a3e6', // Light azure
                E: '#00b3f2'  // Very light azure
            };
            break;
        case 9:
            gradientObject = {
                A: '#0083c3', // Deep sky blue
                B: '#0094d4', // Light azure
                C: '#00a5e5', // Bright azure
                D: '#00b6f6', // Light blue
                E: '#00c7fa'  // Very light blue
            };
            break;
        case 10:
            gradientObject = {
                A: '#0094d5', // Bright azure
                B: '#00a5e7', // Light azure
                C: '#00b8f8', // Sky blue
                D: '#00c8f9', // Light azure
                E: '#00dbfb'  // Very light blue
            };
            break;
        case 11:
            gradientObject = {
                A: '#0095d4', // Bright azure
                B: '#00a6e7', // Light azure
                C: '#00b7f8', // Light blue
                D: '#00c5f9', // Soft sky blue
                E: '#00d3fa'  // Very light blue
            };
            break;
        case 12:
            gradientObject = {
                A: '#00c8e0', // Bright azure
                B: '#00d8e5', // Light azure
                C: '#00e1eb', // Bright sky blue
                D: '#00e8ef', // Light turquoise
                E: '#00f4f4'  // Light blue
            };
            break;
        case 13:
            gradientObject = {
                A: '#00b0d6', // Light azure
                B: '#00c2de', // Bright azure
                C: '#00d1e6', // Light turquoise
                D: '#00e0ed', // Sky blue
                E: '#00eaf2'  // Light azure
            };
            break;
        case 14:
            gradientObject = {
                A: '#008fb8', // Bright turquoise
                B: '#009fbf', // Light azure
                C: '#00b0c9', // Light turquoise
                D: '#00c3d3', // Sky blue
                E: '#00d7df'  // Light blue
            };
            break;
        case 15:
            gradientObject = {
                A: '#0073a5', // Deep sky blue
                B: '#0082b5', // Bright turquoise
                C: '#0092c3', // Light azure
                D: '#00a0cf', // Light blue
                E: '#00b4d7'  // Light azure
            };
            break;
        case 16:
            gradientObject = {
                A: '#006597', // Slate blue
                B: '#0074a7', // Bright turquoise
                C: '#0083b5', // Light azure
                D: '#0094c7', // Sky blue
                E: '#00a3d9'  // Light blue
            };
            break;
        case 17:
            gradientObject = {
                A: '#005080', // Deep slate blue
                B: '#006596', // Bright turquoise
                C: '#0079a8', // Sky blue
                D: '#0089b7', // Light blue
                E: '#0093c5'  // Light azure
            };
            break;
        case 18:
            gradientObject = {
                A: '#004060', // Dark slate blue
                B: '#005c76', // Deep blue
                C: '#0074a4', // Bright turquoise
                D: '#0084b8', // Light blue
                E: '#0092c3'  // Sky blue
            };
            break;
        case 19:
            gradientObject = {
                A: '#002d4a', // Dark slate blue
                B: '#003f5c', // Deep blue
                C: '#005872', // Bright turquoise
                D: '#006f83', // Sky blue
                E: '#007c91'  // Light blue
            };
            break;
        case 20:
            gradientObject = {
                A: '#001926', // Very dark blue
                B: '#002b3c', // Dark slate
                C: '#003e50', // Deep blue
                D: '#00516b', // Rich blue
                E: '#00667f'  // Light blue
            };
            break;
        case 21:
            gradientObject = {
                A: '#001c25', // Very dark blue
                B: '#002b33', // Deep midnight
                C: '#003b43', // Dark slate
                D: '#004f57', // Deep slate blue
                E: '#005f68'  // Light blue-grey
            };
            break;
        case 22:
            gradientObject = {
                A: '#001b2a', // Deep midnight
                B: '#002d3c', // Dark slate blue
                C: '#003e4f', // Dark navy
                D: '#004b5f', // Deep navy
                E: '#005f6e'  // Darker blue
            };
            break;
        case 23:
            gradientObject = {
                A: '#001a24', // Very dark blue
                B: '#002028', // Deep midnight
                C: '#003033', // Dark slate
                D: '#00404b', // Darker navy
                E: '#005261'  // Dark blue
            };
            break;
        default: // default will probably never be triggered, but it returns the blue gradient.
            gradientObject = {
                A: '#386ebe', 
                B: '#4d80ce', 
                C: '#6793d7', 
                D: '#80a7df', 
                E: '#9abbe7'
            }
    }

    appDiv?.style.setProperty('--myColor1', gradientObject.A);
    appDiv?.style.setProperty('--myColor2', gradientObject.B);
    appDiv?.style.setProperty('--myColor3', gradientObject.C);
    appDiv?.style.setProperty('--myColor4', gradientObject.D);
    appDiv?.style.setProperty('--myColor5', gradientObject.E);

    return gradientObject
}