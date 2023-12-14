import './App.css';
import Home from "./home"
import AvailablePets from "./availablepets";
import LoginSignup from "./signupform";
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
        <Route path={"/"} element={<Home/>} />
          <Route path={"/availablepets"} element={<AvailablePets/>} />
          <Route path={"/signupform"} element={<LoginSignup/>} />
          <Route path={"/owners"} element={<Owners/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/contact"} element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
