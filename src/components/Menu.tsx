import React from 'react';
import arrowUpLeft from '../assets/arrow-up-left.svg';
import MenuButtons from './MenuButtons.tsx';

export default function Menu({ isMenuOpen, setIsMenuOpen, units, setUnits}) {
    const toggleMenuStyle = { // handles menu size based on isMenuOpen
        width: isMenuOpen ? '25%' : '0%',
        height: '0%',
        minWidth: isMenuOpen ? '250px' : '0px',
        minHeight: isMenuOpen ? '300px' : '30px',
        background: 'rgba(240, 240, 240, 0)',
        boxShadow: isMenuOpen ? 
            '-40px -40px 80px black' : 
            ''
    }
    
    // handles 
    const menuIconStyle = { // handles icon spacing and rotation
        transform: isMenuOpen ? 
            'rotate3d(0,0,1,360deg)' : 
            'rotate3d(0,0,-1,180deg)',

        margin: isMenuOpen ?
            '0 5px 5px 0' :
            '0 -2.5px -2px 0'
    }

    const fadeStyle = { // handles text-fade on menu toggle
        opacity: isMenuOpen ? 1 : 0,
        transition: 'opacity 0.25s ease-in-out',
    };

    return (
        <div 
            id="menu-div"
            style={toggleMenuStyle}>
                
            <div id="menu-list-div" style={fadeStyle}>
                <h1 id="menu-list-div-heading">Units</h1>
                <MenuButtons units={units} setUnits={setUnits} />
            </div>

            <img
                src={arrowUpLeft}
                style={menuIconStyle}
                id="menu-toggle-button"
                onClick={() => setIsMenuOpen((prevState: boolean) => {
                    return !prevState;
                })}
            />
        </div>
    )
}