import React from 'react';
import './card.css';

const Card = ({ title, description, image }) => {
  return (
      <div className="card">
          {image && <img src={image} alt="card" />}
          <h2>{title}</h2>
          <p>{description}</p>
      </div>
  );
}

export default Card;
