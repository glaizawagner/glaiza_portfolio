import React, { Component } from 'react';
import resumeData from '../../resumeData'
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <ul className="social-links social-landing">
                <span className="social-title">{resumeData.socialLinksTitle}</span>
                {resumeData.socialLinks.map(social => {
                return (
                            <li key={social.id}>
                                <a href={social.url} target="blank" rel="noopener noreferrer">
                                    <i className={social.className}/> 
                                    <span className="social-title">{social.name}</span>
                                </a>
                            </li>
                       
                ) })}
            </ul>
        );
    }
}
export default Contact;