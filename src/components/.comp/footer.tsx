import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">Reaven AI</h5>
            <p className="mb-2"><FaMapMarkerAlt className="me-2" />İzmir, Turkey</p>
            <p className="mb-2"><FaPhone className="me-2" />+90 (000) 123 45 67</p>
            <p className="mb-2"><FaEnvelope className="me-2" />info@reavenai.com</p>
            <div className="social-icons mt-3">
              <a href="#" className="text-light me-3"><FaLinkedin size={20} /></a>
              <a href="#" className="text-light me-3"><FaGithub size={20} /></a>
              <a href="#" className="text-light"><FaTwitter size={20} /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="/career" className="text-light text-decoration-none">Career</a></li>
              <li className="mb-2"><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">Newsletter</h5>
            <p>Subscribe to our newsletter for updates</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className="mt-4 pt-4 border-top">
          <Col className="text-center">
            <p className="mb-0">&copy; 2025 Reaven AI. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;