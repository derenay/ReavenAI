import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const PageContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
  min-height: 100vh;
`;

export const PageSection = styled.section`
  padding: 80px 0;
  position: relative;
`;

export const PageHero = styled(PageSection)`
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

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 400;
`;

export const GradientText = styled.h1`
  background: linear-gradient(45deg, #fff, #b3b3b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const StyledCard = styled(Card)`
  background: #0d0c22 !important;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #8B5CF6, #6366F1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.5rem;
    color: white;
  }

  h3, h4, h5 {
    color: #fff;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background: #6366F1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 20px;
  transition: all 0.3s ease;
`;

export const ContentBox = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover {
    transform: translateY(-5px);
    
    &::before {
      opacity: 1;
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
    }

    ${IconBox} {
      transform: scale(1.1);
      background: linear-gradient(45deg, #8B5CF6, #6366F1);
    }
  }
`;

export const ContentTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

export const ContentText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.6;
  transition: all 0.3s ease;
  font-weight: 400;
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  position: relative;
  z-index: 1;
`; 