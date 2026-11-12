import React, { useRef, useState } from 'react';
import { Volume2, Play, Sparkles, Gift } from 'lucide-react';

interface HeroProps {
  onOpenWheel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWheel }) => {
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
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Ambient Tech Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-[#1258FA]/12 via-[#16D1F5]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1258FA]/8 border border-[#1258FA]/25 text-[#1258FA] text-xs sm:text-sm font-bold tracking-tight shadow-sm">
            <Sparkles size={14} className="text-[#16D1F5] animate-pulse" />
            <span>Automatización Inteligente con IA para Reclutamiento · Negoxia LLC</span>
          </div>
        </div>

        {/* H1 Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#060E32] tracking-tight leading-[1.14] text-center max-w-4xl mx-auto mb-6">
          Automatización Inteligente con IA para{' '}
          <span className="text-gradient-blue">Reclutar Nuevos Agentes</span> y Escalar tu Agencia 24/7.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#4B5578] text-center max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12">
          Integramos tu CRM, agentes conversacionales con IA 24/7 y embudos de alta conversión para captar candidatos a agentes, calificarlos al instante en WhatsApp y llenar tu calendario de entrevistas sin carga operativa manual.
        </p>

        {/* Video VSL Centered */}
        <div className="max-w-4xl mx-auto flex flex-col items-center mb-8">
          <div className="w-full clean-card p-2.5 sm:p-3.5 bg-white/95 backdrop-blur-md shadow-2xl relative border-2 border-[#1258FA]/25 rounded-3xl">
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#1258FA] to-[#16D1F5] p-1 shadow-2xl mb-3 group hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-[#060E32] flex items-center justify-center text-white">
                      <Play size={28} className="translate-x-0.5 fill-white text-white" />
                    </div>
                  </div>

                  <div className="bg-[#060E32]/90 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-2 text-white text-xs sm:text-sm font-semibold shadow-xl">
                    <Volume2 size={16} className="text-[#16D1F5] animate-pulse" />
                    <span>Toca para ver el video con sonido</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video CTA button for wheel pop-up */}
          <div className="w-full max-w-xl mt-5 text-center">
            <button
              onClick={onOpenWheel}
              type="button"
              className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#1258FA] via-[#16D1F5] to-[#1258FA] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-[#1258FA]/25 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer animate-pulse"
            >
              <Gift size={18} className="text-white group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide">
                Aprieta aquí abajo para que te regalemos a ver si tienes suerte
              </span>
              <span className="text-base">🎰</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
