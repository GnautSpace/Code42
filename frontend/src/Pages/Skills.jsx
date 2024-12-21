import React from "react";

{
  /*}
const skillsData = [
  { skillName: "Java", percentage: 80 },
  { skillName: "Python", percentage: 40 },
  { skillName: "JavaScript", percentage: 70 },
  { skillName: "React", percentage: 50 },
  { skillName: "HTML/CSS", percentage: 80 },
  { skillName: "SQL", percentage: 75 },
];
const SkillsCarousel = () => {
  return (
    <div className="skills-container">
      <Carousel
        additonalTransform={0}
        arrowsautoPlaySpeed={3000}
        centerMode={false}
        className="carousel"
        containerClass="container"
        dotListClass=""
        draggablefocusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {skillsData.map((skill, idx) => (
          <SkillCard
            skillName={skill.skillName}
            percentage={skill.percenatge}
          />
        ))}
      </Carousel>
    </div>
  );
};*/
}
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  
  "javascript",
  
  "java",
  "react",
  
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  
  "vercel",
  
  "git",

  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",

];

function Skills() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} className="skills-cloud" />
    </div>
  );
}
export default Skills;