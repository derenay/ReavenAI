import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBrain, FaUsers, FaRocket, FaGraduationCap } from 'react-icons/fa';
import './Career.css';

const Career = () => {
  return (
    <div className="career-page">
      {/* Header Section */}
      <section className="career-hero d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4 gradient-text">Join Our Team</h1>
              <p className="lead mb-0">
                Shape the future of AI technology with us
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <h2 className="text-center gradient-text mb-5">Why Join Reaven AI?</h2>
          <Row className="g-4">
            {[
              {
                icon: <FaBrain />,
                title: "Innovation First",
                description: "Work with cutting-edge AI technologies"
              },
              {
                icon: <FaUsers />,
                title: "Great Culture",
                description: "Be part of a dynamic and supportive team"
              },
              {
                icon: <FaGraduationCap />,
                title: "Growth",
                description: "Continuous learning and career development"
              },
              {
                icon: <FaRocket />,
                title: "Impact",
                description: "Make a real difference in the AI industry"
              }
            ].map((benefit, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 border-0 hover-effect">
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon">
                      {benefit.icon}
                    </div>
                    <h3 className="h4 mb-3">{benefit.title}</h3>
                    <p className="text-secondary mb-0">{benefit.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="positions-section py-5">
        <Container>
          <h2 className="text-center gradient-text mb-5">Open Positions</h2>
          <Row className="g-4">
            {[
              {
                title: "AI Engineer",
                description: "Join our AI team to develop cutting-edge solutions for our clients.",
                requirements: ["5+ years experience", "ML/DL expertise", "Python proficiency"]
              },
              {
                title: "Full Stack Developer",
                description: "Build robust and scalable applications for AI integration.",
                requirements: ["3+ years experience", "React/Node.js", "Cloud platforms"]
              }
            ].map((position, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 hover-effect">
                  <Card.Body className="p-4">
                    <h3 className="h4 mb-3">{position.title}</h3>
                    <p className="mb-4">{position.description}</p>
                    <div className="mb-4">
                      <h4 className="h6 text-secondary mb-3">Requirements:</h4>
                      <ul className="text-secondary">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-gradient px-3 py-2">Full-time</span>
                      <Button variant="primary" href="/contact" className="apply-btn">
                        Apply Now
                      </Button>
                    </div>
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

export default Career; 