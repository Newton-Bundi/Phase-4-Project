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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
        <Route path={"/"} element={<Home/>} />
          <Route path={"/pets"} element={<Pets/>} />
          <Route path={"/signupform"} element={<Signup/>} />
          <Route path={"/loginform"} element={<Login/>} />
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