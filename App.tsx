
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DashboardSection } from './components/DashboardSection';
import { ValueProposition } from './components/ValueProposition';
import { FeaturesBento } from './components/FeaturesBento';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';
import { AppDevelopmentModal } from './components/AppDevelopmentModal';
import { Docs } from './components/Docs';
import { Protocol } from './components/Protocol';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'docs' | 'protocol'>('home');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  const navigateToDocs = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentPage('docs');
  };
  
  const navigateToHome = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentPage('home');
  };

  const navigateToProtocol = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setCurrentPage('protocol');
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-white">
      <Navbar 
        onDownloadClick={handleOpenModal} 
        onDocsClick={navigateToDocs} 
        onHomeClick={navigateToHome} 
        onProtocolClick={navigateToProtocol}
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onDownloadClick={handleOpenModal} />
            <DashboardSection />
            <ValueProposition />
            <FeaturesBento />
            <HowItWorks />
            <Benefits />
          </>
        )}
        {currentPage === 'docs' && <Docs />}
        {currentPage === 'protocol' && <Protocol />}
      </main>
      
      <Footer 
        onDownloadClick={handleOpenModal} 
        onDocsClick={navigateToDocs} 
        onHomeClick={navigateToHome} 
        onProtocolClick={navigateToProtocol}
      />
      
      <AppDevelopmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
