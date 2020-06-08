import React, { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import show from './show';
import Logo from '../../Images/logo.png';

function Navbar() {

  useEffect(() => {
     show();
  },[])

 
   return (
       <Fragment>
         <div className="header-area">
               <div className="logo">
                  <img src={Logo} alt="logo" />
                  <h5>Tamer BA</h5>
               </div>
               <button id="bcx">MENU <i className="fa fa-bars" aria-hidden="true"></i></button>
         </div>

        <div className="menu-box">
            <div id="ov"></div>
            <div id="aa" className="box">
                 <ul>
                    <NavLink exact to="/"><li><i className="fa fa-home" aria-hidden="true"></i> Home</li></NavLink>
                    <NavLink to="/about-me"><li><i className="fa fa-info-circle" aria-hidden="true"></i> About Me</li></NavLink>
                    <NavLink to="/resume"><li><i className="fa fa-address-book" aria-hidden="true"></i> Resume</li></NavLink>
                    <NavLink to="/portfolio"><li><i className="fa fa-user-circle" aria-hidden="true"></i> Portfolio</li></NavLink>
                    <NavLink to="/contact"><li><i className="fa fa-envelope" aria-hidden="true"></i> Contact</li></NavLink>
                 </ul>

            </div>
        </div>
      </Fragment>
   );

}

export default Navbar;