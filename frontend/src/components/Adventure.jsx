import React from 'react'
import Card from './Card'
import temp1 from '../assets/images/adv-temp-1.jpg';
import temp2 from '../assets/images/adv-temp-2.jpg';
import temp3 from '../assets/images/adv-temp-3.jpg';
import temp4 from '../assets/images/adv-temp-4.jpg';
const Adventure = () => {
  return (
    <>
      <Card image={temp1} name={"Adam’s Peak"} location={"Nallathanniya,Srilanka"} />
      <Card image={temp2} name={"Knuckles Mountain Range"} location={"Matale/Kandy,Srilanka"} />
      <Card image={temp3} name={"Riverston & The Mini World’s End"} location={"Matale,Srilanka"} />
      <Card image={temp4} name={"Meemure Village Trek"} location={"Meemure, Knuckles Range,Srilanka"} />
    </>
  )
}

export default Adventure