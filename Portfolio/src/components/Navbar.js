import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <ul className="navbar-links">
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;