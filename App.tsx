
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DashboardSection } from './components/DashboardSection';
import { ValueProposition } from './components/ValueProposition';
import { FeaturesBento } from './components/FeaturesBento';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Basic smooth scroll implementation check
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <DashboardSection />
        <ValueProposition />
        <FeaturesBento />
        <HowItWorks />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}

export default App;
