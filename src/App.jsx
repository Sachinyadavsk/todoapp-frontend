import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

// page to connected path 
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Abouts />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
