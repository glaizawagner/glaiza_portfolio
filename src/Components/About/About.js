import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
        <div className="About">
          <h4 className="about-title">{resumeData.aboutTitle}</h4>
          <ul className="about-desc">
            {resumeData.about.map(about => {
              return <li key={about.id} className ="u-margin-bottom-small">{about.desc}</li>;
            })}
          </ul>

          <h3 className="about-interest-title">{resumeData.interestTitle}</h3>
          <ul className="interest-desc">
            {resumeData.interests.map(interest => {
              return (
                <li key={interest.id}>
                  <i className={interest.className}></i>
                  {interest.desc}
                </li>
              );
            })}
          </ul>
        </div>
    );
  }
}
export default About;
