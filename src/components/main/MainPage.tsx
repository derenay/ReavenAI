import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaBrain, FaRobot, FaChartLine } from 'react-icons/fa';
import './MainPage.css';
import logo from '../../assets/ReavenAI_Logo_Black_Purple.png';

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero-main d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="mb-5 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">
                Transforming Business<br />with AI Solutions
              </h1>
              <p className="lead mb-5">
                Reaven AI delivers cutting-edge artificial intelligence solutions to optimize your business operations and drive growth.
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                href="/contact"
                className="get-started-btn"
              >
                Get Started
              </Button>
            </Col>
            <Col lg={5}>
              <img 
                src={logo}
                alt="AI Technology" 
                className="img-fluid hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {[
              {
                icon: <FaBrain />,
                title: "Machine Learning",
                description: "Advanced algorithms that learn and adapt to your business needs"
              },
              {
                icon: <FaRobot />,
                title: "Process Automation",
                description: "Streamline operations with intelligent automation solutions"
              },
              {
                icon: <FaChartLine />,
                title: "Data Analytics",
                description: "Transform data into actionable business insights"
              }
            ].map((feature, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 hover-effect">
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="h4 mb-3">{feature.title}</h3>
                    <p className="text-secondary mb-0">
                      {feature.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="lead mb-5">
                Let's discuss how Reaven AI can help optimize your operations
              </p>
              <Button 
                variant="outline-light" 
                size="lg"
                href="/contact"
                className="cta-button"
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MainPage;