import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Gift, Zap, Shield, PhoneCall, Layers, Globe, Video } from 'lucide-react';

interface PricingPackagesProps {
  onOpenBooking: () => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenBooking }) => {
  // Toggle entre Internos (Agentes de la organización) y Externos
  const [isInternal, setIsInternal] = useState(true);

  return (
    <section id="paquetes" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Inversión Transparente y Sin Letras Pequeñas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E32] tracking-tight leading-tight">
            Elige el plan ideal para{' '}
            <span className="text-gradient-blue">tu infraestructura</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Desde la instalación completa de tu CRM y automatizaciones, hasta la gestión experta de tus campañas publicitarias en Meta Ads.
          </p>

          {/* Toggle Internos / Externos */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white border border-[#EDE3D5] shadow-sm">
            <button
              type="button"
              onClick={() => setIsInternal(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isInternal
                  ? 'bg-[#1258FA] text-white shadow-md'
                  : 'text-[#4B5578] hover:text-[#060E32]'
              }`}
            >
              Agentes Internos (Organización)
            </button>
            <button
              type="button"
              onClick={() => setIsInternal(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isInternal
                  ? 'bg-[#1258FA] text-white shadow-md'
                  : 'text-[#4B5578] hover:text-[#060E32]'
              }`}
            >
              Agentes Externos
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Ecosistema CRM y Automatización (GoHighLevel) */}
          <div className="clean-card p-7 sm:p-9 flex flex-col justify-between border-2 border-[#EDE3D5] hover:border-[#1258FA]/40 relative bg-white">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold uppercase tracking-wider">
                  Paquete 1 · Base Operativa
                </span>
                <span className="text-xs text-[#556080] font-medium">GoHighLevel Oficial</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#060E32] mb-2">
                Ecosistema CRM y Automatización
              </h3>
              <p className="text-sm text-[#556080] leading-relaxed mb-6">
                Tu plataforma comercial completa lista para operar. Subcuenta oficial, embudos de conversión, automatización de mensajes y soporte continuo.
              </p>

              {/* Price Block */}
              <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-[#EDE3D5] mb-7">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#060E32]">
                    {isInternal ? '$769' : '$1,169'}
                  </span>
                  <span className="text-sm font-bold text-[#556080]">USD / mes</span>
                </div>
                <div className="mt-2 text-xs font-medium text-[#4B5578] flex items-center gap-2">
                  <span>Setup inicial:</span>
                  {isInternal ? (
                    <span className="font-bold text-[#1258FA]">
                      <del className="text-[#8C96AB] mr-1">$377 USD</del> ¡GRATIS en promoción!
                    </span>
                  ) : (
                    <span className="font-bold text-[#060E32]">$867 USD</span>
                  )}
                </div>
              </div>

              {/* What's Included List */}
              <div className="space-y-3.5 mb-8">
                <h4 className="text-xs uppercase tracking-wider text-[#060E32] font-bold">
                  Todo lo que incluye:
                </h4>

                <div className="flex items-start gap-3 text-sm text-[#060E32]">
                  <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong className="text-[#1258FA]">$200 USD para publicidad</strong> incluidos en tu cuota mensual para generar prospectos continuos.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#060E32]">
                  <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong>Subcuenta GoHighLevel a tu nombre</strong> (acceso total de propietario, sin intermediarios).
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#060E32]">
                  <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong>Clonación de Snapshot exclusivo:</strong> embudos de venta para seguro de vida, calendarios sincronizados y flujos de nutrición.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#060E32]">
                  <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong>Integración Twilio / LC Phone:</strong> llamadas y SMS con números telefónicos exclusivos a tu nombre.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#060E32]">
                  <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong>Soporte continuo anti-fallas:</strong> mantenimiento técnico, resolución de dudas y optimizaciones periódicas.
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-secondary w-full py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Comenzar con Paquete 1</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Card 2: Acceso a Publicidad Propia (Upsell Premium) */}
          <div className="dark-card p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden border-2 border-[#16D1F5]/50 shadow-2xl">
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1258FA]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1258FA] to-[#16D1F5] text-white text-xs font-bold uppercase tracking-wider">
                  Paquete 2 · Escala Acelerada
                </span>
                <span className="text-xs text-[#16D1F5] font-semibold flex items-center gap-1">
                  <Zap size={13} />
                  <span>Upsell Premium</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Acceso a Publicidad Propia
              </h3>
              <p className="text-sm text-[#FFF9F2]/75 leading-relaxed mb-6">
                Delegación integral de tus campañas en Meta Ads para dominar tu mercado local con anuncios de alta retención y prospectos exclusivos.
              </p>

              {/* Price Block */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-7">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    +$800
                  </span>
                  <span className="text-sm font-bold text-[#FFF9F2]/70">USD / mes</span>
                </div>
                <div className="mt-2 text-xs font-medium text-[#FFF9F2]/80 flex items-center gap-2">
                  <span>Setup único de campaña:</span>
                  <span className="font-bold text-[#16D1F5]">$800 USD</span>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-3.5 mb-7">
                <h4 className="text-xs uppercase tracking-wider text-[#16D1F5] font-bold">
                  Gestión publicitaria integral:
                </h4>

                <div className="flex items-start gap-3 text-sm text-white">
                  <div className="w-5 h-5 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong>Gestión completa en Meta Ads:</strong> estrategia para IUL y seguros de vida, segmentación local/estatal y copy persuasivo.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-white">
                  <div className="w-5 h-5 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong>Píxel y Conversions API:</strong> seguimiento milimétrico de conversiones y eventos de compra en tiempo real.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-white">
                  <div className="w-5 h-5 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <strong>Revisión y optimización semanal:</strong> apagado de creativos fatigados y escalado de anuncios ganadores.
                  </div>
                </div>
              </div>

              {/* Exclusive Free Bonuses Section (100% OFF) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-[#16D1F5]/30 mb-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16D1F5]">
                  <Gift size={16} />
                  <span>Regalos Exclusivos (Bonos al 100%):</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#FFF9F2]">
                  <div className="w-5 h-5 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 mt-0.5">
                    <Globe size={13} />
                  </div>
                  <div>
                    <strong className="text-white">Identidad Web y Lead Magnet:</strong> Entrevista a fondo para plasmar tu historia, diseño de la portada de tu "Libro" y Landing Page con hosting y dominio incluido.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#FFF9F2]">
                  <div className="w-5 h-5 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 mt-0.5">
                    <Video size={13} />
                  </div>
                  <div>
                    <strong className="text-white">Producción de Contenido:</strong> Guiones persuasivos con ganchos probados, edición dinámica de video para retención y diseño gráfico de anuncios listos para publicar.
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-2 shadow-2xl relative z-10 cursor-pointer"
            >
              <span>Activar Ecosistema + Publicidad</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Trust Guarantee */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#556080] flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <Shield size={16} className="text-[#1258FA]" />
            <span>Sin contratos forzosos · Cancela cuando quieras</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Layers size={16} className="text-[#1258FA]" />
            <span>Toda la infraestructura queda a tu nombre</span>
          </span>
          <span className="flex items-center gap-1.5">
            <PhoneCall size={16} className="text-[#1258FA]" />
            <span>Onboarding 1:1 personalizado con nuestro equipo técnico</span>
          </span>
        </div>
      </div>
    </section>
  );
};
