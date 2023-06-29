import React from 'react'
import { Home, Samplelogin, Sample, Login } from './Pages'
// import { Sample } from './Pages/Sample'
import { DashboardContent, MemberContent, SalesContent, PromoPage, ProductPage, ReservationPage } from './Pages/sys-dashboard'
import DashboardLayout from './Components/Dashboard-layout/DashboardLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sample" element={<Sample />} />
        <Route path="/login" element={<Samplelogin />} />
        <Route path="admin" element={<Login />} />
        <Route path="dashboard" element={<DashboardLayout />} >
          <Route index element={<DashboardContent />} />
          <Route path='sales' element={<SalesContent />} />
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
