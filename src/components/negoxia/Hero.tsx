import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, CalendarCheck, MessageSquare, Flame } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToCalculator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToCalculator }) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Soft Ambient Radial Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-gradient-to-b from-[#1258FA]/12 via-[#16D1F5]/8 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1258FA]/8 border border-[#1258FA]/20 text-[#1258FA] text-xs sm:text-sm font-semibold tracking-tight mb-6">
          <span className="w-2 h-2 rounded-full bg-[#1258FA] pulse-glow" />
          <span>Exclusivo para Agentes de Seguros de Vida · GoHighLevel Oficial</span>
        </div>

        {/* H1 Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#060E32] tracking-tight leading-[1.12] mb-6">
          Tu Ecosistema CRM y Automatización{' '}
          <span className="text-gradient-blue block mt-1">100% "Plug & Play"</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#4B5578] font-normal max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Olvídate de los problemas técnicos y la prospección en frío. Construimos tu máquina de ventas con embudos, calendarios y publicidad gestionada en Meta Ads.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenBooking}
            className="btn-primary w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold flex items-center justify-center gap-2 group shadow-xl cursor-pointer"
          >
            <span>Construir mi Máquina de Ventas</span>
            <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
          </button>

          {onScrollToCalculator && (
            <button
              onClick={onScrollToCalculator}
              className="btn-secondary w-full sm:w-auto px-6 py-4 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Calcular mi ROI</span>
            </button>
          )}
        </div>

        {/* Micro Guarantee Copy */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#556080]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-[#1258FA]" />
            <span>Subcuenta GoHighLevel a tu nombre</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-[#1258FA]" />
            <span>Integración Twilio & LC Phone propia</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={16} className="text-[#1258FA]" />
            <span>Sin clones de IA · Infraestructura real</span>
          </span>
        </div>

        {/* Modern Ecosystem Interactive Preview Card (Clonelab SaaS style) */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="clean-card p-4 sm:p-6 bg-white/95 backdrop-blur shadow-2xl relative group">
            {/* Top Bar Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-3 bg-[#060E32] text-[#FFF9F2] rounded-xl text-xs sm:text-sm font-medium mb-4 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16D1F5] animate-pulse" />
                <span className="font-bold text-white tracking-wide">ECOSISTEMA ACTIVO</span>
                <span className="text-[#FFF9F2]/70">· Máquina de Adquisición y CRM en Vivo</span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#1258FA]/40 text-[#16D1F5] text-xs font-semibold">
                GoHighLevel Snapshot V3
              </span>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* Step 1: Meta Ads & Funnel */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1258FA] bg-[#1258FA]/10 px-2.5 py-1 rounded-full">
                      Paso 1 · Tráfico
                    </span>
                    <Flame size={16} className="text-[#1258FA]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#060E32] mb-1">Campaña Meta Ads Gestionada</h4>
                  <p className="text-xs text-[#556080] leading-relaxed">
                    Anuncios dirigidos a personas buscando seguro de vida o plan de retiro IUL en tu estado o código postal.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EDE3D5] flex items-center justify-between text-xs font-semibold text-[#060E32]">
                  <span>Presupuesto incluido:</span>
                  <span className="text-[#1258FA] font-bold">$200 USD/mes</span>
                </div>
              </div>

              {/* Step 2: Automation & Qualification */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1258FA] bg-[#1258FA]/10 px-2.5 py-1 rounded-full">
                      Paso 2 · Filtro
                    </span>
                    <MessageSquare size={16} className="text-[#1258FA]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#060E32] mb-1">Nutrición Twilio / SMS</h4>
                  <p className="text-xs text-[#556080] leading-relaxed">
                    Secuencia inmediata por WhatsApp y SMS desde tu número exclusivo. Filtra curiosos y confirma interés real.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EDE3D5] flex items-center justify-between text-xs font-semibold text-[#060E32]">
                  <span>Tasa de respuesta:</span>
                  <span className="text-[#1258FA] font-bold">Inmediata 24/7</span>
                </div>
              </div>

              {/* Step 3: Qualified Calendar */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-[#060E32] to-[#0A1A5C] text-white flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#16D1F5] bg-[#16D1F5]/20 px-2.5 py-1 rounded-full">
                      Paso 3 · Resultado
                    </span>
                    <CalendarCheck size={16} className="text-[#16D1F5]" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">10 Citas Semanales</h4>
                  <p className="text-xs text-blue-100/80 leading-relaxed">
                    Prospectos precalificados agendados en tu Google Calendar listos para su llamada de asesoría de póliza.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span>Tu único trabajo:</span>
                  <span className="text-[#16D1F5] font-bold">Presentar y Cerrar</span>
                </div>
              </div>
            </div>

            {/* Bottom Kicker */}
            <div className="mt-4 px-3 py-2.5 bg-[#FFF9F2] rounded-xl flex flex-col sm:flex-row items-center justify-between text-xs text-[#556080] gap-2 border border-[#EDE3D5]">
              <span className="font-semibold text-[#060E32]">
                ⚡ Sin configuraciones imposibles · Snapshot clonado en tu cuenta en menos de 7 días.
              </span>
              <button
                onClick={onOpenBooking}
                className="text-[#1258FA] font-bold hover:underline cursor-pointer"
              >
                Ver cómo encaja con tu agencia →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
