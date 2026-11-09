import React from 'react';
import { Check, X } from 'lucide-react';

export const FitSection: React.FC = () => {
  const isForYou = [
    'Tienes un negocio de servicios, consultoría, coaching o infoproductos y buscas un flujo predecible de llamadas calificadas.',
    'Estás harto de perder prospectos por desorden entre hojas de cálculo, mensajes sueltos y herramientas desconectadas.',
    'Quieres una subcuenta en GoHighLevel con embudos, calendarios y secuencias de Twilio listas para operar sin lidiar con la parte técnica.',
    'Buscas un equipo profesional que gestione tus campañas en Meta Ads con instalación precisa de Píxel/API y revisión constante de métricas.',
  ];

  const isNotForYou = [
    'Todavía no cuentas con una oferta validada ni tienes claridad sobre tu cliente ideal.',
    'Buscas resultados mágicos de un día para otro sin disposición a invertir en pauta publicitaria ni a cerrar tus llamadas.',
    'Prefieres continuar haciendo seguimientos manuales uno por uno en lugar de automatizar tus confirmaciones y pipelines.',
    'No estás dispuesto a dedicar 30 minutos a una sesión estratégica para coordinar la puesta en marcha de tu ecosistema.',
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
            Trabajamos con negocios que están listos para profesionalizar y escalar su sistema de captación y ventas.
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
