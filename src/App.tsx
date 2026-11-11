import React, { useState, useEffect } from 'react';
import { Navbar } from './components/negoxia/Navbar';
import { Hero } from './components/negoxia/Hero';
import { GatedModal } from './components/negoxia/GatedModal';
import { ServicesFeatures } from './components/negoxia/ServicesFeatures';
import { EbookSection } from './components/negoxia/EbookSection';
import { RoiCalculator } from './components/negoxia/RoiCalculator';
import { PricingPackages } from './components/negoxia/PricingPackages';
import { TopProducers } from './components/negoxia/TopProducers';
import { HowItWorks } from './components/negoxia/HowItWorks';
import { Problem } from './components/negoxia/Problem';
import { FitSection } from './components/negoxia/FitSection';
import { FaqSection } from './components/negoxia/FaqSection';
import { FinalCta } from './components/negoxia/FinalCta';
import { Footer } from './components/negoxia/Footer';
import { BookingModal } from './components/negoxia/BookingModal';
import { FloatingEbookBadge } from './components/negoxia/FloatingEbookBadge';
import { SocialProofToast } from './components/negoxia/SocialProofToast';

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
          onScrollToCalculator={scrollToCalculator}
        />

        <main>
          {/* SECCIÓN 1: Hero Section con H1, Subtítulo y VSL Container */}
          <Hero
            unlocked={unlocked}
          />

          {/* SECCIÓN 2: Características / Servicios (Motor Dual: Ventas IUL + Reclutamiento Agentes) */}
          <ServicesFeatures />

          {/* SECCIÓN 3: E-Book ("La Anatomía del Vendedor Invisible" - Ubicación estricta: 3ra sección) */}
          <EbookSection />

          {/* SECCIÓN 4: Calculadora Doble Interactiva de ROI (Tab 1: IUL Ventas | Tab 2: Reclutamiento) */}
          <RoiCalculator />

          {/* SECCIÓN 5: Paquete Único ($769 USD/mes, Presupuesto publicitario incluido) */}
          <PricingPackages />

          {/* SECCIÓN 6: Social Proof (Top Producers) */}
          <TopProducers />

          {/* SECCIÓN 7: Cómo Funciona el Ecosistema */}
          <HowItWorks />

          {/* SECCIÓN 8: El Problema del Agente */}
          <Problem />

          {/* SECCIÓN 9: Filtro de Afinidad */}
          <FitSection />

          {/* SECCIÓN 10: Preguntas Frecuentes */}
          <FaqSection />

          {/* SECCIÓN 11: Final CTA */}
          <FinalCta />
        </main>

        {/* Footer */}
        <Footer
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Elementos Flotantes de Conversión y Social Proof */}
        {unlocked && (
          <>
            <FloatingEbookBadge />
            <SocialProofToast />
          </>
        )}
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
