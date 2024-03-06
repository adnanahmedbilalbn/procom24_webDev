import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSearchAlt, BiMessageDetail } from "react-icons/bi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { Dropdown } from 'react-bootstrap';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { FaChevronDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";


const UserDropdown = ({ userName }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
  };

  return (
    <Dropdown className='inline ms-2 me-2' show={open} onClick={handleToggle}>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        <div className='d-flex items-center'>
        <FiUser />
        <span>{userName}</span>
        <FaChevronDown className='text-xs	'/>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>
          <FiLogOut /> Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const NavBar = ({ brandName, brandIcon, userName }) => {
  return (
    <Navbar expand="lg" className='border-b-2	'>
      <Container fluid>
        <span className='toggle-button'><RxHamburgerMenu /></span>
        <Navbar.Brand className='flex	text-base	'>{brandIcon}{brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <div>
              <BiSearchAlt  className="ms-2 me-2" />
              <MdOutlineQuestionMark className="ms-2 me-2" />
              <BiMessageDetail className="ms-2 me-2" />
              <FaRegBell className="ms-2 me-2" />
              <Button className="ms-2 me-2" variant="outline-success"> Create <GoChevronDown /> </Button>
              <UserDropdown userName={userName} />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;