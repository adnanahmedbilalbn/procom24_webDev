import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {RiWallet2Fill} from 'react-icons/ri'
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomeNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const navigate = useNavigate()



  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-2xl">
      <Container>
        <Navbar.Brand className='flex align-items-center ps-4' href="/">
          <span className='text-4xl text-violet-600 pe-1'><RiWallet2Fill /></span>
          <span className='text-2xl font-semibold'>PayHabib</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto md:mx-auto">
            <Nav.Link className='text-lg px-4' href="#services">Services</Nav.Link>
            <Nav.Link className='text-lg px-4' href="#solutions">Solutions</Nav.Link>
            <Nav.Link className='text-lg px-4' href="#pricing">Pricing</Nav.Link>
            <Nav.Link className='text-lg px-4' href="#help-center">Help Center</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <Button variant='outline-lighht' className='font-semibold text-violet-600 px-3'>Log in</Button>
            </Nav.Link>
            {/* <Nav.Link href="/">
              <Button variant='outline-lighht' className='font-semibold text-purple-700 px-3'>Log in</Button>
            </Nav.Link> */}

              <Nav.Link>
                <Dropdown className='inline ms-2 me-2' show={open} onClick={handleToggle}>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <Button variant='outline-lighht' className='font-semibold text-purple-700 px-3'>Log in</Button>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                 <Dropdown.Item onClick={()=> {navigate('merchant/login')}}>
                 <span className='text-xl text-purple-500'><RiWallet2Fill /> Merchant</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item  >
                 <span className='text-xl text-cyan-500 ' onClick={()=> {navigate('customer/login')}}><RiWallet2Fill /> Customer</span>
                </Dropdown.Item>
               </Dropdown.Menu>
              </Dropdown>   
           </Nav.Link>






          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar