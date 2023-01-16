import React from 'react';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import HeaderLogo from '../assets/images/HeaderLogo.svg';

function Header() {
    return (
        <section id='header'>
            <div className='header-container'>
            <Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><Image src={HeaderLogo} fluid alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
        <Nav.Link className='collections' href="#action1">Collections <span className='amount'>24</span></Nav.Link>
        <Nav.Link href="#action2">Categories <span className='amount'>12</span></Nav.Link>
        <Nav.Link href="#action3">New Arrival <span className='amount hot'>HOT</span></Nav.Link>
        <Nav.Link href="#action4">Sales <span className='amount'>58</span></Nav.Link>
        <Nav.Link href="#action5">My Cart <span className='amount'>03</span></Nav.Link>
        
      </Nav>
      <div className='mobile-number'>
          <h4>+92 300 123 4567</h4>
          <a href='#'>Call Us for more Info</a>
      </div>
    </Navbar.Collapse>
    
  </Container>
</Navbar>
            </div>
        </section>
    )
}

export default Header
