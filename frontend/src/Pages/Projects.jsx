import { useState, useRef } from "react";

import { projectsData } from "./project-data/ProjectData.jsx";
import ProjectsSlider from "./ProjectsSlider.jsx";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../style/Projects.css";
import ufo from "../assets/ufo2.png";

function Projects() {
  const { ref, inView } = useInView({
    triggeronce: true,
    threshold: 0.1,
  })

  const [activeSection, setActiveSection] = useState(null);

  const toggleReactProj = () => {
    if (activeSection === "react") {
      setActiveSection(null);
    } else {
      setActiveSection("react");
    }
  };
  const togglePythonProj = () => {
    if (activeSection === "python") {
      setActiveSection(null);
    } else {
      setActiveSection("python");
    }
  };

  return (
    <div className="projects-section">
      <motion.h2 ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          className="h2"
          transition={{ ease: "easeOut", duration: 2 }}>PROJECTS<img src={ufo} className="ufo-img" alt="ufo"/></motion.h2>
      <div className="btn-container">
        <motion.button
          onClick={toggleReactProj}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="btn"
        >
          {activeSection === "react" ? "Hide" : "Show"}
        </motion.button>
        <motion.button
          onClick={togglePythonProj}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="btn"
        >
          {activeSection === "python" ? "Hide" : "Show"}
        </motion.button>
      </div>
      <AnimatePresence>
        {activeSection === "react" && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ ease: "easeInOut" ,duration: 0.5 }}
          >
            <h2>React Projects</h2>
            <ProjectsSlider projects={projectsData.reactProjects} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeSection === "python" && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ ease: "easeInOut" ,duration: 0.5 }}
            
          >
            <h2>Python Projects</h2>
            <ProjectsSlider projects={projectsData.pythonProjects} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
