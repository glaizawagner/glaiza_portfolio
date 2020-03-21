import React, { Component } from "react";
import resumeData from "../../resumeData";
import './TechStack.css';

class TechStack extends Component {
  render() {
    return (
      <>
      <div className = "techStack-container">
        {resumeData.techStack.slice(0,6).map(tech => {
          return (
              <i
                key={tech.id}
                className={`devicon-${tech.skillName.toLowerCase()} colored large techStack-icons`}
              />
            
          );
        })}
        </div>
      </>
    );
  }
}
export default TechStack;
