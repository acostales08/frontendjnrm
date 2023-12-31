import React from 'react'
import { Home, Samplelogin, Login, ReservationForm } from './Pages'
import { 
  DashboardContent, 
  MemberContent, 
  SalesContent, 
  PromoPage, 
  ProductPage, 
  ReservationPage, 
  InventoryContent, 
  ServicePage,
  ReportPage
} from './Pages/sys-dashboard'
import {ProductList} from './Components/Content'
import DashboardLayout from './Components/Dashboard-layout/DashboardLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/login" element={<Samplelogin />} />
        <Route path="admin" element={<Login />} />
        <Route path="/ReservationForm" element={<ReservationForm />} />
        <Route path='/sales' element={<SalesContent />} />
        <Route path="dashboard" element={<DashboardLayout />} >
          <Route index element={<DashboardContent />} />
          <Route path='sales' element={<SalesContent />} />
          <Route path='inventory' element={<InventoryContent />} />
          <Route path='member' element={<MemberContent />} />
          <Route path='promo' element={<PromoPage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='reservation' element={<ReservationPage />} />
          <Route path='Service' element={<ServicePage />} />
          <Route path='Report' element={<ReportPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
