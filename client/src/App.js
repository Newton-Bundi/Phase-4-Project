import './App.css';
import Home from "./home"
import AvailablePets from "./availablepets";
import SignupForm from "./signupform";
import Owners from './owners';
import Contact from './contact';
import About from './about';
import NavBar from './nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
