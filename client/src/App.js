import './App.css';
import Home from "./home"
import AvailablePets from "./AvailablePets";
import SignupForm from "./SignupForm";
import Owners from './Owners';
import Contact from './Contact';
import About from './About';
import NavBar from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/signup"} element={<SignupForm />} />
          <Route path={"/availablepets"} element={<AvailablePets />} />
          <Route path={"/owners"} element={<Owners />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
