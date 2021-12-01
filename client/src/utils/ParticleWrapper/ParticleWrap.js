import React, { Component } from "react";

import Particles from "react-tsparticles";
import { particleSetup } from "./particles";

import './particle.css'

export class ParticleWrap extends Component {

  render() {   
    
    const particlesInit = (main) => {
      // console.log(main);
    };

    const particlesLoaded = (container) => {
      // console.log(container);
    };

    return (
      <div className="particleParent" style={{height:this.props.height}}>
        <Particles
          id="tsparticles"
          canvasClassName="particleCanvas"
          height={this.props.height}
          params={particleSetup}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div className="particleChild">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default ParticleWrap;
