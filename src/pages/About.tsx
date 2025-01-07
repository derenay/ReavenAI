import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-hero d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4 gradient-text">About Reaven AI</h1>
              <p className="lead mb-0">
                We provide rapid AI solutions for businesses, helping them transform and optimize their operations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center gradient-text mb-5">Our Purpose</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 hover-effect">
                <Card.Body className="p-4 text-center">
                  <div className="feature-icon mb-4">
                    <FaRocket size={24} />
                  </div>
                  <h2 className="h3 mb-4">Our Mission</h2>
                  <p className="text-secondary mb-0">
                    To empower businesses with fast, efficient, and innovative AI solutions that drive growth and success in the digital age.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 hover-effect">
                <Card.Body className="p-4 text-center">
                  <div className="feature-icon mb-4">
                    <FaLightbulb size={24} />
                  </div>
                  <h2 className="h3 mb-4">Our Vision</h2>
                  <p className="text-secondary mb-0">
                    To become the leading AI solutions provider, known for rapid deployment and exceptional results in business transformation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center gradient-text mb-5">Our Core Values</h2>
          <Row className="g-4">
            {[
              {
                icon: <FaChartLine />,
                title: "Innovation",
                description: "Constantly pushing boundaries in AI technology"
              },
              {
                icon: <FaRocket />,
                title: "Speed",
                description: "Rapid deployment of effective solutions"
              },
              {
                icon: <FaLightbulb />,
                title: "Excellence",
                description: "Delivering exceptional quality in every project"
              }
            ].map((value, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 text-center hover-effect">
                  <Card.Body className="p-4">
                    <div className="feature-icon mb-4">
                      {value.icon}
                    </div>
                    <h3 className="h4 mb-3">{value.title}</h3>
                    <p className="text-secondary mb-0">
                      {value.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 