import './App.css';
import Home from "./components/home"
import AvailablePets from "./components/availablepets";
import Signup from "./components/signupform";
import Login from "./components/loginForm";
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
          <Route path={"/signupform"} element={<Signup/>} />
          <Route path={"/loginform"} element={<Login/>} />
          <Route path={"/owners"} element={<Owners/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/contact"} element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
