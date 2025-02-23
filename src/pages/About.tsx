import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutContainer>
      <AboutHero>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <motion.div {...fadeIn}>
                <GradientText>About Shape Creativity</GradientText>
                <p className="lead mb-0 text-light">
                  We provide rapid AI solutions for businesses, helping them transform and optimize their operations.
                </p>
              </motion.div>
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
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Card className="hover-effect h-100 border-0 bg-transparent text-light">
                    <Card.Body className="text-center p-4">
                      <div className="feature-icon mb-4">
                        {item.icon}
                      </div>
                      <h3 className="h4 mb-3">{item.title}</h3>
                      <p className="mb-0 text-light-50">{item.description}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </AboutSection>

      <AboutSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="mb-4 mb-lg-0">
              <motion.div {...fadeIn}>
                <h2 className="story-title gradient-text mb-4">Our Story</h2>
                <div className="story-content">
                  <p className="story-lead">
                    Shape Creativity was founded in 2020 with a revolutionary vision: to democratize AI technology and make it accessible to businesses of all sizes.
                  </p>
                  <div className="story-timeline">
                    <p className="story-paragraph">
                      What started as a small team of passionate innovators has grown into a global force in AI solutions. Our first breakthrough came when we developed a unique approach to implementing machine learning solutions that could be customized for specific business needs while remaining cost-effective.
                    </p>
                    <p className="story-paragraph">
                      Throughout our journey, we've helped hundreds of businesses across various industries - from startups to Fortune 500 companies. We've witnessed firsthand how AI can transform operations, enhance decision-making, and drive unprecedented growth.
                    </p>
                    <p className="story-paragraph">
                      Today, we continue to push the boundaries of what's possible with AI. Our team of experts works tirelessly to develop cutting-edge solutions that address real-world business challenges. We believe that the future of business is intrinsically linked with AI, and we're here to ensure that future is accessible to all.
                    </p>
                    <p className="story-paragraph">
                      As we look ahead, our commitment remains unchanged: to deliver innovative, practical, and scalable AI solutions that help businesses thrive in an increasingly digital world.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={5}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="story-card">
                  <h3 className="story-card-title">Innovation Through Creativity</h3>
                  <p className="story-card-text">
                    Transforming businesses through innovative AI solutions since 2020
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </AboutSection>
    </AboutContainer>
  );
};

export default About; 