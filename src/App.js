import React from 'react'
import { Home,Services, About, Contact, Login } from './Pages'
import { DashboardContent, MemberContent, SalesContent, ClientPage, PromoPage, ProductPage, ReservationPage } from './Pages/sys-dashboard'
import DashboardLayout from './Components/Dashboard-layout/DashboardLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />} >
          <Route index element={<DashboardContent />} />
          <Route path='sales' element={<SalesContent />} />
          <Route path='client' element={<ClientPage />} />
          <Route path='member' element={<MemberContent />} />
          <Route path='promo' element={<PromoPage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='reservation' element={<ReservationPage />} />
        </Route>
       
      </Routes>
    </Router>
  )
}

export default App
