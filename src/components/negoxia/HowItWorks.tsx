import React from 'react';
import {
  Search,
  Sliders,
  FileText,
  Mic,
  Video,
  Scissors,
  Share2,
  Target,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const stepsClient = [
    {
      num: '01',
      title: 'Diagnóstico inicial',
      time: '30 minutos',
      desc: 'Revisamos tu modelo de negocio, tu público objetivo y te mostramos cómo se vería y escucharía tu clon de IA.',
    },
    {
      num: '02',
      title: 'Grabación única',
      time: 'Una sola vez',
      desc: 'Una grabación corta en tu espacio habitual. Con ella creamos tu avatar hiperrealista y clonamos tu voz con entonación natural.',
    },
    {
      num: '03',
      title: 'Instalación y control',
      time: 'Todo a tu nombre',
      desc: 'Queda instalado y funcionando en piloto automático. Tú apruebas guiones, voz y videos: absolutamente nada se publica sin tu visto bueno.',
    },
  ];

  const engineSteps = [
    {
      icon: Search,
      num: '01',
      title: 'Radar Viral',
      desc: 'Rastrea los temas y formatos con mayor tracción y retención en tu sector.',
    },
    {
      icon: Sliders,
      num: '02',
      title: 'Adaptación Estratégica',
      desc: 'Filtra las ideas y las adapta exactamente a tus servicios y soluciones.',
    },
    {
      icon: FileText,
      num: '03',
      title: 'Guion Personalizado',
      desc: 'Redacta los guiones utilizando tus palabras, modismos y ritmo de habla.',
    },
    {
      icon: Mic,
      num: '04',
      title: 'Síntesis de Voz',
      desc: 'Genera el audio con tu voz clonada con cadencia, pausas y emoción natural.',
    },
    {
      icon: Video,
      num: '05',
      title: 'Avatar en Movimiento',
      desc: 'Sincroniza tus labios y microexpresiones con precisión milimétrica.',
    },
    {
      icon: Scissors,
      num: '06',
      title: 'Edición y Retención',
      desc: 'Agrega subtítulos dinámicos de alto impacto, transiciones y elementos de soporte.',
    },
    {
      icon: Share2,
      num: '07',
      title: 'Distribución Orgánica',
      desc: 'Programa y publica en Instagram, TikTok, YouTube Shorts y LinkedIn.',
    },
    {
      icon: Target,
      num: '08',
      title: 'Conversión a Anuncios',
      desc: 'Los videos con mayor retención orgánica se transforman en campañas de anuncios pagados.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Cómo funciona</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Tu parte son 3 pasos.{' '}
            <span className="text-gradient-blue block mt-1">Del resto se encarga el motor.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            Diseñado para que tu tiempo se concentre en cerrar clientes, no en pelear con cámaras ni software de edición.
          </p>
        </div>

        {/* 3 Client Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stepsClient.map((step, idx) => (
            <div key={idx} className="clean-card p-7 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-gradient-blue">{step.num}</span>
                  <span className="px-3 py-1 rounded-full bg-[#060E32]/5 text-[#060E32] text-xs font-semibold">
                    {step.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#060E32] mb-3">{step.title}</h3>
                <p className="text-sm text-[#556080] leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EDE3D5]/60 flex items-center gap-2 text-xs text-[#1258FA] font-semibold">
                <CheckCircle2 size={16} />
                <span>Paso verificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engine 8 Steps Section */}
        <div className="bg-[#F6EFE6]/70 border border-[#EDE3D5] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1258FA] mb-2 block">
              Arquitectura del Sistema
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-[#060E32] tracking-tight">
              Por dentro: 8 pasos con el motor en piloto automático
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#556080]">
              La inteligencia artificial no es un simple chat para responder dudas: es el cerebro que investiga, adapta, produce y escala.
            </p>
          </div>

          {/* 8 Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {engineSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-[#EDE3D5] shadow-xs hover:border-[#1258FA]/40 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA]">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-black text-[#8A95AF]">{s.num}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#060E32] mb-1.5">{s.title}</h4>
                  <p className="text-xs text-[#556080] leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Funnel Flow Bar */}
          <div className="bg-[#060E32] text-white rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-center">
            <span className="text-[#FFF9F2]/80">Muchas ideas virales</span>
            <ArrowRight size={14} className="text-[#16D1F5]" />
            <span className="text-white">La que funciona orgánico</span>
            <ArrowRight size={14} className="text-[#16D1F5]" />
            <span className="text-[#16D1F5]">Anuncio de alto ROAS</span>
            <ArrowRight size={14} className="text-[#16D1F5]" />
            <span className="text-gradient-blue font-bold">Clientes calificados en tu agenda</span>
          </div>
        </div>

        {/* Action Call */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            className="btn-primary px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            <span>Ver cómo funcionaría en mi negocio</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
