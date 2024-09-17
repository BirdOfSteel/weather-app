import React from 'react';
import menuArrowIcon from '../assets/down-arrow.png';
import MenuButtons from './MenuButtons.tsx';

export default function Menu({ isMenuOpen, setIsMenuOpen, units, setUnits}) {
    const toggleMenuStyle = {
        width: isMenuOpen ? '35%' : '5%',
        height: isMenuOpen ? '35%' : '45px'
    }
    
    const fadeStyle = {
        opacity: isMenuOpen ? 1 : 0,
        transition: 'opacity 0.25s ease-in-out'
    };

    return (
        <div 
            id="menu-div"
            style={toggleMenuStyle}>

            <img 
                id='menu-icon' 
                src={menuArrowIcon} 
                style={isMenuOpen ? {'transform': 'rotate3d(0,0,-1,45deg)'} : {'transform': 'rotate3d(0,0,1,-225deg)'} }
                onClick={() => setIsMenuOpen((prevState: boolean) => {
                    return !prevState
                })}
            />

            <div id="menu-list-div" style={fadeStyle}>
                <MenuButtons units={units} setUnits={setUnits} />
            </div>


        </div>
    )
}