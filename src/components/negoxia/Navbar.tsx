import React from 'react';
import { ArrowRight, Calculator, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onScrollToCalculator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onScrollToCalculator }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#EDE3D5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="./brand/negoxia-logo.jpg"
            alt="Negoxia Autopilot"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4B5578]">
          <a
            href="#calculadora"
            onClick={(e) => {
              if (onScrollToCalculator) {
                e.preventDefault();
                onScrollToCalculator();
              }
            }}
            className="flex items-center gap-1.5 hover:text-[#1258FA] transition-colors"
          >
            <Calculator size={15} className="text-[#1258FA]" />
            <span>Calculadora ROI</span>
          </a>
          <a href="#ecosistema" className="hover:text-[#1258FA] transition-colors">
            Ecosistema
          </a>
          <a href="#paquetes" className="hover:text-[#1258FA] transition-colors">
            Paquetes
          </a>
          <a href="#como-funciona" className="hover:text-[#1258FA] transition-colors">
            Cómo Funciona
          </a>
          <a href="#faq" className="hover:text-[#1258FA] transition-colors">
            Preguntas
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EDE3D5] text-xs font-semibold text-[#4B5578]">
            <span className="w-2 h-2 rounded-full bg-[#1258FA] animate-pulse" />
            <span>100% "Plug & Play"</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-primary px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 group cursor-pointer"
          >
            <span>Construir mi Máquina</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
