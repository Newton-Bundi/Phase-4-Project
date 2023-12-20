import './App.css';
import Home from "./components/home"
import Pets from "./components/pets";
import Signup from "./components/signupform";
import Login from "./components/loginForm";
import Owners from './components/owners';
import Contact from './components/contact';
import About from './components/about';
import NavBar from './components/nav';
import AddPet from './components/addpet';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [username, setUsername] = useState('');

  const fetchData = () => {
    return fetch('http://localhost:8002/user/1') 
    .then((response) => response.json())
    .then((data) => {
      setUsername(data.name); 
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  useEffect(() => {
    fetchData()
  }, []); 

  return (
    <div className="App">
      <NavBar dataFromParent={username}/>
      <Router>
        <Routes>
        <Route path={"/"} element={<Home/>} />
          <Route path={"/pets"} element={<Pets dataFromParent={username}/>} />
          <Route path={"/signupform"} element={<Signup/>} />
          <Route path={"/loginform"} element={<Login />} />
          <Route path={"/owners"} element={<Owners/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/contact"} element={<Contact/>} />
          <Route path={"/addpet"} element={<AddPet/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;