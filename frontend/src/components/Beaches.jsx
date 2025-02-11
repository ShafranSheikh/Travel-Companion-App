import React from 'react'
import Card from './Card'
import temp1 from '../assets/images/beach-temp.jpg'
import temp2 from '../assets/images/beach-temp-2.jpg'
import temp3 from '../assets/images/beach-temp-3.jpg';
import temp4 from '../assets/images/beach-temp-4.jpg'
const Beaches = () => {
  return (
    <>
      <Card image={temp1} name={"Mirissa"} location={"Galle,Srilanka"} />
      <Card image={temp2} name={"Benthota"} location={"Galle,Srilanka"}/>
      <Card image={temp3} name={"Arugam Bay"} location={"Baticaloe,Srilanka"}/>
      <Card image={temp2} name={"Nilaveli"} location={"Trincomalee,Srilanka"}/>
    </>
  )
}

export default Beaches