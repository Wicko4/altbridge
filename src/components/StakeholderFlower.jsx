import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stakeholderData = {
  donors: {
    id: 'donors',
    label: 'DONORS',
    color: '#22c55e',
    angle: 270,
    headline: 'Amplify your impact far beyond direct funding.',
    points: [
      { title: 'Capital Efficiency', desc: 'We structure your funds to absorb risk and unlock larger pools of commercial capital.' },
      { title: 'True Additionality', desc: 'Support high-potential opportunities that conventional markets routinely neglect.' },
      { title: 'End-to-End Visibility', desc: 'Gain structured visibility into capital unlocked and catalytic milestones achieved.' }
    ]
  },
  investors: {
    id: 'investors',
    label: 'INVESTORS',
    color: '#94a3b8',
    angle: 90,
    headline: 'Access de-risked, curated impact opportunities.',
    points: [
      { title: 'Risk-Adjusted Access', desc: 'Mitigate early-stage risks through first-loss capital.' },
      { title: 'Screening Efficiency', desc: 'Access curated pipeline.' },
      { title: 'Commercial Discipline', desc: 'Standardized governance and impact measurement.' }
    ]
  },
  enterprise: {
    id: 'enterprise',
    label: 'ENTERPRISE',
    color: '#f97316',
    angle: 180,
    headline: 'Transition from mission credibility to capital readiness.',
    points: [
      { title: 'Capital Structures', desc: 'Blended instruments tailored to your stage.' },
      { title: 'Investment Readiness', desc: 'Convert ideas into investable opportunities.' },
      { title: 'Investor Alignment', desc: 'Match with aligned capital faster.' }
    ]
  },
  government: {
    id: 'government',
    label: 'GOVERNMENT',
    color: '#c084fc',
    angle: 0,
    headline: 'A local structuring and execution platform.',
    points: [
      { title: 'Local Context', desc: 'Grounded in regulatory realities.' },
      { title: 'Lower Friction', desc: 'Standardized deal pathways.' },
      { title: 'Ecosystem Integration', desc: 'Bridge capital with ecosystem partners.' }
    ]
  }
};

export default function StakeholderFlower() {
  const [activeNode, setActiveNode] = useState(null);

  // --- UPDATED GEOMETRY ---
  const radius = 280; // Increased from 220 to push them further apart
  const centerX = 450; // Adjusted for new container size
  const centerY = 450; // Adjusted for new container size

  const activeSize = 550; // Slightly larger bloom
  const inactiveSize = 160; // Increased from 130 to make circles bigger

  return (
    <div
      onClick={() => activeNode && setActiveNode(null)}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px', // Increased container to prevent cutoffs
        height: '900px',   // Increased container to prevent cutoffs
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >

      {/* 🌿 WEED STEM LAYER */}
      <svg
        width="900" // Updated to match new container size
        height="900"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        {Object.values(stakeholderData).map((data) => {
          const rad = data.angle * (Math.PI / 180);

          const endX = centerX + radius * Math.sin(rad);
          const endY = centerY - radius * Math.cos(rad);

          const isActive = activeNode === data.id;

          return (
            <motion.path
              key={data.id}
              d={`
                M ${centerX} ${centerY}
                Q ${centerX + (endX - centerX) * 0.4 + 40}
                  ${centerY + (endY - centerY) * 0.4 - 40}
                  ${endX} ${endY}
              `}
              stroke={data.color}
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut'
              }}
            />
          );
        })}
      </svg>

      {/* RING */}
      <motion.div
        animate={{ opacity: activeNode ? 0 : 1, scale: activeNode ? 0.85 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '50%'
        }}
      />

      {/* CENTER TEXT */}
      <AnimatePresence>
        {!activeNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', width: '300px', textAlign: 'center' }}
          >
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: '#fff', lineHeight: 1.5}}>
              One Platform.<br />Aligned Outcomes.
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '1.05rem' }}>
              Select a stakeholder to explore.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NODES */}
      {Object.values(stakeholderData).map((data) => {
        const isActive = activeNode === data.id;

        const rad = data.angle * (Math.PI / 180);

        const activeX = -activeSize / 2;
        const activeY = -activeSize / 2;

        const inactiveX = (-inactiveSize / 2) + radius * Math.sin(rad);
        const inactiveY = (-inactiveSize / 2) - radius * Math.cos(rad);

        return (
          <motion.div
            key={data.id}
            onClick={(e) => {
              e.stopPropagation();
              if (!isActive) setActiveNode(data.id);
            }}
            animate={{
              x: isActive ? activeX : inactiveX,
              y: isActive ? activeY : inactiveY,
              width: isActive ? activeSize : inactiveSize,
              height: isActive ? activeSize : inactiveSize,
              backgroundColor: isActive ? '#1a1a1a' : '#111111',
              borderColor: isActive ? data.color : 'rgba(255,255,255,0.2)',
              boxShadow: isActive ? `0 0 80px ${data.color}30` : 'none',
              opacity: activeNode && !isActive ? 0 : 1,
            }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 120
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              borderRadius: '50%',
              border: '2px solid',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              cursor: isActive ? 'default' : 'pointer', // Custom cursor handles nicely here
              zIndex: isActive ? 10 : 2
            }}
          >

            {!isActive && (
              <div style={{ textAlign: 'center' }}>
                {/* Slightly larger text for the larger circles */}
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', fontStyle: 'italic', marginBottom: '4px' }}>for</div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '1.1rem', letterSpacing: '1px' }}>{data.label}</div>
              </div>
            )}

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: '60px 50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveNode(null);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      color: '#9ca3af'
                    }}
                  >
                    ✕
                  </div>

                  <h4 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: '#fff' }}>
                    {data.headline}
                  </h4>

                  {data.points.map((p, i) => (
                    <div key={i} style={{ marginBottom: '15px', textAlign: 'center' }}>
                      <div style={{ color: data.color, fontWeight: 600, fontSize: '1.1rem', marginBottom: '4px' }}>{p.title}</div>
                      <div style={{ fontSize: '0.95rem', color: '#d1d5db', lineHeight: '1.5' }}>{p.desc}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        );
      })}
    </div>
  );
}