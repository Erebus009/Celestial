import React from 'react'

import ParticalWrap from './ParticalWrap';
import '../utils/partical.css'

export default function Hero() {
    return (
        <div className="particalParent">
        
        <ParticalWrap >
            <div className="particalChild">
                <h1>TESTER</h1>
            </div>
        </ParticalWrap>
        </div>
            
    )
}



