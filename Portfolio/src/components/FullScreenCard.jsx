import React from "react";
import "../styles/FullScreenCard.css";
import proPic from './profilePic.jpg';

const FullScreenCard = () => {
  return (
    <div className="content">
      <h3>
        About Me ~ Marcel Peyton 
      </h3>
      <img class="profilePic" src={proPic} alt="Profile Picture" ></img>
      <p>
      I'm a Computer Engineer with a passion for software development, problem-solving, and continuous learning. A University of Maryland graduate, I'm always looking for new challenges to grow and make an impact. With a strong work ethic and adaptability, I thrive in both independent and team settings. Continue to check out my page and see a sneak peek of what I bring to the table.
      <br></br>
      <br></br>
      </p>
    </div>
  );
};

export default FullScreenCard;