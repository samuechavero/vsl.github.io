import React, { useRef, useState } from 'react';
import { Volume2, Play, CheckCircle2, ArrowRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

interface HeroProps {
  unlocked: boolean;
}

export const Hero: React.FC<HeroProps> = ({ unlocked }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteraction = () => {
    setHasInteracted(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Soft Ambient Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-gradient-to-b from-[#1258FA]/12 via-[#16D1F5]/8 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1258FA]/8 border border-[#1258FA]/20 text-[#1258FA] text-xs sm:text-sm font-semibold tracking-tight mb-6">
          <span className="w-2 h-2 rounded-full bg-[#1258FA] pulse-glow" />
          <span>Ecosistema de Automatización · Ventas de IUL & Reclutamiento de Agentes</span>
        </div>

        {/* H1 Main Headline - Sin promesas numéricas ni frecuencias específicas */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#060E32] tracking-tight leading-[1.14] mb-6 max-w-4xl mx-auto">
          Cómo los Agentes de Seguros de Vida del{' '}
          <span className="text-gradient-blue">1%</span> consiguen{' '}
          <span className="text-gradient-blue">citas precalificadas</span> de manera predecible sin comprar leads compartidos ni rogar por referidos.
        </h1>

        {/* Subtitle - Enfocado en Ventas + Reclutamiento */}
        <h2 className="text-base sm:text-xl text-[#4B5578] font-normal max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Construimos tu ecosistema de adquisición y nuestro equipo de agendadores llena tu calendario de manera predecible con prospectos precalificados para venta de pólizas (IUL, Gastos Finales) y para la expansión de tu equipo de agentes.
        </h2>

        {/* Video de Ventas (VSL) Inmediatamente Debajo del Texto */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="clean-card p-2 sm:p-3 bg-white/95 backdrop-blur shadow-2xl relative group border-2 border-[#1258FA]/20">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#060E32]" style={{ paddingTop: '56.25%' }}>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="./samuvsl.mp4?v=2"
                controls={hasInteracted}
                playsInline
                muted
              />

              {/* Click to Play / Unmute Interactive Overlay */}
              {!hasInteracted && (
                <div
                  onClick={handleInteraction}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-[#060E32]/50 z-10 cursor-pointer backdrop-blur-xs transition-opacity hover:bg-[#060E32]/40"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#1258FA] to-[#16D1F5] p-1 shadow-2xl mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-[#060E32] flex items-center justify-center text-white">
                      <Play size={36} className="translate-x-1 fill-white text-white" />
                    </div>
                  </div>

                  <div className="bg-[#060E32]/90 border border-white/20 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-2.5 text-white text-xs sm:text-sm font-semibold shadow-xl">
                    <Volume2 size={18} className="text-[#16D1F5] animate-pulse" />
                    <span>Toca para ver el video con sonido</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Details with CTA */}
            <div className="mt-4 px-3 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-[#556080] gap-3 border-t border-[#EDE3D5]/60">
              <span className="font-semibold text-[#060E32] flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#1258FA]" />
                <span>Ecosistema de adquisición dual: Ventas + Reclutamiento</span>
              </span>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Quiero atención prioritaria</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
