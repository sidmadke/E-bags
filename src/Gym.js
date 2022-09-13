import React from 'react';
import './CSS/index.css'
import './CSS/gym.css'
import Slider from './Components/Slider';
import GymRow from './Components/GymRow';

export default function Gym() {
  return (
    <>
      <Slider />
      <div className='Title'>Explore Items</div>
      <GymRow />
      <GymRow />
      <GymRow />
    </>
  )
}