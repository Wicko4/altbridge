import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/BloomingCursor'; 
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage'; // <-- 1. Import the new page
import ContactPage from './pages/ContactUsPage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  return (
    <Router basename="/altbridge">
      <CustomCursor />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* 2. Add the Route path */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}