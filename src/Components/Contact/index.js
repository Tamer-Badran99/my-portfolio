import React from 'react';
import './style.css';
import ImageContact from '../../Images/contact-compressor.svg';
import Particles from 'react-particles-js';
import f from '../particles.json';


function Contact() {
 
   return (
      
     <div className="contact">
       <Particles className="h" params={f} />
        <div className="container">
            <div className="contact-box">
                 <img className="animate__animated animate__bounceIn" src={ImageContact} alt="img-contact" />
                 <ul>
                    <li><i className="fa fa-envelope-o" aria-hidden="true"></i><span> : tamer.i.badran@gmail.com</span></li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i><span> : +(972) 592 547 775</span></li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><span> : Tulkarm, Palestine</span></li>
                 </ul>
                 <div className="links">
                        <a href="https://www.facebook.com/profile.php?id=100005040606089" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square animate__animated animate__rollIn" aria-hidden="true"></i></a>
                        <a href="https://github.com/Tamer-Badran99" target="_blank" rel="noopener noreferrer"><i className="fa fa-github animate__animated animate__rollIn"></i></a>
                        <a href="https://www.linkedin.com/in/tamer-badran-b88205252/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square animate__animated animate__rollIn"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100005040606089" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-snapchat animate__animated animate__rollIn"></i></a>
                        
                    </div>
            </div>
        </div>
     </div>
  
   );


}

export default Contact;