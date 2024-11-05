import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';

export default function Routing() {
  return (
    <div>
        <Routes>
          <Route path='/home' element={<Home/>}>
            <Route path='/home/home1' Component={Home1}/>
            <Route path='/home/home2' Component={Home2}/>
            <Route path='/home/home3' Component={Home3}/>
            <Route path='/home/home4' Component={Home4}/>
          </Route>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}
