import React from 'react';
import { Sparkles, ShieldCheck, BookOpen } from 'lucide-react';

interface BookCoverCodeProps {
  className?: string;
  onClick?: () => void;
}

export const BookCoverCode: React.FC<BookCoverCodeProps> = ({ className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`relative group select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Outer Glow Halo (Electric Blue / Cyan) */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-[#1258FA]/35 via-[#16D1F5]/30 to-transparent rounded-[32px] blur-2xl opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

      {/* 3D Book Container */}
      <div className="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-[#060E32] border border-white/60 shadow-[0_25px_60px_rgba(2,5,20,0.5),0_0_35px_rgba(22,209,245,0.25)] flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(2,5,20,0.65),0_0_50px_rgba(22,209,245,0.4)]">
        
        {/* Book Spine Simulation (Left Shadow & Leatherette Depth) */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-[#060E32]/70 via-[#060E32]/25 to-transparent pointer-events-none z-20 border-r border-[#060E32]/10" />

        {/* Right Page Edges Simulation (3D Stacked Pages) */}
        <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-gradient-to-l from-slate-300 via-slate-100 to-transparent pointer-events-none z-20 rounded-r" />

        {/* Diagonal Glossy Light Sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
        
        {/* Subtle Tech Pattern Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#1258FA_1px,transparent_1px)] [background-size:14px_14px]" 
        />

        {/* Top Header: Official Negoxia Logo & Badge */}
        <div className="relative z-20 pl-4">
          <div className="flex items-center justify-between mb-3">
            {/* Logo oficial de Negoxia con fondo transparente */}
            <div className="flex items-center gap-2">
              <img
                src="./brand/negoxia-logo.png"
                alt="Negoxia"
                className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './brand/negoxia-logo.jpg';
                }}
              />
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/25 text-[#1258FA] text-[10px] font-black uppercase tracking-wider">
              <Sparkles size={11} className="text-[#1258FA]" />
              <span>Edición Oficial</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-0.5 w-7 bg-gradient-to-r from-[#1258FA] to-[#16D1F5]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#1258FA] font-black">
              Manual Estratégico
            </span>
          </div>
        </div>

        {/* Center: Main Titles */}
        <div className="relative z-20 pl-4 my-auto">
          {/* Título Principal */}
          <h3 className="text-2xl sm:text-[27px] font-black text-[#060E32] leading-[1.18] tracking-tight mb-2.5">
            La Anatomía del <br />
            <span className="text-gradient-blue filter drop-shadow-[0_2px_8px_rgba(18,88,250,0.2)]">
              Vendedor Invisible
            </span>
          </h3>

          <div className="h-1 w-12 bg-gradient-to-r from-[#1258FA] via-[#16D1F5] to-transparent rounded-full mb-3" />

          {/* Subtítulo */}
          <p className="text-xs sm:text-[13px] text-[#475569] leading-snug font-semibold">
            El secreto que utilizan los empresarios para atraer a sus clientes ideales.
          </p>
        </div>

        {/* Bottom Footer: Author Negoxia & Quality Badge */}
        <div className="relative z-20 pl-4 pt-3 border-t border-slate-200/80">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-extrabold">
                Autor
              </span>
              <span className="text-xs sm:text-sm font-black text-[#060E32] tracking-tight">
                Negoxia
              </span>
            </div>

            <div className="text-right">
              <div className="text-[#1258FA] text-xs tracking-widest font-black">
                ★★★★★
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#1258FA] font-extrabold flex items-center gap-1 justify-end mt-0.5">
                <ShieldCheck size={11} />
                <span>Verificado</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hover Click-to-Read indicator */}
        <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-[#060E32]/90 to-transparent flex items-center justify-center gap-1.5 text-white text-[11px] font-black opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <BookOpen size={13} className="text-[#16D1F5]" />
          <span>Toca para leer el libro</span>
        </div>
      </div>
    </div>
  );
};
