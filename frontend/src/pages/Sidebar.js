// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { MdOutlinePayments } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import { IoQrCode } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column sidebar-items-container ">
        <Nav.Link >
          <div className='sidebar-item active'>
            <span> <MdOutlinePayments /> </span>
            <span>Instant Payments</span>
          </div>
        </Nav.Link>
        <Nav.Link >
          <div className='sidebar-item'>
            <span> <LuDollarSign /> </span>
            <span>Payment</span>
          </div>
        </Nav.Link>
        <Nav.Link >
          <div className='sidebar-item'>
            <span> <IoQrCode /> </span>
            <span>QR Scan</span>
          </div>
        </Nav.Link>
        

      </Nav>
    </div>
  );
};

export default Sidebar;