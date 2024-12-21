
import "../style/Contact.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fish from "../assets/fish1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";
import MarvinBot from "../Pages/MarvinBot";
import robotIcon from "../assets/robot.png";
import { useState } from "react"

function Contact() {
  const [state, handleSubmit] = useForm("xrbgzavb");
  const [chatVisible, setChatVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleChat = () => {
    setChatVisible((prev) => !prev); 
  };

{/*
  if (state.succeeded) {
    return <p className="form-confirmation">Transmission received. Now I just have to figure out how to stop the Vogon poetry... and then I’ll get back to you!</p>;
  }*/}
  


  
  return (
    <div className="contact">
      <main className="main-content">
        <h2>
          The answer to the ultimate question of life, the universe, and
          everything is...
        </h2>
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="main-content-h"
        >
          CONTACT ME! 
        </motion.h1>

        <div className="wrapper">
          {!state.succeeded?
          (<section className="contact-form">
            <h2 className="contact-form-h">Send a signal across the galaxy</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/*}<label htmlFor="name">Name</label>*/}
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name, traveler?"
                  required
                />
              </div>
              <div className="form-group">
                {/*<label htmlFor="email">Email</label>*/}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Earthly Email? (We won't sell it to the Vogons)"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                {/*<label htmlFor="message">Message</label>*/}
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Got a quirky thought?"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                disabled={state.submitting}
              >
                Blast Off!
              </motion.button>
            </form>
          </section>):(
            <section className="contact-from">
              <p className="form-confirmation">Transmission received. Now I just have to figure out how to stop the Vogon poetry... and then I’ll get back to you!</p>

            </section>
          )}
          <div className="divider"></div>
          <section className="contact-info">
          <motion.span
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="phrase"
            >
              So long, and thanks for all the fish!
            </motion.span>
            <img src={fish} alt="fish" className="fish" />
            <div className="icons">
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <img src={robotIcon} alt="robot" className="robot-icon" onClick={toggleChat} />
      {chatVisible && <MarvinBot />}
    </div>
    
  );
}

export default Contact;
