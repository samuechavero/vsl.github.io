import React from 'react';
import { Layers, PhoneCall, CalendarCheck, Megaphone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Layers,
      num: '01',
      title: 'Configuración de tu Plataforma de Gestión',
      badge: 'Día 1 a 3',
      desc: 'Habilitamos tu subcuenta oficial a tu nombre y configuramos nuestro sistema probado para seguros de vida: embudos de alta conversión para venta de IUL y embudos especializados de atracción y contratación de nuevos agentes.',
    },
    {
      icon: PhoneCall,
      num: '02',
      title: 'Integración Telefónica con Número Exclusivo',
      badge: 'Día 4 a 5',
      desc: 'Configuramos tus números telefónicos locales para llamadas y SMS automáticos. Cada vez que entra un prospecto de póliza o candidato a agente, el sistema le responde en segundos para confirmar su interés.',
    },
    {
      icon: Megaphone,
      num: '03',
      title: 'Lanzamiento de Tráfico en Meta Ads',
      badge: 'Día 6 a 7',
      desc: 'Activamos tus campañas publicitarias con presupuesto publicitario incluido, segmentadas con precisión para familias interesadas en retiro/protección y para profesionales interesados en ingresar a tu agencia.',
    },
    {
      icon: CalendarCheck,
      num: '04',
      title: 'Citas Precalificadas en tu Calendario',
      badge: 'Semana 2 en adelante',
      desc: 'Tu calendario se llena de citas con prospectos y candidatos que ya pasaron el filtro de calificación. Tú solo te conectas a la llamada para presentar la póliza o realizar la entrevista de incorporación.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>Proceso 100% "Plug & Play"</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E32] tracking-tight">
            De cero a tu máquina activa en{' '}
            <span className="text-gradient-blue">menos de 7 días</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Nosotros nos encargamos de todo el ensamblaje técnico y la pauta publicitaria. Tú no tienes que aprender programación ni pelear con herramientas complejas.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="clean-card p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#1258FA]/50 transition-all bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#1258FA] bg-[#1258FA]/10 px-2.5 py-1 rounded-full">
                      Paso {item.num}
                    </span>
                    <span className="text-[11px] font-semibold text-[#556080] bg-[#EDE3D5]/40 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1258FA] to-[#16D1F5] flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-base font-bold text-[#060E32] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556080] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EDE3D5]/60 flex items-center gap-1.5 text-xs text-[#1258FA] font-semibold">
                  <CheckCircle2 size={14} />
                  <span>Configurado 100% por Negoxia</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="clean-card p-6 sm:p-8 bg-[#060E32] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Garantía Operativa y Soporte Continuo Anti-Fallas
              </h4>
              <p className="text-xs sm:text-sm text-[#FFF9F2]/75 mt-0.5">
                Si alguna automatización o número presenta fallas, nuestro equipo técnico lo resuelve en tiempo récord.
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
