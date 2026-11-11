import React, { useState, useEffect } from 'react';
import { Navbar } from './components/negoxia/Navbar';
import { Hero } from './components/negoxia/Hero';
import { GatedModal } from './components/negoxia/GatedModal';
import { TopProducers } from './components/negoxia/TopProducers';
import { RoiCalculator } from './components/negoxia/RoiCalculator';
import { Problem } from './components/negoxia/Problem';
import { HowItWorks } from './components/negoxia/HowItWorks';
import { PricingPackages } from './components/negoxia/PricingPackages';
import { EbookSection } from './components/negoxia/EbookSection';
import { FitSection } from './components/negoxia/FitSection';
import { FaqSection } from './components/negoxia/FaqSection';
import { FinalCta } from './components/negoxia/FinalCta';
import { Footer } from './components/negoxia/Footer';
import { BookingModal } from './components/negoxia/BookingModal';

export default function App() {
  // 1. Acceso Bloqueado (Gated Content)
  const [unlocked, setUnlocked] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Bloqueo de scroll mientras el contenido esté bloqueado
  useEffect(() => {
    if (unlocked) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [unlocked]);

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
    <div className="min-h-screen bg-[#FFF9F2] text-[#060E32] flex flex-col font-sans selection:bg-[#1258FA] selection:text-white relative">
      {/* Contenido Principal con desenfoque condicional si está bloqueado */}
      <div className={unlocked ? 'fade-in' : 'blur-bg select-none pointer-events-none'}>
        {/* Sticky Header */}
        <Navbar
          onOpenBooking={handleOpenBooking}
          onScrollToCalculator={scrollToCalculator}
        />

        <main>
          {/* 2. Hero Section con H1, Subtítulo y VSL Container */}
          <Hero
            onOpenBooking={handleOpenBooking}
            unlocked={unlocked}
          />

          {/* Social Proof: Top Producers */}
          <TopProducers />

          {/* 3. Calculadora Interactiva de ROI (Sección Principal) */}
          <RoiCalculator
            onOpenBooking={handleOpenBooking}
          />

          {/* 4. El Problema del Agente */}
          <Problem />

          {/* 5. Cómo Funciona el Ecosistema */}
          <HowItWorks
            onOpenBooking={handleOpenBooking}
          />

          {/* 6. Sección de Paquetes (Restricciones estrictas: $769/mes único, sin nombres de terceros, ads incluidos) */}
          <PricingPackages
            onOpenBooking={handleOpenBooking}
          />

          {/* 7. Sección del E-Book ("La Anatomía del Vendedor Invisible") */}
          <EbookSection
            onOpenBooking={handleOpenBooking}
          />

          {/* 8. Filtro de Afinidad (Sin clones de IA) */}
          <FitSection />

          {/* 9. Preguntas Frecuentes */}
          <FaqSection />

          {/* 10. Final CTA */}
          <FinalCta
            onOpenBooking={handleOpenBooking}
          />
        </main>

        {/* Footer */}
        <Footer
          onOpenBooking={handleOpenBooking}
          onScrollToCalculator={scrollToCalculator}
        />
      </div>

      {/* 1. Modal de Acceso Bloqueado (Gated Content Overlay) */}
      {!unlocked && (
        <GatedModal
          onUnlock={() => setUnlocked(true)}
        />
      )}

      {/* Modal Secundario de Agendamiento desde los CTAs de la página */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
