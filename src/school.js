import React from 'react';
import './CSS/index.css'
import './CSS/School.css'
import SchoolSlider from './Components/SchoolSlide';
import Row from './Components/SchoolRow';

export default function School() {
  return (
    <>
      <SchoolSlider/>
      <div id='Title'>Explore Items</div>
      <Row />
      <Row />
      <Row />
    </>
  )
}