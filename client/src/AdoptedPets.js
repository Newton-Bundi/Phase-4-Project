import React from 'react';
import PetCard from './PetCard';

const AdoptedPets = ({ adoptedPets }) => {
  return (
    <div>
      <h1>Adopted Pets</h1>
      {adoptedPets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
    </div>
  );
};

export default AdoptedPets;
