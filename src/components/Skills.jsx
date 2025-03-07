import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML", description: "HTML is the standard markup language for creating web pages." },
  { name: "CSS", description: "CSS is used to style and layout web pages." },
  { name: "JavaScript", description: "JavaScript enables interactive web pages." },
  { name: "Python", description: "Python is a versatile programming language used in web development, data science, and more." },
  { name: "React", description: "React is a JavaScript library for building user interfaces." },
  { name: "Redux", description: "Redux is a state management tool for JavaScript applications." },
  { name: "Responsive Web Design", description: "RWD makes web pages render well on different devices and screen sizes." },
  { name: "Bootstrap", description: "Bootstrap is a front-end framework for responsive web design." },
  { name: "Tailwind CSS", description: "Tailwind CSS is a utility-first CSS framework for rapid UI development." }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(250);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth < 768);
      setRadius(window.innerWidth < 768 ? 150 : 250);
    };

    updateView();
    window.addEventListener("resize", updateView);

    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 1);
    }, 50);

    return () => {
      window.removeEventListener("resize", updateView);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="skills-container">
      <h2 className={`skills-title ${isMobile ? "skills-title-mobile" : "skills-title-desktop"}`}>My Skills</h2>
      <div className="orbit-container">
        {skills.map((skill, index) => {
          const angleOffset = (360 / skills.length) * index;
          const x = Math.cos((angle + angleOffset) * (Math.PI / 180)) * radius;
          const y = Math.sin((angle + angleOffset) * (Math.PI / 180)) * radius;
          return (
            <motion.div
              key={skill.name}
              className="skill-circle"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onClick={() => setSelectedSkill(skill)}
            >
              {skill.name}
            </motion.div>
          );
        })}
      </div>
      {selectedSkill && (
        <motion.div 
          className="skill-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;
