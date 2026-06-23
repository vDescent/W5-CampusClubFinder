import React from 'react'

import { Routes, Route, Router } from 'react-router'

// Import pages
import Home from './pages/Home'
import ClubList from './pages/ClubList'
import About from './pages/About'
import ClubDetail from './pages/ClubDetail'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'


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
  // let test = clubs[5].image;
  // let test = require('./assets/img/01_robotics.jpg');
  // console.log(test);

  return (
    // <div className='min-h-screen border-green-500 flex flex-col items-center'>
    <div className="">
      <Navbar/>
      <Routes>
        {/* <h1 className='text-red-500'>Hello world</h1>
        <p className='text-green-500'>testing tailwind</p>
        <img src={test} alt="" /> */}
        
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/clubs' element={<ClubList/>}></Route>
        <Route path='/clubs/:clubId' element={<ClubDetail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

    </div>
  )
}

export default App
