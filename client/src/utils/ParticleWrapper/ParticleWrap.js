import React, { Component, useEffect } from "react";

import Particles from "react-tsparticles";
import { particleSetup } from "./particles";

import "./particle.css";

export class ParticleWrap extends Component {
  constructor(props) {
    super(props);

    this.height = "100%";
    this.width = "100%";
  }

  render() {
    const particlesInit = (main) => {
      // console.log(main);
    };

    const particlesLoaded = (container) => {
      // console.log(container);
    };

    return (
      <div
        className="particleParent"
        style={{
          height: this.props.height || this.height,
          width: this.props.width || this.width,
        }}
      >
        <Particles
          id="tsparticles"
          canvasClassName="particleCanvas"
          height={this.props.height || this.height}
          width="100%"
          params={particleSetup}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div className="particleChild">{this.props.children}</div>
      </div>
    );
  }
}

export default ParticleWrap;
