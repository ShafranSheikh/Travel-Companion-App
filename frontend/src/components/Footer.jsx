import React from 'react'
import '../assets/styles/footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer-container'>
        <ul>
          <Link to='/'><li><span>Home</span></li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          <Link to='/gallery'><li>Gallery</li></Link>
          <Link to='/travel'><li>Travel</li></Link>
        </ul>
    </div>
  )
}

export default Footer