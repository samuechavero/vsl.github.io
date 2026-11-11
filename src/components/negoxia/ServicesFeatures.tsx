import React from 'react';
import { Shield, UserPlus, Zap, Calendar, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const ServicesFeatures: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      badge: 'Motor de Ventas',
      title: 'Adquisición de Clientes (IUL & Gastos Finales)',
      desc: 'Embudos de alta conversión diseñados específicamente para educar y precalificar a familias sobre acumulación para el retiro y protección financiera. Atrae prospectos que entienden el valor de una póliza y tienen capacidad de pago.',
      points: [
        'Campañas publicitarias con presupuesto incluido',
        'Filtro de precalificación financiera y salud',
        'Citas agendadas directamente para presentar y cerrar',
      ],
    },
    {
      icon: UserPlus,
      badge: 'Motor de Reclutamiento',
      title: 'Atracción y Expansión de Nuevos Agentes',
      desc: 'Embudos estratégicos orientados a profesionales que buscan una carrera en seguros de vida o agentes con licencia que desean mejores oportunidades, tecnología y comisiones para escalar su agencia.',
      points: [
        'Atracción de prospectos a agentes calificados',
        'Cuestionario de perfil, motivación y licencia',
        'Entrevistas de contratación en tu calendario',
      ],
    },
    {
      icon: Zap,
      badge: 'Automatización Inmediata',
      title: 'Nutrición por SMS y WhatsApp sin intervención',
      desc: 'Conexión de telefonía propia con números exclusivos. El sistema responde en segundos a cada lead con mensajes interactivos y recordatorios automáticos para garantizar máxima asistencia a cada llamada.',
      points: [
        'Respuesta instantánea 24/7 sin tocar el teléfono',
        'Recordatorios de citas para erradicar el no-show',
        'Seguimiento automático a prospectos indecisos',
      ],
    },
    {
      icon: Calendar,
      badge: 'Plataforma de Gestión',
      title: 'Todo centralizado bajo tu marca propia',
      desc: 'Tu propio sistema comercial para gestionar tanto la cartera de clientes de seguros como los contratos y producción de tu equipo en crecimiento, sin dependencias técnicas.',
      points: [
        'Control total de contactos y etapas de cierre',
        'Calendario sincronizado con Google y Outlook',
        'Soporte técnico continuo anti-fallas',
      ],
    },
  ];

  return (
    <section id="servicios" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Infraestructura Comercial Integral</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E32] tracking-tight leading-tight">
            Diseñado para <span className="text-gradient-blue">cerrar pólizas</span> y{' '}
            <span className="text-gradient-blue">escalar tu equipo</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Un ecosistema dual que resuelve los dos grandes cuellos de botella de cualquier agencia o agente Top Producer: flujo constante de prospectos de compra y candidatos para reclutamiento.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="clean-card p-7 sm:p-9 bg-white border border-[#EDE3D5] flex flex-col justify-between hover:border-[#1258FA]/40 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1258FA] to-[#16D1F5] flex items-center justify-center text-white shadow-sm">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#060E32] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#556080] leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#EDE3D5]/60">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#060E32] font-medium">
                        <CheckCircle2 size={15} className="text-[#1258FA] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central CTA Banner */}
        <div className="clean-card p-6 sm:p-8 bg-[#060E32] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border-none">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 hidden sm:flex">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                ¿Listo para activar tu ecosistema de Ventas y Reclutamiento?
              </h4>
              <p className="text-xs sm:text-sm text-[#FFF9F2]/75 mt-0.5">
                Revisamos tu caso y te mostramos cómo llenar tu agenda con citas precalificadas.
              </p>
            </div>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-xl whitespace-nowrap cursor-pointer"
          >
            <span>Quiero atención prioritaria</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};
