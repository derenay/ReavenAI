import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/.comp/navbarse'
import MainPage from './components/main/MainPage'
import Footer from './components/.comp/footer'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Clients from './pages/Clients'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import './App.css'

// Title component to handle title changes
const TitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'Shape Creativity';
    
    if (path !== '/') {
      // Remove leading slash and capitalize first letter
      const pageName = path.substring(1).charAt(0).toUpperCase() + path.slice(2);
      title = `${pageName} | Shape Creativity`;
    }
    
    document.title = title;
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <TitleHandler />
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
