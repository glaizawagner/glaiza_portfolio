import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow  from './NextArrow';
import PrevArrow from './PrevArrow'
import './Projects.css';

class Projects extends Component {

  render() {
  let resumeData = this.props.resumeData;
  let settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
      return (
        <div className="container">
            <h6 className="text-muted">PROJECTS</h6>
              <ul className="projects-box">
                <Slider {...settings}>
                {resumeData.projectList.map(project=>(
                             <div className="card">
                                  <div className = "proj-image">
                                    <li className="out" key={project.id}><img className="rounded-circle proj-images" alt={project.name} src={`${project.img}`} /></li>
                                  </div>
                                  <div className="proj-details">
                                        <div>
                                            <h5 className="card-title">{project.name}</h5>
                                            <small className="card-text text-sm-center text-muted">{project.description}</small>
                                        </div>
                                        
                                        <div className="proj-btn">
                                          <button className="btn btn-border">
                                            <a href={`${project.liveApp}`} target="_blank" rel="noopener noreferrer">Live</a>
                                          </button>
                                          <button className="btn btn-border">
                                            <a href={`${project.clientRepo}`} target="_blank" rel="noopener noreferrer">Client</a>
                                          </button>
                                          <button className="btn btn-border">
                                            <a href={`${project.serverRepo}`} target="_blank" rel="noopener noreferrer">Server</a>
                                          </button>
                                        </div>
                                       
                                  </div>
                                
                            </div>
                           
                        
                    ))}
                </Slider>
              </ul>
        </div>
    );
  }
}

export default Projects;

