import React, { useState } from 'react';
import {
  ArrowRight,
  Database,
  Calendar,
  PhoneCall,
  Megaphone,
  CheckCircle2,
  Workflow,
  BarChart3,
  Sliders,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'automations' | 'ads'>('pipeline');

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Soft Ambient Radial Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[460px] bg-gradient-to-b from-[#1258FA]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1258FA]/8 border border-[#1258FA]/20 text-[#1258FA] text-xs sm:text-sm font-semibold tracking-tight mb-6">
          <span className="w-2 h-2 rounded-full bg-[#1258FA] pulse-glow" />
          <span>Infraestructura comercial para negocios de servicios y conocimiento</span>
        </div>

        {/* H1 Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#060E32] tracking-tight leading-[1.14] mb-6">
          Ecosistema CRM y Automatización{' '}
          <span className="text-gradient-blue block mt-1">100% "Plug & Play"</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#4B5578] font-normal max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Olvídate de los problemas técnicos. Construimos tu máquina de ventas con embudos, calendarios y publicidad gestionada en Meta Ads.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenBooking}
            className="btn-primary w-full sm:w-auto px-8 py-4 text-base font-semibold flex items-center justify-center gap-2 group shadow-xl cursor-pointer"
          >
            <span>Obtener mi Ecosistema</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Micro Guarantee Copy */}
        <p className="text-xs sm:text-sm text-[#7380A0] flex items-center justify-center gap-2">
          <CheckCircle2 size={15} className="text-[#1258FA]" />
          <span>Subcuenta GoHighLevel + Twilio + Meta Ads instalados y testeados para ti</span>
        </p>

        {/* Interactive Dashboard / Pipeline Preview */}
        <div className="mt-12 sm:mt-14 max-w-3xl mx-auto">
          <div className="clean-card p-3 sm:p-5 bg-white/95 backdrop-blur shadow-2xl relative text-left">
            {/* Top Bar Badge */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#060E32] text-[#FFF9F2] rounded-xl text-xs sm:text-sm font-medium mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16D1F5] animate-pulse" />
                <span className="font-bold text-white tracking-wide">MÁQUINA DE VENTAS ACTIVA</span>
                <span className="hidden sm:inline text-[#FFF9F2]/70">· GoHighLevel + Twilio + Meta Ads sincronizados</span>
              </div>
              <span className="text-xs text-[#16D1F5] font-semibold bg-white/10 px-2.5 py-1 rounded-full">
                100% Plug & Play
              </span>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex items-center gap-2 mb-4 border-b border-[#EDE3D5] pb-2 text-xs">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'pipeline'
                    ? 'bg-[#1258FA] text-white'
                    : 'text-[#556080] hover:bg-[#F5EEE4]'
                }`}
              >
                <Workflow size={13} />
                <span>Pipeline de Ventas</span>
              </button>
              <button
                onClick={() => setActiveTab('automations')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'automations'
                    ? 'bg-[#1258FA] text-white'
                    : 'text-[#556080] hover:bg-[#F5EEE4]'
                }`}
              >
                <Zap size={13} />
                <span>Automatizaciones Twilio</span>
              </button>
              <button
                onClick={() => setActiveTab('ads')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'ads'
                    ? 'bg-[#1258FA] text-white'
                    : 'text-[#556080] hover:bg-[#F5EEE4]'
                }`}
              >
                <Megaphone size={13} />
                <span>Meta Ads & Píxel</span>
              </button>
            </div>

            {/* Tab 1: Pipeline */}
            {activeTab === 'pipeline' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 bg-[#FFF9F2] rounded-xl border border-[#EDE3D5]">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#7380A0] uppercase mb-1">
                      <span>01. Prospecto</span>
                      <Megaphone size={13} className="text-[#1258FA]" />
                    </div>
                    <p className="text-xs font-bold text-[#060E32]">Lead desde Anuncio</p>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                      Píxel / CAPI verificado
                    </span>
                  </div>

                  <div className="p-3 bg-[#FFF9F2] rounded-xl border border-[#EDE3D5]">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#7380A0] uppercase mb-1">
                      <span>02. Filtro 1:1</span>
                      <Database size={13} className="text-[#1258FA]" />
                    </div>
                    <p className="text-xs font-bold text-[#060E32]">Embudo Calificador</p>
                    <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                      Formulario activo
                    </span>
                  </div>

                  <div className="p-3 bg-[#FFF9F2] rounded-xl border border-[#1258FA]/40 bg-blue-50/30">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#1258FA] uppercase mb-1">
                      <span>03. Agendada</span>
                      <Calendar size={13} className="text-[#1258FA]" />
                    </div>
                    <p className="text-xs font-bold text-[#060E32]">Calendario Sincronizado</p>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                      Confirmación Twilio
                    </span>
                  </div>

                  <div className="p-3 bg-[#060E32] text-white rounded-xl border border-[#060E32]">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#16D1F5] uppercase mb-1">
                      <span>04. Cierre</span>
                      <BarChart3 size={13} className="text-[#16D1F5]" />
                    </div>
                    <p className="text-xs font-bold text-white">Venta Concretada</p>
                    <span className="text-[10px] text-[#16D1F5] font-semibold bg-white/10 px-1.5 py-0.5 rounded mt-1 inline-block">
                      Registro de ingresos
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#EDE3D5] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-[#4B5578]">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span className="font-semibold text-[#060E32]">Subcuenta GoHighLevel:</span>
                    <span>100% configurada y lista para operar bajo tu marca.</span>
                  </div>
                  <span className="text-xs font-bold text-[#1258FA]">Cero código</span>
                </div>
              </div>
            )}

            {/* Tab 2: Automations */}
            {activeTab === 'automations' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-[#FFF9F2] rounded-xl border border-[#EDE3D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#060E32] mb-1">
                      <PhoneCall size={14} className="text-[#1258FA]" />
                      <span>Twilio / LC Phone con número exclusivo</span>
                    </div>
                    <p className="text-xs text-[#556080]">
                      Disparo automático de SMS de confirmación y recordatorio antes de cada reunión. Reducción directa de ausencias (no-shows).
                    </p>
                  </div>
                  <div className="p-3.5 bg-[#FFF9F2] rounded-xl border border-[#EDE3D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#060E32] mb-1">
                      <Sliders size={14} className="text-[#1258FA]" />
                      <span>Workflows y Pipelines Testeados</span>
                    </div>
                    <p className="text-xs text-[#556080]">
                      Automatizaciones de seguimiento cuando un lead no agenda, rescate de citas y actualización automática de etapas de venta.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Ads */}
            {activeTab === 'ads' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-[#FFF9F2] rounded-xl border border-[#EDE3D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#060E32] mb-1">
                      <Megaphone size={14} className="text-[#1258FA]" />
                      <span>Estrategia y Segmentación en Meta Ads</span>
                    </div>
                    <p className="text-xs text-[#556080]">
                      Estructura de campañas probada para captar prospectos calificados hacia tu embudo sin desperdiciar presupuesto publicitario.
                    </p>
                  </div>
                  <div className="p-3.5 bg-[#FFF9F2] rounded-xl border border-[#EDE3D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#060E32] mb-1">
                      <BarChart3 size={14} className="text-[#1258FA]" />
                      <span>Píxel & Conversions API (CAPI)</span>
                    </div>
                    <p className="text-xs text-[#556080]">
                      Instalación técnica a prueba de fallos con reportes semanales de métricas (CPA, CTR, citas agendadas y costo por cita).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Video Kicker Details */}
            <div className="mt-4 pt-3 px-1 flex flex-col sm:flex-row items-center justify-between text-xs text-[#556080] gap-2 border-t border-[#EDE3D5]">
              <span className="font-medium">
                Embudos, calendarios, CRM y Meta Ads conectados en un solo lugar.
              </span>
              <span className="text-[#1258FA] font-bold">Sin meses de configuración ni desconexiones técnicas.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
