import React, { useState } from 'react';
import { Calculator, Users, TrendingUp, DollarSign, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const RoiCalculator: React.FC = () => {
  // Inputs de Reclutamiento y Escalado de Agencia
  const [entrevistas, setEntrevistas] = useState<number>(20);
  const [tasaContratacion, setTasaContratacion] = useState<number>(25); // 25%
  const [produccionAgente, setProduccionAgente] = useState<number>(35000); // $35,000 anualizada
  const [margenOverride, setMargenOverride] = useState<number>(15); // 15%

  // Cálculos matemáticos de expansión
  const nuevosAgentesMes = Math.round(entrevistas * (tasaContratacion / 100));
  const nuevosAgentesAnio = nuevosAgentesMes * 12;
  const produccionTotalEquipo = nuevosAgentesAnio * produccionAgente;
  const ingresosOverrides = Math.round(produccionTotalEquipo * (margenOverride / 100));

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
            Descubre el impacto de automatizar la captación de nuevos agentes y cómo los overrides mensuales transforman el valor y los ingresos pasivos de tu agencia.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl bg-[#091542] border border-white/10 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Sliders and Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Entrevistas */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <Users size={16} className="text-[#16D1F5]" />
                    <span>Entrevistas de Reclutamiento por Mes</span>
                  </label>
                  <span className="text-lg font-black text-[#16D1F5]">{entrevistas}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={entrevistas}
                  onChange={(e) => setEntrevistas(Number(e.target.value))}
                  className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#16D1F5]"
                />
                <div className="flex justify-between text-[11px] text-[#FFF9F2]/50 mt-1">
                  <span>5 entrevistas</span>
                  <span>60 entrevistas</span>
                </div>
              </div>

              {/* Slider 2: Tasa de Contratación */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <TrendingUp size={16} className="text-[#1258FA]" />
                    <span>Tasa de Contratación / Firma de Agentes</span>
                  </label>
                  <span className="text-lg font-black text-[#16D1F5]">{tasaContratacion}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={tasaContratacion}
                  onChange={(e) => setTasaContratacion(Number(e.target.value))}
                  className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#1258FA]"
                />
                <div className="flex justify-between text-[11px] text-[#FFF9F2]/50 mt-1">
                  <span>5% (Conservador)</span>
                  <span>60% (Líder Pro)</span>
                </div>
              </div>

              {/* Input 3 & 4: Producción Promedio y Overrides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-white mb-1.5">
                    Producción Anual Promedio por Agente ($ USD)
                  </label>
                  <input
                    type="number"
                    value={produccionAgente}
                    onChange={(e) => setProduccionAgente(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-[#060E32] border border-white/20 rounded-xl px-4 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-[#16D1F5]"
                  />
                  <span className="text-[10px] text-[#FFF9F2]/50 mt-1 block">
                    Producción anualizada promedio
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white mb-1.5">
                    Margen de Override de Agencia (%)
                  </label>
                  <input
                    type="number"
                    value={margenOverride}
                    onChange={(e) => setMargenOverride(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-[#060E32] border border-white/20 rounded-xl px-4 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-[#16D1F5]"
                  />
                  <span className="text-[10px] text-[#FFF9F2]/50 mt-1 block">
                    Diferencial de comisión por agente
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Projected Results Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0A1E66] to-[#060E32] border border-[#16D1F5]/30 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#16D1F5]">
                  Proyección Anual Estimada
                </span>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs text-[#FFF9F2]/75">Nuevos Agentes al Año:</span>
                    <span className="text-base font-extrabold text-white">
                      +{nuevosAgentesAnio} Agentes
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs text-[#FFF9F2]/75">Volumen Anual del Equipo:</span>
                    <span className="text-base font-extrabold text-white">
                      {formatCurrency(produccionTotalEquipo)}
                    </span>
                  </div>
                </div>

                {/* Highlight Card: Overrides */}
                <div className="mt-6 p-4 rounded-xl bg-[#16D1F5]/10 border border-[#16D1F5]/40 text-center">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#16D1F5] block">
                    Ingresos Pasivos Anuales por Overrides
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#16D1F5] mt-1">
                    {formatCurrency(ingresosOverrides)}
                  </div>
                  <span className="text-[10px] text-[#FFF9F2]/60 mt-1 block">
                    ~{formatCurrency(Math.round(ingresosOverrides / 12))} USD al mes en comisiones de equipo
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                >
                  <span>Quiero atención prioritaria</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
