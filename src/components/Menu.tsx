import React from 'react';
import menuArrowIcon from '../assets/down-arrow.png';
import arrowUpLeft from '../assets/arrow-up-left.svg';
import MenuButtons from './MenuButtons.tsx';

export default function Menu({ isMenuOpen, setIsMenuOpen, units, setUnits}) {
    const toggleMenuStyle = {
        width: isMenuOpen ? '290px' : '0px',
        height: isMenuOpen ? '210px' : '10px',
        background: 'rgba(240, 240, 240, 0)',
        boxShadow: isMenuOpen ? 
            'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' : 
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