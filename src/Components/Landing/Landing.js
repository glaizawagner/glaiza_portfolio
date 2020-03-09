import React, { Component } from 'react';
import IconStyle from '../IconStyle/IconStyle';
import './Landing.css';

class Landing extends Component {
    render() {
        return(
            /** 
             /* <img src="https://imgur.com/1GUB7gg.png" alt="headshot" className="headshot" /> 
               /* <div className="heading-primary">
                   <h1>glaiza e. wagner</h1>
                </div>
                <div className="heading-secondary">
                    <h2>full stack web developer</h2>
                </div>

                <p> HTML5/CSS3 | Bootstrap | Javascript | React | React Native | NodeJS | ExpressJS</p>

                <div className="social-links"> 

                   LinkedIn
                       <a href="https://www.linkedin.com/in/glaizawagner/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                   Github
                       <a href="http://google.comhttps://github.com/glaizawagner" rel="noopener noreferrer" target="_blank">
                            {IconStyle({
                                style: 'code'
                            })}
                            <i className="fa fa-github-square" aria-hidden="true" />
                            <h3>GitHub</h3>
                        </a> 

                </div> 

                */
            <section className="holder">  
                <div className="bar left"></div>
                <div className="bar top"></div>
                <div className="bar right"></div>
                <div className="bar bottom"></div>        
              
            </section>
        )
    }
}

export default Landing;