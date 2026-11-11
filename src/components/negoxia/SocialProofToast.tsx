import React, { useState, useEffect } from 'react';
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
  const [currentName, setCurrentName] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;

    const triggerNotification = () => {
      // Pick random name
      const randomIndex = Math.floor(Math.random() * LATIN_NAMES.length);
      setCurrentName(LATIN_NAMES[randomIndex]);
      setIsVisible(true);

      // Hide after exactly 5 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // First appearance shortly after loading (4s)
    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 4000);

    // Repeat every 20 seconds
    const intervalTimer = setInterval(() => {
      triggerNotification();
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-20 sm:bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)] sm:max-w-sm pointer-events-none transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-4 opacity-0 scale-95'
      }`}
    >
      <div className="bg-[#FFF9F2] border border-[#EDE3D5] rounded-2xl p-3.5 sm:p-4 shadow-xl shadow-[#060E32]/10 backdrop-blur-md flex items-center gap-3">
        {/* Pulsing indicator badge */}
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
          <ShieldCheck size={20} className="text-emerald-600" />
        </div>

        {/* Dynamic text */}
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
};
