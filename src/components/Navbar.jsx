import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
        <Link to="/" className="logo">Portfolio</Link>
      
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-item">About</Link></li>
        <li><Link to="/skills" className="nav-item">Skills</Link></li> {/* Updated */}
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
        <li><Link to="/resume" className="nav-item">Certifications</Link></li>
        <li><Link to="/contact" className="nav-item">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
