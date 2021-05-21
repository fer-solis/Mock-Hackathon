import React from 'react'
import {useHistory} from 'react-router-dom'
import imageHome from '../assets/imageHome.png'
import ropaHombre from '../assets/ropaHombre.png'
import ofertaRopa from '../assets/ofertaRopa.png'


const Carrusel = () => {

    return (

        <div>
            <div >
                                <div class="container">
                    
                    <ul class="slider">
                        <li id="slide1">
                        <img src={imageHome}/>
                        </li>
                        <li id="slide2">
                        <img src={ropaHombre}/>
                        </li>
                        <li id="slide3">
                        <img src={ofertaRopa}/>
                        </li>
                    </ul>
                    
                    <ul class="menu">
                        <li>
                        <a href="#slide1"></a>
                        </li>
                        <li>
                        <a href="#slide2"></a>
                        </li>
                        <li>
                        <a href="#slide3"></a>
                        </li>
                    </ul>
                    
                    </div>

            </div>
        </div>
        
        

    );

};

export default Carrusel;