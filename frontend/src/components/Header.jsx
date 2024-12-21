import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (id) => {
    toggleMenu();
    scrollToSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${scrolled ? "scrolled" : ""}`}>
      <div className="logo-div">
        <img src={logo} className="logo" alt="logo"/>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <Link to="/home" onClick={() => handleClick("home")}>
          Home
        </Link>
        <Link to="/about" onClick={() => handleClick("about")}>
          About
        </Link>
        <Link to="/projects" onClick={() => handleClick("projects")}>
          Projects
        </Link>

        <Link to="/contact" onClick={() => handleClick("contact")}>
          Contact
        </Link>
      </nav>

      {/* <motion.nav animate={isOpen ? "open" : "closed"} variants={menuVariants}>
        <ul>
          <motion.li variants={linkVariants}>
            <Link to="/home" onClick={() => handleClick("home")}>
              Home
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/about" onClick={() => handleClick("about")}>
              About
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/projects" onClick={() => handleClick("projects")}>
              Projects
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/contact" onClick={() => handleClick("contact")}>
              Contact
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
      */}
    </header>
  );
}

export default Header;
