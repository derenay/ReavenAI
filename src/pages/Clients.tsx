import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaQuoteLeft, FaIndustry, FaChartLine, FaHospital, FaIndustry as FaFactory, FaStore, FaGraduationCap } from 'react-icons/fa';
import { 
  PageContainer, 
  PageHero, 
  PageSection, 
  IconBox, 
  ContentBox,
  ContentTitle,
  ContentText,
  ContentWrapper,
  SectionTitle,
  SectionSubtitle,
  GradientText 
} from '../styles/PageStyles';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const ClientCard = styled(Card)`
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2rem;
  color: rgba(139, 92, 246, 0.3);
  margin-bottom: 1rem;
`;

const StarRating = styled.div`
  color: #FFD700;
  margin-bottom: 1rem;
`;

const Clients = () => {
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

  const clientsList = [
    {
      name: 'Tech Solutions Inc.',
      logo: '/client-logos/tech-solutions.png',
      description: 'Leading technology solutions provider',
      testimonial: 'Shape Creativity has transformed our business processes with their innovative AI solutions.',
      industry: 'Technology',
      rating: 5
    },
    {
      name: 'Global Finance',
      logo: '/client-logos/global-finance.png',
      description: 'International financial services',
      testimonial: 'The AI-powered analytics have given us unprecedented insights into market trends.',
      industry: 'Finance',
      rating: 5
    },
    {
      name: 'HealthCare Plus',
      logo: '/client-logos/healthcare.png',
      description: 'Healthcare services provider',
      testimonial: 'Their AI solutions have significantly improved our patient care systems.',
      industry: 'Healthcare',
      rating: 5
    }
  ];

  const industries = [
    { name: "Technology", icon: <FaIndustry /> },
    { name: "Finance", icon: <FaChartLine /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Manufacturing", icon: <FaFactory /> },
    { name: "Retail", icon: <FaStore /> },
    { name: "Education", icon: <FaGraduationCap /> }
  ];

  return (
    <PageContainer>
      <PageHero>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <motion.div {...fadeIn}>
                <GradientText>Our Clients</GradientText>
                <ContentText>
                  Trusted by industry leaders worldwide to deliver innovative AI solutions.
                </ContentText>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </PageHero>

      <PageSection>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <motion.div {...fadeIn}>
                <h2 className="text-light mb-4">Success Stories</h2>
                <p className="text-light-50">
                  See how we've helped businesses transform their operations with AI-powered solutions.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {clientsList.map((client, index) => (
              <Col md={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <ClientCard className="p-4">
                    <QuoteIcon />
                    <StarRating>
                      {[...Array(client.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </StarRating>
                    <h4 className="text-light mb-3">{client.name}</h4>
                    <p className="text-light-50 mb-4">{client.testimonial}</p>
                    <small className="text-light-50">{client.industry}</small>
                  </ClientCard>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <motion.div {...fadeIn}>
                <SectionTitle>Industry Partners</SectionTitle>
                <SectionSubtitle>
                  We collaborate with leading companies across various industries.
                </SectionSubtitle>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {industries.map((industry, index) => (
              <Col md={4} lg={2} key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <ContentBox>
                    <ContentWrapper>
                      <IconBox>
                        {industry.icon}
                      </IconBox>
                      <ContentTitle>{industry.name}</ContentTitle>
                    </ContentWrapper>
                  </ContentBox>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div {...fadeIn}>
                <h2 className="text-light mb-4">Ready to Transform Your Business?</h2>
                <p className="text-light-50">
                  Join our growing list of satisfied clients and experience the power of AI-driven solutions.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <ClientCard className="p-4 text-center">
                  <h3 className="text-light mb-3">Get Started Today</h3>
                  <p className="text-light-50 mb-4">
                    Contact us to learn how we can help your business succeed with AI.
                  </p>
                  <motion.button 
                    className="btn btn-primary btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </ClientCard>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </PageSection>
    </PageContainer>
  );
};

export default Clients; 