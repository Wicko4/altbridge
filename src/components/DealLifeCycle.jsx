import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The exact 8 stages from the AltBridge Operations Plan
const lifecycleSteps = [
  {
    id: '01', gridArea: '1 / 1 / 2 / 2', title: 'Opportunity Sourcing',
    description: 'Building a continuously renewable pipeline of impact opportunities by scouting across climate, agri, housing, and livelihoods.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80' 
  },
  {
    id: '02', gridArea: '2 / 1 / 3 / 2', title: 'Preliminary Screening',
    description: 'Filtering opportunities for additionality, market failure, and blended finance suitability before committing structuring resources.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' 
  },
  {
    id: '03', gridArea: '3 / 1 / 4 / 2', title: 'Due Diligence & Assessment',
    description: 'Deep-dive validation of financials, impact thesis (IRIS+), regulatory compliance, and management credibility.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80' 
  },
  {
    id: '04', gridArea: '3 / 2 / 4 / 3', title: 'Capital Structuring',
    description: 'Designing the capital stack, selecting instruments (first-loss guarantees, sub-debt), and mapping risk allocation mechanisms.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80' 
  },
  {
    id: '05', gridArea: '2 / 2 / 3 / 3', title: 'Investor Acquisition',
    description: 'Curated outreach matching the opportunity with the specific mandates and risk appetites of philanthropists and private investors.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80' 
  },
  {
    id: '06', gridArea: '1 / 2 / 2 / 3', title: 'Transaction Execution',
    description: 'Managing term sheet negotiations, legal documentation, regulatory filings, and capital disbursement triggers.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80' 
  },
  {
    id: '07', gridArea: '1 / 3 / 2 / 4', title: 'Impact Governance',
    description: 'Post-deployment tracking of financial utilization, implementation milestones, and verified catalytic outcomes.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80' 
  },
  {
    id: '08', gridArea: '2 / 3 / 3 / 4', title: 'Knowledge Productization',
    description: 'Converting transaction learnings into reusable playbooks, sector templates, and market infrastructure for future scale.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80' 
  }
];

// Custom Line Component that handles the "drawing/traversing" animation
const Line = ({ style, direction, isIlluminated }) => {
  const activeColor = '#22c55e';
  const inactiveColor = 'rgba(255, 255, 255, 0.05)';

  // Determine which way the line should grow based on the snake path
  let transformOrigin = 'center';
  let scaleProp = 'scaleY';

  if (direction === 'down') { transformOrigin = 'top'; scaleProp = 'scaleY'; }
  if (direction === 'up') { transformOrigin = 'bottom'; scaleProp = 'scaleY'; }
  if (direction === 'right') { transformOrigin = 'left'; scaleProp = 'scaleX'; }
  if (direction === 'left') { transformOrigin = 'right'; scaleProp = 'scaleX'; }

  return (
    <div style={{ ...style, backgroundColor: inactiveColor, overflow: 'hidden' }}>
      <motion.div
        initial={{ [scaleProp]: 0 }}
        animate={{ [scaleProp]: isIlluminated ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: activeColor,
          transformOrigin: transformOrigin,
          boxShadow: isIlluminated ? '0 0 12px rgba(34, 197, 94, 0.6)' : 'none'
        }}
      />
    </div>
  );
};

// Circuit Board Line Renderer - Maps the direction so it traverses perfectly
const renderConnectingLines = (id, isIlluminated) => {
  const styleV = { position: 'absolute', left: '50%', width: '2px', transform: 'translateX(-50%)', zIndex: 0 };
  const styleH = { position: 'absolute', top: '50%', height: '2px', transform: 'translateY(-50%)', zIndex: 0 };

  switch(id) {
    case '01': return <Line style={{ ...styleV, top: '50%', height: '50%' }} direction="down" isIlluminated={isIlluminated} />; 
    case '02': return <Line style={{ ...styleV, top: 0, height: '100%' }} direction="down" isIlluminated={isIlluminated} />;    
    case '03': return ( 
      <>
        <Line style={{ ...styleV, top: 0, height: '50%' }} direction="down" isIlluminated={isIlluminated} />
        <Line style={{ ...styleH, left: '50%', width: '50%' }} direction="right" isIlluminated={isIlluminated} />
      </>
    );
    case '04': return ( 
      <>
        <Line style={{ ...styleH, left: 0, width: '50%' }} direction="right" isIlluminated={isIlluminated} />
        <Line style={{ ...styleV, top: 0, height: '50%' }} direction="up" isIlluminated={isIlluminated} />
      </>
    );
    case '05': return <Line style={{ ...styleV, top: 0, height: '100%' }} direction="up" isIlluminated={isIlluminated} />;    
    case '06': return ( 
      <>
        <Line style={{ ...styleV, top: '50%', height: '50%' }} direction="up" isIlluminated={isIlluminated} />
        <Line style={{ ...styleH, left: '50%', width: '50%' }} direction="right" isIlluminated={isIlluminated} />
      </>
    );
    case '07': return ( 
      <>
        <Line style={{ ...styleH, left: 0, width: '50%' }} direction="right" isIlluminated={isIlluminated} />
        <Line style={{ ...styleV, top: '50%', height: '50%' }} direction="down" isIlluminated={isIlluminated} />
      </>
    );
    case '08': return <Line style={{ ...styleV, top: 0, height: '50%' }} direction="down" isIlluminated={isIlluminated} />;     
    default: return null;
  }
};

export default function DealLifecycle() {
  const [activeStep, setActiveStep] = useState(0);

  const customEase = [0.16, 1, 0.3, 1];

  return (
    <div style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#111111', 
        padding: '120px 5vw',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'auto',
        // THE BLUEPRINT BACKGROUND GRID
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}
    >
      
      {/* Subtle vignette over the grid */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at center, transparent 30%, #111111 90%)',
        pointerEvents: 'none',
        zIndex: 0
      }}/>

      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '3.5rem', 
          color: '#ffffff', 
          fontWeight: 500,
          marginBottom: '80px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}
      >
        The Deal Lifecycle.
      </motion.h2>

      <div style={{ 
        position: 'relative', 
        width: '100%', 
        minWidth: '1000px', 
        maxWidth: '1200px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '0px' 
      }}>
        
        {lifecycleSteps.map((step, index) => {
          const isActive = activeStep === index;
          const isIlluminated = index <= activeStep; 

          return (
            <motion.div 
              key={step.id}
              onClick={() => setActiveStep(index)}
              animate={{
                opacity: isIlluminated ? 1 : 0.3,
                scale: isActive ? 1 : 0.95,
                filter: isIlluminated ? 'grayscale(0%)' : 'grayscale(100%)'
              }}
              transition={{ duration: 0.6, ease: customEase }}
              style={{
                gridArea: step.gridArea,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '40px 20px',
                cursor: 'none', 
                zIndex: isActive ? 20 : 1
              }}
            >
              
              {renderConnectingLines(step.id, isIlluminated)}

              <div style={{ 
                color: isIlluminated ? '#22c55e' : '#4b5563', 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '3px', 
                marginBottom: '20px',
                zIndex: 2,
                transition: 'color 0.6s ease'
              }}>
                PHASE {step.id}
              </div>

              {/* FLAT IMAGE BLOCK */}
              <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                
                <motion.div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '0px', 
                    boxShadow: isIlluminated ? '0 0 40px rgba(34, 197, 94, 0.4)' : '0 10px 20px rgba(0,0,0,0.5)',
                    transition: 'all 0.6s ease'
                  }}
                />

                <motion.div style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '100%', 
                  height: '100%', 
                  overflow: 'hidden', 
                  borderRadius: '0px',
                }}>
                  <motion.img 
                    src={step.image} 
                    alt={step.title}
                    animate={{
                      scale: isActive ? 1.35 : 1, 
                    }}
                    transition={{ duration: 0.8, ease: customEase }} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '0px' 
                    }}
                  />
                </motion.div>
              </div>

              {/* TITLE & DESCRIPTION */}
              <motion.div 
                style={{ 
                  textAlign: 'center', 
                  zIndex: 2, 
                  marginTop: '25px',
                }}
              >
                <h3 style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: '1.4rem', 
                  color: isIlluminated ? '#ffffff' : '#9ca3af', 
                  margin: '0 0 10px 0', 
                  lineHeight: '1.3',
                  transition: 'color 0.6s ease'
                }}>
                  {step.title}
                </h3>
                
                <div style={{ minHeight: '80px' }}> 
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.5', margin: 0, fontWeight: 300 }}
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}