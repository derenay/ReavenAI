import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4 gradient-text">Contact Us</h1>
              <p className="lead mb-0">
                Get in touch with us for any inquiries
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info py-5">
        <Container>
          <Row className="g-4">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                info: "İzmir, Turkey"
              },
              {
                icon: <FaPhone />,
                title: "Phone",
                info: "+90 (555) 123 45 67"
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                info: "info@reavenai.com"
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                info: "Mon - Fri: 9:00 AM - 6:00 PM"
              }
            ].map((item, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="contact-card h-100 border-0 hover-effect">
                  <Card.Body className="text-center p-4">
                    <div className="contact-icon mb-3">
                      {item.icon}
                    </div>
                    <h3 className="h5 mb-3">{item.title}</h3>
                    <p className="text-secondary mb-0">{item.info}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="contact-form-card border-0 hover-effect">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="text-center gradient-text mb-4">Send us a Message</h2>
                  <Form>
                    <Row className="g-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Your name"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control 
                            type="email" 
                            placeholder="Your email"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Subject</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Message subject"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Message</Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={5} 
                            placeholder="Your message"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="text-center">
                        <Button 
                          variant="primary" 
                          type="submit" 
                          size="lg"
                          className="submit-btn mt-3"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact; 