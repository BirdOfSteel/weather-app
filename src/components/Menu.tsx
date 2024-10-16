import arrowUpLeft from '../assets/arrow-up-left.svg';
import MenuButtons from './MenuButtons.tsx';
import { MenuProps } from '../types/componentTypes.ts';
// a11y
const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen, units, setUnits}) => {
    const toggleMenuStyle = { // handles menu size based on isMenuOpen
        width: isMenuOpen ? '25%' : '0%',
        height: '0%',
        minWidth: isMenuOpen ? '250px' : '0px',
        minHeight: isMenuOpen ? '300px' : '30px',
        background: 'rgba(240, 240, 240, 0)',
        boxShadow: isMenuOpen ? 
            '-40px -40px 80px black' : 
            '',
        transition: 
            'min-width 1s ease-out, width 1s ease-in-out, min-height 0.7s ease-in-out, height 0.7s ease-in-out' 
    }
    
    const menuButtonStyle = { // handles icon spacing and rotation
        transform: isMenuOpen ? 
            'rotate3d(0,0,1,360deg)' : 
            'rotate3d(0,0,-1,180deg)',

        margin: isMenuOpen ?
            '0 -7.5px 0 0' :
            '0 -2.5px -1.5px 0',

        right: isMenuOpen ?
            '7.5px' : '0'
    }

    const fadeStyle = { // handles text-fade on menu toggle
        opacity: isMenuOpen ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    };

    return (
        <section 
            id="menu-section"
            style={toggleMenuStyle}>
                
            <ul id="menu-list" style={fadeStyle}>
                <h2 id="menu-list-heading">Units</h2>
                <MenuButtons
                    units={units}
                    setUnits={setUnits} 
                    isMenuOpen={isMenuOpen}
                />
            </ul>

            <button
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                id="menu-toggle-button"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                style={menuButtonStyle}
            >
                <img
                    src={arrowUpLeft}
                    aria-hidden='true'
                    alt=''
                />
            </button>
        </section>
    )
}

export default Menu