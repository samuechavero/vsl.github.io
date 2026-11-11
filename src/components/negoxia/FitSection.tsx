import React from 'react';
import { Check, X, ShieldAlert, Sparkles, UserCheck } from 'lucide-react';

export const FitSection: React.FC = () => {
  const isForYou = [
    'Eres agente de seguros de vida con licencia activa (IUL, vida entera, gastos finales) y buscas un flujo predecible de citas semanales.',
    'Estás cansado de la prospección en frío, de molestar a conocidos y de comprar leads compartidos de baja calidad.',
    'Entiendes que GoHighLevel es el estándar de la industria y quieres una subcuenta oficial con embudos probados ya instalados.',
    'Deseas delegar la configuración técnica y la pauta publicitaria en Meta Ads para enfocarte exclusivamente en tus presentaciones y cierres.',
  ];

  const isNotForYou = [
    'No tienes licencia para vender seguros ni una compañía/broker respaldando tus pólizas.',
    'Esperas que las pólizas se vendan solas sin presentarte a las citas agendadas.',
    'Buscas "clones de IA" o avatares generados por computadora (nosotros no hacemos clones de IA; construimos infraestructura real de CRM, automatizaciones y embudos de captación humana).',
    'No tienes disposición para invertir en tu negocio ni en la publicidad de tus propias campañas.',
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
            ¿Es Negoxia Autopilot el socio ideal para tu agencia?
          </h2>
          <p className="mt-4 text-base text-[#4B5578] leading-relaxed">
            Trabajamos con agentes comprometidos a escalar su producción mediante sistemas automatizados y profesionales.
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
