import React from 'react'
import './ownercard.css';

function Card ({card}) {

  
    return (
      <div className="card">
        <div className="top-section">
          <img src={card.imageUrl} alt="Card" className="owner-card-image" height={150} width={150}/>
        </div>
        <div className="middle-section">
          <h1 className="card-name">{card.username}</h1>
        </div>
        <div className="bottom-section">
          <span>
          <p className="owner-card-text">Age: {card.age}</p>
          </span>
          <span>
          <p className="owner-card-text">Pets: {card.pets}</p>
          </span>
          </div>
      </div>
    );
  };

export default Card;