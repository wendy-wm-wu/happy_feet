import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Happy Feet</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Explore</Nav.Link>
          <Nav.Link href="#link">Plan</Nav.Link>
        </Nav>
        <Button variant="success" style={{marginRight: '10px'}}>Sign Up</Button>{'  '}
        <Button variant="outline-success">Log In</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;