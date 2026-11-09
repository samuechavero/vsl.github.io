import React, { useState, useEffect } from 'react';
import { Navbar } from './components/negoxia/Navbar';
import { Hero } from './components/negoxia/Hero';
import { Problem } from './components/negoxia/Problem';
import { HowItWorks } from './components/negoxia/HowItWorks';
import { EvidenceCases } from './components/negoxia/EvidenceCases';
import { OfferIncluded } from './components/negoxia/OfferIncluded';
import { Founder } from './components/negoxia/Founder';
import { FitSection } from './components/negoxia/FitSection';
import { FaqSection } from './components/negoxia/FaqSection';
import { FinalCta } from './components/negoxia/FinalCta';
import { Footer } from './components/negoxia/Footer';
import { BookingModal } from './components/negoxia/BookingModal';
import { AscentPresentation } from './components/ascent/AscentPresentation';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);

  // Check URL hash for direct navigation to presentation (#presentacion)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.toLowerCase() === '#presentacion') {
        setShowPresentation(true);
      } else {
        setShowPresentation(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenPresentation = () => {
    window.location.hash = 'presentacion';
    setShowPresentation(true);
  };

  const handleClosePresentation = () => {
    window.history.pushState(null, '', window.location.pathname);
    setShowPresentation(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#060E32] flex flex-col font-sans selection:bg-[#1258FA]/20 selection:text-[#060E32]">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPresentation={handleOpenPresentation}
      />

      {/* Main Landing Page Flow */}
      <main className="flex-1">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <Problem />
        <HowItWorks onOpenBooking={() => setIsBookingOpen(true)} />
        <EvidenceCases onOpenBooking={() => setIsBookingOpen(true)} />
        <OfferIncluded onOpenBooking={() => setIsBookingOpen(true)} />
        <Founder />
        <FitSection />
        <FaqSection />
        <FinalCta onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPresentation={handleOpenPresentation}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Sales Presentation Overlay (Accessible via button or #presentacion) */}
      {showPresentation && (
        <AscentPresentation onClose={handleClosePresentation} />
      )}
    </div>
  );
}
