import React, { useState } from 'react';
import { Navbar } from './components/negoxia/Navbar';
import { Hero } from './components/negoxia/Hero';
import { RoiCalculator } from './components/negoxia/RoiCalculator';
import { Problem } from './components/negoxia/Problem';
import { HowItWorks } from './components/negoxia/HowItWorks';
import { PricingPackages } from './components/negoxia/PricingPackages';
import { FitSection } from './components/negoxia/FitSection';
import { FaqSection } from './components/negoxia/FaqSection';
import { FinalCta } from './components/negoxia/FinalCta';
import { Footer } from './components/negoxia/Footer';
import { BookingModal } from './components/negoxia/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#060E32] flex flex-col font-sans selection:bg-[#1258FA] selection:text-white">
      {/* Sticky Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* 2. Interactive ROI Calculator (Principal) */}
        <RoiCalculator
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. The Core Problem for Insurance Agents */}
        <Problem />

        {/* 4. How the Plug & Play Machine Works */}
        <HowItWorks
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. Pricing Packages (Package 1 GoHighLevel + Package 2 Meta Ads with 100% Free Gifts) */}
        <PricingPackages
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. Fit / Qualification: For who it is & who it is not */}
        <FitSection />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* 8. High-Converting Closing Final CTA */}
        <FinalCta
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* Modal de Agendamiento / Captura de Leads (Conectado a Supabase prospectos) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
