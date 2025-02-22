import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { PageContainer, PageHero, PageSection, GradientText, StyledCard, IconBox, ContentBox } from '../styles/PageStyles';
import styled from 'styled-components';

const ContactCard = styled(Card)`
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactFormCard = styled(StyledCard)`
  input, textarea {
    background: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(139, 92, 246, 0.2);
    color: white !important;
    
    &:focus {
      border-color: rgba(139, 92, 246, 0.5);
      box-shadow: 0 0 0 0.25rem rgba(139, 92, 246, 0.25);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <PageContainer>
      <PageHero>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <GradientText>Get in Touch</GradientText>
              <p className="lead mb-0 text-light">
                Have a question or want to work together? We'd love to hear from you.
              </p>
            </Col>
          </Row>
        </Container>
      </PageHero>

      <PageSection>
        <Container>
          <Row className="g-4">
            {[
              {
                icon: <FaPhone />,
                title: "Phone",
                info: "+90 (000) 123 45 67"
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                info: "contact@shapecreative.com"
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                info: "İzmir, Turkey"
              }
            ].map((item, index) => (
              <Col md={4} key={index}>
                <IconBox>
                  {item.icon}
                </IconBox>
                <ContentBox>
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </ContentBox>
              </Col>
            ))}
          </Row>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <ContentBox style={{ position: 'relative', zIndex: 100 }}>
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Your name"
                          className="bg-transparent text-light"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Your email"
                          className="bg-transparent text-light"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="text-light">Subject</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Subject"
                          className="bg-transparent text-light"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="text-light">Message</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={5}
                          placeholder="Your message"
                          className="bg-transparent text-light"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Button 
                        variant="primary" 
                        type="submit"
                        className="w-100 mt-3"
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </ContentBox>
            </Col>
          </Row>
        </Container>
      </PageSection>
    </PageContainer>
  );
};

export default Contact; 