import React, { useState } from 'react';
import '../css/loginsignup.css';

import Notification from './notification';

const AddPet = () => {
  const [age, setAge] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [petType, setPettype] = useState('');
  const [breed, setBreed] = useState('');
  const [price, setPrice] = useState('');
  const [petColor, setPetColor] = useState('');
  const [name, setName] = useState('');
  
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,breed,petType);
    fetch('http://localhost:8002/pets', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name,
        petType,
        imageUrl,
        age,
        price,
        petColor,
        imageUrl,
        adopted:false,
        breed,
      }),
    }).then((res) => {
      
      if (res.status === 200 || res.status === 201) {
        setStatus('success');
        window.location.href = '/pets';
      } else {
        setStatus('error');
      }

      return res.json();
    }).then((data) => {
      setMsg(data.msg);
    })
  }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Add a pet</div>
        <div className="underline"></div>
      </div>
       <div className="inputs">
        <div className="input">
        <img src={"password_icon"} alt="" />
           <input type="text" placeholder="pet name" onChange={(e) => setName(e.target.value)}/>
        </div>
      </div>
      
      <div className="input">
      <img src={"password_icon"} alt="" />
           <input type="text" placeholder="pet type e.g Dog" onChange={(e) => setPettype(e.target.value)}/>       
      </div>
      <div className="input">
      <img src={"password_icon"} alt="" />
           <input type="text" placeholder="breed" onChange={(e) => setBreed(e.target.value)}/>       
      </div>
      <div className="input">
      <img src={"password_icon"} alt="" />
           <input type="number" placeholder="price" onChange={(e) => setPrice(e.target.value)}/>       
      </div>
      <div className="input">
      <img src={"password_icon"} alt="" />
           <input type="text" placeholder="Pet color" onChange={(e) => setPetColor(e.target.value)}/>       
      </div>
      <div className="input">
      <img src={"password_icon"} alt="" />
           <input type="text" placeholder="Link to pet picture" onChange={(e) => setImageUrl(e.target.value)}/>       
      </div>
      <div className="input">
      <img src={"password_icon"} alt="" />
           <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)}/>       
      </div>
      
       

      <div className="submit-container">
        <div className="submit gray" onClick={handleSubmit} >Add pet</div>
      </div>
      {status && <Notification status={status} msg={msg} />}
    </div>



    
  );
};

export default AddPet;
