import React, { Component } from 'react';
// import IconStyle from '../IconStyle/IconStyle';
import { SocialIcon } from 'react-social-icons'
import './Landing.css';

class Landing extends Component {
    render() {
        return(
            <div className="home">
                <div>
                    <img src="https://imgur.com/jWipsfT.png" alt="headshot" className="headshot" /> 
                    <div className="heading-primary">
                    <h1>glaiza e. wagner</h1>
                    </div>

                    <div className="heading-secondary">
                        <h2>full stack web developer</h2>
                    </div>

                    <p> HTML5/CSS3 | Bootstrap | Javascript | React | React Native | NodeJS | ExpressJS</p>

                </div>
               
                <div className="social-links"> 
                    <SocialIcon className ="social-icons" bgColor="blue" url="https://www.linkedin.com/in/glaizawagner" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon className ="social-icons" bgColor="black" url="https://github.com/glaizawagner" target="_blank" rel="noopener noreferrer"/>
                    <SocialIcon className ="social-icons" bgColor="white" url="mailto:glaizawagner@gmail.com" rel="noopener noreferrer"/>
                </div> 
            </div>
 
        )
    }
}

export default Landing;