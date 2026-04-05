import React, {useState, useRef} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { motion, AnimatePresence } from 'framer-motion';


// --- SUB-COMPONENT: HERO SECTION ---
function AboutHero() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111111',
      overflow: 'hidden',
      padding: '120px 5vw 80px',
      boxSizing: 'border-box'
    }}>
      {/* Background Image */}
     <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }} 
        transition={{ duration: 2, ease: "easeOut" }}
        // A moody, structural bridge shot representing AltBridge's mission
        src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=2000&q=80"
        alt="AltBridge Structure"
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0
        }}
      />
      {/* Blending Gradient Overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(to bottom, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.8) 60%, #111111 100%)', zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div style={{ color: '#22c55e', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>
            Who We Are
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4.5rem', color: '#ffffff', fontWeight: 500, lineHeight: '1.2', margin: '0 0 30px 0' }}>
            Bridging the Gap Between Catalytic Capital and Commercial Scale.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ fontFamily: 'sans-serif', fontSize: '1.25rem', color: '#d1d5db', lineHeight: '1.8', fontWeight: 300, margin: 0 }}
        >
          AltBridge was founded to address a persistent market failure: many social and climate opportunities remain unfunded not because they lack merit, but because they lack the correct capital structure, transaction readiness, and stakeholder alignment.
        </motion.p>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: CORE TEAM ---
function CoreTeam() {
  const teamMembers = [
    { name: 'Harsh Bharwani', role: 'CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
    { name: 'Akshaya', role: 'CFO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
    { name: 'Bhavya Shah', role: 'COO', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
    { name: 'Joshua Dsilva', role: 'CTO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
    { name: 'Khushal Rathi', role: 'Director', image: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <div style={{ width: '100%', backgroundColor: '#111111', padding: '120px 5vw', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        
        {/* HEADER SECTION (Split layout matching the screenshot) */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          gap: '40px',
          marginBottom: '60px' 
        }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 500px' }}
          >
            <div style={{ color: '#22c55e', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '15px' }}>
              Leadership
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', color: '#ffffff', margin: 0, lineHeight: '1.2', fontWeight: 500 }}>
              Guiding our Vision and <br/>
              <span style={{ color: '#22c55e' }}>Strategy</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: '1 1 400px', paddingBottom: '10px' }}
          >
            <p style={{ color: '#9ca3af', fontFamily: 'sans-serif', fontSize: '1.15rem', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
              Our core leadership team ensures strategic direction, governance, and impactful decision-making to drive our mission forward.
            </p>
          </motion.div>
        </div>

        {/* TEAM GRID */}
        <div style={{ 
          display: 'grid', 
          // Automatically creates a 2-column layout on desktop, 1-column on mobile
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '30px' 
        }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#161616', // Slightly lighter than background to create the card shape
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '2px',
                padding: '24px',
                gap: '24px',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.4)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Profile Image with Grayscale Filter */}
              <div style={{ width: '120px', height: '120px', flexShrink: 0 }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '2px',
                    filter: 'grayscale(100%)', // Makes the image black & white like your example
                  }}
                />
              </div>

              {/* Name & Title */}
              <div>
                <h3 style={{ color: '#ffffff', fontFamily: 'sans-serif', fontSize: '1.4rem', fontWeight: 600, margin: '0 0 8px 0' }}>
                  {member.name}
                </h3>
                <div style={{ color: '#22c55e', fontSize: '1rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}


function TargetMarket() {
  const [isHoveringGap, setIsHoveringGap] = useState(false);

  // We generate an array of bars to create the abstract chart
  // type: 'left' (illuminated), 'gap' (dark), 'right' (illuminated)
  const chartBars = [
    { height: '85%', type: 'left' },
    { height: '70%', type: 'left' },
    { height: '55%', type: 'left' },
    { height: '40%', type: 'left' },
    { height: '30%', type: 'left' },
    // The "Valley" / Missing Middle
    { height: '15%', type: 'gap' },
    { height: '10%', type: 'gap' },
    { height: '12%', type: 'gap' },
    { height: '8%',  type: 'gap' },
    { height: '10%', type: 'gap' },
    { height: '14%', type: 'gap' },
    // Commercial Capital
    { height: '35%', type: 'right' },
    { height: '50%', type: 'right' },
    { height: '65%', type: 'right' },
    { height: '80%', type: 'right' },
    { height: '95%', type: 'right' }
  ];

  return (
    <div style={{
      width: '100%', 
      backgroundColor: '#111111', 
      padding: '120px 5vw', 
      boxSizing: 'border-box', 
      display: 'flex', 
      justifyContent: 'center', 
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        maxWidth: '1200px', 
        width: '100%', 
        height: '450px', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* TOP LABELS */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '40px',
          padding: '0 20px',
          boxSizing: 'border-box',
          zIndex: 2
        }}>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
            Micro / Seed <br/>
            <span style={{ color: '#4b5563', fontSize: '0.75rem' }}>&lt; ₹5 Crore</span>
          </div>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, textAlign: 'right' }}>
            Commercial Banks <br/>
            <span style={{ color: '#4b5563', fontSize: '0.75rem' }}>&gt; ₹100 Crore</span>
          </div>
        </div>

        {/* THE ABSTRACT BAR CHART */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          flex: 1, 
          display: 'flex', 
          alignItems: 'flex-end', // Aligns bars to the bottom
          justifyContent: 'space-between',
          gap: '8px'
        }}>
          
          {chartBars.map((bar, index) => {
            const isGap = bar.type === 'gap';
            // If it's a gap bar and being hovered, it lights up green. Otherwise, it stays dark.
            const isActiveGap = isGap && isHoveringGap;
            // Left and right bars are always illuminated (silver) unless the gap is hovered, then they dim slightly.
            const isSideBar = !isGap;
            
            let bgColor = '#1f2937'; // Default dark grey
            let shadow = 'none';

            if (isActiveGap) {
              bgColor = '#22c55e'; // AltBridge Green
              shadow = '0 0 20px rgba(34, 197, 94, 0.5)';
            } else if (isSideBar) {
              bgColor = isHoveringGap ? '#374151' : '#9ca3af'; // Dims when center is focused
            } else if (isGap) {
              bgColor = '#161616'; // Very dark for the empty valley
            }

            return (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: bar.height }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                style={{
                  flex: 1,
                  backgroundColor: bgColor,
                  boxShadow: shadow,
                  transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
                  // Sharp edges as requested previously
                  borderRadius: '0px' 
                }}
              />
            );
          })}

          {/* INVISIBLE HITBOX FOR HOVER DETECTION */}
          <div 
            onMouseEnter={() => setIsHoveringGap(true)}
            onMouseLeave={() => setIsHoveringGap(false)}
            style={{
              position: 'absolute',
              left: '30%', // Covers the middle section of the chart
              width: '40%',
              height: '100%',
              zIndex: 10,
              cursor: 'none' // Use your custom cursor
            }}
          />

        </div>

        {/* THE REVEALED TEXT (Centered floating card) */}
        <AnimatePresence>
          {isHoveringGap && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: 'absolute',
                top: '0', // Centered vertically over the chart
                left: '22%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                backgroundColor: 'rgba(17, 17, 17, 0.95)', // Slightly translucent dark background
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(34, 197, 94, 0.3)', // Subtle green border
                borderTop: '3px solid #22c55e', // Sharp architectural top accent
                padding: '40px',
                width: '90%',
                maxWidth: '600px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(34, 197, 94, 0.1)',
                textAlign: 'center',
                pointerEvents: 'none' // Ensures the hover state doesn't jitter when the modal appears over the mouse
              }}
            >
              <h2 style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: '2.5rem', 
                color: '#ffffff', 
                fontWeight: 500, 
                margin: '0 0 20px 0', 
                lineHeight: '1.2' 
              }}>
                Focusing on the <br/> <span style={{ color: '#22c55e' }}>"Missing Middle"</span>.
              </h2>
              <p style={{ 
                fontFamily: 'sans-serif', 
                fontSize: '1.1rem', 
                color: '#d1d5db', 
                lineHeight: '1.7', 
                fontWeight: 300, 
                margin: 0 
              }}>
                We focus on enterprises requiring ₹10 Crore to ₹50 Crore—businesses that have proven revenues but lack hard collateral for traditional banks, and urgently need structured debt to avoid massive equity dilution.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
// --- SUB-COMPONENT: THE ADVANTAGE ---
function Advantage() {
  const expertises = [
    { title: "Financial Modelling", desc: "Building rigorous capital stacks and repayment scenarios." },
    { title: "Legal Structuring", desc: "Navigating compliance, downside protection, and term logic." },
    { title: "Impact Measurement", desc: "Tracking milestones and verifying catalytic outcomes via IRIS+." },
    { title: "Philanthropic Advisory", desc: "Translating charitable intent into scalable, structured leverage." }
  ];

  return (
    <div style={{
      width: '100%', backgroundColor: '#161616', padding: '120px 5vw', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px', textAlign: 'center', marginBottom: '80px' }}
      >
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#ffffff', fontWeight: 500, margin: '0 0 30px 0', lineHeight: 1.3 }}>
          A Platform Built on Trust & Execution.
        </h2>
        <p style={{ fontFamily: 'sans-serif', fontSize: '1.15rem', color: '#d1d5db', lineHeight: '1.8', fontWeight: 300, margin: 0 }}>
          Blended finance requires translation across stakeholder logics. Philanthropy, private investment, and impact implementation each operate in different languages. We translate between these worlds to create common transactional logic.
        </p>
      </motion.div>

      {/* Expertise Grid */}
      <div style={{ 
        width: '100%', maxWidth: '1200px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' 
      }}>
        {expertises.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              backgroundColor: '#111111',
              borderTop: '3px solid #22c55e',
              padding: '40px 30px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, marginBottom: '15px' }}>
              {item.title}
            </div>
            <div style={{ color: '#9ca3af', fontFamily: 'sans-serif', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: 300 }}>
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
// --- MAIN PAGE EXPORT ---
export default function AboutUsPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#111111', minHeight: '100vh' }}>
      <Navbar show={true} />
      
      <AboutHero />
      <TargetMarket />
      <Advantage />
      
      {/* Add the CoreTeam section here! */}
      <CoreTeam />
      <CTASection/>
      <Footer />
    </div>
  );
}