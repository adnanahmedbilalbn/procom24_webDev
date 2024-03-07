import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashboard';
import MerchantDashboard from './pages/MerchantDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/customer/login' element={<Login prop="customer"/>} />
        <Route exact path='/merchant/login' element={<Login prop="payhabib"/>} />
        <Route exact path='/customerDashboard' element={<CustomerDashboard />} />
        <Route exact path='/merchantDashboard' element={<MerchantDashboard />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
