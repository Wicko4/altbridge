import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pathData = [
  {
    id: 0,
    role: "For Philanthropists",
    headline: "Amplify your impact far beyond direct funding.",
    body: "We structure your funds to absorb risk and unlock larger pools of commercial capital. Gain end-to-end visibility into capital unlocked and catalytic milestones achieved.",
    color: "#22c55e", // Philanthropy Green
    // Replace this URL with your downloaded image
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1000&auto=format&fit=crop" 
  },
  {
    id: 1,
    role: "For Private Investors",
    headline: "Access de-risked, curated impact opportunities.",
    body: "Mitigate early-stage risks through first-loss capital and subordinated structures. Invest with standardized monitoring, governance, and credible impact measurement.",
    color: "#94a3b8", // Investor Silver
    // Replace this URL with your downloaded image
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
  },
  {
    id: 2,
    role: "For Impact Enterprises",
    headline: "Transition from mission credibility to capital readiness.",
    body: "Access the right blend of instruments tailored specifically to your maturity stage. Upgrade your project from a promising idea into a fully documented, investable opportunity.",
    color: "#f97316", // Enterprise Orange
    // Replace this URL with your downloaded image
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
  }
];

export default function ChooseYourPath() {
  // Keeps the first item (Philanthropists) open by default
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ width: '100%', backgroundColor: '#111111', padding: '120px 5vw', boxSizing: 'border-box' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '80px', 
        alignItems: 'center', 
        flexWrap: 'wrap' 
      }}>

        {/* LEFT COLUMN: DYNAMIC IMAGES */}
        <div style={{ flex: '1 1 450px', position: 'relative', height: '600px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={pathData[activeIndex].image}
              alt={pathData[activeIndex].role}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            />
          </AnimatePresence>
          {/* Cinematic dark overlay to blend the image into the dark background */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 17, 17, 0.2)', pointerEvents: 'none' }} />
        </div>

        {/* RIGHT COLUMN: INTERACTIVE ACCORDION */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          <h2 style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '20px', fontWeight: 500 }}>
            Choose Your Path.
          </h2>

          {pathData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '20px',
                  cursor: 'pointer' // Change to 'none' if using your custom cursor
                }}
              >
                {/* Role Subheading */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ 
                    width: '10px', height: '10px', borderRadius: '50%', 
                    backgroundColor: isActive ? item.color : 'transparent', 
                    border: `1px solid ${item.color}`, 
                    transition: 'all 0.3s' 
                  }} />
                  <div style={{ 
                    color: isActive ? item.color : '#9ca3af', 
                    fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.3s' 
                  }}>
                    {item.role}
                  </div>
                </div>

                {/* Interactive Headline */}
                <h3 style={{ 
                  color: isActive ? '#ffffff' : '#9ca3af', 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: '1.8rem', 
                  margin: '0 0 10px 0', 
                  lineHeight: '1.3',
                  transition: 'color 0.3s' 
                }}>
                  {item.headline}
                </h3>

                {/* Expanding Body */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ 
                        color: '#d1d5db', 
                        fontSize: '1.05rem', 
                        lineHeight: '1.6', 
                        paddingTop: '10px', 
                        margin: 0, 
                        fontFamily: 'sans-serif',
                        fontWeight: 300
                      }}>
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}