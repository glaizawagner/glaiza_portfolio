import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
    render() {
        let resumeData = this.props.resumeData;
        console.log(resumeData.socialLinks)
        return(
            <div className="home">
                <div>
                    <img src="https://imgur.com/jWipsfT.png" alt="headshot" className="headshot" /> 
                    
                    <h1 className="heading-primary">{resumeData.name}</h1>
                    <h2 className="heading-secondary">{resumeData.role}</h2>
                    <p className="home-skills"> {resumeData.skills}</p>
                </div>
               
                <ul className="social-links"> 
                    { resumeData.socialLinks.map(social => {
                        return(
                            <li key={social.id}>
                                <a href={social.url} target="blank" rel="noopener noreferrer"><i className={social.className}></i></a>
                            </li>
                        )
                    })}
                </ul> 
                
            </div>
 
        )
    }
}

export default Landing;