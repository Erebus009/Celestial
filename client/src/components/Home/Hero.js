import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/esm/Container';

import ParticleWrap from '../../utils/ParticleWrapper/ParticleWrap';

import APOD from '../PictureCards/APOD'

function getWindowDimensions() {
    const height = document.documentElement.clientHeight / 2
    const width = document.documentElement.clientWidth
    return {
      width,
      height
    };
  }

export default function Hero() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions({height:document.documentElement.clientHeight / 2 , width: document.documentElement.clientWidth});
        // console.log(windowDimensions);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        
    <ParticleWrap height={"75vh"}>
        <h1 className="text-white text-center">Stuff here!</h1>
    </ParticleWrap>
            
    )
}



