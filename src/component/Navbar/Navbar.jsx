import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Form, Navbar, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLanguage } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from '../Theme/ThemeToggle';
import { useTheme } from '../../context/themeContext';
import { useLanguage } from '../../context/languageContext';
import './Navbar.css';

const NavbarScroller = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { isDarkMode } = useTheme();
  const { language, switchLanguage } = useLanguage();

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}
      style={{ backgroundColor: isDarkMode ? '#343a40' : '#f8f9fa' }}
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          Products
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav variant="tabs" defaultActiveKey="/" className="navbar-nav">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/register"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Register
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/login"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/cart"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                <div className="cart-icon-container">
                  <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                  {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
                </div>
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
          <Button
            variant="link"
            onClick={() => switchLanguage(language === 'en' ? 'ar' : 'en')}
            style={{
              color: isDarkMode ? '#ece3f5' : '#3d2851',
            }}
          >
            <FontAwesomeIcon icon={faLanguage} />
          </Button>
          <ThemeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarScroller;
