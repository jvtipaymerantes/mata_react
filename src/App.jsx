import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { signOut } from 'firebase/auth'
import './App.css'

import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'


function App() {
  signOut(auth)
  return (
    <>                                                         
      <Navbar />

      <Router>
        <Routes>
          <Route path="./pages/home" element={<Home />}></Route>
          <Route path="./pages/register" element={<Register />}></Route>
          <Route path="./pages/about"  element={<About/>}></Route>
          <Route path="./pages/team" element={<Team/>}></Route>
        </Routes>
      </Router>


      <Footer />
      
    </>
  )
}

export default App
