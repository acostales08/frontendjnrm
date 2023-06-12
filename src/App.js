import React from 'react'
import { Home,Services, About, Contact, Login } from './Pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default App
