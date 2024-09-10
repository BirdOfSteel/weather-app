import React from 'react';
import closeMenuIcon from '../assets/cross-icon.png';

export default function Menu({ isMenuOpen, setIsMenuOpen }) {

    return (
        <div 
            id="menu-div"
            style={isMenuOpen ? {'width': '40%'} : {'width': '0'}}
        >
            <img 
                id='close-menu-icon' 
                src={closeMenuIcon} 
                onClick={() => setIsMenuOpen((prevState: boolean) => {
                    return !prevState
                })}
            />
            <p>123</p>
        </div>
    )
}