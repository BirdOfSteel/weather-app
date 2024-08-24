import React from 'react';
import openedMenuIcon from '../assets/menu-open.svg';
import closedMenuIcon from '../assets/menu-close.svg';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    // convert header to be fixed and slide in/out on toggle
    function toggleMenuState() {
        setIsMenuOpen(prevState => {
            return !prevState
        })
    }

    return (
        <div id="header-div">
            <img 
                src={isMenuOpen ? closedMenuIcon : openedMenuIcon} 
                alt={isMenuOpen ? "Button: Menu is open" : "Button: Menu is closed"} 
                id="openedMenuIcon" 
                onClick={toggleMenuState}
            />
        </div>
    )
}