import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect
        className='p-2'
      >
        <Container>
          <Navbar.Brand href='#home'>ZenMark</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home' className='me-3'>
                Home
              </Nav.Link>
              <NavDropdown
                title='About Us'
                id='basic-nav-dropdown'
                className='me-3'
              >
                <NavDropdown.Item href='#action/3.1' className='me-2'>
                  About Us
                </NavDropdown.Item>

                <NavDropdown.Item href='#action/3.2'>
                  Our Client
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='Products'
                id='basic-nav-dropdown'
                className='me-3'
              >
                <NavDropdown.Item href='#action/3.1' className='me-2'>
                  Product 1
                </NavDropdown.Item>

                <NavDropdown.Item href='#action/3.2' className='me-2'>
                  Product 2
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title='Career'
                id='basic-nav-dropdown'
                className='me-3'
              >
                <NavDropdown.Item href='#action/3.1' className='me-2'>
                  Life at ZenMark
                </NavDropdown.Item>

                <NavDropdown.Item href='#action/3.2' className='me-2'>
                  Our Employees
                </NavDropdown.Item>

                <NavDropdown.Item href='#action/3.3' className='me-2'>
                  Current Openings
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#link'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
