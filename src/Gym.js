import React from 'react';
import './CSS/index.css'
import './CSS/gym.css'
import GymSlider from './Components/GymSlide';
import GymRow from './Components/GymRow';

export default function Gym() {
  return (
    <>
      <GymSlider />
      <div id='Title'>Explore Items</div>
      <GymRow />
      <GymRow />
      <GymRow />
    </>
  )
}