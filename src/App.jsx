import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
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
      <HashRouter >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>

        <Footer />
      </HashRouter>



    </>
  )
}

export default App
