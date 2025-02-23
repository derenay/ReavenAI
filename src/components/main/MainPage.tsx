import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBrain, FaRobot, FaChartLine, FaCheckCircle, FaUserFriends, FaLightbulb, FaRocket } from 'react-icons/fa';
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
      <section className="features-section py-6">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <motion.div {...fadeIn}>
                <h2 className="section-title">Our Solutions</h2>
                <p className="section-subtitle">
                  Discover how our AI-powered solutions can transform your business operations
                </p>
              </motion.div>
            </Col>
          </Row>
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
                  description: "Advanced algorithms that learn and adapt to your business needs",
                  features: [
                    "Custom AI Models",
                    "Pattern Recognition",
                    "Predictive Analytics",
                    "Neural Networks"
                  ]
                },
                {
                  icon: <FaRobot />,
                  title: "Process Automation",
                  description: "Streamline operations with intelligent automation solutions",
                  features: [
                    "Workflow Automation",
                    "Task Management",
                    "Process Optimization",
                    "Smart Scheduling"
                  ]
                },
                {
                  icon: <FaChartLine />,
                  title: "Data Analytics",
                  description: "Transform data into actionable business insights",
                  features: [
                    "Real-time Analytics",
                    "Data Visualization",
                    "Performance Metrics",
                    "Business Intelligence"
                  ]
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
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <ul className="feature-list">
                      {feature.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline-primary" 
                      className="mt-3"
                      href={`/services#${feature.title.toLowerCase().replace(' ', '-')}`}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section py-6">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <motion.div {...fadeIn}>
                <h2 className="section-title">Why Choose Us</h2>
                <p className="section-subtitle">
                  We deliver exceptional value through innovation, expertise, and dedication to your success
                </p>
              </motion.div>
            </Col>
          </Row>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Row className="g-4">
              {[
                {
                  icon: <FaCheckCircle />,
                  title: "Proven Expertise",
                  description: "Over 5 years of experience in delivering cutting-edge AI solutions with a track record of successful implementations across various industries."
                },
                {
                  icon: <FaUserFriends />,
                  title: "Dedicated Support",
                  description: "Our team of experts provides 24/7 support and guidance throughout your journey, ensuring smooth implementation and optimal results."
                },
                {
                  icon: <FaLightbulb />,
                  title: "Innovative Solutions",
                  description: "We stay ahead of technological trends, continuously innovating to provide you with the most advanced and effective solutions."
                },
                {
                  icon: <FaRocket />,
                  title: "Fast Implementation",
                  description: "Quick deployment and integration of solutions, minimizing disruption to your business operations while maximizing impact."
                }
              ].map((item, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    className="why-choose-card"
                  >
                    <div className="feature-icon-wrapper">
                      {item.icon}
                    </div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-description">{item.description}</p>
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