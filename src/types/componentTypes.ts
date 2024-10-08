import { 
    CustomDailyWeatherData, 
    CustomHourlyWeatherData, 
    CustomWeatherDataPackage, 
    unitsObject } 
from "./customDataObjects";

export type MenuProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    units: unitsObject;
    setUnits: React.Dispatch<React.SetStateAction<unitsObject>>;
}

export type HourlyWeatherInfoProps = {
    extraHourlyInfo: CustomHourlyWeatherData;
    units: unitsObject;
}

export type DailyWeatherInfoProps = {
    extraDailyInfo: CustomDailyWeatherData;
    units: unitsObject;
}

export type HourlyWeatherProps = {
    weatherObject: CustomWeatherDataPackage ;
    interval: 'hourly';
    extraHourlyInfo: CustomHourlyWeatherData | null;
    setExtraHourlyInfo: React.Dispatch<React.SetStateAction<CustomHourlyWeatherData | null>>;
    units: unitsObject;
}

export type DailyWeatherProps = {
    weatherObject: CustomWeatherDataPackage ;
    interval: 'daily';
    extraDailyInfo: CustomDailyWeatherData | null;
    setExtraDailyInfo: React.Dispatch<React.SetStateAction<CustomDailyWeatherData | null>>;
    units: unitsObject;
}

export type MenuButtonsProps = {
    units: unitsObject;
    setUnits: React.Dispatch<React.SetStateAction<unitsObject>>;
}

export type WeatherSummaryProps = {
    weatherObject: CustomWeatherDataPackage; 
    units: unitsObject;
}