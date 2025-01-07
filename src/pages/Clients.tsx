import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './Clients.css';

const Clients = () => {
  const clientsList = [
    {
      name: 'Tech Solutions Inc.',
      logo: '/client-logos/tech-solutions.png', // Logo yolunu ekleyin
      description: 'Leading technology solutions provider',
      testimonial: 'Reaven AI has transformed our business processes with their innovative AI solutions.',
      industry: 'Technology'
    },
    {
      name: 'Global Finance',
      logo: '/client-logos/global-finance.png',
      description: 'International financial services',
      testimonial: 'The AI-powered analytics have given us unprecedented insights into market trends.',
      industry: 'Finance'
    },
    {
      name: 'HealthCare Plus',
      logo: '/client-logos/healthcare.png',
      description: 'Healthcare services provider',
      testimonial: 'Their AI solutions have significantly improved our patient care systems.',
      industry: 'Healthcare'
    },
    // Daha fazla müşteri eklenebilir
  ];

  return (
    <div className="clients-page">
      {/* Hero Section */}
      <section className="clients-hero d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4 gradient-text">Our Clients</h1>
              <p className="lead mb-0">
                Trusted by leading companies worldwide
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Clients Grid */}
      <section className="clients-grid py-5">
        <Container>
          <Row className="g-4">
            {clientsList.map((client, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="client-card h-100 border-0 hover-effect">
                  <Card.Body className="p-4">
                    <div className="client-logo mb-4">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="img-fluid"
                      />
                    </div>
                    <h3 className="h4 mb-3">{client.name}</h3>
                    <p className="text-secondary mb-3">{client.description}</p>
                    <div className="industry-badge mb-4">
                      {client.industry}
                    </div>
                    <div className="testimonial">
                      <FaStar className="text-warning mb-2" />
                      <p className="fst-italic mb-0">"{client.testimonial}"</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row className="text-center g-4">
            <Col md={4}>
              <div className="stat-item">
                <h2 className="gradient-text display-4 fw-bold">0</h2>
                <p className="text-secondary">Satisfied Clients</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-item">
                <h2 className="gradient-text display-4 fw-bold">100%</h2>
                <p className="text-secondary">Success Rate</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-item">
                <h2 className="gradient-text display-4 fw-bold">0</h2>
                <p className="text-secondary">Total Projects</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Clients; 