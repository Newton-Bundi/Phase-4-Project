import React, { useEffect, useState } from 'react';
import Card from './ownercard';
import '../css/owners.css';

function Owners () {
  const [cardData, setCardData] = useState([]);

  const fetchData = () => {
    return fetch('http://127.0.0.1:5000/owners') 
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
    <div className="owner-header">
      <h1 style={{fontSize:"60px"}}>Meet our happy customers</h1>
      <div className="card-list">
        {cardData.map((card) => (
          <Card
            key={card.id}
            card={card}
            imageUrl={card.imageurl}
            name={card.username}
            pets={card.pets}
          />
        ))}
      </div>
    </div>
  );
};

export default Owners;