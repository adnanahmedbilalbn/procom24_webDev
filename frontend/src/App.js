import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/customerDashboard' element={<CustomerDashboard />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
