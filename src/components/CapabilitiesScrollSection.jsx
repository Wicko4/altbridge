import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function CapabilitiesScrollSection() {
  const targetRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 270]); 

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  const items = [
    { num: '01', title: 'Pipeline Origination', desc: 'Identifying high-potential impact opportunities across climate, livelihoods, and health.' },
    { num: '02', title: 'Capital Structuring', desc: 'Designing the architecture that allows philanthropic and commercial funding to participate safely.' },
    { num: '03', title: 'Investment Readiness', desc: 'Transforming mission-led organizations with strong execution capability into capital-ready participants.' },
    { num: '04', title: 'Impact Governance', desc: 'Replacing vague narratives with structured visibility, milestone tracking, and outcome accountability.' }
  ];

  return (
    <div ref={targetRef} style={{ height: '400vh', position: 'relative', width: '100%' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-start', paddingTop: '25vh', backgroundColor: '#111111'
      }}>
        <h2 style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif", fontSize: '3rem', margin: '0 0 6vh 0', textAlign: 'center' }}>
          How We Bridge the Gap.
        </h2>
        <div style={{ position: 'relative', width: '450px', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div style={{
            position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
            background: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%2322c55e' fill-opacity='0.15'/%3E%3C/svg%3E"), conic-gradient(from 0deg at 50% 50%, #064e3b 0deg, #14532d 90deg, #022c22 180deg, #166534 270deg, #064e3b 360deg)`,
            rotate: rotation, boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(34,197,94,0.2)', zIndex: 1
          }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: 'center', padding: '40px', maxWidth: '350px' }}
              >
                <div style={{ color: '#fff', fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '10px', fontWeight: 600, opacity: 0.7 }}>{items[activeIndex].num}</div>
                <h3 style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', margin: '0 0 20px 0', lineHeight: '1.4' }}>{items[activeIndex].title}</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '1.05rem', margin: 0 }}>{items[activeIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}