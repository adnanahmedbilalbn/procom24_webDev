// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Dashboard</Nav.Link>
        <Nav.Link href="/link">Link</Nav.Link>
        <Nav.Link href="/link">Link</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;