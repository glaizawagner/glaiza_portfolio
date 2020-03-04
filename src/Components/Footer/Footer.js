import React from 'react';
import './Footer.css';

function Footer() {
    return(
            <div className="footer-row">
                <span> Glaiza E. Wagner </span>
                <span>&copy; {(new Date().getFullYear())}</span>
            </div>
    )
}

export default Footer;