import React from 'react';
import './CSS/index.css'
import SlingSlider from './Components/SlingSlide';
import SlingRow from './Components/SlingRow';

export default function Sling() {
  return (
    <>
      <SlingSlider />
      <div className='Title'>Explore Items</div>
      <SlingRow />
      <SlingRow />
      <SlingRow />
    </>
  )
}