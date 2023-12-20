import PetCard from './petcard';
import React from 'react';

const AvailablePets = ({availablePets,handleAdoption,handleDelete}) => {


  return (
    <div>
      <h1>Available Pets</h1>
      {availablePets.map((pet) => (
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
        pet={pet}       
        handleAdoption={handleAdoption}
        handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default AvailablePets;
