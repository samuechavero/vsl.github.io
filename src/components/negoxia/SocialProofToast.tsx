import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ShieldCheck } from 'lucide-react';

const LATIN_NAMES = [
  'Carlos Ramírez',
  'María Fernanda Gómez',
  'Javier Torres',
  'Lucía Medina',
  'Diego Herrera',
  'Sofía Castillo',
  'Andrés Vargas',
  'Camila Ríos',
  'Mateo Silva',
  'Valentina Rojas',
  'Alejandro Morales',
  'Daniela Mendoza',
  'Gabriel Navarro',
  'Isabella Ortiz',
  'Sebastián Cruz',
  'Mariana Salgado',
  'Esteban Paredes',
  'Valeria Cárdenas',
];

export const SocialProofToast: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentName, setCurrentName] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    let hideTimer: NodeJS.Timeout;

    const triggerNotification = () => {
      // Elegir nombre al azar
      const randomIndex = Math.floor(Math.random() * LATIN_NAMES.length);
      setCurrentName(LATIN_NAMES[randomIndex]);
      setIsVisible(true);

      // Desaparece exactamente a los 5 segundos
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Primera aparición rápida a los 2.5s
    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 2500);

    // Se repite cada 20 segundos exactamente
    const intervalTimer = setInterval(() => {
      triggerNotification();
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  const content = (
    <div
      aria-live="polite"
      className={`fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-[9999] max-w-[calc(100vw-2rem)] sm:max-w-sm pointer-events-none transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
      style={{
        position: 'fixed',
        zIndex: 9999,
      }}
    >
      <div className="bg-[#FFF9F2] border border-[#EDE3D5] rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-[#060E32]/15 backdrop-blur-md flex items-center gap-3">
        {/* Insignia de verificación */}
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
          <ShieldCheck size={20} className="text-emerald-600" />
        </div>

        {/* Texto estructurado requerido */}
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-[#060E32] leading-snug">
            <span className="mr-1">✅</span>
            <strong className="font-extrabold text-[#060E32]">{currentName}</strong>{' '}
            <span className="text-[#333D59]">tiene atención prioritaria.</span>
          </p>
          <p className="text-[10px] text-[#8C96AB] flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Confirmado · Hace un momento</span>
          </p>
        </div>
      </div>
    </div>
  );

  // Portal directo a document.body para aislarlo de transform / filter / relative
  return createPortal(content, document.body);
};
