import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, Zap } from 'lucide-react';

interface CountdownTimerProps {
  onScrollToPricing?: () => void;
}

const STORAGE_KEY = 'negoxia_urgency_timer_v1';
const DURATION_SECONDS = 30 * 60; // 30 minutos

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ onScrollToPricing }) => {
  const [timeLeft, setTimeLeft] = useState<number>(DURATION_SECONDS);

  useEffect(() => {
    // Inicializar temporizador con persistencia en localStorage
    let targetTime = 0;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed > Date.now()) {
          targetTime = parsed;
        }
      }
    } catch {
      // Ignorar incidencias de acceso a localStorage
    }

    if (!targetTime) {
      targetTime = Date.now() + DURATION_SECONDS * 1000;
      try {
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      } catch {
        // Ignorar
      }
    }

    const updateTimer = () => {
      const remainingMs = targetTime - Date.now();
      if (remainingMs <= 0) {
        // Al terminar, reiniciar un nuevo ciclo de 30 minutos para mantener la urgencia
        const newTarget = Date.now() + DURATION_SECONDS * 1000;
        try {
          localStorage.setItem(STORAGE_KEY, newTarget.toString());
        } catch {}
        setTimeLeft(DURATION_SECONDS);
      } else {
        setTimeLeft(Math.floor(remainingMs / 1000));
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  const handleClick = (e: React.MouseEvent) => {
    if (onScrollToPricing) {
      e.preventDefault();
      onScrollToPricing();
    } else {
      const el = document.getElementById('paquetes');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#040A24] text-white border-b border-[#16D1F5]/25 py-2.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold relative z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Badge & Copy */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#1258FA]/20 border border-[#16D1F5]/40 flex items-center justify-center text-[#16D1F5] shrink-0">
            <Clock size={13} className="animate-pulse" />
          </div>
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#16D1F5] hidden xs:inline">
            OFERTA DE LANZAMIENTO
          </span>
          <span className="text-[11px] sm:text-xs text-white/80 hidden md:inline">
            • Bono de $200 USD para pauta en Meta Ads incluido
          </span>
        </div>

        {/* Center Countdown Display */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs text-white/70 hidden sm:inline">
            Expira en:
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-[#1258FA]/25 to-[#16D1F5]/20 border border-[#16D1F5]/50 shadow-inner font-mono font-black text-xs sm:text-sm tracking-wider">
            <span className="text-white">{minutes}</span>
            <span className="text-[#16D1F5] animate-ping">:</span>
            <span className="text-white">{seconds}</span>
          </div>
        </div>

        {/* Right CTA */}
        <div>
          <a
            href="#paquetes"
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#1258FA] to-[#16D1F5] text-white font-extrabold text-[11px] sm:text-xs shadow hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <Zap size={12} className="fill-white" />
            <span>Inicia ahora</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
