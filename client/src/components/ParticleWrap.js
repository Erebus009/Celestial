import React, { Component, useRef } from "react";

import Particles from "react-tsparticles";

import { particleSetup } from "../utils/particles";
import { tsParticles } from "tsparticles";

export class ParticalWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.childs = [];
  }

  componentDidMount() {
    console.log(this.props.children);
    // console.log(this.childs);
    // this.setChilds = React.Children.map(this.props.children, (child) =>
    // React.cloneElement(child, {style:{zIndex: 1}}, [child]))
    // console.log(this.childs);
    
  }

  render() {
    
    const particlesInit = (main) => {
      // console.log(main);
      // tsParticles.load("tsparticles", { particalsSetup });
    };

    const particlesLoaded = (container) => {
      console.log(container.canvas.element);
      // container.canvas.element.appendChild(this.props.children)
      // console.log(this.props.children);
    };

    return (
      <>
        <Particles
          id="tsparticles"
          height="50vh"
          options={particleSetup}
          init={particlesInit}
          loaded={particlesLoaded}
          ref={this.printPart}
        >
          {this.props.children}
          {React.Children.map(this.props.children, (child) =>
            React.cloneElement(child, { style: { zIndex: 1 } }, [child])
          )}
        </Particles>

      </>
    );
  }
}

export default ParticalWrap;
