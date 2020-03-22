import React, { Component } from "react";
import Particles from "react-particles-js";

// const style = {
//   width: "100vw",
//   height: "100vh",
// };

class Particle extends Component {
  render() {
    return (
      <div id="particles">
      <Particles
          params={{
              "particles": {
              "number": {
              "value": 90
              },
              "size": {
              "value": 2.5
              }
          },
              "interactivity": {
              "events": {
              "onhover": {
              "enable": true,
              "mode": "repulse"
              }
              }
              }
          }}/>
       {/* params={{
          particles: {
            number: {
              value: 1000,
            },
            density: {
                enable: true,
                value: 1000,
            },
            color: {
                "value": "#067"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 1,
                    color: "#167"
                },
                image:{
                    "src":"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
                },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1
                }
            },
            size: {
              value: 5,
              random: false,
              anim: {
                enable: false,
                speed: 30,
              }
            },
            line_linked: {
              enable: false,
              distance: 120,
              color: '#167',
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              straight: "false"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              bubble: {
                distance: 100,
                size: 10,
              },
              repulse: {
                distance: 50,
                duration: 0.4
              }
            }
          }
        }}
      /> */}
      </div>
    );
  
      
  }
}

export default Particle;
