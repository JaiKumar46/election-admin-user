import React from 'react'
import {FaUser} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import AllUser from "../../ADminCrud/pages/AllUser"
import Navbar1 from "../../ADminCrud/pages/Navbar"
// import { useUserContext } from "../../../Context/userContext";
import { Navbar,NavDropdown,Nav,Container } from 'react-bootstrap';



const Dashboard1 = () => {

    // const {  logoutUser } = useUserContext();
    

  return (
    <div className="navbar_cont">
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
<AllUser/>
    </div>
  )
}

export default Dashboard1