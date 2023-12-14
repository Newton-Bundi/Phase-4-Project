import React from 'react'
import './nav.css'
import logo from './logo.png'

function NavBar(){

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <img src={logo} alt="Card" id="logo" className="logo" height={75} width={75}/>               
                <a className="navbar-brand" href="/">Pet Shop App</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/availablepets">Available pets</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/owners">Owners</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/contact">Contacts</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/signupform">User login / signup</a>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default NavBar