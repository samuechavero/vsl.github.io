import React from 'react';
import { Sparkles, CheckCircle2, Clock, Video } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-4xl mx-auto">
        <div className="clean-card p-7 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Profile / Avatar */}
            <div className="md:col-span-5 text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl mx-auto relative bg-[#060E32]">
                  <img
                    src="./brand/negoxia-square.jpg"
                    alt="Fundador de Negoxia Autopilot"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#060E32]/90 backdrop-blur text-white text-[11px] font-semibold py-1 px-2 rounded-lg flex items-center justify-center gap-1.5 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#16D1F5]" />
                    <span>Avatar de IA en producción</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
                <Sparkles size={13} />
                <span>Quién está detrás</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#060E32] tracking-tight mb-3">
                También usamos nuestro propio clon.
              </h2>

              <p className="text-base text-[#1258FA] font-semibold italic mb-4">
                «No te vendemos algo que no hayamos probado y validado nosotros mismos a diario.»
              </p>

              <p className="text-xs sm:text-sm text-[#4B5578] leading-relaxed mb-6">
                Probamos cada actualización de los modelos de IA, optimizamos los ganchos y testeamos qué creativos generan el menor costo por lead antes de instalárselos a nuestros clientes.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#EDE3D5]">
                <div className="bg-[#FFF9F2] p-3 rounded-xl border border-[#EDE3D5]">
                  <span className="text-lg font-black text-[#060E32] block">8 reels en 8 días</span>
                  <span className="text-xs text-[#7380A0]">Hechos 100% por su clon de IA</span>
                </div>
                <div className="bg-[#FFF9F2] p-3 rounded-xl border border-[#EDE3D5]">
                  <span className="text-lg font-black text-[#1258FA] block">&lt; 18 minutos</span>
                  <span className="text-xs text-[#7380A0]">Del guion al video renderizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
