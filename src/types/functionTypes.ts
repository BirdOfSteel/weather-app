import { 
    CustomDailyWeatherData, 
    CustomHourlyWeatherData, 
    CustomWeatherDataPackage, 
    unitsObject 
} from "./customDataObjects";

export type mapHourlyForecastProps = {
    weatherObject: CustomWeatherDataPackage;
    extraInfo: CustomHourlyWeatherData | null;
    setExtraInfo: React.Dispatch<React.SetStateAction<CustomHourlyWeatherData>>;
    units: unitsObject;
}

export type mapDailyForecastProps = {
    weatherObject: CustomWeatherDataPackage;
    extraDailyInfo: CustomDailyWeatherData | null;
    setExtraDailyInfo: React.Dispatch<React.SetStateAction<CustomDailyWeatherData>>;
    units: unitsObject;
}