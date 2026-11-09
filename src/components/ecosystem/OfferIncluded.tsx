import React from 'react';
import {
  Check,
  Gift,
  ArrowRight,
  BookOpen,
  Globe,
  Video,
  PenTool,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
} from 'lucide-react';

interface OfferIncludedProps {
  onOpenBooking: () => void;
}

export const OfferIncluded: React.FC<OfferIncludedProps> = ({ onOpenBooking }) => {
  const bonuses = [
    {
      badge: 'Bono Exclusivo 01',
      title: 'Identidad Web y Lead Magnet',
      value: 'Valor estimado: $1,500 USD',
      features: [
        {
          icon: BookOpen,
          name: 'Entrevista 1 a 1 para extraer tu historia',
          desc: 'Sesión estratégica profunda para capturar tu metodología, tus casos de éxito y la voz única de tu marca.',
        },
        {
          icon: Layers,
          name: 'Redacción de tu propio "Libro" / Lead Magnet',
          desc: 'Un recurso de altísima autoridad y valor percibido listo para generar confianza inmediata y calificar a tus prospectos.',
        },
        {
          icon: Globe,
          name: 'Desarrollo de Landing Page de Alta Conversión',
          desc: 'Diseño responsive y optimizado para ventas, incluyendo Hosting y Dominio cubiertos durante el 1er año.',
        },
      ],
    },
    {
      badge: 'Bono Exclusivo 02',
      title: 'Producción de Contenido',
      value: 'Valor estimado: $1,200 USD',
      features: [
        {
          icon: PenTool,
          name: 'Redacción de guiones persuasivos',
          desc: 'Estructuras de copy psicológico (gancho, historia y oferta) diseñadas para detener el scroll y generar interés real.',
        },
        {
          icon: Video,
          name: 'Edición profesional de videos para retención',
          desc: 'Ritmo dinámico, transiciones precisas, subtítulos estilizados y elementos visuales enfocados en maximizar la retención.',
        },
        {
          icon: Sparkles,
          name: 'Diseño gráfico para la pauta publicitaria',
          desc: 'Creativos estáticos, carruseles y banners de alta estética para alimentar tus campañas en Meta Ads.',
        },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <Gift size={14} className="text-[#1258FA]" />
            <span>Regalos Incluidos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Bonos Exclusivos al obtener{' '}
            <span className="text-gradient-blue block mt-1">tu Ecosistema Plug & Play</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            No solo te entregamos la tecnología configurada: te equipamos con los activos de autoridad y contenido necesarios para atraer clientes desde el primer día.
          </p>
        </div>

        {/* 2 Exclusive Bonuses Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {bonuses.map((bonus, bIdx) => (
            <div
              key={bIdx}
              className="clean-card p-6 sm:p-8 relative flex flex-col justify-between border-2 border-[#1258FA]/20 shadow-xl bg-white"
            >
              <div>
                {/* Bonus Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1258FA] text-white text-xs font-black uppercase tracking-wider">
                    {bonus.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {bonus.value} · GRATIS
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#060E32] mb-6">
                  {bonus.title}
                </h3>

                <div className="space-y-4">
                  {bonus.features.map((feat, fIdx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={fIdx} className="p-4 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5] flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#060E32] mb-1">
                            {feat.name}
                          </h4>
                          <p className="text-xs text-[#556080] leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDE3D5] flex items-center gap-2 text-xs font-semibold text-[#1258FA]">
                <ShieldCheck size={16} />
                <span>Incluido 100% en tu instalación</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Offer Package Summary Card */}
        <div className="dark-card p-8 sm:p-12 relative overflow-hidden shadow-2xl border-2 border-[#16D1F5]/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1258FA]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-bold uppercase tracking-wider mb-5">
              <Zap size={14} />
              <span>Ascent by Flow Money · Llave en Mano</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Todo Tu Ecosistema Listo Para Recibir Citas y Ventas
            </h3>

            <p className="text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Subcuenta GoHighLevel + Twilio configurado + Embudos clonados y testeados + Meta Ads profesional + Los 2 Bonos de Identidad Web y Producción de Contenido.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-primary w-full sm:w-auto px-9 py-4 text-base font-semibold flex items-center justify-center gap-2 group shadow-2xl cursor-pointer"
              >
                <span>Obtener mi Ecosistema</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <p className="text-xs text-[#FFF9F2]/60 mt-4">
              Instalación sin complicaciones · Soporte continuo para evitar desconexiones técnicas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
