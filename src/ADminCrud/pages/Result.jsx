import React from 'react'
import Navbar1 from "./Navbar"
import ResultofVote from "./ResultofVote"
import {FaUser} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,NavDropdown,Nav,Container } from 'react-bootstrap';

const Result = () => {
  return (
    <div>
        <Navbar bg="black" expand="lg" className="nav shadow-md shadow-white ">
  <Container bg="black" className='bg-black'>
    <Navbar.Brand href="#home" className='text-white font-bold text-lg'>Election</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" bg="black" className='bg-black' />
    <Navbar.Collapse id="basic-navbar-nav" className="bg-black">
      <Nav className="me-auto " >
        
        <NavDropdown title={<FaUser className='text-white text-2xl relative top-3 '/>} id="basic-nav-dropdown">
          <NavDropdown.Item href="./adminlogin"  className='text-white font-bold bg-black  '>
            Log Out
          </NavDropdown.Item>
        
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        <Navbar1/>
        <ResultofVote/>
    </div>
  )
}

export default Result