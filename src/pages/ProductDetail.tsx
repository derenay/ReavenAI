import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBrain, FaRobot, FaChartLine } from 'react-icons/fa';

const ProductHero = styled.div`
  padding: 120px 0 60px;
  background: linear-gradient(to bottom, rgba(139, 92, 246, 0.1), transparent);
`;

const ProductDetail = () => {
  const { productId } = useParams();

  // Ürün verilerini burada tutuyoruz
  const products = {
    'ai-analytics': {
      icon: <FaBrain />,
      title: 'AI Analytics Suite',
      description: 'Advanced analytics powered by artificial intelligence',
      features: ['Predictive Analysis', 'Pattern Recognition', 'Data Visualization'],
      details: 'Comprehensive AI analytics solution that helps businesses make data-driven decisions...',
      benefits: [
        'Increased accuracy in predictions',
        'Real-time insights',
        'Automated reporting',
        'Scalable architecture'
      ]
    },
    // Diğer ürünler için benzer yapı
  };

  const product = products[productId];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ProductHero>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <motion.h1 
                className="gradient-text mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {product.title}
              </motion.h1>
              <motion.p 
                className="lead text-light-50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {product.description}
              </motion.p>
            </Col>
          </Row>
        </Container>
      </ProductHero>

      {/* Ürün detayları ve diğer bölümler */}
    </motion.div>
  );
};

export default ProductDetail; 