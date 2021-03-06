export const particleSetup = {
  "background": {
    "color": {
      "value": "#000000"
    },
    // "image": "",
    // "position": "20% 50%",
    // "repeat": "no-repeat",
    // "size": "20%",
    "opacity": 1

  },
  "fullScreen": {
    "enable":false,
    "zIndex": 0
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble"
      }
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "duration": 2,
        "opacity": 0,
        "size": 0
      },
      "grab": {
        "distance": 400
      },
      "repulse": {
        "distance": 400
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "distance": 150,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 600
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": true,
      "speed": 0.5
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 140
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.5,
        "max": 1
      },
      "animation": {
        "speed": 2,
        "minimumValue": 0.3
      }
    }
  }
}

export const oldPartical = {
  "particles": {
      "number": {
          "value": 60,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.02
      },
      "move": {
          "direction": "right",
          "speed": 0.05
      },
      "size": {
          "value": 1
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
          }
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
} 