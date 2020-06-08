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
                                <i className="fa fa-calendar" aria-hidden="true"></i><span> 17/08/2018 - 21/01/2020 | Freelancer</span>
                            </div>
                            <p>I worked at freelancer website with team have 10 members like a Front-End Developer , those members from all over the arab world .</p>
                          </div>
                         
                          <div className="right">
                            <h5>Front-End Developer</h5>
                              <div className="date">
                                <i className="fa fa-calendar" aria-hidden="true"></i><span> 13/2/2020 | Course</span>
                              </div>
                              <p>I've finished a front-end Web course 48-hour, from the Arab center for IT, and got a certificate certified by the Ministry of Education and I am one of the people who got creative and professional evaluation in the field .</p>
                          </div>
                        </div>

                    </div>
                    
                    <hr />

                    <div className="desc">
                        <div className="eduation">
                            <h2>Eduation</h2>
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
                            <h5>computer engineering</h5>
                              <div className="date">
                                <i className="fa fa-calendar" aria-hidden="true"></i><span> 02/09/2017 - to now | PTUK</span>
                              </div>
                              <p>Now I am still studying at the university in the field of computer engineering, and when I get my bachelor's degree I am in the master's degree .</p>
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