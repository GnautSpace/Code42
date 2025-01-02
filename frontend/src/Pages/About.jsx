import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skills from "./Skills.jsx";
import "../style/About.css";
import TypingAnimation from "@/components/magicui/typing-animation";
import alienWithBook from "../assets/alien-with-book.png";


function About() {
 
  //const controls = useAnimation();

  const { ref, inView } = useInView({
    triggeronce: true,
    threshold: 0.1,
  })
  {/*
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    {
       controls.start({ opacity: 1, y: 0, transition: { duration: 2 } });
    } else {
      controls.start({
        y: "-80vw",
        opacity: 0,
        transition: { duration: 2 },
      });
    }

  }, [controls, inView]);*/}

  {/*
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,

      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,

      slidesToSlide: 1,
    },
  };
  */}


  return (
    <div ref={ref} className="about">
    
      <main className="main-content">
        <div >
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          className="main-content-h"
          transition={{ ease: "easeOut", duration: 2 }}
        >
          ABOUT ME?  
        </motion.h1>
        
          <TypingAnimation
            className="main-content-h"
            text="Mostly Harmless"
           
          />
         
          </div>
        <div className="about-p">
          <motion.p

            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '1.5rem', padding: '20px' }}
          >



            In the beginning, the universe was created. This made a lot of people
            very angry and has been widely regarded as a bad move. But I'm here to
            tell you more about <span className="italic">myself!</span>
            <div className="sub-about-p">
            Hi, I'm <span className="italic">Gnaut</span>! A space wanderer currently dabbling in React, python and Hacakthon creativity - happy to have you aboard!
            </div>
          </motion.p>
        </div>

        <section className="merge">
          <motion.div
            initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: 1, y: 1 }}

            transition={{ ease: "easeOut", duration: 2 }}
            className="skills "
          >
           
            <Skills />
          </motion.div>
          <div className="sub-merge">

      
          <img src={alienWithBook} className="alien-with-book-img" alt="alien-with-a-book"/>

          <div className="bio ">
              
          
              <h2>Background and Skills</h2>
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                
                transition={{ ease: "easeOut", duration: 2 }}

              >
                
                Before stepping into coding universe, I explored different stars (interests) but found my orbit here. A budding developer and a CybSec enthusiast trying to master the tools of the trade, one experiment at a time. 
              </motion.p>
        
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              My tech stack include Java, React, Python, JavaScript, HTML, CSS, SQL, Git etc. Hacakthon participant with experience brainstorming and building projects within tight deadline.

            </motion.p>
          </div>
          </div>
        </section>

        {/*} <motion.section
          initial={{ opacity: 0, y: 0.5 }}
          animate={{ opacity: 1, y: 1 }}

          transition={{ ease: "easeOut", duration: 2 }}
          className="hobbies"
        >
          <h2>Interstellar Hobbies</h2>
          <p>
            When I'm not coding, I enjoy exploring various creative endeavors,
            including:
          </p>
          <ul>
            <li>
              Macro Photography: Capturing the minute details of our world,
              revealing hidden beauty.
            </li>
            <li>
              AI Art Creation: Using technology to generate unique artworks and
              music.
            </li>
            <li>
              Sketching and Painting: Bringing my visions to life on canvas.
            </li>
            <li>
              Reading Books: Delving into new worlds and ideas through
              literature.
            </li>
            <li>Playing Chess: Engaging in strategic challenges.</li>
          </ul>
        </motion.section>*/}


      </main>
    </div>
  );
}
/*
window.addEventListener('scroll', () => {
  const element = document.querySelector('.ani');
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
  }
});*/
export default About;
