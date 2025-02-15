import React from 'react'
import '../assets/styles/card.css';
import temp from '../assets/images/beach-temp.jpg'
import Button from './Button';
const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={props.image} alt="" />
        <div className="card-content">
            <h3>{props.name}</h3>
            <h4>{props.location}</h4>
        </div>
        <Button title={"Reserve"}/>
    </div>
  )
}

export default Card