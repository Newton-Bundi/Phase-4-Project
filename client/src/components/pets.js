import React, { useState } from 'react';
import AvailablePets from './availablepets';
import AdoptedPets from './adoptedpets';

function Pets() {
    const [adoptionStatus, setAdoptionStatus] = useState({
      availablePets: [
        {
          id: 1,
          name: 'Buddy',
          petType: 'Dog',
          breed: 'Labrador Retriever',
          price: 500,
          adopted: false,
          petColor: 'Golden',
          imageUrl: 'https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          age: 2,
          ownerId: 'ABC123',
        },
        {
          id: 2,
          name: 'Rocky',
          petType: 'Dog',
          breed: 'German Shepherd',
          price: 600,
          adopted: false,
          petColor: 'Black and Tan',
          imageUrl: 'https://images.unsplash.com/photo-1619980296991-5c0d64b23950?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          age: 3,
          ownerId: 'GHI789',
        },
        {
          id: 3,
          name: 'Luna',
          petType: 'Dog',
          breed: 'Poodle',
          price: 600,
          adopted: false,
          petColor: 'White',
          imageUrl: 'https://www.southernliving.com/thmb/mF4LmyNA32KAxr2Xm0oSPvOfB8g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-650044139-2000-1671d5d378504f989210a2e22ae6a203.jpg',
          age: 3,
          ownerId: 'GHI789',
        },
        {
          id: 4,
          name: 'Cooper',
          petType: 'Dog',
          breed: 'Dachshund',
          price: 600,
          adopted: false,
          petColor: 'Black and Tan',
          imageUrl: 'https://cdn.pixabay.com/photo/2023/04/07/05/10/dog-7905519_1280.jpg',
          age: 3,
          ownerId: 'GHI789',
        },
  
        {
          id: 5,
          name: 'Finn',
          petType: 'Dog',
          breed: 'Rotweiller',
          price: 750,
          adopted: false,
          petColor: 'Black and brown',
          imageUrl: 'https://ntbrand-wp.s3.amazonaws.com/mystart/wp-content/uploads/2020/03/12150859/My_Rotweiller_00-1170x781.jpeg',
          age: 2,
          ownerId: 'ABC123',
        },
  
        {
          id: 6,
          name: 'Lexi',
          petType: 'Dog',
          breed: 'Bulldog',
          price: 800,
          adopted: false,
          petColor: 'Brown and white',
          imageUrl: 'https://cdn.akc.org/BulldogPup_BlogHeader.jpg',
          age: 2,
          ownerId: 'ABC123',
        },
      ],
      adoptedPets: [
        {
          id: 7,
          name: 'Max',
          petType: 'Dog',
          breed: 'Golden Retriever',
          price: 550,
          adopted: true,
          petColor: 'Beige',
          imageUrl: 'https://as1.ftcdn.net/v2/jpg/01/68/93/76/1000_F_168937669_flXieX0V8ztmBWYZELyJfCJps0RyYXB3.jpg',
          age: 2,
          ownerId: 'JKL012',
        },
        {
          id: 8,
          name: 'Charlie',
          petType: 'Dog',
          breed: 'Beagle',
          price: 400,
          adopted: true,
          petColor: 'Tri-color',
          imageUrl: 'https://images.unsplash.com/photo-1534985111090-85c477f9d813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWdsZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
          age: 1,
          ownerId: 'MNO345',
        },
  
        {
          id: 9,
          name: 'Ollie',
          petType: 'Dog',
          breed: 'Japanese-Spitz',
          price: 300,
          adopted: true,
          petColor: 'White',
          imageUrl: 'https://a-z-animals.com/media/2021/08/Japanese-spitz-running.jpg',
          age: 3,
          ownerId: 'MNO345',
        },
      ],
    });
  
    const handleAdoptClick = (petId) => {
     
      const updatedAvailablePets = adoptionStatus.availablePets.map((pet) =>
        pet.id === petId ? { ...pet, adopted: true } : pet
      );
  
      const adoptedPet = adoptionStatus.availablePets.find((pet) => pet.id === petId);
      const updatedAdoptedPets = [...adoptionStatus.adoptedPets, adoptedPet];
  
      setAdoptionStatus({
        availablePets: updatedAvailablePets,
        adoptedPets: updatedAdoptedPets,
      });
    };
  
    return (
      <div className="App">
        <AvailablePets availablePets={adoptionStatus.availablePets} onAdoptClick={handleAdoptClick} />
        <AdoptedPets adoptedPets={adoptionStatus.adoptedPets} onAdoptClick={handleAdoptClick} />
      </div>
    );
  }
  
  export default Pets;
  