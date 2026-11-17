import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Calculator, Clock } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

interface NavbarProps {
  onScrollToCalculator?: () => void;
}

const TOTAL_SECONDS = 30 * 60; // 30:00 minutos

export const Navbar: React.FC<NavbarProps> = ({ onScrollToCalculator }) => {
  // Inicialización del temporizador persistente por sesión
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const storedEndTime = sessionStorage.getItem('negoxia_timer_end');
      const now = Date.now();
      if (storedEndTime) {
        const remaining = Math.max(0, Math.floor((parseInt(storedEndTime, 10) - now) / 1000));
        return remaining;
      }
      const newEndTime = now + TOTAL_SECONDS * 1000;
      sessionStorage.setItem('negoxia_timer_end', newEndTime.toString());
    }
    return TOTAL_SECONDS;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Si llega a 0, reinicia o permanece en 0:00
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-xl border-b border-[#EDE3D5]/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo - Transparent Tech Aesthetic */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative flex items-center justify-center">
            {/* Tech glowing ambient behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1258FA]/20 to-[#16D1F5]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="./brand/negoxia-logo.png"
              alt="Negoxia"
              className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-sm transition-transform group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = './brand/negoxia-logo.jpg';
              }}
            />
          </div>
          <div className="hidden xs:flex flex-col">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#1258FA] uppercase">
              Negoxia
            </span>
            <span className="text-[9px] text-[#4B5578] font-medium tracking-wider">
              AI Agency Recruiting
            </span>
          </div>
        </a>

        {/* ELEMENTO DE URGENCIA: STICKY COUNTDOWN TIMER (30:00) */}
        <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#060E32] border border-[#16D1F5]/40 shadow-[0_0_18px_rgba(22,209,245,0.25)] text-white select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <Clock size={13} className="text-[#16D1F5] shrink-0 animate-pulse" />
          <span className="hidden md:inline text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white/90">
            Oferta Especial:
          </span>
          <span className="font-mono text-xs sm:text-sm font-black text-[#16D1F5] tracking-widest tabular-nums">
            {formattedTime}
          </span>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-[#4B5578]">
          <a href="#soluciones" className="hover:text-[#1258FA] transition-colors">
            Soluciones IA
          </a>
          <a href="#como-funciona" className="hover:text-[#1258FA] transition-colors">
            Cómo Funciona
          </a>
          <a href="#casos-reales" className="hover:text-[#1258FA] transition-colors">
            Casos Reales
          </a>
          <a
            href="#calculadora"
            onClick={(e) => {
              if (onScrollToCalculator) {
                e.preventDefault();
                onScrollToCalculator();
              }
            }}
            className="flex items-center gap-1.5 hover:text-[#1258FA] transition-colors text-[#1258FA]"
          >
            <Calculator size={15} />
            <span>Calculadora</span>
          </a>
          <a href="#paquetes" className="hover:text-[#1258FA] transition-colors">
            Planes
          </a>
          <a href="#faq" className="hover:text-[#1258FA] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right CTA con "Inicia ahora" y Glow Azul Eléctrico */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-black flex items-center gap-2 shadow-xl shadow-[#1258FA]/25 hover:shadow-[#1258FA]/40 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Inicia ahora</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
};
