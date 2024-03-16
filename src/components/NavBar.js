import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/category/electronics">Electrónicos</Nav.Link>
          <Nav.Link as={Link} to="/category/clothing">Ropa</Nav.Link>
          {/* Agrega más categorías según tu aplicación */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;



