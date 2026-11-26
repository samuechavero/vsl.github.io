import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { BookCoverCode } from './BookCoverCode';

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
          {/* 3D Book Visual Column (5 cols) con Portada 100% en Código */}
          <div className="lg:col-span-5 flex justify-center">
            <BookCoverCode onClick={onOpenReader} />
          </div>

          {/* Text Content Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-semibold uppercase tracking-wider mb-5">
              <BookOpen size={14} />
              <span>Autoridad Instantánea · Libro de Acceso Directo</span>
            </div>

            {/* Exact Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              La Anatomía del <span className="text-gradient-blue">Vendedor Invisible</span>
            </h2>

            {/* Exact Description */}
            <p className="text-base sm:text-lg text-[#FFF9F2]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Descubre el ecosistema exacto que elimina el trabajo de prospección en frío y convierte desconocidos en citas calificadas directamente en tu calendario. Escrito para posicionarte como la máxima autoridad en tu mercado.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>Posicionamiento inmediato de autoridad ante clientes y prospectos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>El imán de prospectos perfecto para tus campañas de pauta publicitaria</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>Lectura inmersiva 100% interactiva dentro de la web sin descargas</span>
              </div>
            </div>

            {/* CTAs con "Inicia ahora" y Apertura directa del Lector */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={onOpenReader}
                className="btn-secondary px-7 py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white cursor-pointer group active:scale-95 transition-all shadow-lg"
              >
                <BookOpen size={18} className="text-[#16D1F5] group-hover:scale-110 transition-transform" />
                <span>Leer Libro Online</span>
              </button>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-8 py-4 text-base font-black flex items-center justify-center gap-2 shadow-xl shadow-[#1258FA]/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>Inicia ahora</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
