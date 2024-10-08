import { 
    CustomDailyWeatherData, 
    CustomHourlyWeatherData, 
    CustomWeatherDataPackage, 
    unitsObject 
} from "./customDataObjects";

export type mapTemperaturesProps = {
    weatherObject: CustomWeatherDataPackage;
    interval: 'hourly' | 'daily';
    extraInfo: CustomHourlyWeatherData | CustomDailyWeatherData | null;
    setExtraInfo: React.Dispatch<React.SetStateAction<CustomHourlyWeatherData | CustomDailyWeatherData>>;
    units: unitsObject;
}