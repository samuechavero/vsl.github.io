import React from 'react';
import { Workflow, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-4xl mx-auto">
        <div className="clean-card p-7 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Profile */}
            <div className="md:col-span-5 text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl mx-auto relative bg-[#060E32]">
                  <img
                    src="./samuprofile.jpeg"
                    alt="Ascent by Flow Money"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#060E32]/90 backdrop-blur text-white text-[11px] font-semibold py-1 px-2 rounded-lg flex items-center justify-center gap-1.5 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#16D1F5]" />
                    <span>Especialistas en Embudos & CRM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
                <Workflow size={13} />
                <span>Quién está detrás</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#060E32] tracking-tight mb-3">
                Construimos para ti lo que nosotros mismos operamos a diario.
              </h2>

              <p className="text-base text-[#1258FA] font-semibold italic mb-4">
                «No te vendemos teoría: te entregamos una máquina de ventas probada en el campo real.»
              </p>

              <p className="text-xs sm:text-sm text-[#4B5578] leading-relaxed mb-6">
                En <strong>Ascent by Flow Money</strong> nos encargamos de que tu negocio cuente con un sistema comercial de primer nivel. Dejamos configurada tu subcuenta de GoHighLevel, conectamos Twilio para que no pierdas un solo lead y gestionamos tus campañas en Meta Ads con total transparencia técnica.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#EDE3D5]">
                <div className="bg-[#FFF9F2] p-3 rounded-xl border border-[#EDE3D5]">
                  <span className="text-lg font-black text-[#060E32] block">100% Plug & Play</span>
                  <span className="text-xs text-[#7380A0]">Sin dolores de cabeza técnicos</span>
                </div>
                <div className="bg-[#FFF9F2] p-3 rounded-xl border border-[#EDE3D5]">
                  <span className="text-lg font-black text-[#1258FA] block">Soporte Continuo</span>
                  <span className="text-xs text-[#7380A0]">Tus integraciones siempre activas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
