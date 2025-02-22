import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding-top: 120px; // Navbar'ın altında başlaması için
  padding-bottom: 60px;
  min-height: 100vh;
`;

const AboutSection = styled.section`
  padding: 80px 0;
  position: relative;
`;

const AboutHero = styled(AboutSection)`
  background: linear-gradient(
    to bottom,
    rgba(139, 92, 246, 0.05),
    transparent
  );
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at top right,
      rgba(139, 92, 246, 0.1),
      transparent 70%
    );
    pointer-events: none;
  }
`;

const GradientText = styled.h1`
  background: linear-gradient(45deg, #fff, #b3b3b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHero>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <GradientText>About Shape Creativity</GradientText>
              <p className="lead mb-0 text-light">
                We provide rapid AI solutions for businesses, helping them transform and optimize their operations.
              </p>
            </Col>
          </Row>
        </Container>
      </AboutHero>

      <AboutSection>
        <Container>
          <Row className="g-4">
            {[
              {
                icon: <FaRocket />,
                title: "Our Mission",
                description: "To empower businesses with innovative AI solutions that drive growth and efficiency."
              },
              {
                icon: <FaLightbulb />,
                title: "Our Vision",
                description: "To be the leading force in creative AI transformation across industries."
              },
              {
                icon: <FaChartLine />,
                title: "Our Values",
                description: "Innovation, Excellence, and Customer Success drive everything we do."
              }
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 bg-transparent text-light">
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon mb-4">
                      {item.icon}
                    </div>
                    <h3 className="h4 mb-3">{item.title}</h3>
                    <p className="mb-0 text-light-50">{item.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </AboutSection>

      <AboutSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-4 mb-4 text-light">Our Story</h2>
              <p className="lead text-light-50">
                Shape Creativity was founded with a vision to revolutionize how businesses approach AI integration.
                Our journey began with a simple idea: make AI accessible and practical for every business.
              </p>
              <p className="text-light-50">
                Today, we continue to push boundaries and create innovative solutions that help our clients stay ahead
                in an ever-evolving digital landscape.
              </p>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                {/* Buraya bir görsel ekleyebilirsiniz */}
                <div className="bg-gradient-purple rounded-lg p-5 text-center">
                  <h3 className="text-light mb-0">Innovation Through Creativity</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </AboutSection>
    </AboutContainer>
  );
};

export default About; 