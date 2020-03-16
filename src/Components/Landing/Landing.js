import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import "./Landing.css";

class Landing extends Component {

  render() {
    let resumeData = this.props.resumeData;

    return (
      <div className="home">
        <div className="heading-main">
          <h1 class="heading-primary">
            <span className="heading-primary--main">{resumeData.name}</span>
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
                    {/* {tech.symbol} */}
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
          <button type="button" className="btn-proj">See projects &#62;&#62;</button>
          </Link>
        </div>
       
        
      </div>
    );
  }
}

export default Landing;
