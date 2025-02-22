import React from "react";
import "../styles/NavigationBar.css"; // Import the CSS file for styling
import backgroundimage from './backgroundimage.jpg';

const NavigationBar = ({ currentPage, handlePageChange }) => {
  return (
    <header className="backgroundImage" style={{ 
      backgroundImage: `url(${backgroundimage})`,
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
      minHeight: '25vh' // Ensure the div covers the viewport
    }}>   
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          AboutMe
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
    </header>
  );
};

export default NavigationBar;