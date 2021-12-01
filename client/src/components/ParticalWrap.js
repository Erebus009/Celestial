import React, { Component } from 'react'

import Particles from "react-tsparticles";

import { particalsSetup } from "../utils/particals";

export class ParticalWrap extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {

        
    const particlesInit = (main) => {
        console.log(main);
      
      //   tsParticles.load("tsparticles", { particalsSetup });
      };
      
      const particlesLoaded = (container) => {
        console.log(container.options);
        console.log();
      };

      const childs = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {
          style: `zIndex: 1`
          }))

        return (
            <>
            <Particles
                id="tsparticles"
                height="30vh"
                options={particalsSetup}
                init={particlesInit}
                loaded={particlesLoaded}
            />
            {/* <div>   
            {childs}
            </div>
            </Particles> */}
            </>
        )
    }
}

export default ParticalWrap
