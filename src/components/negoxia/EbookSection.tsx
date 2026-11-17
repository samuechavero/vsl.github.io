import React from 'react';
import { BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

interface EbookSectionProps {
  onOpenReader?: () => void;
}

export const EbookSection: React.FC<EbookSectionProps> = ({ onOpenReader }) => {
  return (
    <section id="ebook" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#060E32] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1258FA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Professional Book Cover Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={onOpenReader}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenReader?.()}
              className="relative group cursor-pointer max-w-[280px] sm:max-w-[320px] transition-all duration-500 hover:scale-105"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#1258FA]/40 via-[#16D1F5]/30 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Book Container with Realistic Spine and Shadows */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#16D1F5]/40 shadow-[0_25px_60px_rgba(6,14,50,0.8)] bg-[#040A24]">
                <img
                  src="./ebook-cover.png"
                  alt="Portada del libro La Anatomía del Vendedor Invisible - Samuel Chavero"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Interactive Click-to-read Overlay Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E32]/90 via-[#060E32]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-6">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1258FA] to-[#16D1F5] text-white text-xs font-black flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <BookOpen size={15} />
                    <span>Abrir y Leer Ahora</span>
                  </div>
                </div>
              </div>

              {/* Subtle Label Under Cover */}
              <div className="mt-4 text-center">
                <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#16D1F5] flex items-center justify-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Haz clic para leer en línea</span>
                </span>
              </div>
            </div>
          </div>

          {/* Text Content Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-semibold uppercase tracking-wider mb-5">
              <BookOpen size={14} />
              <span>Autoridad Instantánea · Lectura de Regalo</span>
            </div>

            {/* Exact Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              La Anatomía del <span className="text-gradient-blue">Vendedor Invisible</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#FFF9F2]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Descubre el ecosistema exacto que elimina el trabajo de prospección en frío y convierte desconocidos en citas calificadas directamente en tu calendario. Escrito para ti basado en tu historia real para posicionarte como la máxima autoridad.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>Posicionamiento inmediato de autoridad ante clientes y futuros agentes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>El imán de prospectos perfecto para tus campañas de pauta publicitaria</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>Lectura web inmediata y gratuita sin descargas obligatorias</span>
              </div>
            </div>

            {/* CTAs: Botón para Leer E-book y Botón de Conversión "Escala aquí tu negocio" */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenReader}
                type="button"
                className="btn-secondary px-7 py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#16D1F5]/40 hover:bg-[#16D1F5]/20 hover:text-white cursor-pointer shadow-lg active:scale-95 transition-all"
              >
                <BookOpen size={18} className="text-[#16D1F5]" />
                <span>Leer E-book Completo</span>
              </button>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-8 py-4 text-base font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Escala aquí tu negocio</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
