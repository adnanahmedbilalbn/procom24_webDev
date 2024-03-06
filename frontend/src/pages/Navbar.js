// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const Header = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }

// export default Header;


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";






function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
          <div>
            <BiSearchAlt />
            <MdOutlineQuestionMark />
            <BiMessageDetail />
            <FaRegBell />
            <Button variant="outline-success"> Create <GoChevronDown /> </Button>


          </div>


            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


// Navbar.js
// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';

// const NavBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
//       <Nav className="mr-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#features">Features</Nav.Link>
//         <Nav.Link href="#pricing">Pricing</Nav.Link>
//       </Nav>
//     </Navbar>
//   );
// };

// export default NavBar;
