// NavBar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ user, handleLogout }) => {
  return (
    <Navbar bg="secondary p-3" expand="lg">
      <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/category/electronics">Electrónicos</Nav.Link>
          <Nav.Link as={Link} to="/category/clothing">Ropa</Nav.Link>
          <Nav.Link as={Link} to="/cart">Carrito</Nav.Link>
          <CartWidget/>
        </Nav>
        {user ? (
          <Nav>
            <span className="nav-item">Bienvenido, {user.email}</span>
            <Button  variant="danger" className='p-2' onClick={handleLogout}>Salir</Button>
          </Nav>
        ) : (
          <Nav>
            <Button as={Link} to="/auth" variant="primary">Iniciar Sesión</Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
