import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./About.css";
import profilePhoto from "../assets/Profile_img_2.jpg";
import resume from "../assets/Lokesh_Resume.pdf";

const fullName = "Lokesh Boligorla"; // Your name for animation

const About = () => {
  const [displayName, setDisplayName] = useState(""); // Displayed name state
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayName((prev) => fullName.substring(0, index + 1));
      setIndex((prevIndex) => (prevIndex + 1) % (fullName.length + 1)); // Reset after full name
    }, 300); // Typing speed

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <section className="about">
      <div className="about-container">
       
        <div className="about-image">
          <img src={profilePhoto} alt="Lokesh Boligorla" />
        </div>

        <div className="about-content">
          <h2 className="about-title">
            Hi, I'm <span className="typing-name">{displayName}</span><span className="cursor">|</span>
          </h2>
          <p className="about-text">
            A passionate <span className="highlight">Full-Stack Web Developer</span>  
              skilled in modern technologies. I love crafting beautiful, high-performance  
            websites that enhance user experience.
          </p>

          {/* Buttons Section */}
          <div className="button-container">
            <a href={resume} download className="resume-button">
              Download Resume
            </a>
            <button 
              className="connect-button"
              onClick={() => navigate("/contact")} 
            >
              Connect Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
