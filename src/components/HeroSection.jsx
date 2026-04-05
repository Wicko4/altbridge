import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ animationComplete, setAnimationComplete }) {
  const nodeDegrees = [0, 90, 180, 270];
  const radius = 250;

  return (
    <div style={{
      position: 'relative', width: '100%', boxSizing: 'border-box', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: '#111111', zIndex: 1, overflow: 'hidden'
    }}>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={animationComplete ? { opacity: 1, scale: 1, rotate: 360 } : { opacity: 0, scale: 0.8, rotate: 0 }}
        transition={animationComplete ? { 
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: "easeOut" },
          rotate: { duration: 40, ease: "linear", repeat: Infinity } 
        } : {}}
        style={{
          position: 'absolute', width: `${radius * 2}px`, height: `${radius * 2}px`,
          border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '50%', zIndex: 1
        }}
      >
        {nodeDegrees.map((deg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 + i * 0.2, duration: 0.8 }}
            style={{
              position: 'absolute', width: '60px', height: '60px', borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: '#111111',
              top: '50%', left: '50%',
              x: `calc(-50% + ${radius * Math.sin(deg * (Math.PI / 180))}px)`,
              y: `calc(-50% - ${radius * Math.cos(deg * (Math.PI / 180))}px)`,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: '-50vw', opacity: 0, borderRadius: '50%' }}
        animate={{ x: 0, opacity: [0, 1, 1, 0], scale: [1, 1, 3, 5] }}
        transition={{ duration: 3, times: [0, 0.4, 0.7, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', width: '120px', height: '120px', backgroundColor: '#22c55e', zIndex: 2 }}
        onAnimationComplete={() => setAnimationComplete(true)}
      />
      <motion.div
        initial={{ x: '50vw', opacity: 0, borderRadius: '8px' }}
        animate={{ x: 0, opacity: [0, 1, 1, 0], scale: [1, 1, 3, 5], rotate: [0, 0, 45, 90] }}
        transition={{ duration: 3, times: [0, 0.4, 0.7, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', width: '120px', height: '120px', backgroundColor: '#94a3b8', zIndex: 1 }}
      />

      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
        style={{ 
          fontFamily: "'Playfair Display', serif", fontSize: '5rem', color: '#ffffff', fontWeight: 500, letterSpacing: '2px', 
          zIndex: 10, margin: 0, padding: '40px 0', lineHeight: '1.5', overflow: 'visible',
          background: 'linear-gradient(to right, #ffffff, #d1d5db)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center'
        }}
      >
        Altbridge.
      </motion.h1>

      {animationComplete && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', bottom: '8%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', zIndex: 10 }}
        >
          <div style={{ color: '#9ca3af', fontFamily: 'sans-serif', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', textAlign: 'center' }}>
            The Infrastructure for Blended Finance
          </div>
        </motion.div>
      )}
    </div>
  );
}