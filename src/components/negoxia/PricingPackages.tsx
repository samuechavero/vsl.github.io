import React from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles, Bot, PhoneCall, Megaphone, CalendarCheck, Zap, AlertTriangle } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const PricingPackages: React.FC = () => {
  const features = [
    {
      title: 'Subcuenta de CRM y Plataforma de Gestión',
      desc: 'Acceso total a tu sistema oficial a tu nombre para gestionar candidatos, pipelines y llamadas de contratación.',
    },
    {
      title: 'Agente Conversacional con IA 24/7',
      desc: 'Atención automática y calificación en WhatsApp, Instagram y Messenger para aspirantes a agentes.',
    },
    {
      title: 'Embudos de Alta Conversión para Reclutamiento',
      desc: 'Páginas y flujos optimizados para atraer y filtrar profesionales interesados en unirse a tu agencia.',
    },
    {
      title: 'Integración Telefónica con Número Exclusivo',
      desc: 'Telefonía local dedicada para llamadas y SMS automáticos de confirmación instantánea a cada prospecto.',
    },
    {
      title: 'Gestión de Campañas Publicitarias con Presupuesto Incluido',
      desc: 'Presupuesto publicitario incluido para mantener campañas activas en Meta Ads atrayendo candidatos calificados.',
    },
    {
      title: 'Sincronización de Calendarios y Recordatorios Anti-No-Show',
      desc: 'Sincronización directa con Google y Outlook con secuencias previas y posteriores a la entrevista.',
    },
    {
      title: 'Onboarding Personalizado y Capacitación 1 a 1',
      desc: 'Acompañamiento en el lanzamiento y entrenamiento para dominar tu plataforma y cerrar más contratos.',
    },
    {
      title: 'Soporte Técnico Continuo Anti-Fallas',
      desc: 'Asistencia prioritaria para garantizar que tu infraestructura opere sin interrupciones los 365 días del año.',
    },
  ];

  return (
    <section id="paquetes" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-[#16D1F5]" />
            <span>Inversión Todo Incluido</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#060E32] tracking-tight">
            Un Solo Paquete. <span className="text-gradient-blue">Todo lo que tu Agencia Necesita.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Sin costos ocultos ni sorpresas técnicas. Desplegamos tu infraestructura de reclutamiento llave en mano.
          </p>
        </div>

        {/* Pricing Card: Negoxia Pack Fast Start */}
        <div className="relative rounded-3xl bg-white border-2 border-[#1258FA]/30 shadow-2xl p-7 sm:p-12 overflow-hidden">
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#1258FA] to-[#16D1F5] text-white text-[11px] font-black uppercase tracking-widest py-1.5 px-8 rounded-bl-2xl shadow-md">
            MÁS POPULAR · ACCESO COMPLETO
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Plan Info & Pricing */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#EDE3D5] pb-8 lg:pb-0">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1258FA]">
                  Plan Oficial de Expansión
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#060E32] mt-1 mb-3">
                  Negoxia Pack Fast Start
                </h3>
                <p className="text-xs sm:text-sm text-[#556080] leading-relaxed mb-6">
                  La solución integral para líderes y agencias que desean reclutar de forma predecible sin perder tiempo en prospección manual.
                </p>

                {/* Price Display */}
                <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-[#EDE3D5] mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-[#060E32]">$789</span>
                    <span className="text-xs sm:text-sm text-[#7380A0] font-semibold">USD / mes</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#1258FA] font-bold">
                    <Check size={14} className="stroke-[3]" />
                    <span>Presupuesto publicitario incluido</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <span>Quiero atención prioritaria</span>
                  <ArrowRight size={18} />
                </a>

                {/* TÉRMINOS DE PAGO VISIBLES EXACTOS REQUERIDOS */}
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold flex items-center justify-center gap-2 text-center">
                  <AlertTriangle size={15} className="text-amber-600 shrink-0" />
                  <span>Contrato mínimo de 3 meses. Pagos no reembolsables.</span>
                </div>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#8C96AB]">
                  <ShieldCheck size={13} className="text-[#1258FA]" />
                  <span>Configuración en 5-7 días hábiles · Soporte dedicado</span>
                </div>
              </div>
            </div>

            {/* Right Column: Features List */}
            <div className="lg:col-span-7">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#060E32] mb-4">
                ¿Qué incluye el Negoxia Pack Fast Start?
              </h4>
              <div className="space-y-3.5">
                {features.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5]/80 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-[#060E32]">
                        {item.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-[#556080] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
