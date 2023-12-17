import './App.css';
import Home from "./components/home"
import AvailablePets from "./components/availablepets";
import LoginSignup from "./components/signupform";
import Owners from './components/owners';
import Contact from './components/contact';
import About from './components/about';
import NavBar from './components/nav';
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
