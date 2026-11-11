import React from 'react';
import { UserX, PhoneMissed, Shuffle, AlertCircle, Sparkles } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: UserX,
      title: 'El desgaste del "mercado tibio"',
      desc: 'Rogar por referidos a amigos y familiares se agota rápidamente, tanto para vender pólizas como para intentar reclutar agentes. Quedas atrapado en la incertidumbre de no saber de dónde saldrá tu próximo ingreso.',
    },
    {
      icon: PhoneMissed,
      title: 'Leads compartidos que queman tu dinero',
      desc: 'Plataformas que le venden el mismo contacto a 5 agentes a la vez. Cuando llamas, la persona está molesta o ya firmó con otra compañía, haciéndote perder tiempo y motivación.',
    },
    {
      icon: Shuffle,
      title: 'Desorden operativo y citas perdidas',
      desc: 'Herramientas desconectadas, calendarios que no sincronizan y mensajes que no salen a tiempo. Pierdes horas intentando resolver la parte técnica en lugar de sentarte a presentar y cerrar.',
    },
  ];

  return (
    <section id="problema" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060E32]/5 border border-[#060E32]/10 text-[#060E32] text-xs font-semibold tracking-wide uppercase mb-3">
            <AlertCircle size={14} className="text-[#1258FA]" />
            <span>El verdadero obstáculo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            ¿Por qué la mayoría de los agentes y agencias{' '}
            <span className="text-gradient-blue block mt-1">no logran predecibilidad?</span>
          </h2>
          <p className="mt-4 text-base text-[#4B5578] leading-relaxed">
            No es tu talento comercial ni el valor de tus pólizas de IUL o gastos finales. Es la falta de una máquina automática que alimente tu calendario de citas precalificadas de venta y de reclutamiento de manera constante.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="clean-card p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#060E32] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#556080] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EDE3D5]/60 text-xs text-[#8A95AF] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1258FA]" />
                  <span>Fricción Operativa 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Punchline Box (Dark Accent) */}
        <div className="dark-card p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-9 h-9 text-[#16D1F5] mx-auto mb-3" />
            <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Los Top Producers y las agencias líderes no prospectan en frío. <br />
              <span className="text-[#16D1F5]">Tienen una máquina de atracción que trabaja 24/7.</span>
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed max-w-2xl mx-auto">
              Eso es exactamente <strong>Negoxia Autopilot</strong>: tu ecosistema de automatización con embudos de venta y reclutamiento, nutrición inmediata por telefonía propia y publicidad gestionada para llenar tu calendario de manera predecible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
