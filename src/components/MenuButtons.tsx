import React from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import { MenuButtonsProps } from '../types/componentTypes';

const MenuButtons: React.FC<MenuButtonsProps> = ({ units, setUnits }) => {

  function changeScale(e: React.MouseEvent<HTMLImageElement>) {
    const arrowElement = e.target as HTMLImageElement; 

    const arrowDirection = arrowElement.className;
    const parentId = arrowElement.parentElement?.parentElement?.id;

    if (!parentId) {
      console.error('Could not determine parent ID for scale change.');
      return;
    }

    let currentScale = '';
    let scaleArray: string[] = [];
    let unitsKey = '';

    switch (parentId) {
      case 'temperature-scale-selector':
        currentScale = units.temperature;
        scaleArray = ['°C', '°F', '°K'];
        unitsKey = 'temperature';
        break;
      case 'long-distance-scale-selector':
        currentScale = units.longDistance;
        scaleArray = ['km', 'm', 'mi'];
        unitsKey = 'longDistance';
        break;
      case 'short-distance-scale-selector':
        currentScale = units.shortDistance;
        scaleArray = ['mm', 'in'];
        unitsKey = 'shortDistance';
        break;
      case 'cloud-distance-scale-selector':
        currentScale = units.cloudDistance;
        scaleArray = ['km', 'm', 'ft'];
        unitsKey = 'cloudDistance';
        break;
      case 'velocity-scale-selector':
        currentScale = units.velocity;
        scaleArray = ['m/s', 'km/h', 'mph', 'kn'];
        unitsKey = 'velocity';
        break;
      case 'pressure-scale-selector':
        currentScale = units.pressure;
        scaleArray = ['mb', 'pa', 'hPa', 'mmHg', 'inHg'];
        unitsKey = 'pressure';
        break;
      default:
        console.error(`Unknown scale selector: ${parentId}`);
        return;
    }

    const scaleIndex = scaleArray.indexOf(currentScale);
    let newScale: string;

    if (arrowDirection === 'left-scale-arrow') {
      newScale = scaleIndex === 0
        ? scaleArray[scaleArray.length - 1]
        : scaleArray[scaleIndex - 1];
    } else if (arrowDirection === 'right-scale-arrow') {
      newScale = scaleIndex === scaleArray.length - 1
        ? scaleArray[0]
        : scaleArray[scaleIndex + 1];
    } else {
      return; // Invalid arrow class; exit function.
    }

    setUnits({ ...units, [unitsKey]: newScale });
  }

  return (
    <>
      <p id="temperature-scale-selector">
        Temperature: 
        <span className="unit-selector-span">
          <img src={leftArrow} alt="Previous unit" className="left-scale-arrow" onClick={changeScale} />
          {units.temperature}
          <img src={rightArrow} alt="Next unit" className="right-scale-arrow" onClick={changeScale} />
        </span>
      </p>
      <p id="long-distance-scale-selector">
        Long distance: 
        <span className="unit-selector-span">
          <img src={leftArrow} alt="Previous unit" className="left-scale-arrow" onClick={changeScale} />
          {units.longDistance}
          <img src={rightArrow} alt="Next unit" className="right-scale-arrow" onClick={changeScale} />
        </span>
      </p>
      <p id="short-distance-scale-selector">
        Short distance: 
        <span className="unit-selector-span">
          <img src={leftArrow} alt="Previous unit" className="left-scale-arrow" onClick={changeScale} />
          {units.shortDistance}
          <img src={rightArrow} alt="Next unit" className="right-scale-arrow" onClick={changeScale} />
        </span>
      </p>
      <p id="cloud-distance-scale-selector">
        Cloud distance: 
        <span className="unit-selector-span">
          <img src={leftArrow} alt="Previous unit" className="left-scale-arrow" onClick={changeScale} />
          {units.cloudDistance}
          <img src={rightArrow} alt="Next unit" className="right-scale-arrow" onClick={changeScale} />
        </span>
      </p>
      <p id="velocity-scale-selector">
        Velocity: 
        <span className="unit-selector-span">
          <img src={leftArrow} alt="Previous unit" className="left-scale-arrow" onClick={changeScale} />
          {units.velocity}
          <img src={rightArrow} alt="Next unit" className="right-scale-arrow" onClick={changeScale} />
        </span>
      </p>
      <p id="pressure-scale-selector">
        Pressure:
        <span className="unit-selector-span">
          <img src={leftArrow} alt="Previous unit" className="left-scale-arrow" onClick={changeScale} />
          {units.pressure}
          <img src={rightArrow} alt="Next unit" className="right-scale-arrow" onClick={changeScale} />
        </span>
      </p>
    </>
  );
};

export default MenuButtons;