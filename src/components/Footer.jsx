import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const headerStyle = {
    color: '#ffffff',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    marginBottom: '10px',
    textTransform: 'uppercase',
    fontWeight: 500
  };

  const linkStyle = {
    color: '#d1d5db',
    fontSize: '0.95rem',
    textDecoration: 'none',
    cursor: 'none', // Keeps your custom cursor active
    transition: 'color 0.3s ease'
  };

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#161616', // Matches the dark slate of the reference
      padding: '80px 5vw 40px 5vw',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif'
    }}>
      
      {/* --- TOP SECTION --- */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '60px',
        marginBottom: '60px'
      }}>
        
        {/* Brand Logo */}
        <div style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '2.5rem', 
          fontWeight: 600,
          color: '#ffffff',
          letterSpacing: '1px'
        }}>
          Altbridge.
        </div>

        {/* Links Container */}
        <div style={{
          display: 'flex',
          gap: '80px',
          flexWrap: 'wrap'
        }}>
          {/* Column 1 */}
          <div style={linkColumnStyle}>
            <div style={headerStyle}>Quick Links</div>
            <motion.span whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Services</motion.span>
            <motion.span whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Impact</motion.span>
          </div>

          {/* Column 2 */}
          <div style={linkColumnStyle}>
            <div style={headerStyle}>Company</div>
            <motion.span whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>About</motion.span>
            <motion.span whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Contact</motion.span>
          </div>

          {/* Column 3 */}
          <div style={linkColumnStyle}>
            <div style={headerStyle}>Insights</div>
            <motion.span whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Blogs</motion.span>
            <motion.span whileHover={{ color: '#ffffff', x: 2 }} style={linkStyle}>Podcasts</motion.span>
          </div>
        </div>
      </div>

      {/* --- DIVIDER --- */}
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        marginBottom: '30px'
      }} />

      {/* --- BOTTOM SECTION --- */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        
        {/* LinkedIn Icon */}
        <motion.div 
          whileHover={{ opacity: 1, scale: 1.1 }}
          style={{ opacity: 0.7, cursor: 'none' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM7.118 20.452H3.558V9H7.118V20.452ZM5.338 7.433C4.197 7.433 3.275 6.511 3.275 5.37C3.275 4.23 4.197 3.307 5.338 3.307C6.478 3.307 7.4 4.23 7.4 5.37C7.4 6.511 6.478 7.433 5.338 7.433ZM20.452 20.452H16.892V14.881C16.892 13.554 16.867 11.848 15.05 11.848C13.208 11.848 12.925 13.284 12.925 14.786V20.452H9.366V9H12.783V10.565H12.831C13.308 9.663 14.472 8.706 16.208 8.706C19.82 8.706 20.452 11.084 20.452 14.167V20.452Z"/>
          </svg>
        </motion.div>

        {/* Copyright & Scroll to Top */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          <div style={{ color: '#d1d5db', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            © 2026 Altbridge. All rights reserved.
          </div>
          
          <motion.div
            onClick={scrollToTop}
            whileHover={{ backgroundColor: '#2563eb' }} // Lighter blue on hover
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#1d4ed8', // Reference blue
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'none',
              borderRadius: '2px'
            }}
          >
            {/* Up Arrow SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

      </div>
    </div>
  );
}