import React from 'react';
import './style.css';
import Particles from 'react-particles-js';
import f from '../particles.json';

function Resume() {

    return (
       
        <div className="resume">
          <Particles className="h" params={f} />
            <div className="container">
                <div className="box">

                    <div className="desc">
                        <div className="experience">
                            <h2>Experience</h2>
                        </div>
                         <div className="up animate__animated animate__slideInUp">
              
                          <div className="left">
                            <h5>Front-End Developer</h5>
                            <div className="date">
                                <i className="fa fa-calendar" aria-hidden="true"></i><span> 01/06/2020 - 31/12/2020 | Training</span>
                            </div>
                            <p>I trained at a German company (DataRhine) remotely. For six months in a team, where we completed a number of websites, then we got a certificate of experience from this company</p>
                          </div>

                          <div className="right">
                            <h5>Front-End Developer</h5>
                            <div className="date">
                                <i className="fa fa-calendar" aria-hidden="true"></i><span> 01/2022 - till today | Al Istiqlal University</span>
                            </div>
                            <p>One year experience in Front End by working as a Front End Developer at Al Istiqlal University in Jericho, Palestine</p>
                          </div>
        
                        </div>

                    </div>
                      
                    <hr />

                    <div className="desc">
                        <div className="eduation">
                            <h2>Education</h2>
                        </div>
                        <div className="up animate__animated animate__slideInUp">
                          <div className="left">
                            <h5>Secondary Degree</h5>
                            <div className="date">
                                <i className="fa fa-calendar" aria-hidden="true"></i><span> 2012 - 2017 | High School</span>
                            </div>
                            <p>I finished this stage of the science section with an excellent grade</p>
                          </div>
                          <div className="right">
                            <h5>Computer Engineering</h5>
                              <div className="date">
                                <i className="fa fa-calendar" aria-hidden="true"></i><span> 02/09/2017 - 28/08/2021 | PTUK</span>
                              </div>
                              <p>I have a Bachelor's degree in Computer Engineering from Palestine Technical
                                 University Kadoorie</p>
                          </div>
                          </div>
                    </div>

                    <hr />

                </div>
            </div>
        </div>
      
    );
}

export default Resume;