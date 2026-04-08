import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // IMPORT useLocation

export default function Navbar({ show }) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation(); // This gets the current URL path

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!show) return;
    if (latest < 50) {
      setHidden(false);
      return;
    }
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // --- HELPER COMPONENT FOR CLEANER LINKS ---
  // This automatically checks if the link matches the current URL 
  // and handles the hover opacity logic perfectly.
  const NavItem = ({ to, label }) => {
    const isActive = location.pathname === to;

    return (
      <Link 
        to={to} 
        style={{ 
          cursor: 'none', 
          opacity: isActive ? 1 : 0.6, // Highlight if active, dim if not
          transition: 'opacity 0.3s', 
          textDecoration: 'none', 
          color: 'inherit' 
        }} 
        onMouseEnter={(e) => e.target.style.opacity = 1} 
        onMouseLeave={(e) => {
          // Only dim it back down if it's NOT the active page
          if (!isActive) e.target.style.opacity = 0.6;
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: show && !hidden ? 1 : 0, y: show && !hidden ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', boxSizing: 'border-box', 
        padding: '25px 5vw', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', zIndex: 100, color: '#ffffff',
        pointerEvents: show && !hidden ? 'auto' : 'none', 
      }}
    >
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600, letterSpacing: '1px' }}>
        {/* Clicking the logo takes you Home */}
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', cursor: 'none' }}>
          Altbridge.
        </Link>
      </div>
      
      <div style={{ display: 'flex', gap: '40px', fontFamily: 'sans-serif', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
        
        {/* Now we just use our clean NavItem component! */}
        <NavItem to="/" label="Home" />
        <NavItem to="/services" label="Services" />
        <NavItem to="/products" label="Products" />
        <NavItem to="/about" label="About Us" />
        <NavItem to="/contact" label="Contact" />
        
      
        
      </div>
    </motion.nav>
  );
}