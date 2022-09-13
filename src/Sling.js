import React from 'react';
import './CSS/index.css'
import Slider from './Components/Slider';
import SlingRow from './Components/SlingRow';

export default function Sling() {
  return (
    <>
      <Slider />
      <div className='Title'>Explore Items</div>
      <SlingRow />
      <SlingRow />
      <SlingRow />
    </>
  )
}