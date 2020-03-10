import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import IconStyle from '../IconStyle/IconStyle';
import './Nav.css'

const Nav = () => {

    const [toggleMenu, setToggleMenu ] = useState(false);
    
    const toggleMenuFunction = () => {
        setToggleMenu(!toggleMenu);
    }

    return(
        <nav role="navigation">
            <div id="toggleMenu">
                    <input type="checkbox" checked={toggleMenu} onChange={toggleMenuFunction}/>
                    {IconStyle({ style: `${toggleMenu ? 'close' : 'hamburger'}`})}
                        <img src="https://imgur.com/5f1Kl3j.png" alt="logo" className="logo"/>
                    
                <ul id="navMenu" className="right">
                    <Link to="/" onClick={toggleMenuFunction} className="menu-link">
                        <li className={!window.location.href.includes('projects') && !window.location.href.includes('contact') ? 'active' : 'inactive'}>
                            Home
                        </li>
                    </Link>
                    <Link to="/about" onClick={toggleMenuFunction} className="menu-link">
                        <li className={window.location.href.includes('projects') ? 'active' : 'inactive'}>
                            About
                        </li>
                    </Link>
                    <Link to="/projects" onClick={toggleMenuFunction} className="menu-link">
                        <li className={window.location.href.includes('projects') ? 'active' : 'inactive'}>
                            Projects
                        </li>
                    </Link>
                    <Link to="/Resume" onClick={toggleMenuFunction} className="menu-link">
                        <li className={window.location.href.includes('projects') ? 'active' : 'inactive'}>
                            Resume
                        </li>
                    </Link>
                </ul>
                <div>
                    
                </div>
            </div>
        </nav>
    )
}
export default Nav;