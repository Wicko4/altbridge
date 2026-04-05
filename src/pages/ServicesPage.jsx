import React from 'react';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import DealLifecycle from '../components/DealLifeCycle'; // <-- Import the new timeline
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function ServicesPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#111111', minHeight: '100vh' }}>
      {/* We pass show={true} so the Navbar is visible on load */}
      <Navbar show={true} />
      
      <ServicesHero />
      
      {/* The new interactive timeline component */}
      <DealLifecycle />
      <CTASection/>
            <Footer />
    </div>
  );
}