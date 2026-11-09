import React from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles, Zap, Lock } from 'lucide-react';

interface OfferIncludedProps {
  onOpenBooking: () => void;
}

export const OfferIncluded: React.FC<OfferIncludedProps> = ({ onOpenBooking }) => {
  const deliverables = [
    {
      title: 'Tu avatar de IA y tu voz clonada',
      desc: 'Realizados a partir de una grabación corta, una sola vez, en alta definición con sincronización labial nativa.',
    },
    {
      title: 'Motor inteligente configurado e integrado',
      desc: 'Conectado a tus herramientas clave (IA generativa, modelos de voz, plataformas de video y administrador de anuncios).',
    },
    {
      title: 'El sistema de 8 pasos activo y funcionando',
      desc: 'Produce contenido orgánico constante y detecta automáticamente los creativos ganadores para escalar en anuncios.',
    },
    {
      title: 'Control total de aprobación previa',
      desc: 'Tú apruebas cada guion, cada audio y cada video antes de que toque las redes: nada sale sin tu visto bueno.',
    },
    {
      title: 'Propiedad 100% a tu nombre',
      desc: 'No dependes de contratos de permanencia ni agencias que te retienen. El motor, los avatares y la voz quedan bajo tu titularidad.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>Qué incluye</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Te instalamos el motor.{' '}
            <span className="text-gradient-blue block mt-1">Es tuyo.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            No es un servicio que te ata a mensualidades eternas. Es un activo de captación instalado y operando para ti.
          </p>
        </div>

        {/* 2-Column Offer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Deliverables Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="clean-card p-5 sm:p-6 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                  <Check size={18} className="stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#060E32] mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#556080] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="dark-card p-7 sm:p-8 relative overflow-hidden shadow-2xl border-2 border-[#16D1F5]/30">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1258FA]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-bold uppercase tracking-wider mb-5">
                  <Zap size={14} />
                  <span>Instalación llave en mano</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  El motor completo Negoxia Autopilot
                </h3>
                <p className="text-xs text-[#FFF9F2]/70 mb-6">
                  Instalación completa, configuración de herramientas, entrenamiento del clon y puesta en marcha.
                </p>

                {/* Big Price Tag */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#16D1F5] block font-semibold mb-1">
                    Inversión única
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white">$2,000</span>
                    <span className="text-sm font-semibold text-[#FFF9F2]/80">USD</span>
                  </div>
                  <p className="text-xs text-[#FFF9F2]/70 mt-2">
                    Un solo pago · Sin costos ocultos
                  </p>
                </div>

                {/* Features Mini-list */}
                <ul className="space-y-2.5 text-xs text-[#FFF9F2]/90 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#16D1F5]" />
                    <span>Tu clon y tu voz clonada con IA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#16D1F5]" />
                    <span>8 pasos del motor instalados a tu nombre</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#16D1F5]" />
                    <span>Conexión con Meta Ads y redes sociales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#16D1F5]" />
                    <span>Acompañamiento en el lanzamiento</span>
                  </li>
                </ul>

                {/* Primary Button */}
                <button
                  onClick={onOpenBooking}
                  className="btn-primary w-full py-4 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 shadow-xl group"
                >
                  <span>Agendar mi diagnóstico gratis</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>

                {/* Reassurance note */}
                <p className="text-center text-[11px] text-[#FFF9F2]/60 mt-4 leading-relaxed">
                  El diagnóstico de 30 minutos es 100% gratuito y sin compromiso. Si vemos que no encaja con tu negocio, te lo diremos con total franqueza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
