import React from 'react';
import { ArrowRight, Workflow, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPresentation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenPresentation }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#EDE3D5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#060E32] flex items-center justify-center text-white font-extrabold text-lg shadow-sm border border-[#EDE3D5] group-hover:scale-105 transition-transform">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#1258FA] to-[#16D1F5]">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-[#060E32] leading-none">
              ASCENT
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#1258FA] uppercase">
              by Flow Money
            </span>
          </div>
        </a>

        {/* Center / Right Nav Items */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EDE3D5] text-xs font-medium text-[#4B5578]">
            <span className="w-2 h-2 rounded-full bg-[#1258FA] animate-pulse" />
            <span>GoHighLevel · Ecosistema 100% Plug & Play</span>
          </div>

          {onOpenPresentation && (
            <button
              onClick={onOpenPresentation}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#060E32] hover:text-[#1258FA] transition-colors px-3 py-2"
            >
              <Workflow size={14} className="text-[#1258FA]" />
              <span>Ver Presentación</span>
            </button>
          )}

          <button
            onClick={onOpenBooking}
            className="btn-primary px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 group cursor-pointer"
          >
            <span>Obtener mi Ecosistema</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
