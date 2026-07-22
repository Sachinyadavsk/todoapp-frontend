import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

// page to connected path 
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Services from './pages/Services';
import Contact from './pages/Contact';


// connecting the website pages
import Desclaimer from "./pages/Desclaimer";
import Faqs from "./pages/Faqs";
import Policy from "./pages/Policy";
import TermConditions from "./pages/TermConditions"
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// auth user router link
import Todo from './auth/Todo';
import Dashboard from './auth/Dashboard';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Abouts />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/task/start' element={<Todo />} />

        {/* website pages required */}
        <Route path='/desclaimer' element={<Desclaimer />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/privacy-policy' element={<Policy />} />
        <Route path='/terms-conditions' element={<TermConditions />} />

        {/* auth pages connect with app.js */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />

        {/* auth users page  */}
        <Route path='/user/dashboard' element={<Dashboard />} />

      </Routes>
    </div>
  )
}

export default App
