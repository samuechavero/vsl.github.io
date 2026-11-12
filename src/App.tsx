import React, { useState, useEffect } from 'react';
import { Navbar } from './components/negoxia/Navbar';
import { Hero } from './components/negoxia/Hero';
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
import { WheelModal } from './components/negoxia/WheelModal';
import { LegalModal } from './components/negoxia/LegalModals';
import { FloatingEbookBadge } from './components/negoxia/FloatingEbookBadge';
import { SocialProofToast } from './components/negoxia/SocialProofToast';
import { GatedModal } from './components/negoxia/GatedModal';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('negoxia_content_unlocked') === 'true';
    }
    return false;
  });
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy',
  });

  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isUnlocked]);

  const handleUnlock = () => {
    setIsUnlocked(true);
    try {
      sessionStorage.setItem('negoxia_content_unlocked', 'true');
    } catch (e) {
      // ignore
    }
  };

  const handleOpenWheel = () => {
    setIsWheelOpen(true);
  };

  const handleCloseWheel = () => {
    setIsWheelOpen(false);
  };

  const handleOpenPrivacy = () => {
    setLegalModal({ isOpen: true, type: 'privacy' });
  };

  const handleOpenTerms = () => {
    setLegalModal({ isOpen: true, type: 'terms' });
  };

  const handleCloseLegal = () => {
    setLegalModal((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#060E32] flex flex-col font-sans selection:bg-[#1258FA] selection:text-white relative">
      {/* 1. CONTENT GATE (Bloqueo de Página Inicial Obligatorio) */}
      {!isUnlocked && (
        <GatedModal onUnlock={handleUnlock} />
      )}

      {/* Contenido de la Landing Page: Bloqueado y desenfocado hasta completar datos */}
      <div className={`flex flex-col min-h-screen ${!isUnlocked ? 'filter blur-md pointer-events-none select-none max-h-screen overflow-hidden' : ''}`}>
        {/* Sticky Header */}
        <Navbar onScrollToCalculator={scrollToCalculator} />

        <main>
          {/* SECCIÓN 1: Hero Section con Video, Formulario con Correo y CTA de Ruleta */}
          <Hero onOpenWheel={handleOpenWheel} />

          {/* SECCIÓN 2: Soluciones Principales (3 Tarjetas Glassmorphism con IA) */}
          <ServicesFeatures />

          {/* SECCIÓN 3: E-Book ("La Anatomía del Vendedor Invisible") */}
          <EbookSection />

          {/* SECCIÓN 4: Calculadora de Escalado y Reclutamiento de Agencia */}
          <RoiCalculator />

          {/* SECCIÓN 5: Paquete Negoxia Pack Fast Start ($789 USD y Contrato 3 meses) */}
          <PricingPackages />

          {/* SECCIÓN 6: Social Proof (Agentes y clientes actuales reales de nuestra agencia) */}
          <TopProducers />

          {/* SECCIÓN 7: Cómo Funciona (3 Pasos exactos) */}
          <HowItWorks />

          {/* SECCIÓN 8: El Obstáculo de Reclutamiento */}
          <Problem />

          {/* SECCIÓN 9: Filtro de Afinidad para Agencias */}
          <FitSection />

          {/* SECCIÓN 10: Preguntas Frecuentes */}
          <FaqSection />

          {/* SECCIÓN 11: Final Call to Action */}
          <FinalCta />
        </main>

        {/* Footer con Contactos, Enlaces Meta y Disclaimer USA exacto */}
        <Footer
          onScrollToCalculator={scrollToCalculator}
          onOpenPrivacy={handleOpenPrivacy}
          onOpenTerms={handleOpenTerms}
        />
      </div>

      {/* Pop-up de Ruleta (Gamificación con texto requerido) */}
      <WheelModal
        isOpen={isWheelOpen}
        onClose={handleCloseWheel}
      />

      {/* Modales de Cumplimiento Meta (WhatsApp API Privacy & Terms) */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={handleCloseLegal}
      />

      {/* Elementos Flotantes Fijos al Viewport (z-[9999]) - solo tras desbloquear */}
      {isUnlocked && (
        <>
          <FloatingEbookBadge />
          <SocialProofToast />
        </>
      )}
    </div>
  );
}
