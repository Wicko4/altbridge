import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- FIELD CONFIGURATIONS FOR EACH PERSONA ---
const formSchemas = {
  philanthropist: [
    { id: 'name', label: 'Full Name / Organization', type: 'text', placeholder: 'e.g. Gates Foundation / John Doe' },
    { id: 'email', label: 'Work Email', type: 'email', placeholder: 'john@organization.org' },
    { id: 'focus', label: 'Primary Impact Focus', type: 'select', options: ['Select Focus Area', 'Climate & Environment', 'Agriculture & Rural', 'Affordable Housing', 'Livelihoods & Inclusion', 'Sector Agnostic'] },
    { id: 'instrument', label: 'Preferred Capital Instrument', type: 'select', options: ['Select Instrument', 'First-Loss Guarantees', 'Subordinated/Mezzanine Debt', 'Outcome-Based Grants', 'Direct Equity', 'Open to Structuring'] },
    { id: 'message', label: 'Impact Goals & Message', type: 'textarea', placeholder: 'Tell us about your catalytic goals...' }
  ],
  investor: [
    { id: 'name', label: 'Full Name / Institution', type: 'text', placeholder: 'e.g. Global Yield Fund / Jane Doe' },
    { id: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@institution.com' },
    { id: 'yield', label: 'Target Yield Profile (%)', type: 'text', placeholder: 'e.g. 10-12% IRR' },
    { id: 'ticket', label: 'Typical Deployment Ticket Size (₹)', type: 'select', options: ['Select Ticket Size', '₹5Cr - ₹10Cr', '₹10Cr - ₹25Cr', '₹25Cr - ₹50Cr', '₹50Cr+'] },
    { id: 'message', label: 'Mandate & Message', type: 'textarea', placeholder: 'Tell us about your investment mandate and risk appetite...' }
  ],
  enterprise: [
    { id: 'name', label: 'Founder Name / Company', type: 'text', placeholder: 'e.g. Acme Impact / Founder Name' },
    { id: 'email', label: 'Work Email', type: 'email', placeholder: 'founder@company.in' },
    { id: 'revenue', label: 'Current Annual Revenue (₹)', type: 'select', options: ['Select Revenue Bracket', 'Under ₹5 Crore', '₹5 Crore - ₹10 Crore', '₹10 Crore - ₹50 Crore', 'Over ₹50 Crore'] },
    { id: 'capital', label: 'Capital Required (₹)', type: 'text', placeholder: 'e.g. ₹15 Crore' },
    { id: 'useOfFunds', label: 'Primary Use of Funds', type: 'select', options: ['Select Use Case', 'Working Capital / Inventory', 'CAPEX / Infrastructure', 'Geographic Expansion', 'Refinancing existing debt'] },
    { id: 'message', label: 'Brief Business Model & Impact Thesis', type: 'textarea', placeholder: 'How does your enterprise generate revenue and impact?' }
  ]
};

export default function ContactPage() {
  // Default to the enterprise view
  const [activePersona, setActivePersona] = useState('enterprise');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since it's static right now, we just alert or console log
    alert(`Form submitted for persona: ${activePersona.toUpperCase()}`);
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#111111', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Injecting CSS for form focus states to keep the inline styling clean */}
      <style>
        {`
          .altbridge-input:focus {
            outline: none;
            border-color: #22c55e !important;
            box-shadow: 0 0 15px rgba(34, 197, 94, 0.1);
          }
          .altbridge-select option {
            background-color: #1a1a1a;
            color: #ffffff;
          }
        `}
      </style>

      <Navbar show={true} />

      <div style={{ flex: 1, padding: '160px 5vw 80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1000px', width: '100%' }}>
          
          {/* PAGE HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <div style={{ color: '#22c55e', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>
              Initiate Dialogue
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: '#ffffff', fontWeight: 500, margin: '0 0 20px 0', lineHeight: '1.1' }}>
              Connect with <span style={{ color: '#22c55e' }}>AltBridge.</span>
            </h1>
            <p style={{ fontFamily: 'sans-serif', fontSize: '1.15rem', color: '#9ca3af', fontWeight: 300, margin: 0, maxWidth: '600px', display: 'inline-block' }}>
              Select your operating context below so we can direct your inquiry to the appropriate structuring team.
            </p>
          </motion.div>

          {/* PERSONA SELECTOR TABS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
            {[
              { id: 'philanthropist', label: 'Philanthropic Capital', sub: 'Catalytic & First-Loss' },
              { id: 'investor', label: 'Commercial Investor', sub: 'Yield & Senior Debt' },
              { id: 'enterprise', label: 'Impact Enterprise', sub: 'Seeking Structured Debt' }
            ].map((tab) => {
              const isActive = activePersona === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePersona(tab.id)}
                  style={{
                    flex: '1 1 250px',
                    backgroundColor: isActive ? '#1a1a1a' : 'transparent',
                    border: `1px solid ${isActive ? '#22c55e' : 'rgba(255,255,255,0.1)'}`,
                    padding: '24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: '0px' // Sharp institutional edges
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <div style={{ color: isActive ? '#22c55e' : '#ffffff', fontFamily: 'sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', transition: 'color 0.3s' }}>
                    {tab.label}
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.85rem', fontWeight: 300 }}>
                    {tab.sub}
                  </div>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC FORM AREA */}
          <div style={{ backgroundColor: '#161616', borderTop: '3px solid #22c55e', padding: '50px', position: 'relative', overflow: 'hidden' }}>
            
            <AnimatePresence mode="wait">
              <motion.form
                key={activePersona} // Changes the key so Framer Motion animates the swap
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onSubmit={handleSubmit}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}
              >
                {formSchemas[activePersona].map((field) => (
                  <div 
                    key={field.id} 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      // Textareas span both columns
                      gridColumn: field.type === 'textarea' ? '1 / -1' : 'auto' 
                    }}
                  >
                    <label style={{ color: '#d1d5db', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 600 }}>
                      {field.label}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        className="altbridge-input"
                        placeholder={field.placeholder}
                        rows={5}
                        required
                        style={{
                          backgroundColor: '#111111', color: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', fontSize: '1rem', fontFamily: 'sans-serif', borderRadius: '0px', resize: 'vertical', transition: 'border-color 0.3s'
                        }}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        className="altbridge-input altbridge-select"
                        required
                        style={{
                          backgroundColor: '#111111', color: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', fontSize: '1rem', fontFamily: 'sans-serif', borderRadius: '0px', transition: 'border-color 0.3s', appearance: 'none'
                        }}
                      >
                        {field.options.map((opt, i) => (
                          <option key={i} value={i === 0 ? "" : opt} disabled={i === 0} selected={i === 0}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        className="altbridge-input"
                        placeholder={field.placeholder}
                        required
                        style={{
                          backgroundColor: '#111111', color: '#ffffff', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', fontSize: '1rem', fontFamily: 'sans-serif', borderRadius: '0px', transition: 'border-color 0.3s'
                        }}
                      />
                    )}
                  </div>
                ))}

                {/* SUBMIT BUTTON */}
                <div style={{ gridColumn: '1 / -1', marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#22c55e',
                      color: '#111111',
                      border: 'none',
                      padding: '18px 40px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: '0px',
                      transition: 'background-color 0.3s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1ea950'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Submit Inquiry
                  </button>
                </div>

              </motion.form>
            </AnimatePresence>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}