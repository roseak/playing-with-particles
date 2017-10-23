import Particles from 'react-particles-js'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          params={{
            particles: {
              number: {
                value: 140,
              },
              size: {
                value: 1
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: 'white',
                  blur: .04
                },
                distance: 110
              },
              move: {
                speed: 3,
                attract: {
                  enable: true
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              retina_detect: true,
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                modes: {
                  repulse: {
                    distance: 200
                  }
                }
              }
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#00004d',
            position: 'fixed',
            top: '0px',
            left: '0px'
          }}
        />
      </div>
    );
  }
}

export default App;
