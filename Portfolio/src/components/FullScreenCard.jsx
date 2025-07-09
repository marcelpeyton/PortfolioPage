import React, { useState } from "react";
import "../styles/FullScreenCard.css";
import proPic from './profilePic.jpg';

const FullScreenCard = () => {
  return (
    <div className="content">
      <h3>
        About Me ~ Marcel Peyton 
      </h3>
      <div class = "twobox">
        <img class="profilePic" src={proPic} alt="Profile Picture" ></img>
        {}
            <div style= {{paddingTop: "20px", backgroundColor: "#8BCBF1"}}>
    <div className="contact-page" style= {{ paddingTop: "50px", backgroundColor: "#CCEBF9", marginTop: "100px"}}>
      <h1 className="contact-title"  style= {{ fontSize: "20px"}}>Contact Me</h1>
      Email: <a href="mailto:marcel-p@outlook.com">marcel-p@outlook.com</a>
      <p>Phone: 410-474-6080</p>
      
    </div>
    </div>
        {}
      </div>
      <p>
      I'm a Computer Engineer with a passion for software development, problem-solving, and continuous learning. A University of Maryland graduate, I'm always looking for new challenges to grow and make an impact. With a strong work ethic and adaptability, I thrive in both independent and team settings. Continue to check out my page and see a sneak peek of what I bring to the table.
      <br></br>
      <br></br>
      </p>
    </div>
  );
};

export default FullScreenCard;