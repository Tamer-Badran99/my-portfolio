import React, { Fragment } from 'react';
import './style.css';
import circle from '../../Images/circle-compressor.gif';
import me from '../../Images/me-one-compressor.png';
import Particles from 'react-particles-js';
import f from '../particles.json';


function Home ()
{

    return (
      
      <Fragment>
        <Particles className="h" params={f} />
        <div className="home">
          <div className="circle animate__animated animate__zoomIn"> 
             <img src={circle} alt="circle" />
          </div>

          <div className="image-translate animate__animated animate__zoomIn">
            <img src={me} alt="me" />
          </div>  
         
          <div className="introduction-text">
             <h1 className="animate__animated animate__bounceInUp">TAMER BADRAN</h1>
             <p className="animate__animated animate__fadeInUp">Front End Developer</p>
          </div>

        </div>
        </Fragment>
    );
}

export default Home;
