import React, { useState, useEffect } from 'react';
import AvailablePets from './availablepets';
import AdoptedPets from './adoptedpets';

function Pets({dataFromParent}) {

  const [cardData, setCardData] = useState([]);

  const fetchData = () => {
    return fetch('http://localhost:8002/pets') 
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
  let adoptedPets = cardData.filter(adoptedpet => adoptedpet.adopted===true);   

  const [toBeAdopted, setAdoptedDogs] = useState(availablePets);
  const [toBeUnadopted, setUnAdoptedDogs] = useState(adoptedPets);
  const [toBeDeleted, setDeleteDogs] = useState(availablePets);

  const handleAdoption = (index) => {
      // Create a copy of the state array
      const updatedDogs = [...toBeAdopted];
  
      // Update the adopted field to true for the clicked dog
      updatedDogs[index] = { ...updatedDogs[index], adopted: true };
  
      // Update the state with the modified array
      setAdoptedDogs(updatedDogs);
  
      // Send the PATCH request here (replace the URL with your actual API endpoint)
      fetch(`http://localhost:8002/pets/${index}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adopted: true, owner: dataFromParent }),
      })
        .then(response => response.json())
        .then(fetchData())
        .catch(error => console.error('Error updating adopted status:', error));
    };

    useEffect(() => {
      fetchData()
    }, [toBeAdopted]);

    const handleUnadoption = (index) => {
      // Create a copy of the state array
      const updatedDogs2 = [...toBeUnadopted];
  
      // Update the adopted field to false for the clicked dog
      updatedDogs2[index] = { ...updatedDogs2[index], adopted: false };
  
      // Update the state with the modified array
      setUnAdoptedDogs(updatedDogs2);
  
      // Send the PATCH request here (replace the URL with your actual API endpoint)
      fetch(`http://localhost:8002/pets/${index}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adopted: false, owner: null }),
      })
        .then(response => response.json())
        .then(fetchData())
        .catch(error => console.error('Error updating adopted status:', error));
    };

    useEffect(() => {
      fetchData()
    }, [toBeUnadopted]);

    function handleDelete (index){
      // Create a copy of the state array
      let deleteDogs = [...toBeDeleted];
  
      // Update the adopted field to true for the clicked dog
      deleteDogs = deleteDogs.filter((pet) => pet.id !== index);
  
      // Update the state with the modified array
      setDeleteDogs(deleteDogs);

      fetch(`http://localhost:8002/pets/${index}`, {
        
        method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      })
        .then(response => response.json())
        .then(fetchData())
        .catch(error => console.error('Error updating adopted status:', error));

    };

    useEffect(() => {
      fetchData()
    }, [toBeDeleted]);
  
    adoptedPets = adoptedPets.filter((pet) => pet.owner === dataFromParent);
    return (
      <div className="App">
        <AvailablePets 
        availablePets={availablePets}
        handleAdoption={handleAdoption}
        handleDelete={handleDelete}/>
        <AdoptedPets  
        adoptedPets={adoptedPets}
        handleUnadoption={handleUnadoption}
        />
      </div>
    );
  }
  
  export default Pets;
  