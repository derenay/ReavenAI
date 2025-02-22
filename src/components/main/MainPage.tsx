import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBrain, FaRobot, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './MainPage.css';
import ChatBot from '../ChatBot/ChatBot';

const MainPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
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
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero-main d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="mb-5 mb-lg-0">
              <motion.div {...fadeIn}>
                <h1 className="hero-title">
                  Transforming Business<br />
                  <span className="gradient-text">with Creative Solutions</span>
                </h1>
                <p className="hero-description">
                  Shape Creativity delivers cutting-edge creative solutions to optimize your business operations and drive growth.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="primary" 
                    size="lg" 
                    href="/contact"
                    className="get-started-btn"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <ChatBot />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
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
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    className="feature-card"
                  >
                    <div className="feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content text-center"
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how Shape Creative can help optimize your operations</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline-light" 
                size="lg"
                href="/contact"
                className="cta-button"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default MainPage;