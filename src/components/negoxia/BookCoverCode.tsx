import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

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
      {/* Outer Glow Halo (Cyan/Electric Blue) */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#1258FA]/40 via-[#16D1F5]/35 to-transparent rounded-[28px] blur-2xl opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

      {/* 3D Book Container with Realistic Spine & Drop Shadows */}
      <div className="relative w-[280px] sm:w-[320px] h-[390px] sm:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#091544] via-[#040A24] to-[#020514] border-2 border-[#16D1F5]/60 shadow-[0_25px_60px_rgba(2,5,20,0.9),0_0_35px_rgba(22,209,245,0.3)] flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(2,5,20,0.95),0_0_50px_rgba(22,209,245,0.45)]">
        
        {/* Book Spine Simulation (Left Shadow Line) */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/80 via-white/10 to-transparent pointer-events-none z-20 border-r border-white/10" />

        {/* Diagonal Glassmorphism Sheen Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none z-10" />
        
        {/* Subtle Tech Grid / Geometry Lines in Background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#16D1F5_1px,transparent_1px)] [background-size:16px_16px]" 
        />

        {/* Top Header: Logo & Badge */}
        <div className="relative z-20 pl-3">
          <div className="flex items-center justify-between mb-4">
            {/* Logo de Negoxia Transparente */}
            <div className="flex items-center gap-2">
              <img
                src="./brand/negoxia-logo.png"
                alt="Negoxia Logo"
                className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(22,209,245,0.5)]"
                onError={(e) => {
                  // Fallback a jpg si png no cargara
                  (e.target as HTMLImageElement).src = './brand/negoxia-logo.jpg';
                }}
              />
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#16D1F5]/15 border border-[#16D1F5]/40 text-[#16D1F5] text-[10px] font-black uppercase tracking-wider">
              <Sparkles size={11} />
              <span>Digital</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-0.5 w-8 bg-gradient-to-r from-[#1258FA] to-[#16D1F5]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#16D1F5] font-black">
              Manual Estratégico
            </span>
          </div>
        </div>

        {/* Center: Main Titles */}
        <div className="relative z-20 pl-3 my-auto">
          {/* Título Principal */}
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-[1.15] tracking-tight mb-3">
            La Anatomía del <br />
            <span className="bg-gradient-to-r from-[#16D1F5] via-[#60A5FA] to-white bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(22,209,245,0.3)]">
              Vendedor Invisible
            </span>
          </h3>

          {/* Subtítulo */}
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed font-medium">
            El secreto que utilizan los empresarios para atraer a sus clientes ideales
          </p>
        </div>

        {/* Bottom Footer: Author & Rating */}
        <div className="relative z-20 pl-3 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-white/50 font-bold">
                Autor
              </span>
              <span className="text-xs sm:text-sm font-black text-white">
                Samuel Chavero
              </span>
            </div>

            <div className="text-right">
              <div className="text-[#16D1F5] text-xs tracking-widest font-black">
                ★★★★★
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#16D1F5] font-extrabold flex items-center gap-1 justify-end mt-0.5">
                <ShieldCheck size={11} />
                <span>Oficial</span>
              </span>
            </div>
          </div>
        </div>

        {/* Glass reflection shine on bottom right */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#16D1F5]/20 rounded-full blur-2xl pointer-events-none" />
      </div>
    </div>
  );
};
