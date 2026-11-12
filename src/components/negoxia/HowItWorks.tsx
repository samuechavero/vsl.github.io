import React from 'react';
import { ClipboardList, Sliders, Rocket, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: ClipboardList,
      title: 'Paso 1: Registro y Onboarding rápido de datos del negocio',
      badge: 'Día 1',
      desc: 'Completas un formulario ágil donde definimos el perfil exacto de agentes que deseas sumar a tu agencia, tus metas de crecimiento y conectamos las cuentas necesarias.',
      features: [
        'Perfil ideal de candidatos a agentes',
        'Relevamiento de metas y estructura de la agencia',
        'Asignación de equipo técnico dedicado',
      ],
    },
    {
      num: '02',
      icon: Sliders,
      title: 'Paso 2: Implementación y configuración de flujos a medida',
      badge: 'Día 2 a 4',
      desc: 'Construimos tus embudos de reclutamiento, programamos tu agente IA conversacional para calificar en WhatsApp/redes y sincronizamos tu calendario con recordatorios automáticos.',
      features: [
        'Despliegue de embudos de alta conversión',
        'Entrenamiento del agente IA con tus filtros',
        'Integración telefónica con número exclusivo',
      ],
    },
    {
      num: '03',
      icon: Rocket,
      title: 'Paso 3: Activación, capacitación y escalamiento de agencia',
      badge: 'Día 5 en adelante',
      desc: 'Encendemos el tráfico publicitario con presupuesto incluido, te capacitamos en el uso de la plataforma y comienzas a recibir candidatos calificados en tu calendario todos los días.',
      features: [
        'Lanzamiento de campañas de atracción',
        'Capacitación 1 a 1 de tu equipo',
        'Flujo continuo de entrevistas de reclutamiento',
      ],
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-[#16D1F5]" />
            <span>Implementación Llave en Mano</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#060E32] tracking-tight">
            De Cero a tu Agencia en Piloto Automático en{' '}
            <span className="text-gradient-blue">3 Simples Pasos</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Nosotros nos encargamos de todo el ensamblaje técnico y la pauta publicitaria. Tú solo te sientas a entrevistar y firmar a tus nuevos agentes.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="clean-card p-7 sm:p-8 flex flex-col justify-between relative group hover:border-[#1258FA]/40 hover:-translate-y-1 transition-all bg-white shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black text-[#1258FA] bg-[#1258FA]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      Fase {item.num}
                    </span>
                    <span className="text-xs font-bold text-[#556080] bg-[#EDE3D5]/50 px-2.5 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1258FA] to-[#16D1F5] flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 transition-transform">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-black text-[#060E32] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556080] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EDE3D5]/70 space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#060E32] font-semibold">
                      <CheckCircle2 size={14} className="text-[#1258FA] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="clean-card p-6 sm:p-8 bg-[#060E32] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Garantía Operativa y Soporte Continuo Anti-Fallas
              </h4>
              <p className="text-xs sm:text-sm text-[#FFF9F2]/75 mt-0.5">
                Acompañamiento técnico 24/7 para que tu máquina de reclutamiento nunca se detenga.
              </p>
            </div>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto px-7 py-3.5 text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-lg"
          >
            <span>Quiero atención prioritaria</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
