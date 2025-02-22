import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LogoContainer = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #8B5CF6, #6366F1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoShape = styled(motion.div)`
  width: 40px;
  height: 40px;
  position: relative;
  
  &::before {
    content: 'S';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    font-weight: 900;
    background: linear-gradient(45deg, #fff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Logo = () => {
  return (
    <LogoContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LogoShape
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6, type: "spring" }}
      />
    </LogoContainer>
  );
};

export default Logo; 