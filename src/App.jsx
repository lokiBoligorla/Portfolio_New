

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import BackgroundVideo from "./assets/Background_Animated.mp4";
import ProfilePhoto from "./assets/Profile_img_1.jpg";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="background-video-container">
          <video autoPlay loop muted className="background-video">
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<About profilePhoto={ProfilePhoto} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Certifications />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
