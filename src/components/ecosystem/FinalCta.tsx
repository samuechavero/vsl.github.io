import React from 'react';
import { ArrowRight, Calendar, Workflow, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-[#060E32] text-white">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#1258FA]/20 via-[#16D1F5]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#16D1F5] text-xs font-semibold tracking-wide uppercase mb-6">
          <Workflow size={14} />
          <span>Tu siguiente paso estratégico</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
          Construyamos tu máquina de ventas <br className="hidden sm:block" />
          <span className="text-[#16D1F5]">100% "Plug & Play"</span>
        </h2>

        <p className="text-base sm:text-lg text-[#FFF9F2]/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Olvídate de la frustración técnica. Subcuenta GoHighLevel, embudos, calendarios, Twilio y campañas en Meta Ads instalados y operando a tu nombre.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenBooking}
            className="btn-primary w-full sm:w-auto px-10 py-4 text-base font-semibold flex items-center justify-center gap-2 shadow-2xl group cursor-pointer"
          >
            <span>Obtener mi Ecosistema</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#FFF9F2]/60 max-w-md mx-auto">
          Sesión de alineación estratégica · Revisamos tu modelo y coordinamos la entrega completa de tu sistema.
        </p>
      </div>
    </section>
  );
};
