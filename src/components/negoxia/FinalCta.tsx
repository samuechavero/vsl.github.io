import React from 'react';
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-[#060E32] text-white">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#1258FA]/25 via-[#16D1F5]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#16D1F5] text-xs font-semibold tracking-wide uppercase mb-6">
          <Calendar size={14} />
          <span>Tu Siguiente Paso</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
          Construye tu máquina de ventas y <br className="hidden sm:block" />
          <span className="text-[#16D1F5]">llena tu calendario de manera predecible.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#FFF9F2]/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Agenda una sesión estratégica sin costo. Analizamos tu mercado, tus metas de colocación de IUL y tu plan de expansión de agentes para activar tu ecosistema.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto px-10 py-4 text-base sm:text-lg font-bold flex items-center justify-center gap-2 shadow-2xl group cursor-pointer"
          >
            <span>Quiero atención prioritaria</span>
            <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#FFF9F2]/65">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-[#16D1F5]" />
            <span>Atención 100% personalizada</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#16D1F5]" />
            <span>Sin contratos de permanencia</span>
          </span>
        </div>
      </div>
    </section>
  );
};
