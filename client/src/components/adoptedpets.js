import PetCard from './petcard';

const AdoptedPets = ({adoptedPets,handleUnadoption,dataFromParent}) => {

    
  return (
    <div>
      <h1>Adopted Pets</h1>
      {adoptedPets.map((pet) => (
        <PetCard 
        key={pet.id} 
        pet={pet}
        name={pet.name}
        petType={pet.petType}
        breed={pet.breed}
        price={pet.price}
        adopted={pet.adopted}
        petColor={pet.petColor}
        imageUrl={pet.imageUrl}
        age={pet.age}
        owner={pet.owner}
        handleUnadoption={handleUnadoption}
        dataFromParent={dataFromParent}     
        />
      ))}
    </div>
  );
};

export default AdoptedPets;