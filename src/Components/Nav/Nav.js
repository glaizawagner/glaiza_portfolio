import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import IconStyle from '../IconStyle/IconStyle';
import resumeData from '../../resumeData';

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
                    <ul id="navMenu">
                        {resumeData.navLinks.slice(0,3).map(links=> {
                                return (
                                    <div key={links.id} className="navMenu">
                                            <Link to={links.to} onClick={toggleMenuFunction} className="menu-link" >
                                                <li  className={!window.location.href.includes(`${links.name}`) ? 'active' : 'inactive'}>
                                                                <i className={links.icons} />
                                                                <span>{links.name}</span> 
                                                </li>
                                            </Link>
                                    </div>
                                ) 
                        })}
                        
                        <i className={resumeData.navResumeIcon}><a href={resumeData.navResumeLink} class="navigation__link" target="_blank" rel="noopener noreferrer">Resume</a></i>

                        <div className="navContact">
                            <i className={resumeData.contactSign}></i>
                            {/* <i className={resumeData.contactSign}>{resumeData.contactSign}</i> */}
                            <h2>{resumeData.contactTitle}</h2>
                            { resumeData.socialLinks.map(contact => {
                                return(
                                    <li key={contact.id}>
                                        <div>
                                            {contact.name}
                                            <a href={contact.url} target="blank" rel="noopener noreferrer"><i className={contact.className} /></a>
                                        </div>
                                    </li>
                                )
                            })}
                        </div>
                    </ul>
                </div>
        </nav>
    )
}
export default Nav;