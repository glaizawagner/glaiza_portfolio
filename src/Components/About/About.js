import React, { Component } from 'react';
import './About.css';


class About extends Component {

    render() {

    let resumeData = this.props.resumeData;

    console.log('resumeData about',resumeData.aboutDesc1)
    return(
        <section className="About">
            <div className="about">
                <ul className="about-desc">
                     {resumeData.about.map(about => {
                        return(
                            <li key={about.id}>
                                {about.desc}
                            </li>
                        )
                    })}
                </ul>
                
                
                <h3 className="about-interest">{resumeData.interestTitle}</h3>
                <ul className="interest-desc"> 
                    { resumeData.interests.map(interest => {
                        return(
                            <li key={interest.id}>
                                <i className={interest.className}></i>
                                {interest.desc}
                            </li>
                        )
                    })}
                </ul> 
            </div>
        </section>
    )
    }
}
export default About;