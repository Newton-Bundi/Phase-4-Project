import React from 'react';
import '../css/petcard.css';

const PetCard = ({ name, petType, breed, price, adopted, petColor, imageUrl, age, ownerId, onAdoptClick,handleAdoption=()=>{} }) => {
 
    
    return (
    <div className={`pet-card ${adopted ? 'adopted' : ''}`}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="pet-details">
        <h2>{name}</h2>
        <p>Type: {petType}</p>
        <p>Breed: {breed}</p>
        <p>Price: ${price}</p>
        <p>Color: {petColor}</p>
        <p>Age: {age}</p>
        <p>Owner ID: {ownerId}</p>
        <p>Status: {adopted ? 'Adopted' : 'Available'}</p>
       
        {/* Icons below the status */}
        <div className="icons-container">
          {!adopted && (
            <div onClick={handleAdoption} className="adopt-icon small-icon" style={{ backgroundColor: 'green',cursor:'pointer',padding:"5px",color:"white" }} >
              Adopt
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default PetCard;
