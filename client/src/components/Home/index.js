import React from "react";
import "./styles/home.css";
import particlesConfig from "./styles/particlesConfig.json";
import Particles from "react-tsparticles";

const Home = () => {
  return (
 <>
 <Particles params={particlesConfig} className="App-particles__container" />
    <div className="home-container">
     <h1>Find Your Favorite Picture!</h1>
   
    </div>
    </>
  );
};

export default Home;