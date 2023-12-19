import PetCard from './petcard';
import React, { useEffect, useState } from 'react';

const AvailablePets = () => {

    const [cardData, setCardData] = useState([]);

    const fetchData = () => {
      return fetch('http://localhost:5000/pets') 
      .then((response) => response.json())
      .then((data) => {
        setCardData(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
  
    useEffect(() => {
      fetchData()
    }, []); 

    

  return (
    <div>
      <h1>All Pets</h1>
      {cardData.map((pet) => (
        <PetCard key = {pet.id} pet={pet}
        />
      ))}
    </div>
  );
};

export default AvailablePets;