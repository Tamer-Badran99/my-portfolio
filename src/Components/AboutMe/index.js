import React from 'react';
import './style.css';
import Particles from 'react-particles-js';
import f from '../particles.json';
import Tilt from 'react-tilt';
import faceImage from '../../Images/face-compressor.png';

function AboutMe ()
{
    return (
        
        <div className="about-me">
        <Particles className="h" params={f} />
            <div className="container">
              <Tilt className="Tilt" options={{ max : 15 , scale:1 }}>
                <div className="Tilt-inner">
                    
                        <div className="top">
                         <div className="row">

                            <div className="col-xl-6">
                              <div className="image animate__animated animate__flip">
                                 <img src={faceImage} alt="me" />
                              </div>
                            </div>
              
                            <div className="col-xl-6">
                              <div className="info">
                                <p>Welcome Sir...<br />
                                My name is Tamer Badran, a student at the Palestinian Technical University-Kadoorie , I'm studying computer engineering , I'm a Front-End Developer , I worked at Freelancer for two years with a team</p>
                              </div>
                            </div>

                         </div>
                        </div>

                        <div className="middle">
                          <div className="row">

                             <div className="col-6 col-md-4 col-lg-2">
                               <div className="box">
                               <div className="desc">
                                   <div className="percent">
                                       <svg>
                                          <circle cx="50" cy="50" r="50"></circle>
                                          <circle cx="50" cy="50" r="50"></circle>
                                       </svg>
                                       <div className="number">
                                            <h2>95<span>%</span></h2>
                                       </div>
                                   </div>
                                   <h2 className="text">html+css</h2>
                               </div>
                               </div>
                             </div>

                             <div className="col-6 col-md-4 col-lg-2">
                             <div className="box">
                               <div className="desc">
                                   <div className="percent">
                                       <svg>
                                          <circle cx="50" cy="50" r="50"></circle>
                                          <circle cx="50" cy="50" r="50"></circle>
                                       </svg>
                                       <div className="number">
                                            <h2>90<span>%</span></h2>
                                       </div>
                                   </div>
                                   <h2 className="text">javascript</h2>
                               </div>
                               </div>
                             </div>

                             <div className="col-6 col-md-4 col-lg-2">
                             <div className="box">
                               <div className="desc">
                                   <div className="percent">
                                       <svg>
                                          <circle cx="50" cy="50" r="50"></circle>
                                          <circle cx="50" cy="50" r="50"></circle>
                                       </svg>
                                       <div className="number">
                                            <h2>85<span>%</span></h2>
                                       </div>
                                   </div>
                                   <h2 className="text">react js</h2>
                               </div>
                               </div>
                             </div>

                            <div className="col-6 col-md-4 col-lg-2">
                            <div className="box">
                               <div className="desc">
                                   <div className="percent">
                                       <svg>
                                          <circle cx="50" cy="50" r="50"></circle>
                                          <circle cx="50" cy="50" r="50"></circle>
                                       </svg>
                                       <div className="number">
                                            <h2>90<span>%</span></h2>
                                       </div>
                                   </div>
                                   <h2 className="text">bootstrap</h2>
                               </div>
                               </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-2">
                            <div className="box">
                               <div className="desc">
                                   <div className="percent">
                                       <svg>
                                          <circle cx="50" cy="50" r="50"></circle>
                                          <circle cx="50" cy="50" r="50"></circle>
                                       </svg>
                                       <div className="number">
                                            <h2>95<span>%</span></h2>
                                       </div>
                                   </div>
                                   <h2 className="text">jquery</h2>
                               </div>
                               </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-2">
                            <div className="box">
                               <div className="desc">
                                   <div className="percent">
                                       <svg>
                                          <circle cx="50" cy="50" r="50"></circle>
                                          <circle cx="50" cy="50" r="50"></circle>
                                       </svg>
                                       <div className="number">
                                            <h2>90<span>%</span></h2>
                                       </div>
                                   </div>
                                   <h2 className="text">webpack</h2>
                               </div>
                               </div>
                            </div>

                      </div>
                    </div>
 
                    <div className="bottom">
                          <div className="row">

                             <div className="col-6 col-md-4 col-lg-3">
                               <div className="desc">
                                   <span className="sp"><i className="fa fa-briefcase fa-2x" aria-hidden="true"></i></span>
                                   <p>2 years Job</p>
                                   <span>Experience</span>
                               </div>
                             </div>
 
                             <div className="col-6 col-md-4 col-lg-3">
                               <div className="desc">
                                   <span className="sp"><i className="fa fa-check-circle fa-2x" aria-hidden="true"></i></span>
                                   <p>+111 Projects</p>
                                   <span>Completed</span>
                               </div>
                             </div>

                             <div className="col-6 col-md-4 col-lg-3">
                               <div className="desc">
                                   <span className="sp"><i className="fa fa-user-circle fa-2x" aria-hidden="true"></i></span>
                                   <p>Freelance</p>
                                   <span>Available</span>
                               </div>
                             </div>

                            <div className="col-6 col-md-4 col-lg-3">
                               <div className="desc">
                                   <button>Download CV</button>
                               </div>
                            </div>

                      </div>
                    </div>

                    <div className="footer">
                        <a href="https://www.facebook.com/profile.php?id=100005040606089" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square animate__animated animate__rollIn" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100005040606089" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter animate__animated animate__rollIn"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100005040606089" target="_blank" rel="noopener noreferrer"><i className="fa fa-github animate__animated animate__rollIn"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100005040606089" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-snapchat animate__animated animate__rollIn"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100005040606089" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram animate__animated animate__rollIn"></i></a>
                    </div>

                </div>
            </Tilt>
           </div> 
        </div>
 
    );
}

export default AboutMe;