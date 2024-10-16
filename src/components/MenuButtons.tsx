import React from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import { MenuButtonsProps } from '../types/componentTypes';

const MenuButtons: React.FC<MenuButtonsProps> = ({ units, setUnits, isMenuOpen }) => {

  // this function determines which type unit is to be changed
  function changeScale(e: React.MouseEvent<HTMLElement>) {
    const arrowElement = e.currentTarget as HTMLElement;
    
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
    
    if (arrowDirection === 'previous-unit-arrow') {
      newScale = scaleIndex === 0
        ? scaleArray[scaleArray.length - 1]
        : scaleArray[scaleIndex - 1];
    } else if (arrowDirection === 'next-unit-arrow') {
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
      <li id="temperature-scale-selector">
        Temperature: 
        <span className="unit-selector-span">
          <button 
            className="previous-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='temperature-unit-text' 
            aria-label='Previous temperature unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Left arrow' 
              src={leftArrow} 
              aria-hidden='true'
            />
          </button>

            <p id="temperature-unit-text"> 
              {units.temperature} 
            </p>

          <button 
            className="next-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='temperature-unit-text' 
            aria-label='Next temperature unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Right arrow' 
              src={rightArrow} 
              aria-hidden='true' 
            />
          </button>
        </span>
      </li>

      <li id="long-distance-scale-selector">
        Long distance: 
        <span className="unit-selector-span">
          <button 
            className="previous-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='long-distance-unit-text' 
            aria-label='Previous long-distance unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Left arrow' 
              src={leftArrow} 
              aria-hidden='true'
            />
          </button>

            <p id="long-distance-unit-text">
              {units.longDistance}
            </p>

          <button 
            className="next-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='long-distance-unit-text' 
            aria-label='Next long-distance unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Right arrow' 
              src={rightArrow}
              aria-hidden='true'
            />
          </button>
        </span>
      </li>

      <li id="short-distance-scale-selector">
        Short distance: 
        <span className="unit-selector-span">
          <button 
            className="previous-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='short-distance-unit-text' 
            aria-label='Previous short-distance unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Left arrow' 
              src={leftArrow} 
              aria-hidden='true'
            />
          </button>

            <p id="short-distance-unit-text">
              {units.shortDistance}
            </p>

          <button 
            className="next-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='short-distance-unit-text' 
            aria-label='Next short-distance unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Right arrow' 
              src={rightArrow} 
              aria-hidden='true'
            />
          </button>
        </span>
      </li>

      <li id="cloud-distance-scale-selector">
        Cloud distance: 
        <span className="unit-selector-span">
          <button 
            className="previous-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='cloud-distance-unit-text' 
            aria-label='Previous cloud distance unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Left arrow' 
              src={leftArrow} 
              aria-hidden='true'
            />
          </button>

            <p id="cloud-distance-unit-text">
              {units.cloudDistance}
            </p>

          <button 
            className="next-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='cloud-distance-unit-text' 
            aria-label='Next cloud distance unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Right arrow' 
              src={rightArrow} 
              aria-hidden='true'
            />
          </button>
        </span>
      </li>

      <li id="velocity-scale-selector">
        Velocity: 
        <span className="unit-selector-span">
          <button 
            className="previous-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='velocity-unit-text' 
            aria-label='Previous velocity unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Left arrow' 
              src={leftArrow} 
              aria-hidden='true'
            />
          </button>

            <p id="velocity-unit-text">
              {units.velocity}
            </p>

          <button 
            className="next-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='velocity-unit-text' 
            aria-label='Next velocity unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Right arrow' 
              src={rightArrow} 
              aria-hidden='true'
            />
          </button>
        </span>
      </li>

      <li id="pressure-scale-selector">
        Pressure:
        <span className="unit-selector-span">
          <button 
            className="previous-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='pressure-unit-text' 
            aria-label='Previous pressure unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Left arrow' 
              src={leftArrow} 
              aria-hidden='true'
            />
          </button>

            <p id="pressure-unit-text">
              {units.pressure}
            </p>

          <button 
            className="next-unit-arrow" 
            onClick={changeScale} 
            aria-labelledby='pressure-unit-text' 
            aria-label='Next pressure unit'
            tabIndex={isMenuOpen ? 0 : -1}
            aria-hidden="true"
          >
            <img 
              alt='Right arrow' 
              src={rightArrow} 
              aria-hidden='true'
            />
          </button>
        </span>
      </li>
    </>
  );
};

export default MenuButtons;