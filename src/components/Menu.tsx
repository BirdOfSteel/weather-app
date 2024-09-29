import React from 'react';
import arrowUpLeft from '../assets/arrow-up-left.svg';
import MenuButtons from './MenuButtons.tsx';

export default function Menu({ isMenuOpen, setIsMenuOpen, units, setUnits}) {
    const toggleMenuStyle = {
        width: isMenuOpen ? '25%' : '0%',
        height: isMenuOpen ? '30%' : '0%',
        minWidth: isMenuOpen ? '250px' : '0px',
        minHeight: isMenuOpen ? '270px' : '30px',
        background: 'rgba(240, 240, 240, 0)',
        boxShadow: isMenuOpen ? 
            '-40px -40px 80px black' : 
            ''
    }
    
    const rotateMenuIconStyle = {
        transform: isMenuOpen ? 
            'rotate3d(0,0,1,360deg)' : 
            'rotate3d(0,0,-1,180deg)'
    }

    const fadeStyle = {
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
                style={rotateMenuIconStyle}
                id="menu-toggle-button"
                onClick={() => setIsMenuOpen((prevState: boolean) => {
                    return !prevState;
                })}
            />
        </div>
    )
}