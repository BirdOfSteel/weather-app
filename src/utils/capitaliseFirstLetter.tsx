export default function capitaliseFirstLetter(string: string) {
    if (string.length === 0) {
        return "";
    } else {
        const completedString = string.charAt(0).toUpperCase() + string.substring(1);
        return completedString
    }
}