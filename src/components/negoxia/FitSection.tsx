import React from 'react';
import { Check, X, UserCheck } from 'lucide-react';

export const FitSection: React.FC = () => {
  const isForYou = [
    'Eres dueño de agencia, líder de equipo o agente con visión que busca reclutar e incorporar entre 5 y 20 nuevos agentes al mes de manera predecible.',
    'Estás agotado de la prospección manual en redes sociales, de rogar por referidos o de depender de candidatos no calificados.',
    'Deseas una plataforma de CRM y agentes de IA que califiquen a los prospectos 24/7 y sincronicen entrevistas directamente en tu calendario.',
    'Quieres delegar la parte técnica y la publicidad para enfocarte exclusivamente en liderar, capacitar y firmar nuevos contratos para tu equipo.',
  ];

  const isNotForYou = [
    'No tienes una agencia o equipo en marcha ni la intención de liderar y desarrollar a nuevos agentes.',
    'Esperas que los nuevos agentes se incorporen y produzcan solos sin presentarte a las entrevistas agendadas.',
    'No tienes interés en atender llamadas ni en dar seguimiento a los prospectos precalificados que ingresen a tu calendario.',
    'No estás dispuesto a invertir en tecnología ni en la publicidad de crecimiento para expandir tu organización.',
  ];

  return (
    <section id="filtro" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060E32]/5 border border-[#060E32]/10 text-[#060E32] text-xs font-semibold tracking-wide uppercase mb-3">
            <UserCheck size={14} className="text-[#1258FA]" />
            <span>Filtro de afinidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            ¿Es Negoxia el socio ideal para tu agencia?
          </h2>
          <p className="mt-4 text-base text-[#4B5578] leading-relaxed">
            Trabajamos con líderes comprometidos a duplicar su equipo y escalar su organización mediante sistemas de Inteligencia Artificial y automatización comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YES Column */}
          <div className="clean-card p-6 sm:p-9 border-t-4 border-t-[#1258FA] bg-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-full bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] font-bold text-lg">
                ✓
              </span>
              <h3 className="text-xl font-bold text-[#060E32]">Es para ti si:</h3>
            </div>

            <ul className="space-y-4">
              {isForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#4B5578] leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                    <Check size={13} className="stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO Column */}
          <div className="clean-card p-6 sm:p-9 border-t-4 border-t-[#E93D3D] bg-[#FFFBFB]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-full bg-[#E93D3D]/10 flex items-center justify-center text-[#E93D3D] font-bold text-lg">
                ✕
              </span>
              <h3 className="text-xl font-bold text-[#060E32]">No es para ti si:</h3>
            </div>

            <ul className="space-y-4">
              {isNotForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#4B5578] leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#E93D3D]/15 flex items-center justify-center text-[#E93D3D] shrink-0 mt-0.5">
                    <X size={13} className="stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
