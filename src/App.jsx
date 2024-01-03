import React, { useEffect, useState } from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';

const App = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
   window.scrollY > 0 ? setActive(true) : setActive(false);
  }
 
   useEffect(() => {
     window.addEventListener('scroll', isActive);
     return () => {
       window.removeEventListener("scroll", isActive)
     }
   }, []);
   
  return(
    <div>
    <div className={`app_header `}>
      <div className={`header-fixed ${active ? 'bg' : ''}`}>
      <Navbar />
      </div>
     <Header />
    </div>
     <AboutUs />
     <SpecialMenu />
     <Chef />
     <Intro />
     <Laurels />
     <Gallery />
     <FindUs/>
     <Footer />
   </div>
  )
};

export default App;