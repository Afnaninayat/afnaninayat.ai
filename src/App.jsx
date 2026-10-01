import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResultsImpact from './components/ResultsImpact';
import DigitalICJourney from './components/DigitalICJourney';
import BatsmanProFYP from './components/BatsmanProFYP';
import TechnicalProjects from './components/TechnicalProjects';
import DigitalMarketing from './components/DigitalMarketing';
import IqbalJeeCaseStudy from './components/IqbalJeeCaseStudy';
import MarketingExperience from './components/MarketingExperience';
import AIAssistedWorkflow from './components/AIAssistedWorkflow';
import CreatorLab from './components/CreatorLab';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeTrack, setActiveTrack] = useState('all');

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-cyan-accent selection:text-[#080B11] antialiased">
      <Navbar activeTrack={activeTrack} setActiveTrack={setActiveTrack} />
      
      <main>
        {/* Universal Hero */}
        <Hero setActiveTrack={setActiveTrack} />

        {/* About: The Polymath Profile & Dual-Domain Advantage */}
        <About />

        {/* Verified Impact Metrics */}
        <ResultsImpact />

        {/* --- Track 1: Engineering & Technology --- */}
        {(activeTrack === 'all' || activeTrack === 'engineering') && (
          <>
            {/* Dedicated Digital IC & Verification Journey */}
            <DigitalICJourney />

            {/* Flagship Final Year Project Case Study (Batsman Pro) */}
            <BatsmanProFYP />

            {/* Comprehensive Technical Projects Suite */}
            <TechnicalProjects />
          </>
        )}

        {/* --- Track 2: Digital Marketing & Creative --- */}
        {(activeTrack === 'all' || activeTrack === 'marketing') && (
          <>
            {/* Digital Marketing & Paid Media Architecture */}
            <DigitalMarketing />

            {/* Featured Rebranding Case Study: Iqbal Jee */}
            <IqbalJeeCaseStudy />

            {/* Professional Marketing Experience Timeline */}
            <MarketingExperience />

            {/* AI-Assisted Creative & Strategy Workflow */}
            <AIAssistedWorkflow />

            {/* Practical Creator Lab Content Experiment */}
            <CreatorLab />
          </>
        )}

        {/* Universal Capabilities & Credentials */}
        <Skills />
        <Certifications />

        {/* Outreach & Collaboration CTA */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
