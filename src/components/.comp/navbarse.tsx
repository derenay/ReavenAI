import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Logo from '../Logo/Logo';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  box-shadow: 0 4px 30px rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(139, 92, 246, 0.1);

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

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // Logo alanı için
  .logo-section {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  // Menü linkleri için
  .menu-section {
    flex: 2;
    display: flex;
    justify-content: center;
    gap: 2.5rem;
  }

  // Sosyal medya ikonları için
  .social-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;
  }
`;

const NavLink = styled(motion(Link))`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #8B5CF6, #6366F1);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: #fff;
  font-size: 1.5rem;
  
  &:hover {
    color: #8B5CF6;
  }
`;

const navbarse = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        background: scrolled 
          ? 'linear-gradient(to right, rgba(13, 12, 34, 0.98), rgba(139, 92, 246, 0.08))'
          : 'linear-gradient(to right, rgba(13, 12, 34, 0.95), rgba(139, 92, 246, 0.05))'
      }}
    >
      <NavContent>
        <div className="logo-section">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
        </div>

        <div className="menu-section">
          {['about', 'clients', 'products', 'career', 'contact'].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </div>

        <div className="social-section">
          {[
            { icon: FaLinkedin, href: '#' },
            { icon: FaGithub, href: '#' },
            { icon: FaTwitter, href: '#' }
          ].map((social, index) => (
            <SocialIcon
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon />
            </SocialIcon>
          ))}
        </div>
      </NavContent>
    </NavContainer>
  );
};

export default navbarse;