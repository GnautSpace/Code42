
/*import { motion, useMotionValue, useSpring } from "framer-motion";*/


import "../style/Projects.css";
{
  /*function ProjectCard({ title, description, liveDemoUrl, imageUrl }) {
  return (
    <a
      href={liveDemoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="planet-card"
    >
      <div className="planet">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="planet-image" />
        )}
        <div className="planet-details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}*/
}

function ProjectCard({ proj }) {
  return (
    <div className="project-card">
      <img src={proj.imageUrl} className="project-image"/>
      <h3>{proj.title}</h3>
      <div className="project-details">
        <p>{proj.description}</p>
      </div>
      <a href={proj.liveDemoUrl} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
