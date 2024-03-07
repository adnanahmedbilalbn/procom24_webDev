
// Sidebar.js
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { MdOutlinePayments } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import { IoQrCode } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { MdDashboard } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";




const MerchantSidebar = ({ setActiveSection, activeSection }) => {

  const [isSidebarActive, setSidebarActive] = useState(false)
  return (
    <>
    <div className={`sidebar ${isSidebarActive? 'sidebar-active' : ''}`}>
      <Nav className="flex-column sidebar-items-container">
        <div
          className={`top-sidebar-item sidebar-item ${activeSection === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveSection('payment')}>
          <span> <MdDashboard /></span>
          <span>Dashboard</span>
        </div>
        <div
          className={`sidebar-item ${activeSection === 'instantPayment' ? 'active' : ''}`}
          onClick={() => setActiveSection('instantPayment')}>
          <span> <LuDollarSign /> </span>
          <span>Payments</span>
        </div>
        <div
          className={`sidebar-item ${activeSection === 'qrScan' ? 'active' : ''}`}
          onClick={() => setActiveSection('qrScan')}>
          <span><PiUsersThreeLight /> </span>
          <span>Customers</span>
        </div>
      </Nav>
    </div>
    <span className='toggle-button' onClick={()=>{setSidebarActive(!isSidebarActive)}} > {isSidebarActive?<AiOutlineClose /> : <RxHamburgerMenu />}</span>

    </>
  );
};
export default MerchantSidebar;