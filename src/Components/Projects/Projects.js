import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Projects.css';
import Slider from "react-slick";
import ProjectList from './ProjectList'

function Projects() {
  let settings = {
    infinite: false,
    speed: 1000,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
      return (
        <div className="container">
            <h6 className="text-muted">PROJECTS</h6>
            {ProjectList.length===0?(
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ):(
                <Slider {...settings}>
                {ProjectList.map(project=>(
                        <div className="out" key={project.id}>
                            <div className="card">
                                <img className="rounded-circle proj-images" alt={project.name} src={`${project.img}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <small className="card-text text-sm-center text-muted">{project.description}</small>
                                </div>
                                <div className="proj-btn">
                                  <button className="btn btn-sm follow btn-primary">
                                        <a href={`${project.liveApp}`} target="_blank" rel="noopener noreferrer">Live</a>
                                      </button>
                                      <button className="btn btn-sm follow btn-primary">
                                        <a href={`${project.clientRepo}`} target="_blank" rel="noopener noreferrer">Client</a>
                                      </button>
                                      <button className="btn btn-sm follow btn-primary">
                                        <a href={`${project.serverRepo}`} target="_blank" rel="noopener noreferrer">Server</a>
                                      </button>
                                  </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default Projects;

