import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  // The 4 Stakeholder Colors - Updated to a premium, vibrant palette
  const blobs = [
    // 1. Ocean Blue (Government/Institutions) - Top Middle
    { 
      color: '#0ea5e9', size: 180, 
      base: { top: '-80px', left: '40%' }, 
      hover: { x: 200, y: 150 } 
    },
    // 2. Amber Gold (Investors) - Top Right
    { 
      color: '#fbbf24', size: 140, 
      base: { top: '-40px', right: '-20px' }, 
      hover: { x: -200, y: 120 } 
    },
    // 3. Coral Red (Enterprise) - Bottom Right
    { 
      color: '#f43f5e', size: 280, 
      base: { bottom: '-120px', right: '-5%' }, 
      hover: { x: -150, y: -200 } 
    },
    // 4. Emerald Green (Donors) - Bottom Middle
    { 
      color: '#10b981', size: 120, 
      base: { bottom: '-50px', left: '30%' }, 
      hover: { x: 300, y: -100 } 
    }
  ];

  return (
    <div style={{
      width: '100%',
      boxSizing: 'border-box', 
      backgroundColor: '#111111',
      padding: '100px 5vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <motion.div 
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          boxSizing: 'border-box', 
          backgroundColor: '#1a1a1a', 
          borderRadius: '16px',
          padding: '80px 60px',
          overflow: 'hidden', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        
        {/* THE 4 BLOBS (Magnetically attracted to each other) */}
        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            animate={{
              x: isHovered ? blob.hover.x : 0,
              y: isHovered ? blob.hover.y : 0,
              scale: isHovered ? 1.2 : 1 
            }}
            transition={{
              type: 'spring',
              stiffness: 40, 
              damping: 20,   
              mass: 1.5
            }}
            style={{
              position: 'absolute',
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              backgroundColor: blob.color,
              borderRadius: '50%',
              opacity: isHovered ? 0.95 : 0.85, 
              zIndex: 0,
              ...blob.base
            }}
          />
        ))}

        {/* TEXT & BUTTON CONTENT */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px' }}>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '3.5rem', 
            color: '#ffffff', 
            margin: '0 0 20px 0',
            fontWeight: 500
          }}>
            Let's Collaborate
          </h2>
          
          <p style={{ 
            fontFamily: 'sans-serif', 
            fontSize: '1.1rem', 
            color: '#d1d5db', 
            lineHeight: '1.6',
            margin: '40px 40px 40px 0',
            fontWeight: 300, 
            
          }}>
            Whether you're looking to fund change or create it, we're here to design blended finance solutions that meet your goals.
          </p>
          
          <motion.button
            whileHover={{ backgroundColor: '#ffffff', color: '#111111' }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid #ffffff',
              padding: '14px 32px',
              fontSize: '1rem',
              borderRadius: '6px',
              fontFamily: 'sans-serif',
              letterSpacing: '1px',
              cursor: 'none', 
              outline: 'none'
            }}
          >
            Get in touch
          </motion.button>
        </div>

      </motion.div>
    </div>
  );
}