import React from 'react'

import ParticleWrap from './ParticleWrap';
import '../utils/particle.css'

export default function Hero() {
    return (
        <div className="particleParent">
        
        <ParticleWrap >
            <div className="particleChild">
                <h1>TESTER</h1>
            </div>
        </ParticleWrap>
        </div>
            
    )
}



