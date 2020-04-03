import React, { Component } from 'react';
import resumeData from '../../resumeData';
import TechStack from '../TechStack/TechStack';

class ProjectSelection extends Component {
    state = {
        selected: 0
    }

    handleSelection = (e) => {
        this.setState({ selected: parseInt(e.target.value)})
    }

    renderProjects () {
         console.log('proj', resumeData.projectList[this.state.selected].projects)
            return resumeData.projectList[this.state.selected].projects.map( project => {
                return (
                    <div key={project.id} className = "proj-box">
                            <li className="proj-content" key={project.id}>
                                <div className="proj-image">
                                  <img className = "proj-images" alt={project.name} src={`${project.img}`} />
                                </div>
                                
                                <div className="proj-info">
                                  <h5 className="proj-title">{project.name}</h5>
                                  <span className="proj-desc">{project.description}</span>
                                  <TechStack />
                                  <div className="proj-btn">
                                            <button className="btn btn-border">
                                              <a href={`${project.liveApp}`} target="_blank" rel="noopener noreferrer"><span className="btn-name">Live</span></a>
                                            </button>
                                            <button className="btn btn-border">
                                              <a href={`${project.clientRepo}`} target="_blank" rel="noopener noreferrer"><span className="btn-name">Client</span></a>
                                            </button>
                                            <button className="btn btn-border">
                                              <a href={`${project.serverRepo}`} target="_blank" rel="noopener noreferrer"><span className="btn-name">Server</span></a>
                                            </button>
                                    </div>
                                </div>
                                
                          </li>
                    </div>
                  )
                })
    }

    renderSelection() {
        return resumeData.projectList.map( proj => (
            <button key={proj.pid} value={proj.pid} onClick={this.handleSelection}>{proj.title}</button>
        ))
    }

    render() {
        return (
           <>
            {this.renderSelection()}
            {this.renderProjects()}
           </>
        )
    }
        
}
export default ProjectSelection;