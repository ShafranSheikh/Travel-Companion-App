import React from 'react'
import '../assets/styles/hero.css';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='home-section'>
      <h1>Explore the World Your Way</h1>
      <button onClick={()=> navigate('/signup')}>Sign up</button>
    </div>
  )
}

export default Hero