import React from 'react'
import '../css/nav.css'

function NavBar({ dataFromParent }){

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB6_YH-YBUNtcMScjsb7zHQi2NjELgzaU2Q&usqp=CAU"} alt="Card" id="logo" className="logo" height={75} width={75}/>               
                <a className="navbar-brand" href="/">Pet Shop App</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/pets">Pets</a>
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
                    <a className="nav-link active" aria-current="page" href="/addpet">Add pet</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/signupform"> Signup</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/loginform"> Login</a>
                    </li>
                    
                </ul>
                </div>
                <a className="user-name" href="/">Welcome, {dataFromParent}</a>
            </div>
            </nav>
    )
}

export default NavBar