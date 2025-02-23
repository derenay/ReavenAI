import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBrain, FaRobot, FaChartLine, FaCogs, FaDatabase, FaNetworkWired } from 'react-icons/fa';
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

const ProductsContainer = styled.div`
  padding-top: 120px; // Navbar için padding
  padding-bottom: 60px;
  min-height: 100vh;
  background:rgb(0, 0, 0);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 15px;
  padding: 2rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Products = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
  const products = [
    {
      id: 'ai-analytics',
      icon: <FaBrain />,
      title: 'AI Analytics Suite',
      description: 'Advanced analytics powered by artificial intelligence',
      features: ['Predictive Analysis', 'Pattern Recognition', 'Data Visualization']
    },
    {
      id: 'process-automation',
      icon: <FaRobot />,
      title: 'Process Automation',
      description: 'Streamline your business operations',
      features: ['Workflow Automation', 'Task Management', 'Smart Scheduling']
    },
    {
      id: 'data-insights',
      icon: <FaChartLine />,
      title: 'Data Insights Platform',
      description: 'Transform data into actionable insights',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Performance Metrics']
    }
  ];

  return (
    <ProductsContainer>
      
        <PageHero>
            <Container>
            <Row className="justify-content-center text-center">
                <Col lg={8}>
                <motion.div {...fadeIn}>
                    <GradientText>Products</GradientText>
                    <ContentText>
                    Discover our suite of AI-powered solutions
                    </ContentText>
                </motion.div>
                </Col>
            </Row>
            </Container>
        </PageHero>
        <Container>
        <Row className="g-4">
          {products.map((product, index) => (
            <Col md={4} key={product.id}>
              <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <ProductCard
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="feature-icon-wrapper mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-light mb-3">{product.title}</h3>
                  <p className="text-light-50 mb-4">{product.description}</p>
                  <ul className="feature-list">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </ProductCard>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </ProductsContainer>
  );
};

export default Products; 