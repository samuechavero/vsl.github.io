import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const FitSection: React.FC = () => {
  const isForYou = [
    'Tienes un negocio en marcha o vendes tu conocimiento y ya cuentas con clientes activos.',
    'Sabes que necesitas contenido todos los días para liderar tu nicho, pero tu agenda no te permite sentarte a grabarte horas.',
    'Buscas resultados tanto orgánicos como de anuncios pagados sin tener que armar un equipo de producción costoso ni pagar retainers mensuales abusivos.',
    'Valoras tener control total: quieres que un sistema inteligente cree todo, pero manteniendo la última palabra para aprobar cada pieza.',
  ];

  const isNotForYou = [
    'Todavía no tienes una oferta validada ni sabes quién es tu cliente ideal.',
    'Buscas "trucos mágicos" o resultados de la noche a la mañana sin estrategia ni procesos comerciales de cierre.',
    'No estás dispuesto a dedicar 30 minutos a una sesión de diagnóstico inicial o a realizar una única grabación guiada.',
    'No quieres que un clon hiperrealista de IA hable y comunique por ti.',
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060E32]/5 border border-[#060E32]/10 text-[#060E32] text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Filtro de afinidad</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            ¿Para quién es y para quién no?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            Queremos trabajar con quienes realmente pueden multiplicar sus resultados con este motor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YES Column */}
          <div className="clean-card p-6 sm:p-8 border-t-4 border-t-[#1258FA]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-full bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] font-bold">
                ✓
              </span>
              <h3 className="text-xl font-bold text-[#060E32]">Es para ti si:</h3>
            </div>

            <ul className="space-y-4">
              {isForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#4B5578] leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO Column */}
          <div className="clean-card p-6 sm:p-8 border-t-4 border-t-[#E93D3D] bg-[#FFFBFB]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-full bg-[#E93D3D]/10 flex items-center justify-center text-[#E93D3D] font-bold">
                ✕
              </span>
              <h3 className="text-xl font-bold text-[#060E32]">No es para ti si:</h3>
            </div>

            <ul className="space-y-4">
              {isNotForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#4B5578] leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#E93D3D]/15 flex items-center justify-center text-[#E93D3D] shrink-0 mt-0.5">
                    <X size={12} className="stroke-[3]" />
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
