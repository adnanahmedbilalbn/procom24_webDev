import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {RiWallet2Fill} from 'react-icons/ri'

const HomeNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-2xl">
      <Container>
        <Navbar.Brand className='flex align-items-center ps-4' href="/">
          <span className='text-2xl text-purple-700 pe-1'><RiWallet2Fill /></span>
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
              <Button variant='outline-lighht' className='font-semibold text-purple-700 px-3'>Log in</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar