import React from 'react';
import Contact from '../Contact/Contact'
import resumeData from '../../resumeData';
import './Footer.css';

function Footer() {
    return(
            <div className="footer-row">
                <span>{resumeData.name} </span>
                <Contact />
                <span>&copy; {(new Date().getFullYear())}</span>
            </div>
    )
}

export default Footer;