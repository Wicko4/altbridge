import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- EXPANDED DATA SET ---
const products = [
  {
    id: '01', title: 'Senior Debt', type: 'Commercial Capital', riskProfile: 'Low Risk / Priority Repayment',
    description: 'Loans with first priority of repayment, usually offered on concessional or more flexible terms to make viable projects easier to finance.',
    deepDive: {
      headline: 'Catalyzing Growth with Priority Capital.',
      overview: 'Our Senior Debt instruments are designed to bridge the gap between early-stage grants and commercial bank loans. By taking a first-lien position but offering flexible covenants and concessional pricing, we allow enterprises to scale without the crippling debt service burdens of traditional finance.',
      mechanics: [
        'First-lien priority on specific project assets or overall cash flows.',
        'Concessional pricing compared to purely commercial market rates.',
        'Customized amortization schedules aligned with impact milestones.'
      ],
      idealFor: 'Post-revenue impact enterprises with predictable, stable cash flows requiring significant CAPEX or working capital for expansion.',
      caseStudy: 'AltBridge structured a ₹15 Crore senior term loan for a distributed solar company, enabling the successful electrification of 500+ off-grid primary healthcare clinics across rural India.'
    }
  },
  {
    id: '02', title: 'Subordinated Debt', type: 'Blended Capital', riskProfile: 'Medium Risk / Subordinate Repayment',
    description: 'Debt with lower repayment priority than senior lenders, used to absorb more risk and improve comfort for other investors.',
    deepDive: {
      headline: 'Absorbing Risk to Unlock Commercial Scale.',
      overview: 'Subordinated (or mezzanine) debt acts as a buffer. By sitting below senior lenders in the capital stack, it provides the necessary downside protection for commercial banks to enter the deal. It prevents founders from having to dilute their equity prematurely while still raising necessary scale-up capital.',
      mechanics: [
        'Second-lien or unsecured position in the capital stack.',
        'Often structured with payment-in-kind (PIK) or back-ended interest structures.',
        'Can include equity warrants for upside participation in high-growth scenarios.'
      ],
      idealFor: 'Capital-intensive businesses that have exhausted commercial debt limits but want to avoid highly dilutive Series B/C equity rounds.',
      caseStudy: 'Provided ₹8 Crore in subordinated debt to an agri-logistics firm. This layer of risk-absorbing capital directly unlocked a further ₹25 Crore in senior debt from a mainstream commercial bank.'
    }
  },
  {
    id: '03', title: 'Equity', type: 'Growth Capital', riskProfile: 'High Risk / Patient Capital',
    description: 'Ownership capital invested in a company or fund, often with more patient return expectations to support growth and attract co-investors.',
    deepDive: {
      headline: 'Patient Ownership for Transformative Impact.',
      overview: 'Our equity investments provide highly patient, long-term alignment with founders. We do not operate on aggressive 5-year exit mandates; instead, we provide the foundational ownership capital required to build sustainable, generational impact infrastructure.',
      mechanics: [
        'Direct minority stakes in high-impact enterprises.',
        'Active board participation focusing on governance and impact measurement (IRIS+).',
        'Patient exit horizons extending beyond standard venture capital timelines.'
      ],
      idealFor: 'Early-growth stage enterprises needing runway to prove a novel, high-impact business model before it can support debt.',
      caseStudy: 'Took a 12% equity position in an affordable housing tech startup, providing 4 years of runway to refine their alternative credit-scoring algorithm for informal sector workers.'
    }
  },
  {
    id: '04', title: 'Guarantees & Risk-Sharing', type: 'De-Risking Instrument', riskProfile: 'Contingent Liability',
    description: 'Instruments that cover part of the loss or default risk, helping de-risk projects for lenders and private investors.',
    deepDive: {
      headline: 'Institutional Credit Enhancement.',
      overview: 'A highly efficient use of catalytic capital. Instead of funding a project directly, AltBridge provides a partial or first-loss guarantee to a traditional commercial lender. If the borrower defaults, we cover the initial losses. This completely changes the risk calculus for risk-averse institutions.',
      mechanics: [
        'First-loss or pari-passu (pro-rata) default coverage.',
        'Highly leveraged: ₹1 of guarantee can often unlock ₹5 to ₹10 of commercial lending.',
        'Reduces collateral requirements for the underlying impact borrower.'
      ],
      idealFor: 'Sectors perceived as high-risk by traditional banks (e.g., smallholder agriculture, e-mobility) where actual default rates are historically lower than perceived.',
      caseStudy: 'Issued a ₹5 Crore first-loss guarantee facility to a leading NBFC, which allowed them to launch a ₹40 Crore loan portfolio exclusively for female micro-entrepreneurs without demanding hard collateral.'
    }
  },
  {
    id: '05', title: 'Performance Incentives', type: 'Outcome-Based Funding', riskProfile: 'Milestone Dependent',
    description: 'Funding linked to pre-agreed results or milestones, used to reward successful delivery and measurable impact.',
    deepDive: {
      headline: 'Paying for Verified Success.',
      overview: 'Performance-based incentives flip the funding paradigm. Capital is disbursed only when independently verified social or environmental outcomes are achieved. This ensures that philanthropic capital is spent efficiently and transfers implementation risk away from the donor.',
      mechanics: [
        'Development Impact Bonds (DIBs) or Social Impact Bonds (SIBs).',
        'Involves three parties: the outcome funder, the risk investor, and the service provider.',
        'Requires rigorous, independent third-party verification of data.'
      ],
      idealFor: 'Highly measurable social interventions, such as educational attainment, maternal health outcomes, or verified carbon reduction.',
      caseStudy: 'Structured a skill-development impact bond where risk investors funded a vocational training program upfront. The outcome funder (a major foundation) repaid the investors with a premium only after trainees retained jobs for 6+ months.'
    }
  },
  {
    id: '06', title: 'Grants & Tech Assistance', type: 'Catalytic Capital', riskProfile: 'Highest Risk / Non-Returnable',
    description: 'Non-returnable support for feasibility, advisory, governance, capacity building, and investment readiness before or alongside capital.',
    deepDive: {
      headline: 'Building the Foundation for Investment.',
      overview: 'Often, impact enterprises are doing critical work but lack the financial governance, MIS systems, or legal structures required to absorb institutional capital. Our Technical Assistance (TA) grants solve this "investment readiness" gap.',
      mechanics: [
        'Non-dilutive, zero-return capital deployments.',
        'Deployed alongside debt/equity to ensure successful implementation.',
        'Funds specific capacity-building projects (e.g., ERP implementation, legal structuring).'
      ],
      idealFor: 'High-potential organizations lacking the operational infrastructure to pass institutional due diligence.',
      caseStudy: 'Provided a ₹50 Lakh TA grant to a farmer producer organization (FPO) to digitize their inventory management and hire a full-time CFO. Six months later, this capacity enabled them to secure a ₹5 Crore commercial working capital line.'
    }
  }
];

// --- SUB-COMPONENT: DETAILED PRODUCT VIEW ---
// This component receives the selected 'product' object as a prop and renders the deep-dive page.
function ProductDetail({ product, onBack }) {
  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ width: '100%', minHeight: '100vh', backgroundColor: '#111111', padding: '160px 5vw 80px' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          style={{ 
            background: 'none', border: 'none', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '10px', 
            fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '40px', padding: 0 
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Capital Stack
        </button>

        {/* Header Area */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '6px 12px', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>
            {product.type}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: '#ffffff', fontWeight: 500, margin: '0 0 20px 0', lineHeight: '1.1' }}>
            {product.title}.
          </h1>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#d1d5db', fontWeight: 400, margin: '0' }}>
            {product.deepDive.headline}
          </h3>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
          
          {/* Left Column: Overview & Mechanics */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 600, borderBottom: '2px solid #22c55e', paddingBottom: '10px', display: 'inline-block', marginBottom: '20px' }}>
              Strategic Overview
            </h4>
            <p style={{ fontFamily: 'sans-serif', fontSize: '1.1rem', color: '#9ca3af', lineHeight: '1.8', fontWeight: 300, marginBottom: '40px' }}>
              {product.deepDive.overview}
            </p>

            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 600, borderBottom: '2px solid #22c55e', paddingBottom: '10px', display: 'inline-block', marginBottom: '20px' }}>
              Structural Mechanics
            </h4>
            <ul style={{ paddingLeft: '20px', color: '#9ca3af', fontSize: '1.1rem', lineHeight: '1.8', fontWeight: 300 }}>
              {product.deepDive.mechanics.map((point, i) => (
                <li key={i} style={{ marginBottom: '15px' }}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Right Column: Profile, Case Study & CTA */}
          <div>
            <div style={{ backgroundColor: '#1a1a1a', padding: '40px', borderTop: '3px solid #22c55e', marginBottom: '30px' }}>
              <div style={{ color: '#22c55e', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '15px' }}>
                Ideal Deployment Profile
              </div>
              <p style={{ color: '#d1d5db', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                {product.deepDive.idealFor}
              </p>
            </div>

            <div style={{ backgroundColor: '#161616', padding: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#f97316', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '15px' }}>
                Execution Example
              </div>
              <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                "{product.deepDive.caseStudy}"
              </p>
            </div>

            {/* CTA to Contact Page */}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%', marginTop: '30px', backgroundColor: '#22c55e', color: '#111111', border: 'none', padding: '20px', fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'background-color 0.3s'
              }} onMouseEnter={(e) => e.target.style.backgroundColor = '#1ea950'} onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}>
                Inquire About Structuring
              </button>
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
}


// --- MAIN PAGE EXPORT ---
export default function ProductsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // Controls which view is active

  return (
    <div style={{ width: '100%', backgroundColor: '#111111', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar show={true} />

      {/* AnimatePresence handles the smooth crossfade when swapping 
        between the List View and the Detail View 
      */}
      <AnimatePresence mode="wait">
        
        {/* IF A PRODUCT IS SELECTED, RENDER THE DETAILED VIEW */}
        {selectedProduct ? (
          <ProductDetail 
            key="detail" 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
          />
        ) : (
          
          /* OTHERWISE, RENDER THE STANDARD MENU VIEW */
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            {/* HERO SECTION */}
            <div style={{ padding: '160px 5vw 80px', textAlign: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ color: '#22c55e', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>
                  Instruments & Services
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: '#ffffff', fontWeight: 500, margin: '0 0 30px 0', lineHeight: '1.2' }}>
                  The Capital Stack.
                </h1>
                <p style={{ fontFamily: 'sans-serif', fontSize: '1.2rem', color: '#9ca3af', lineHeight: '1.8', fontWeight: 300, margin: 0 }}>
                  We act as the missing infrastructure between intent and capital deployment in India's impact economy, offering a full suite of structured financial products.
                </p>
              </motion.div>
            </div>

            {/* INTERACTIVE STACK SECTION */}
            <div style={{ flex: 1, padding: '40px 5vw 120px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
                
                {/* LEFT COLUMN: The Interactive Menu List */}
                <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {products.map((product, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <motion.div
                        key={product.id}
                        onClick={() => setActiveIndex(index)}
                        style={{
                          padding: '24px 30px', backgroundColor: isActive ? '#1a1a1a' : 'transparent', borderLeft: `4px solid ${isActive ? '#22c55e' : 'rgba(255,255,255,0.05)'}`, cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ color: isActive ? '#22c55e' : '#6b7280', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '8px', transition: 'color 0.3s' }}>
                            {product.id}
                          </div>
                          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: isActive ? '#ffffff' : '#9ca3af', fontWeight: 500, transition: 'color 0.3s' }}>
                            {product.title}
                          </div>
                        </div>
                        <motion.svg animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </motion.svg>
                      </motion.div>
                    );
                  })}
                </div>

                {/* RIGHT COLUMN: The Dynamic Focus Pane */}
                <div style={{ flex: '1 1 500px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-20px', bottom: '-20px', border: '1px solid rgba(34, 197, 94, 0.2)', zIndex: 0 }} />
                  
                  <div style={{ position: 'relative', backgroundColor: '#161616', padding: '60px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1, borderTop: '3px solid #22c55e' }}>
                    <AnimatePresence mode="wait">
                      <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                        <div style={{ display: 'inline-block', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '6px 12px', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>
                          {products[activeIndex].type}
                        </div>
                        
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#ffffff', fontWeight: 500, margin: '0 0 20px 0', lineHeight: '1.2' }}>
                          {products[activeIndex].title}
                        </h2>
                        
                        <div style={{ color: '#94a3b8', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ width: '8px', height: '8px', backgroundColor: '#f59e0b', borderRadius: '50%', display: 'inline-block' }} />
                          {products[activeIndex].riskProfile}
                        </div>

                        <p style={{ fontFamily: 'sans-serif', fontSize: '1.2rem', color: '#d1d5db', lineHeight: '1.8', fontWeight: 300, margin: '0 0 40px 0' }}>
                          {products[activeIndex].description}
                        </p>

                        {/* TRIGGER THE DEEP DIVE VIEW */}
                        <button 
                          onClick={() => setSelectedProduct(products[activeIndex])}
                          style={{
                            backgroundColor: 'transparent', border: '1px solid #22c55e', color: '#22c55e', padding: '15px 30px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)' }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                        >
                          Explore Instrument
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}