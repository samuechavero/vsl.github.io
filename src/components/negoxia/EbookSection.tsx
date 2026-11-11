import React from 'react';
import { Download, ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

interface EbookSectionProps {
  onOpenBooking: () => void;
}

export const EbookSection: React.FC<EbookSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="ebook" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#060E32] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1258FA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* 3D Book Visual Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="book group cursor-pointer">
              <div className="book-inner flex flex-col justify-between p-6 sm:p-8 text-left border-2 border-[#16D1F5]/40 shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#16D1F5] font-bold">
                      Manual Estratégico
                    </span>
                    <Sparkles size={14} className="text-[#16D1F5]" />
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-[#1258FA] to-[#16D1F5] mb-6" />

                  {/* Book Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                    La Anatomía del <br />
                    <span className="text-gradient-blue">Vendedor Invisible</span>
                  </h3>
                </div>

                <div>
                  <div className="h-px w-full bg-white/15 mb-4" />
                  <div className="text-[11px] uppercase tracking-widest text-[#FFF9F2]/70 font-bold flex items-center justify-between">
                    <span>Negoxia Autopilot</span>
                    <span className="text-[#16D1F5] text-xs">★ ★ ★ ★ ★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-semibold uppercase tracking-wider mb-5">
              <BookOpen size={14} />
              <span>Autoridad Instantánea · E-Book de Regalo</span>
            </div>

            {/* Exact Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              La Anatomía del <span className="text-gradient-blue">Vendedor Invisible</span>
            </h2>

            {/* Exact Description */}
            <p className="text-base sm:text-lg text-[#FFF9F2]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Descubre el ecosistema exacto que elimina el trabajo de prospección en frío y convierte desconocidos en citas calificadas directamente en tu calendario. Escrito para ti (Ghostwriting) basado en tu historia real para posicionarte como el experto.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>Posicionamiento de autoridad ante tus clientes potenciales</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>El imán de prospectos perfecto para tus campañas de pauta</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FFF9F2]/90">
                <CheckCircle2 size={16} className="text-[#16D1F5] shrink-0" />
                <span>Descarga digital inmediata en formato PDF</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="./el-vendedor-invisible.pdf"
                download
                className="btn-primary px-8 py-4 text-base font-bold flex items-center justify-center gap-2 shadow-xl"
              >
                <Download size={18} />
                <span>Descargar E-book Gratis</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="btn-secondary px-7 py-4 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 cursor-pointer bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
              >
                <span>Agendar mi Diagnóstico</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
