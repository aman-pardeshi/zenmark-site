import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='bg-dark text-white'>
      <Container>
        <Row>
          <Col className='py-3 fs-2'>ZenMark</Col>
          <div className='subtitle'>
            <div className='subtitle-item'>Home</div>
            <div className='subtitle-item'>About</div>
            <div className='subtitle-item'>Contact Us</div>
            <div className='subtitle-item'>Reviews</div>
          </div>
        </Row>

        <Row>
          <Col className=' py-3 d-flex justify-content-between'>
            <div>
              <span className='fs-3 text-info hover'>Our Offices</span>
              <div className='d-flex'>
                <p className='me-4 subtitle-item'>Pune</p>
                <p className='subtitle-item'>Hyderbad</p>
              </div>
            </div>

            <div>
              <div className='text-info text-center'>Follow us on</div>
              <i className='fa-brands fa-facebook-f me-4 hovering'></i>
              <i className='fa-brands fa-twitter me-4 hovering'></i>
              <i className='fa-brands fa-youtube me-4 hovering'></i>
              <i className='fa-brands fa-instagram hovering '></i>
            </div>
          </Col>
          <div className='text-center mb-2'>
            Made with <i className='fa-solid fa-heart text-danger'></i> By
            <span className='my-signature'> Aman Pardeshi</span>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
