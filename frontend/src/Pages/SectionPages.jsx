import React from "react";


import Home from "./Home.jsx";

import Projects from "./Projects.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
const SectionPage = () => {
  return (
    <div>
      
      <section id="home">
        <Home />
      </section>
      <section>
      <About />
      </section>
      <section>
      <Projects />
        
      </section>
      <section>
        <Contact/>
      </section>
   
    </div>
  );
};

export default SectionPage;
