import React, { useState } from 'react';
import { Calculator, Users, TrendingUp, DollarSign, ArrowRight, Sparkles, CheckCircle2, Megaphone, Coins } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';
const COST_PER_RESULT = 2.05; // Costo por resultado fijo establecido en $2.05 USD

export const RoiCalculator: React.FC = () => {
  // 1. Presupuesto mensual en Meta Ads ($ USD)
  const [presupuestoMeta, setPresupuestoMeta] = useState<number>(500);

  // 2. Tasa de Contratación / Firma de Agentes (5% a 60%)
  const [tasaContratacion, setTasaContratacion] = useState<number>(25);

  // 3. Producción Anual Promedio por Agente ($ USD)
  const [produccionAgente, setProduccionAgente] = useState<number>(35000);

  // 4. Margen de Override de Agencia (%)
  const [margenOverride, setMargenOverride] = useState<number>(15);

  // Lógica Matemática en Tiempo Real:
  // Entrevistas de Reclutamiento por Mes = Presupuesto / $2.05
  const entrevistasMes = Math.max(1, Math.round(presupuestoMeta / COST_PER_RESULT));

  // Nuevos Agentes al Año = (Entrevistas por Mes * 12) * Tasa de Contratación
  const nuevosAgentesAnio = Math.round((entrevistasMes * 12) * (tasaContratacion / 100));

  // Volumen Anual del Equipo = Nuevos Agentes al Año * Producción Anual Promedio por Agente
  const volumenAnualEquipo = nuevosAgentesAnio * produccionAgente;

  // Ingresos Pasivos Anuales por Overrides = Volumen Anual del Equipo * Margen de Override de Agencia
  const ingresosOverridesAnuales = Math.round(volumenAnualEquipo * (margenOverride / 100));

  // Ingresos Pasivos Mensuales = Ingresos Pasivos Anuales / 12
  const ingresosOverridesMensuales = Math.round(ingresosOverridesAnuales / 12);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#060E32] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1258FA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/15 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>Simulador Financiero de Agencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Calculadora de <span className="text-gradient-blue">Escalado y Reclutamiento</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#FFF9F2]/75 leading-relaxed">
            Ingresa tu presupuesto en Meta Ads y proyecta el volumen de candidatos, nuevos contratos e ingresos por overrides generados en tiempo real.
          </p>
        </div>

        {/* Main Box */}
        <div className="rounded-3xl bg-[#091542] border border-white/15 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Sliders and Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Input 1: Presupuesto mensual en Meta Ads ($ USD) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#060E32] border border-white/15">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-2">
                    <Megaphone size={17} className="text-[#16D1F5]" />
                    <span>Presupuesto mensual a invertir en Meta Ads ($ USD)</span>
                  </label>
                  <span className="text-lg font-black text-[#16D1F5]">
                    ${presupuestoMeta} USD
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={presupuestoMeta}
                    onChange={(e) => setPresupuestoMeta(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#16D1F5]"
                  />
                  <div className="relative flex items-center shrink-0">
                    <DollarSign size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#16D1F5] pointer-events-none z-10" />
                    <input
                      type="number"
                      min="50"
                      value={presupuestoMeta}
                      onChange={(e) => setPresupuestoMeta(Math.max(10, Number(e.target.value)))}
                      className="w-28 bg-[#091542] border border-white/20 rounded-xl pr-3 py-1.5 text-xs sm:text-sm font-black text-white text-right focus:outline-none focus:border-[#16D1F5]"
                      style={{ paddingLeft: '32px' }}
                    />
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#FFF9F2]/60 pt-2 border-t border-white/10">
                  <span>Costo fijo por resultado: <strong className="text-white">$2.05 USD</strong></span>
                  <span className="text-[#16D1F5] font-bold">~{entrevistasMes} Entrevistas / mes</span>
                </div>
              </div>

              {/* Slider 2: Tasa de Contratación / Firma de Agentes */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1.5">
                    <TrendingUp size={16} className="text-[#1258FA]" />
                    <span>Tasa de Contratación / Firma de Agentes</span>
                  </label>
                  <span className="text-base sm:text-lg font-black text-[#16D1F5]">{tasaContratacion}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={tasaContratacion}
                  onChange={(e) => setTasaContratacion(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#1258FA]"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-[#FFF9F2]/60 mt-1.5 font-semibold">
                  <span className="cursor-pointer hover:text-white" onClick={() => setTasaContratacion(5)}>
                    5% (Conservador)
                  </span>
                  <span className="cursor-pointer hover:text-white" onClick={() => setTasaContratacion(25)}>
                    25% (Estándar)
                  </span>
                  <span className="cursor-pointer hover:text-white" onClick={() => setTasaContratacion(60)}>
                    60% (Líder Pro)
                  </span>
                </div>
              </div>

              {/* Input 3 & 4: Producción Anual Promedio y Margen de Overrides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-[#060E32] border border-white/10">
                  <label className="block text-xs font-bold text-white mb-1.5">
                    Producción Anual Promedio por Agente ($ USD)
                  </label>
                  <div className="relative">
                    <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16D1F5] pointer-events-none z-10" />
                    <input
                      type="number"
                      value={produccionAgente}
                      onChange={(e) => setProduccionAgente(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-[#091542] border border-white/20 rounded-xl py-3 pr-3.5 text-sm font-bold text-white focus:outline-none focus:border-[#16D1F5]"
                      style={{ paddingLeft: '48px' }}
                    />
                  </div>
                  <span className="text-[10px] text-[#FFF9F2]/50 mt-1 block">
                    Producción anualizada promedio
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#060E32] border border-white/10">
                  <label className="block text-xs font-bold text-white mb-1.5">
                    Margen de Override de Agencia (%)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-extrabold text-[#16D1F5] pointer-events-none z-10">%</span>
                    <input
                      type="number"
                      value={margenOverride}
                      onChange={(e) => setMargenOverride(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-[#091542] border border-white/20 rounded-xl py-3 pr-3.5 text-sm font-bold text-white focus:outline-none focus:border-[#16D1F5]"
                      style={{ paddingLeft: '48px' }}
                    />
                  </div>
                  <span className="text-[10px] text-[#FFF9F2]/50 mt-1 block">
                    Porcentaje de comisión diferencial
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Projected Results Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0A1E66] via-[#081750] to-[#060E32] border-2 border-[#16D1F5]/40 rounded-2xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#16D1F5]">
                    Proyección de Expansión
                  </span>
                  <span className="text-[10px] bg-[#16D1F5]/20 text-[#16D1F5] px-2 py-0.5 rounded-full font-bold">
                    Costo $2.05/lead
                  </span>
                </div>

                <div className="mt-4 space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-[#FFF9F2]/80">
                    <span>Entrevistas por Mes:</span>
                    <strong className="text-white text-sm">~{entrevistasMes} entrevistas</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#FFF9F2]/80">
                    <span>Nuevos Agentes al Año:</span>
                    <strong className="text-white text-sm font-extrabold text-[#16D1F5]">
                      +{nuevosAgentesAnio} Agentes
                    </strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#FFF9F2]/80 pb-2 border-b border-white/10">
                    <span>Volumen Anual del Equipo:</span>
                    <strong className="text-white text-sm">
                      {formatCurrency(volumenAnualEquipo)}
                    </strong>
                  </div>
                </div>

                {/* Highlight Card: Overrides Pasivos */}
                <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[#1258FA]/20 via-[#16D1F5]/20 to-[#1258FA]/20 border border-[#16D1F5]/50 text-center shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#16D1F5] block">
                    Ingresos Pasivos Anuales por Overrides
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#16D1F5] mt-1 tracking-tight">
                    {formatCurrency(ingresosOverridesAnuales)}
                  </div>
                  <span className="text-[11px] text-white/90 font-bold mt-1 block">
                    Equivalente a <span className="text-[#16D1F5] font-extrabold">{formatCurrency(ingresosOverridesMensuales)} USD</span> / mes
                  </span>
                </div>
              </div>

              {/* Action Button & Highlighted Revenue Banner */}
              <div className="mt-6 space-y-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full py-4 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform"
                >
                  <span>Quiero atención prioritaria</span>
                  <ArrowRight size={16} />
                </a>

                {/* Resalte Visual de Ingresos debajo del Botón */}
                <div className="p-3 rounded-xl bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-black text-[#16D1F5]">
                    <Coins size={14} />
                    <span>+{formatCurrency(ingresosOverridesMensuales)} USD al mes</span>
                  </div>
                  <p className="text-[10px] text-[#FFF9F2]/65 mt-0.5">
                    Proyección recurrente estimada con {entrevistasMes} candidatos mensuales en Meta Ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
