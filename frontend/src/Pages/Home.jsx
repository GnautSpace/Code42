import "../style/Home.css";

//import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypingAnimation from "@/components/magicui/typing-animation";

import alien from "../assets/alien-waving.png";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";*/

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="home-txt">
        <TypingAnimation
          className="h1-a"
          text="D"
        />
        <img src={alien} className="alien-img" alt="alien-waving" />
        <TypingAnimation
          className="h1-b"
          text=" N'T PANIC"
        />
        </div>
        
        <h3> and Dive into My Portfolio</h3>
        
        <p>The journey of a thousand parsecs begins here!</p>
      </div>
      <div className="home-btn">
       
        <motion.a
          className="cta"
          
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          onClick={() => {
            const section = document.getElementById("projects");
            section && section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Explore</span>
          
        </motion.a>
        
        
        <motion.a
          href="/demoUpload.pdf"
          download="My_Resume.pdf"
          className="download-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}

        >
      
           Download Resume{/*<FontAwesomeIcon icon={faDownload} className="download-icon"/>*/}
        </motion.a>
        
      </div>
      
    </div>

  );
}

export default Home;
