import React from 'react'
import { useState } from 'react'
import './App.css'
import './index.css'
import { clubs } from './data/clubData'
// import testing from './assets/img/01_robotics.jpg'

function App() {
  const [count, setCount] = useState(0)
  // console.log(clubs);
  // console.log(`Ongoing test:`,clubs[0]['image']);
  // console.log(clubs[0].image);
  let test = clubs[5].image;
  // let test = require('./assets/img/01_robotics.jpg');
  // console.log(test);

  return (
    <>
      <h1 className='text-red-500'>Hello world</h1>
      <p className='text-green-500'>testing tailwind</p>
      <img src={test} alt="" />
    </>
  )
}

export default App
