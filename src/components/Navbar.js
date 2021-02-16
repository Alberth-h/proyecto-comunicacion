import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import './Page.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ml-5">
                <img src={logo} alt="logo" style={{ width:'30px' }}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li class="nav-item active">
                        <a className="nav-link text-white text-uppercase ml-5" href="#">
                            <NavLink to="/" className="textNavbar">INICIO</NavLink>
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link text-white text-uppercase ml-5" href="#">
                            <NavLink to="/about" className="textNavbar">¿QUE OFREZCO?</NavLink>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link text-white text-uppercase ml-5" href="#">
                            <NavLink to="/work" className="textNavbar">¿QUE HAGO?</NavLink>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link text-white text-uppercase ml-5" href="#">
                            <NavLink to="/contact" className="textNavbar">CONTACTO E INFORMACION</NavLink>
                        </a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;