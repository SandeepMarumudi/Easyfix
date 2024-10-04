import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../pictures/easyfix logo.jpg";
import title from '../pictures/Easy fix logo.png';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log('Search Query:', searchQuery);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: 'rgb(246, 246, 246)' }} className="shadow-sm">
      <Container fluid>  {/* Use fluid container for full-width responsiveness */}
        {/* Logo and App Name */}
        <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <Link to={'/'}>
          <img
            src={title}
            
            alt="App Name"
            style={{ width: '200px', height: '50px', marginRight: '10px' }}
          />
          </Link>
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginLeft: 'auto', marginRight: 'auto' }} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Services Link */}
            <Link to={"/"} style={{ fontWeight: 'bold',  marginLeft: '10px', textDecoration:"none", color:"inherit" }}>Services</Link>
          </Nav>

          {/* Searchbox */}
          <Form className="d-flex me-2" style={{ maxWidth: '200px' }}> {/* Set max-width to prevent overflow */}
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Form>

          {/* Location Icon */}
          <Nav.Link href="#location" style={{ marginLeft: '50px' }}>
            <FaMapMarkerAlt />Location
          </Nav.Link>

          {/* Cart */}
          <Nav.Link href="#cart" style={{ marginLeft: '50px' }}>
            <FaShoppingCart /> Cart
          </Nav.Link>

          {/* Profile */}
          <Link to={'/login'} style={{ marginLeft: '50px', textDecoration:'none', color:'inherit' }}><FaUser /> Profile</Link>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
