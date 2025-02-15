import React from 'react'
import '../assets/styles/button.css'
const Button = (props) => {
  return (
    <button className='button-main'>{props.title}</button>
  )
}

export default Button;