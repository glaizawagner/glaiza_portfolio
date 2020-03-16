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
    infinite: true,
    speed: 1000,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
      return (
        <div className="proj-container">
            <h6 className="proj-header">PROJECTS</h6>
              <ul id="container">
                    <Slider {...settings}>
                      {resumeData.projectList.map(project => {
                          return (
                            <div key={project.id} className = "proj-box">
                                    <li className="proj-content" key={project.id}>
                                        <div className="proj-image">
                                          <img className="proj-images" alt={project.name} src={`${project.img}`} />
                                        </div>
                                        
                                        <div className="proj-info">
                                          <h5 className="proj-title">{project.name}</h5>
                                          <span className="proj-desc">{project.description}</span>
                                          
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
                      })}
                    </Slider>
              </ul>
        </div>
    );
  }
}

export default Projects;

