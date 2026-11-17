import React from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const STRIPE_PLAN_01_URL = 'https://buy.stripe.com/bJe14meu32AOcz17ux63K07';
const STRIPE_PLAN_02_URL = 'https://buy.stripe.com/28E8wO99J2AOdD57ux63K08';

export const PricingPackages: React.FC = () => {
  const plan01Features = [
    'CRM y pipeline en GoHighLevel',
    'Asistente virtual IA que agenda',
    'Agenda y seguimiento automático',
    'Números exclusivos, llamadas y SMS',
    'Soporte técnico continuo',
  ];

  const plan02Features = [
    'Campañas dedicadas en Meta Ads',
    'Estrategia y segmentación',
    'Instalación de Píxel y API',
    'Revisión semanal de métricas',
    'Más conversaciones para tu asistente',
  ];

  return (
    <section id="paquetes" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#060E32] text-white relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#1258FA]/20 via-[#16D1F5]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1258FA]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#16D1F5]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#16D1F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-[#16D1F5]" />
            <span>Planes y Precios</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Elige el Plan para <span className="text-[#16D1F5]">Escalar tu Agencia con IA</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Estructura tecnológica probada para reclutar agentes de forma predecible y sin fricción operativa.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* ========================================================= */}
          {/* TARJETA 1: PLAN 01 / CRM AUTOPILOT */}
          {/* ========================================================= */}
          <div className="relative rounded-3xl bg-[#08123B]/85 backdrop-blur-xl border border-[#1258FA]/30 hover:border-[#1258FA]/60 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Header */}
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase">
                PLAN 01 / CRM AUTOPILOT
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-2 min-h-[38px]">
                Para ordenar, calificar y dar seguimiento a cada candidato.
              </p>

              {/* Pricing Box */}
              <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-blue-500/20">
                {/* Precio de Anclaje (Tachado) */}
                <div className="text-xs sm:text-sm font-semibold text-white/40 line-through decoration-white/40 tracking-tight mb-1">
                  Valor $1,700 / mes
                </div>

                {/* Precio Principal */}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">$789</span>
                </div>

                {/* Subtítulo del Precio */}
                <div className="text-xs sm:text-sm text-white/60 font-medium mt-1">
                  USD / mes • precio de cierre previo
                </div>

                {/* Etiqueta de Ahorro Naranja */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-black tracking-wide shadow-sm">
                    Ahorras $911 al mes
                  </span>
                </div>
              </div>

              {/* Contenedor de Beneficios (Glassmorphism con bordes sutiles en azul) */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-blue-500/20 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white/70 mb-3.5">
                    Incluye:
                  </h4>
                  <ul className="space-y-3">
                    {plan01Features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <Check size={16} className="text-[#16D1F5] shrink-0 stroke-[2.5] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Separador y Bono Destacado */}
                <div>
                  <div className="my-4 border-t border-blue-500/20" />
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#16D1F5]">
                    <Sparkles size={16} className="text-[#16D1F5] shrink-0" />
                    <span>$200 de presupuesto para Meta Ads incluido</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA & Legal */}
            <div className="mt-8">
              <a
                href={STRIPE_PLAN_01_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-4 text-sm sm:text-base font-black flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>Inicia ahora</span>
                <ArrowRight size={18} />
              </a>

              <p className="mt-3 text-center text-[11px] text-white/50">
                Contrato mínimo de 3 meses. Pagos no reembolsables. Pago seguro vía Stripe.
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* TARJETA 2: PLAN 02 / AUTOPILOT PREMIUM */}
          {/* ========================================================= */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#091544]/90 to-[#040A24] backdrop-blur-xl border-2 border-[#16D1F5]/40 hover:border-[#16D1F5]/70 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-[#16D1F5]/10">
            <div>
              {/* Header con Badge RECOMENDADO en azul claro/cyan */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase">
                  PLAN 02 / AUTOPILOT PREMIUM
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#16D1F5]/15 border border-[#16D1F5]/40 text-[#16D1F5] text-[11px] font-black uppercase tracking-wider shadow-sm">
                  RECOMENDADO
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#B4C0DB] leading-relaxed mt-2 min-h-[38px]">
                Para atraer más candidatos con campañas de reclutamiento dedicadas.
              </p>

              {/* Pricing Box */}
              <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#16D1F5]/30">
                {/* Precio de Anclaje (Tachado) */}
                <div className="text-xs sm:text-sm font-semibold text-white/40 line-through decoration-white/40 tracking-tight mb-1">
                  Valor $2,670 / mes
                </div>

                {/* Precio Principal */}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">$1,167</span>
                </div>

                {/* Subtítulo del Precio */}
                <div className="text-xs sm:text-sm text-white/60 font-medium mt-1">
                  USD / mes • precio de cierre previo
                </div>

                {/* Etiqueta de Ahorro Naranja */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-black tracking-wide shadow-sm">
                    Ahorras $1,503 al mes
                  </span>
                </div>
              </div>

              {/* Contenedor de Beneficios (Glassmorphism con bordes sutiles en azul) */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#16D1F5]/30 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white/70 mb-3.5">
                    Todo lo del CRM, más:
                  </h4>
                  <ul className="space-y-3">
                    {plan02Features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                        <Check size={16} className="text-[#16D1F5] shrink-0 stroke-[2.5] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Separador y Bono Destacado */}
                <div>
                  <div className="my-4 border-t border-[#16D1F5]/20" />
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#16D1F5]">
                    <Sparkles size={16} className="text-[#16D1F5] shrink-0" />
                    <span>$500 de presupuesto para Meta Ads incluido</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA & Legal */}
            <div className="mt-8">
              <a
                href={STRIPE_PLAN_02_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-sm sm:text-base font-black flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#16D1F5] to-[#1258FA] text-white shadow-xl shadow-[#16D1F5]/25 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>Escala aquí tu negocio</span>
                <ArrowRight size={18} />
              </a>

              <p className="mt-3 text-center text-[11px] text-white/50">
                Contrato mínimo de 3 meses. Pagos no reembolsables. Pago seguro vía Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
