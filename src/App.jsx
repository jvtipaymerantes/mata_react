import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { signOut } from 'firebase/auth'
import './App.css'

import Register from './components/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'


function App() {
  signOut(auth)
  return (
    <>                                                         
      <Navbar />

      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about"  element={<About/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
        </Routes>
      </Router>


      <Footer />
      
    </>
  )
}

export default App
