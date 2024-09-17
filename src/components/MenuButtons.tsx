import React from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import { isTemplateLiteralToken } from 'typescript';

// Fix span width changing when changing units

export default function MenuButtons({ units, setUnits }) {

    function changeScale(e) { // handles scale-changing for the arrows in the menu.
        const arrow = e.target.className;
        const parentId = e.target.parentElement.parentElement.id;
        console.log(e)

        let currentScale: string = ''; // will be set to current selected scale
        let scaleArray: string[] = []; // will be set to the array of scales that is related to the arrow clicked
        let unitsKey: string = ''; // will be set to the key in the units object we will overwrite.

        switch (parentId) {
            case 'temperature-scale-selector': 
                currentScale = units.temperature;
                scaleArray = ['°C', '°F', '°K'];
                unitsKey = 'temperature';
                break;
            case 'long-distance-scale-selector': 
                currentScale = units.longDistance;
                scaleArray = ['km', 'metres', 'miles'];
                unitsKey = 'longDistance';
                break;
            case 'short-distance-scale-selector': 
                currentScale = units.shortDistance;
                scaleArray = ['mm', 'inches'];
                unitsKey = 'shortDistance';
                break;
            case 'velocity-scale-selector': 
                currentScale = units.velocity;
                scaleArray = ['m/s', 'km/h', 'mph', 'knots'];
                unitsKey = 'velocity';
                break;
            case 'pressure-scale-selector': 
                currentScale = units.pressure;
                scaleArray = ['mb', 'pa', 'hPa', 'mmHg', 'inHg'];
                unitsKey = 'pressure';
                break;
            
        }

        const scaleIndex = scaleArray.indexOf(currentScale);
        let newScale: string

        if (arrow === 'left-scale-arrow') {
            if (scaleIndex === 0 && scaleArray.length > 0) {
                newScale = scaleArray[scaleArray.length-1];
            } else {
                newScale = scaleArray[scaleIndex-1];
            }

            setUnits({...units, [unitsKey]: newScale});
        } 
        
        else if (arrow === 'right-scale-arrow') {
            if (scaleIndex === scaleArray.length-1 && scaleArray.length > 0) {
                newScale = scaleArray[0];
            } else {
                newScale = scaleArray[scaleIndex+1];
            }

            setUnits({...units, [unitsKey]: newScale});
        }
    
    }

    
    return (
        <>
        <p id="temperature-scale-selector">
            Temperature: 
            <span className={'unit-selector-span'}>
                <img src={leftArrow} className={'left-scale-arrow'} onClick={(e) => changeScale(e)} />
                    {units.temperature}
                <img src={rightArrow} className={'right-scale-arrow'} onClick={(e) => changeScale(e)} />
            </span>
        </p>
        <p id="long-distance-scale-selector">
            Long distance units: 
            <span className={'unit-selector-span'}>
                <img src={leftArrow} className={'left-scale-arrow'} onClick={(e) => changeScale(e)} />
                    {units.longDistance}
                <img src={rightArrow} className={'right-scale-arrow'} onClick={(e) => changeScale(e)} />
            </span>
        </p>
        <p id="short-distance-scale-selector">
            Short distance units: 
            <span className={'unit-selector-span'}>
                <img src={leftArrow} className={'left-scale-arrow'} onClick={(e) => changeScale(e)} />
                    {units.shortDistance}
                <img src={rightArrow} className={'right-scale-arrow'} onClick={(e) => changeScale(e)} />
            </span>
        </p>
        <p id="velocity-scale-selector">
            Velocity units: 
            <span className={'unit-selector-span'}>
                <img src={leftArrow} className={'left-scale-arrow'} onClick={(e) => changeScale(e)} />
                    {units.velocity}
                <img src={rightArrow} className={'right-scale-arrow'} onClick={(e) => changeScale(e)} />
            </span>
        </p>
        <p id="pressure-scale-selector">
            Pressure units:
            <span className={'unit-selector-span'}>
                <img src={leftArrow} className={'left-scale-arrow'} onClick={(e) => changeScale(e)} />
                
                    {units.pressure}
                <img src={rightArrow} className={'right-scale-arrow'} onClick={(e) => changeScale(e)} />
            </span>
        </p>
        </>
    )
}