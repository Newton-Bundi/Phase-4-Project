import React from 'react';
import '../css/petcard.css';
import Notification from './notification';

const PetCard = ({ pet }) => {
    const [status, setStatus] = React.useState(null);
    const [msg, setMsg] = React.useState(null);
    console.log(pet)
    const handleAdoption = () => {
      const token = localStorage.getItem('token');
      fetch(`http://localhost:5000/adopt/${pet.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ adopted: true }),
      }).then(res=>{
        if (res.status === 200 || res.status === 201) {
          setStatus('success');
        } else {
          setStatus('error');
        }
        return res.json()
      }).then(data=>{
        setMsg(data.msg);
      })
    }  


    return (
    <div className={`pet-card ${pet.is_adopted ? 'adopted' : ''}`}>
      {status && <Notification status={status} msg={msg} />}
      <img src={pet.imageUrl} alt={`${pet.name}`} />
      <div className="pet-details">
        <h2>{pet.name}</h2>
        <p>Type: {pet.petType}</p>
        <p>Breed: {pet.breed}</p>
        <p>Price: ${pet.price}</p>
        <p>Color: {pet.petColor}</p>
        <p>Age: {pet.age}</p>
        <p>Owner ID: {pet.ownerId}</p>
        <p>Status: {pet.is_adopted ? 'Adopted' : 'Available'}</p>
       
        {/* Icons below the status */}
        <div className="icons-container">
          {!pet.is_adopted && (
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
