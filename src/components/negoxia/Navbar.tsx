import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPresentation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenPresentation }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#EDE3D5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="./brand/negoxia-logo.jpg"
            alt="Negoxia Autopilot"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Center / Right Nav Items */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EDE3D5] text-xs font-medium text-[#4B5578]">
            <span className="w-2 h-2 rounded-full bg-[#1258FA] animate-pulse" />
            <span>Motor: $2,000 · Un solo pago</span>
          </div>

          {onOpenPresentation && (
            <button
              onClick={onOpenPresentation}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#060E32] hover:text-[#1258FA] transition-colors px-3 py-2"
            >
              <Sparkles size={14} className="text-[#1258FA]" />
              <span>Ver Presentación</span>
            </button>
          )}

          <button
            onClick={onOpenBooking}
            className="btn-primary px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 group"
          >
            <span>Agendar diagnóstico</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
