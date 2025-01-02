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
      <section id="about">
      <About />
      </section>
      <section id="projects">
      <Projects />
        
      </section>
      <section id="contact">
        <Contact/>
      </section>
   
    </div>
  );
};

export default SectionPage;
