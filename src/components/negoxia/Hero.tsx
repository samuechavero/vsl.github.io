import React, { useState } from 'react';
import { ArrowRight, Play, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Soft Ambient Radial Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#1258FA]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1258FA]/8 border border-[#1258FA]/20 text-[#1258FA] text-xs sm:text-sm font-semibold tracking-tight mb-6">
          <span className="w-2 h-2 rounded-full bg-[#1258FA] pulse-glow" />
          <span>Para dueños de negocio, coaches y profesionales</span>
        </div>

        {/* H1 Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#060E32] tracking-tight leading-[1.12] mb-6">
          Tu clon de IA crea tu contenido y tus anuncios.{' '}
          <span className="text-gradient-blue block mt-1">Sin grabarte nunca más.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#4B5578] font-normal max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Una grabación corta, una sola vez. Clonamos tu imagen y tu voz y te instalamos el motor,
          movido por IA, que crea y publica tu contenido orgánico y tus anuncios en piloto automático.
          Es tuyo. Tú solo apruebas.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenBooking}
            className="btn-primary w-full sm:w-auto px-8 py-4 text-base font-semibold flex items-center justify-center gap-2 group shadow-xl"
          >
            <span>Agendar mi diagnóstico gratis</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Micro Guarantee Copy */}
        <p className="text-xs sm:text-sm text-[#7380A0] flex items-center justify-center gap-2">
          <CheckCircle2 size={15} className="text-[#1258FA]" />
          <span>30 minutos sin costo · Vemos cómo se vería tu clon antes de decidir</span>
        </p>

        {/* Video Card Preview (Clonelab Style) */}
        <div className="mt-12 sm:mt-14 max-w-3xl mx-auto">
          <div className="clean-card p-3 sm:p-4 bg-white/90 backdrop-blur shadow-2xl relative group">
            {/* Top Bar Badge */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#060E32] text-[#FFF9F2] rounded-xl text-xs sm:text-sm font-medium mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16D1F5] animate-pulse" />
                <span className="font-semibold text-white tracking-wide">CLON DE IA</span>
                <span className="hidden sm:inline text-[#FFF9F2]/70">· Este video no lo grabó una persona: lo grabó su clon.</span>
              </div>
              <span className="text-xs text-[#16D1F5] font-semibold">Demo 4 min</span>
            </div>

            {/* Simulated High-End Video Player */}
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative aspect-video rounded-xl overflow-hidden bg-[#060E32] flex items-center justify-center cursor-pointer group/video border border-[#EDE3D5]"
            >
              <img
                src="./brand/negoxia-square.jpg"
                alt="Demo Clon de IA"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  isPlaying ? 'scale-105 opacity-40 blur-xs' : 'opacity-85 group-hover/video:scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060E32]/90 via-[#060E32]/40 to-transparent" />

              {/* Play / State Overlay */}
              {!isPlaying ? (
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#1258FA] to-[#16D1F5] p-0.5 shadow-2xl transition-transform group-hover/video:scale-110 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#060E32] flex items-center justify-center text-white">
                      <Play size={28} className="translate-x-0.5 fill-white text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm sm:text-base">Toca para reproducir demo</p>
                    <p className="text-[#16D1F5] text-xs">Observa la sincronización labial y el tono de voz natural</p>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 text-center p-6 bg-[#060E32]/85 backdrop-blur-md rounded-2xl border border-white/10 max-w-md mx-4">
                  <Sparkles className="w-8 h-8 text-[#16D1F5] mx-auto mb-2 animate-bounce" />
                  <h3 className="text-white font-bold text-lg mb-1">Clon de IA Generando Contenido</h3>
                  <p className="text-xs text-[#FFF9F2]/80 mb-4">
                    Motor inteligente procesando guion, voz clonada y renderizado con gestos naturales.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs transition-colors"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span>{isMuted ? 'Activar sonido' : 'Silenciar'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Video Kicker Details */}
            <div className="mt-3 px-2 py-2 flex flex-col sm:flex-row items-center justify-between text-xs text-[#556080] gap-2 border-t border-[#EDE3D5]/50">
              <span className="font-medium">
                $2,000 · un solo pago · el motor queda instalado, funcionando y a tu nombre.
              </span>
              <span className="text-[#1258FA] font-semibold">El diagnóstico de 30 minutos no cuesta nada.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
