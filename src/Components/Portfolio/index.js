import React from 'react';
import './style.css';
import Particles from 'react-particles-js';
import f from '../particles.json';
import OnlineShopping from '../../Images/online-store-compressor.png';
import ItalianPizza from '../../Images/italian-pizza-compressor.png';
import Furniture from '../../Images/furniture-compressor.png';



function Portfolio() {

   return (
 
       <div className="portfolio">
           <Particles className="h" params={f} />
           <div className="container">
                <div className="box">
                  <div className="row">

                      <div className="col-sm-6 col-lg-4">
                          <div className="sec animate__animated animate__jackInTheBox">
                               <img src={OnlineShopping} alt="online-shopping" />
                               <h4>Online Shopping</h4>
                               <a href="https://mystifying-swirles-b34d53.netlify.app" target="_blank" rel="noopener noreferrer">Check Link!</a>
                          </div>
                      </div>

                      <div className="col-sm-6 col-lg-4">
                          <div className="sec animate__animated animate__jackInTheBox">
                          <img src={ItalianPizza} alt="italian-pizza" />
                               <h4>Italian Pizza</h4>
                               <a href="https://peaceful-nobel-3b9c63.netlify.app" target="_blank" rel="noopener noreferrer">Check Link!</a>
                          </div>
                      </div>

                      <div className="col-sm-6 col-lg-4">
                          <div className="sec animate__animated animate__jackInTheBox">
                                <img src={Furniture} alt="furniture" />
                                <h4>Furniture</h4>
                                <a href="https://xenodochial-payne-3e7fc1.netlify.app" target="_blank" rel="noopener noreferrer">Check Link!</a>
                          </div>
                      </div>
                    </div>
                  </div>
           </div>
       </div>

   );
}

export default Portfolio;