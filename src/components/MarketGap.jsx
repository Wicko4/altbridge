import React from 'react';
import { motion } from 'framer-motion';

export default function MarketGap() {
  return (
    <div style={{
      width: '100%',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#161616', // Slightly lighter than pure black to create section contrast
      padding: '100px 5vw',
      boxSizing: 'border-box'
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{ 
          color: '#ffffff', 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '3.5rem', 
          textAlign: 'center', 
          marginBottom: '30px', 
          maxWidth: '900px', 
          lineHeight: '1.2',
          fontWeight: 500
        }}
      >
        Capital exists. Impact is waiting. <br/>
        <span style={{ color: '#9ca3af', fontStyle: 'italic' }}>Coordination is missing.</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ 
          color: '#d1d5db', 
          fontSize: '1.2rem', 
          textAlign: 'center', 
          maxWidth: '800px', 
          lineHeight: '1.8', 
          fontFamily: 'sans-serif', 
          fontWeight: 300 
        }}
      >
        India’s climate and social investment requirements exceed $170 billion annually, yet current capital deployment remains a fraction of this, presenting a massive structural financing gap. We solve the market failure between capital providers and impact creators by transforming underfunded opportunities into structured, investable transactions with measurable accountability.
      </motion.p>
    </div>
  );
}