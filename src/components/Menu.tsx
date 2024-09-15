import React from 'react';
import menuArrowIcon from '../assets/down-arrow.png';

export default function Menu({ isMenuOpen, setIsMenuOpen }) {

    return (
        <div 
            id="menu-div"
            style={isMenuOpen ? {'width': '10%'} : {'width': '5%'}}
        >
            <img 
                id='menu-icon' 
                src={menuArrowIcon} 
                style={isMenuOpen ? {'transform': 'rotate3d(0,0,-1,45deg)'} : {'transform': 'rotate3d(0,0,1,-225deg)'} }
                onClick={() => setIsMenuOpen((prevState: boolean) => {
                    return !prevState
                })}
            />
        </div>
    )
}