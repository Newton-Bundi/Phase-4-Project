import React, { useState } from 'react';
import '../css/loginsignup.css';

import user_icon from '../images/person.png';
import email_icon from '../images/email.png'; 
import password_icon from '../images/password.png'; 

const Login = () => {


  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        
      <div className="input">
          <img src={email_icon} alt="" />
           <input type="email" placeholder="Email id"/>       
      </div>
      <div className="input">
          <img src={password_icon} alt="" />
           <input type="password" placeholder="Password"/>       
      </div>
      </div>
      <div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>
       

      <div className="submit-container">
        <div className="submit gray" onClick={()=>{}}>Login</div>
      </div>
    </div>
  );
};

export default Login;