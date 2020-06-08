import React from 'react';
import Navbar from './Components/Navbar/index';
import Home from './Components/Home/index';
import AboutMe from './Components/AboutMe/index';
import Resume from './Components/Resume/index';
import Portfolio from './Components/Portfolio/index';
import Contact from './Components/Contact/index';
import { BrowserRouter , Route } from 'react-router-dom';


function App() {
  return (
   
    <BrowserRouter>
    
       <Navbar />

       <Route exact path="/" component={Home} />
       <Route exact path="/about-me" component={AboutMe} />
       <Route exact path="/resume" component={Resume} />
       <Route exact path="/portfolio" component={Portfolio} />
       <Route path="/contact" component={Contact} />
    
     </BrowserRouter>

  );
}

export default App;
