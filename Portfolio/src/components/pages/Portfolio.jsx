import React from "react";
import "../../styles/Portfolio.css";
import meathead from './PortfolioPictures/meathead.png';
import weatherapp from './PortfolioPictures/weatherapp.png';
import tlp from './PortfolioPictures/tlp.png';
import database from './PortfolioPictures/database.png';
import LogoFooter from '../LogoFooter';

const Portfolio = () => {
  return (
    <div className="grid-page" style= {{ paddingTop: "80px", backgroundColor: "#8BCBF1"}}>
      <h1 className="grid-title">Portfolio</h1>
      <div className="grid-container">        
          <a            
            href="https://github.com/marcelpeyton/meathead"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item"
          >
            <h2 className="item-title">Meathead</h2>
            <img src={meathead} alt="Title Page for static website" className="item-image" />
            <p className="item-description">Static website using local storage</p>
          </a>
          <a            
            href="https://github.com/marcelpeyton/WeatherAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item"
          >
            <h2 className="item-title">Weather App</h2>
            <img src={weatherapp} alt="Weather API Screenshot" className="item-image" />
            <p className="item-description">Static website using a Weather API. Back end/Front end communication</p>
          </a>
          <a            
            href="https://github.com/marcelpeyton/Content-Management-Systems-CMS-"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item"
          >
            <h2 className="item-title">Content Management Systems (SQL)</h2>
            <img src={database} alt="Command Line Screenshot" className="item-image" />
            <p className="item-description">Back end command line program that uses SQL</p>
          </a>
          <a            
            href="https://seam.cs.umd.edu/Archive/202301/tlp/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item"
          >
            <h2 className="item-title">Techproon - A Technical Language Processor</h2>
            <img src={tlp} alt="Command Line Screenshot" className="item-image" />
            <p className="item-description">Mock software engineering project which had a real client. Worked in a group to deliver to a client. Uses AI tools to provide a unique solution to the problem.</p>
          </a>
      </div>
      <LogoFooter/>
    </div>
    
  );
};

export default Portfolio;
