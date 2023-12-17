import PetCard from './petcard';
import React, { useEffect, useState } from 'react';

const AdoptedPets = (props) => {

    const [cardData, setCardData] = useState([]);

    const fetchData = () => {
      return fetch(' http://localhost:8002/pets') 
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

    const adoptedPets = cardData.filter(adoptedpet => adoptedpet.adopted===true);   
    const length = adoptedPets.length
    

  return (
    <div>
      <h1>Adopted Pets</h1>
      {adoptedPets.map((pet) => (
        <PetCard 
        key={pet.id} 
        name={pet.name}
        petType={pet.petType}
        breed={pet.breed}
        price={pet.price}
        adopted={pet.adopted}
        petColor={pet.petColor}
        imageUrl={pet.imageUrl}
        age={pet.age}
        ownerId={pet.ownerId}
        length={length}
        />
      ))}
    </div>
  );
};

export default AdoptedPets;