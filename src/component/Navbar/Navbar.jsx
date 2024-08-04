import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Form, Navbar, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavbarScroller = () => {
  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/register" activeClassName="active-link">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login" activeClassName="active-link">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/cart" activeClassName="active-link">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarScroller;
