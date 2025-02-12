import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/.comp/navbarse'
import MainPage from './components/main/MainPage'
import Footer from './components/.comp/footer'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Clients from './pages/Clients'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/clients" element={<Clients/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
