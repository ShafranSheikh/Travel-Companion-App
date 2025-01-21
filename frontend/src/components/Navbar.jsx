import React from 'react'
import logo from '../assets/images/Travel_Logo.png';
import '../assets/styles/navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <Link to='/'><li><span>Home</span></li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/gallery'><li>Gallery</li></Link>
        <Link to='/travel'><li>Travel</li></Link>
        <Link to='/login'><li><span>Login</span></li></Link>
      </ul>
    </div>
  )
}

export default Navbar