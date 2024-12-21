import { memo } from "react";

import ProjectCard from "./ProjectCard.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import  {projectsData}  from "./project-data/ProjectData.jsx";
import "../style/Projects.css";


const ProjectsSlider = memo(({ projects }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    smallTablet: {
      breakpoint: { max: 768, min: 420 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="projects-container">
      {/*}
      <h2>React Projects</h2>
      <div className="projects-grid">
        {projectsData.reactProjects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
      <h2>Python Projects</h2>
      <div className="projects-grid">
        {projectsData.pythonProjects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>*/}
      {/*
      <Carousel
        arrows={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={500}
        renderButtonGroupOutside={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        rewindWithAnimation={true}

      >

        {projects.map((proj, idx) => (
          <div key={proj.id}>
            <ProjectCard key={idx} proj={proj} />
          </div>
        ))}


      </Carousel>*/}

      <Carousel
        arrows={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={500}
        renderButtonGroupOutside={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px" // Adjust padding here if necessary
        rewindWithAnimation={false} // Test responsiveness without animation
      >
        {projects.map((proj) => (
          <div key={proj.id} className="project-div">
            <ProjectCard proj={proj} />
          </div>
        ))}
      </Carousel>

    </div>
  );
});

export default ProjectsSlider;
