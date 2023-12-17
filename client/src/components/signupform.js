import React, { useState } from 'react';
import '../css/loginsignup.css';

import user_icon from '../images/person.png';
import email_icon from '../images/email.png'; 
import password_icon from '../images/password.png'; 
import Notification from './notification';



const Signup = () => {
  // const [age, setAge] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,email, password);
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: email,
        email,
        password,
      }),
    }).then((res) => {
      
      if (res.status === 200 || res.status === 201) {
        setStatus('success');
        window.location.href = '/loginform';
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
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>
       <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
           <p>username: {email}</p> 
        </div>
      </div>
      
      <div className="input">
          <img src={email_icon} alt="" />
           <input type="email" placeholder="Email id" onChange={(e) => setEmail(e.target.value)}/>       
      </div>
      <div className="input">
          <img src={password_icon} alt="" />
           <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>       
      </div>
      
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
       

      <div className="submit-container">
        <div className="submit gray" onClick={handleSubmit} >Signup</div>
      </div>
      {status && <Notification status={status} msg={msg} />}
    </div>



    
  );
};

export default Signup;