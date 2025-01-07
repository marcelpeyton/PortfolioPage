import React from "react";
import "../styles/ContentCard.css"; // CSS for styling

const ContentCard = ({ title, image, paragraph }) => {
  return (
    <div className="content-card">
      <h1 className="content-title">{title}</h1>
      <img src={image} alt={title} className="content-image" />
      <p className="content-paragraph">{paragraph}</p>
    </div>
  );
};

export default ContentCard;