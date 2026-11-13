import React from 'react';
import { ArrowRight, Sparkles, Calculator } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

interface NavbarProps {
  onScrollToCalculator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToCalculator }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/85 backdrop-blur-xl border-b border-[#EDE3D5]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo - Transparent Tech Aesthetic */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            {/* Tech glowing ambient behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1258FA]/20 to-[#16D1F5]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="./brand/negoxia-logo.jpg"
              alt="Negoxia"
              className="h-10 sm:h-11 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-105"
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

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#4B5578]">
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
            <span>Calculadora de Agencia</span>
          </a>
          <a href="#paquetes" className="hover:text-[#1258FA] transition-colors">
            Fast Start Pack
          </a>
          <a href="#faq" className="hover:text-[#1258FA] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[11px] font-bold text-[#1258FA]">
            <Sparkles size={12} className="text-[#16D1F5]" />
            <span>Escalado de Agencias</span>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg cursor-pointer whitespace-nowrap"
          >
            <span>Quiero atención prioritaria</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
};
