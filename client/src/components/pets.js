import React, { useEffect } from 'react';
import AvailablePets from './availablepets';
import AdoptedPets from './adoptedpets';

function Pets() {

    useEffect(() => {
      }, [AvailablePets.length]); 
  
  
    return (
      <div className="App">
        <AvailablePets />
        <AdoptedPets  length={AvailablePets.length}/>
      </div>
    );
  }
  
  export default Pets;
  