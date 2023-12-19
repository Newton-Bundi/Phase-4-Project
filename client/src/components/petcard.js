import React from 'react';
import '../css/petcard.css';

const PetCard = ({petType,adopted, imageUrl,name,breed,price,petColor,age,owner,pet, handleAdoption,handleDelete,handleUnadoption}) => {
 
    
    return (
    <div className={`pet-card ${pet.adopted ? 'adopted' : ''}`}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="pet-details">
        <h2>{name}</h2>
        <p>Type: {petType}</p>
        <p>Breed: {breed}</p>
        <p>Price: ${price}</p>
        <p>Color: {petColor}</p>
        <p>Age: {age}</p>
        <p>Owner: {owner}</p>
        <p>Status: {adopted ? 'Adopted' : 'Available'}</p>
       
        {/* Icons below the status */}
        <div className="icons-container">
          {!adopted && (
            <div onClick={()=>handleAdoption(pet.id)} className="adopt-icon-small-icon" style={{ margin: "5px", backgroundColor: 'green',cursor:'pointer',padding:"5px",color:"white" }} >
              Adopt
            </div>
          )}
          {!adopted && (<div onClick={()=>handleDelete(pet.id)} className="adopt-icon-small-icon" style={{ margin: "5px", backgroundColor: 'red',cursor:'pointer',padding:"5px",color:"white" }} >
              Remove
            </div>
          )}
          {adopted && (<div onClick={()=>handleUnadoption(pet.id)} className="adopt-icon-small-icon" style={{ margin: "5px", backgroundColor: 'brown',cursor:'pointer',padding:"5px",color:"white" }} >
              Unadopt
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetCard;
