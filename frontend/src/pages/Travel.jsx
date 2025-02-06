import React from 'react'
import Tabs from '../components/Tabs'
import Beaches from '../components/Beaches'
import beach from '../assets/images/beach.png';
import adventure from '../assets/images/adventure.png'
import wildlife from '../assets/images/wildlife.png';
import history from '../assets/images/history.png';
import luxury from '../assets/images/luxury.png';
import romantic from '../assets/images/romantic.png'
import Adventure from '../components/Adventure';
import WildLife from '../components/WildLife';
import History from '../components/History';
import Romantic from '../components/Romantic';
import Luxury from '../components/Luxury';
const Travel = () => {
  //Data for tabs
  const tabsData=[
    {
      label: 'Beach Holidays',
      image: beach,
      content: <Beaches/>,
    },
    {
      label: 'Adventure Tours',
      image: adventure,
      content: <Adventure/>,
    },
    {
      label: 'Wildlife Safaries',
      image: wildlife,
      content: <WildLife/>,
    },
    {
      label: 'Culture and Heritage',
      image: history,
      content: <History/>,
    },
    {
      label: 'Honeymoon and Romantic',
      image: romantic,
      content: <Romantic/>,
    },
    {
      label: 'Luxury Gateways',
      image: luxury,
      content: <Luxury/>,
    },
  ];
  return (
    <div><Tabs tabs={tabsData} /></div>
  )
}

export default Travel