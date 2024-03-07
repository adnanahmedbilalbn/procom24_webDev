
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

import { BsFileTextFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";

import { CiSettings } from "react-icons/ci";


const MerchantSidebar = ({ setActiveSection, activeSection }) => {

  const [isSidebarActive, setSidebarActive] = useState(false)
  return (
    <>
    <div className={`sidebar ${isSidebarActive? 'sidebar-active' : ''}`}>
      <Nav className="flex-column sidebar-items-container">
        <div
          className={`top-sidebar-item merchant-sidebar-item ${activeSection === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveSection('Dashboard')}>
          <span> <MdDashboard /></span>
          <span>Dashboard</span>
        </div>
        <div
          className={`merchant-sidebar-item ${activeSection === 'Payments' ? 'active' : ''}`}
          onClick={() => setActiveSection('Payments')}>
          <span> <LuDollarSign /> </span>
          <span>Payments</span>
        </div>
        <div
          className={`merchant-sidebar-item ${activeSection === 'Customers' ? 'active' : ''}`}
          onClick={() => setActiveSection('Customers')}>
          <span><PiUsersThreeLight /> </span>
          <span>Customers</span>
        </div>
        <div
          className={`merchant-sidebar-item ${activeSection === 'Payment Request' ? 'active' : ''}`}
          onClick={() => setActiveSection('Payment Request')}>
          <span><BsFileTextFill /> </span>
          <span>Payment Request</span>
        </div>
        <div
          className={`merchant-sidebar-item ${activeSection === 'Report' ? 'active' : ''}`}
          onClick={() => setActiveSection('Report')}>
          <span><MdOutlineLibraryBooks /> </span>
          <span>Report</span>
        </div>
        <div
          className={`merchant-sidebar-item ${activeSection === 'Setting' ? 'active' : ''}`}
          onClick={() => setActiveSection('Setting')}>
          <span><CiSettings /> </span>
          <span>Setting</span>
        </div>
        


      </Nav>
    </div>
    <span className='toggle-button' onClick={()=>{setSidebarActive(!isSidebarActive)}} > {isSidebarActive?<AiOutlineClose /> : <RxHamburgerMenu />}</span>

    </>
  );
};
export default MerchantSidebar;