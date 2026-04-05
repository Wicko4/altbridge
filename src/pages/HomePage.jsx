import React, { useState } from 'react';
import CustomCursor from "../components/BloomingCursor"; 
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ChooseYourPath from '../components/ChooseYourPath';
import MarketGap from '../components/MarketGap';
import CapabilitiesScrollSection from '../components/CapabilitiesScrollSection';
import StakeholderFlower from '../components/StakeholderFlower';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div style={{ width: '100%', backgroundColor: '#111111' }}>
      <CustomCursor />
      <Navbar show={animationComplete} />

      <HeroSection animationComplete={animationComplete} setAnimationComplete={setAnimationComplete} />
      <ChooseYourPath />
      <MarketGap />
      <CapabilitiesScrollSection />
      
      <div style={{
        position: 'relative', width: '100%', boxSizing: 'border-box', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#161616', padding: '100px 20px', zIndex: 1,
      }}>
        <StakeholderFlower />
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}