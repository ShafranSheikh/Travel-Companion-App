import React from 'react'
import '../assets/styles/hero.css';
import hero from '../assets/images/hero-image.jpg';
const Hero = () => {
  return (
    <div className='home-section'>
      <h1>Explore the World Your Way</h1>
      <button className='hero-button' onClick={()=> console.log('sign up clicked')}>Sign up</button>
    </div>
  )
}

export default Hero