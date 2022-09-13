import React from 'react';
import './CSS/index.css'
import './CSS/School.css'
import Slider from './Components/Slider';
import Row from './Components/SchoolRow';

export default function School() {
  return (
    <>
      <Slider />
      <div className='Title'>Explore Items</div>
      <Row />
      <Row />
      <Row />
    </>
  )
}