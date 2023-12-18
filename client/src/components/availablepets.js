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

    const availablePets = cardData.filter(availablepet => availablepet.adopted===false);         

    const [adoptedDogs, setAdoptedDogs] = useState(availablePets);

    const onAdoptClick = (index) => {
        // Create a copy of the state array
        const updatedDogs = [...adoptedDogs];
    
        // Update the adopted field to true for the clicked dog
        updatedDogs[index] = { ...updatedDogs[index], adopted: true };
    
        // Update the state with the modified array
        setAdoptedDogs(updatedDogs);
    
        // Send the PATCH request here (replace the URL with your actual API endpoint)
        fetch(`http://localhost:5000/pets/${index}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ adopted: true }),
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error updating adopted status:', error));
      };

      // useEffect(() => {
      //   fetchData()
      // }, [adoptedDogs]); 

  return (
    <div>
      <h1>Available Pets</h1>
      {availablePets.map((pet) => (
        <PetCard
        key={pet.id} 
        handleAdoption={()=>onAdoptClick(pet.id)}
        name={pet.name}
        petType={pet.petType}
        breed={pet.breed}
        price={pet.price}
        adopted={pet.adopted}
        petColor={pet.petColor}
        imageUrl={pet.imageUrl}
        age={pet.age}
        ownerId={pet.ownerId}
        pet={pet}
        />
      ))}
    </div>
  );
};

export default AvailablePets;