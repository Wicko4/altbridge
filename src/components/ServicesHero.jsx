import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '80vh', // Slightly shorter than the main hero so users know there is content below
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111111',
      overflow: 'hidden',
      padding: '100px 5vw',
      boxSizing: 'border-box'
    }}>
      
      {/* 1. THE BACKGROUND BACKGROUND IMAGE */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }} // Opacity kept low for subtlety
        transition={{ duration: 2, ease: "easeOut" }}
        // A placeholder showing sleek, abstract architectural lines
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
        alt="Services Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />

      {/* 2. THE BLENDING GRADIENT OVERLAY */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // Fades from a dark wash at the top to solid background color at the bottom
        background: 'linear-gradient(to bottom, rgba(17,17,17,0.4) 0%, rgba(17,17,17,0.8) 60%, #111111 100%)',
        zIndex: 1
      }} />

      {/* 3. THE TEXT CONTENT */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {/* Subtle kicker text to introduce the section */}
          <div style={{ 
            color: '#22c55e', // Philanthropy Green
            fontSize: '0.85rem', 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            fontWeight: 600, 
            marginBottom: '20px' 
          }}>
            Our Approach
          </div>

          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '4.5rem', 
            color: '#ffffff', 
            fontWeight: 500, 
            lineHeight: '1.2',
            margin: '0 0 30px 0'
          }}>
            End-to-End Deal Structuring & Execution.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ 
            fontFamily: 'sans-serif', 
            fontSize: '1.25rem', 
            color: '#d1d5db', 
            lineHeight: '1.8', 
            fontWeight: 300,
            margin: 0 
          }}
        >
          We do not serve one customer; we act as a coordination layer for the full ecosystem. Our disciplined execution workflow manages the full deal lifecycle from origination to post-investment monitoring.
        </motion.p>
      </div>

    </div>
  );
}