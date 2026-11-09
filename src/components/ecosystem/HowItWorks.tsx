import React from 'react';
import {
  Database,
  GitBranch,
  PhoneCall,
  ShieldCheck,
  Megaphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Calendar,
  Layers,
  Zap,
} from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const pilar1Items = [
    {
      icon: Database,
      title: 'Apertura y configuración de tu subcuenta en GoHighLevel',
      desc: 'Configuramos tu entorno completo desde cero con dominios personalizados, permisos y estructura óptima para tu negocio.',
    },
    {
      icon: GitBranch,
      title: 'Clonación y testeo de embudos, calendarios y pipelines',
      desc: 'Desplegamos embudos validados de alta conversión, calendarios de disponibilidad sincronizados y etapas de pipeline probadas.',
    },
    {
      icon: PhoneCall,
      title: 'Integración de Twilio / LC Phone con números exclusivos',
      desc: 'Habilitamos telefonía para llamadas y secuencias de SMS automatizadas con números locales o exclusivos para garantizar máxima entregabilidad.',
    },
    {
      icon: ShieldCheck,
      title: 'Soporte técnico continuo para evitar desconexiones',
      desc: 'Monitoreo preventivo y asistencia constante para asegurar que tus automatizaciones, webhooks y registros funcionen sin caídas.',
    },
  ];

  const pilar2Items = [
    {
      icon: Megaphone,
      title: 'Gestión integral de publicidad en Meta Ads (estrategia y segmentación)',
      desc: 'Estructuración y optimización continua de campañas en Facebook e Instagram orientadas a captar prospectos con intención de compra.',
    },
    {
      icon: BarChart3,
      title: 'Instalación de Píxel / API y revisión semanal de métricas',
      desc: 'Conexión precisa de Conversions API (CAPI) para medir cada evento, atribución exacta y reportes periódicos para optimizar el retorno (ROAS).',
    },
  ];

  const stepsSimple = [
    {
      num: '01',
      title: 'Sesión de Alineación',
      time: '30 minutos',
      desc: 'Entendemos tu oferta, tu cliente ideal y definimos la arquitectura del ecosistema a implementar.',
    },
    {
      num: '02',
      title: 'Montaje & Integración',
      time: '100% por nuestro equipo',
      desc: 'Configuramos GoHighLevel, embudos, Twilio, calendarios y campañas en Meta Ads sin que toques una línea técnica.',
    },
    {
      num: '03',
      title: 'Lanzamiento & Control',
      time: 'Listo para operar',
      desc: 'Comienzas a recibir prospectos calificados directamente en tu calendario con secuencias de seguimiento activas.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <Workflow size={14} />
            <span>Nuestros Servicios Clave</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Los 2 Pilares de tu{' '}
            <span className="text-gradient-blue block mt-1">Máquina de Ventas</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            Todo lo necesario para captar, nutrir y cerrar clientes en una solución integral completamente lista para usar.
          </p>
        </div>

        {/* 2 Core Pillars Grid */}
        <div className="space-y-10 mb-20">
          {/* Pilar 1: Ecosistema CRM y Automatización */}
          <div className="clean-card p-6 sm:p-10 border-t-4 border-t-[#1258FA] relative overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EDE3D5]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#1258FA] text-white flex items-center justify-center font-black text-xl shadow-md">
                  1
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1258FA] block">
                    Pilar Fundamental
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#060E32]">
                    Ecosistema CRM y Automatización
                  </h3>
                </div>
              </div>
              <span className="self-start md:self-auto px-3 py-1.5 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold">
                Infraestructura GoHighLevel
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pilar1Items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-[#FFF9F2] border border-[#EDE3D5] flex items-start gap-4 hover:border-[#1258FA]/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-[#EDE3D5] flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#060E32] mb-1.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#556080] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pilar 2: Acceso a Publicidad Propia */}
          <div className="clean-card p-6 sm:p-10 border-t-4 border-t-[#16D1F5] relative overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EDE3D5]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#060E32] text-[#16D1F5] flex items-center justify-center font-black text-xl shadow-md border border-[#16D1F5]/30">
                  2
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1258FA] block">
                    Pilar de Tráfico y Escala
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#060E32]">
                    Acceso a Publicidad Propia
                  </h3>
                </div>
              </div>
              <span className="self-start md:self-auto px-3 py-1.5 rounded-full bg-[#060E32] text-[#16D1F5] text-xs font-bold">
                Meta Ads & Conversions API
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pilar2Items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-[#FFF9F2] border border-[#EDE3D5] flex items-start gap-4 hover:border-[#16D1F5]/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-[#EDE3D5] flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#060E32] mb-1.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#556080] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Steps Process Bar */}
        <div className="bg-[#F6EFE6]/80 border border-[#EDE3D5] rounded-3xl p-6 sm:p-10 mb-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1258FA] mb-1.5 block">
              Proceso de Implementación
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#060E32] tracking-tight">
              De cero a tu máquina activa en 3 simples pasos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stepsSimple.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#EDE3D5] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-gradient-blue">{step.num}</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#060E32]/5 text-[#060E32] text-[11px] font-semibold">
                      {step.time}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#060E32] mb-2">{step.title}</h4>
                  <p className="text-xs text-[#556080] leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDE3D5] flex items-center gap-1.5 text-xs text-[#1258FA] font-semibold">
                  <CheckCircle2 size={15} />
                  <span>Garantía de ejecución</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Call */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="btn-primary px-8 py-4 text-sm font-semibold inline-flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <span>Obtener mi Ecosistema</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};
