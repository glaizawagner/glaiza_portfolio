import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import Particles from "react-particles-js";
import Params from './particles-config.json';

import Typical from 'react-typical';
import "./Landing.css";

class Landing extends Component {

  render() {
    let resumeData = this.props.resumeData;

    return (
      <main className="home">
        <Particles params={Params} className="particles"/>
        <div className="heading-main">
          <h1 className="heading-primary">
            <Typical wrapper="span" steps={resumeData.steps} loop={Infinity}  className="heading-primary-main"/>
            <span className="heading-primary--sub">{resumeData.role}</span>
            
          </h1>

          <span className="tech-title">{resumeData.techTitle}</span>
          <ul className="about-skills">
            {resumeData.techStack.slice(0, 5).map(tech => {
              return (
                <li key={tech.id}>
                  <i
                    key={tech.id}
                    className={`devicon-${tech.skillName.toLowerCase()} colored large tech-icons`}
                  >
                  </i>
                </li>
              );
            })}
          </ul>
          <p className="home-skills"> {resumeData.skills}</p>
        </div>
        <Contact />
        <div className="btn-proj-link">
          <Link
            to='/projects'
          >
          <button type="button" className="btn btn-proj btn-border"><span className="btn-name">view projects &#62;&#62;</span></button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Landing;
