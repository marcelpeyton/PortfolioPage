import React from "react";
import "../styles/LogoFooter.css";
import githubpp from './githubpp.png';
import linkedin from './linkedin.png';
const LogoFooter = () => {
  return (
    <div className="logos-footer">
        <a
          href="https://github.com/marcelpeyton"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img src={githubpp} alt="Github Logo" className="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcel-peyton-6ba18a276/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img src={linkedin} alt="LinkedIn Logo" className="logo" />
        </a>
    </div>
  );
};

export default LogoFooter;