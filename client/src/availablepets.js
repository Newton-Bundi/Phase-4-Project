import React from 'react';
import PetCard from './PetCard';

const AvailablePets = ({ availablePets,onAdoptClick }) => {
  return (
    <div>
      <h1>Available Pets</h1>
      {availablePets.map((pet) => (
        <PetCard key={pet.id} {...pet} handleAdoption={()=>onAdoptClick(pet.id)} />
      ))}
    </div>
  );
};

export default AvailablePets;

