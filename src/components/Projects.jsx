import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

// Correctly import images
import weatherAppImage from "../assets/Weather.png";
import ecommerceImage from "../assets/QuikMart.png";
import quizImage from "../assets/python.png";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "A real-time weather forecasting app with API integration.",
    liveDemo: "https://weather-app-two-kappa-75.vercel.app/",
    image: weatherAppImage, 
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "A full-fledged e-commerce site with cart and payment integration.",
    liveDemo: "https://quick-mart-inky.vercel.app/",
    image: ecommerceImage, 
  },
  {
    id: 3,
    title: "Python Quiz Website",
    description: "An interactive quiz platform built with Python and Django.",
    liveDemo: "https://python-quiz-one.vercel.app/",
    image: quizImage, 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-white relative">
      <h2 className="text-4xl font-bold text-center mb-8 uppercase tracking-wider">
        My Projects
      </h2>
      <div className="projects-container">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card no-underline"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-button">
             Live Demo <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
      <div className="view-all-container">
        <a
          href="https://vercel.com/lokesh-boligorlas-projects" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-all-projects transparent-button no-underline"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;