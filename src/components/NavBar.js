// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand href="/">Mi App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/about">Acerca de</Nav.Link>
          <Nav.Link href="/contact">Contacto</Nav.Link>
        </Nav>
        <CartWidget itemCount={5} /> {/* Número hardcodeado para demostración */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

