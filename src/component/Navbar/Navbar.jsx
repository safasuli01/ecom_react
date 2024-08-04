import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';

const NavbarScroller = () => {
  return (
    <Navbar  bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={NavLink} to="/" exact activeClassName="active-link">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/register" activeClassName="active-link">Register</Nav.Link>
            <Nav.Link as={NavLink} to="/login" activeClassName="active-link">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/cart" activeClassName="active-link">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
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
