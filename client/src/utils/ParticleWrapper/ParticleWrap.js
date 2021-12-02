import React, { Component } from "react";

import Particles from "react-tsparticles";
import { particleSetup } from "./particles";
import APOD from "../../components/PictureCards/APOD";

import "./particle.css";


export class ParticleWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
    height: document.documentElement.clientHeight / 2,
    width: document.documentElement.clientWidth
    }
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
          height: this.props.height || this.state.height,
          width: this.props.width || this.state.width,
        }}
        
      >
        <Particles
          id="tsparticles"
          canvasClassName="particleCanvas"
          height={this.props.height || this.state.height}
          width="100%"
          params={particleSetup}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <div className="particleChild" style={{
          maxHeight: this.props.height || this.state.height
        }}
        >

        {React.Children.map(this.props.children, child =>{
          if(React.isValidElement(child)){
            console.log(child);
            React.cloneElement(child, {
              style:{maxHeight:this.state.height || this.props.height}
            })
          }
          return child
        })}

        {/* {this.props.children} */}
          
          </div>
      </div>
    );
  }
}

export default ParticleWrap;
