import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Users, DollarSign, Sparkles, Check } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  // Inputs requeridos por el usuario:
  const CITAS_SEMANALES = 10; // Fijo en 10
  const [tasaCierre, setTasaCierre] = useState<number>(10); // Slider del 5% al 50% (defecto: 10%)
  const [comisionPorPoliza, setComisionPorPoliza] = useState<number>(2400); // Input numérico (defecto: $2,400)

  // Fórmulas especificadas:
  // Ventas Semanales = 10 * (Tasa de Cierre / 100)
  const ventasSemanales = CITAS_SEMANALES * (tasaCierre / 100);
  
  // Ingresos Brutos Semanales = Ventas Semanales * Comisión Promedio
  const ingresosBrutosSemanales = ventasSemanales * comisionPorPoliza;
  
  // Nuevos Ingresos Mensuales Estimados = Ingresos Brutos * 4
  const ingresosMensuales = ingresosBrutosSemanales * 4;

  // Nuevos Ingresos Anuales Estimados = Ingresos Mensuales * 12
  const ingresosAnuales = ingresosMensuales * 12;

  // Comparativa vs Inversión en Negoxia ($769 USD/mes paquete interno)
  const costoMensualSistema = 769;
  const beneficioNetoMensual = ingresosMensuales - costoMensualSistema;
  const roiMultiplicador = ((ingresosMensuales / costoMensualSistema)).toFixed(1);

  // Formateador de moneda
  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Texto descriptivo de la tasa de cierre
  const getCierreLabel = (tasa: number) => {
    const ventas = (10 * (tasa / 100)).toFixed(1).replace('.0', '');
    return `${ventas} ${ventas === '1' ? 'venta cerrada' : 'ventas cerradas'} por cada 10 citas`;
  };

  return (
    <section id="calculadora" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#060E32] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1258FA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>Simulador Financiero en Tiempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Haz las cuentas con{' '}
            <span className="text-gradient-blue">tus propios números</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#FFF9F2]/75 leading-relaxed">
            Descubre el impacto económico de recibir 10 citas precalificadas por semana directamente en tu calendario con tu ecosistema Negoxia Autopilot.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <Sparkles size={18} className="text-[#16D1F5]" />
                <h3 className="text-lg font-bold text-white tracking-wide">Variables del Modelo</h3>
              </div>

              {/* Control 1: Citas Semanales (Fijo en 10) */}
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                    Citas Semanales Entregadas
                  </label>
                  <span className="text-[11px] font-bold text-[#16D1F5] bg-[#16D1F5]/10 px-2 py-0.5 rounded-full">
                    FIJO
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold text-white">10</span>
                  <span className="text-xs text-[#FFF9F2]/60">citas semanales en tu calendario</span>
                </div>
                <p className="text-[11px] text-[#FFF9F2]/50 mt-1">
                  Capacidad estándar garantizada por el ecosistema de prospección.
                </p>
              </div>

              {/* Control 2: Tasa de Cierre Slider (5% al 50%) */}
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="tasa-cierre" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                    Tasa de Cierre del Agente
                  </label>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-[#16D1F5]">
                      {tasaCierre}%
                    </span>
                  </div>
                </div>

                <input
                  id="tasa-cierre"
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={tasaCierre}
                  onChange={(e) => setTasaCierre(Number(e.target.value))}
                  className="w-full accent-[#1258FA]"
                />

                <div className="flex justify-between text-[11px] text-[#FFF9F2]/50 mt-2">
                  <span>5% (Conservador)</span>
                  <span className="text-[#16D1F5] font-medium">{getCierreLabel(tasaCierre)}</span>
                  <span>50% (Top Producer)</span>
                </div>
              </div>

              {/* Control 3: Comisión Promedio por Póliza Input */}
              <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="comision" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                    Comisión Promedio por Póliza
                  </label>
                  <span className="text-xs text-[#FFF9F2]/50">USD</span>
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[#16D1F5]">
                    $
                  </span>
                  <input
                    id="comision"
                    type="number"
                    min="500"
                    max="10000"
                    step="100"
                    value={comisionPorPoliza}
                    onChange={(e) => setComisionPorPoliza(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg focus:border-[#16D1F5] focus:outline-none transition-all"
                  />
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-[11px] text-[#FFF9F2]/50">Frecuentes:</span>
                  {[1800, 2400, 3200].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setComisionPorPoliza(preset)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        comisionPorPoliza === preset
                          ? 'bg-[#1258FA] border-[#16D1F5] text-white font-bold'
                          : 'bg-white/5 border-white/10 text-[#FFF9F2]/70 hover:bg-white/10'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#FFF9F2]/40 mt-4 leading-relaxed">
              *Modelo de proyección basado en tus supuestos comerciales. Las ventas reales dependen de la licencia, compañía y habilidad de cierre del agente.
            </p>
          </div>

          {/* Results Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Top 2 Dynamic KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1: Nuevos Clientes por Semana */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-bold">
                    Nuevos Clientes por Semana
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#1258FA]/20 flex items-center justify-center text-[#16D1F5]">
                    <Users size={18} />
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#16D1F5] tracking-tight">
                    {ventasSemanales.toFixed(1).replace('.0', '')}
                    <span className="text-lg font-semibold text-[#FFF9F2]/70 ml-2">clientes/sem</span>
                  </div>
                  <p className="text-xs text-[#FFF9F2]/60 mt-2">
                    Resultante de 10 citas calificadas semanales con {tasaCierre}% de efectividad.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-xs text-[#FFF9F2]/70 flex items-center gap-1.5">
                  <Check size={14} className="text-[#16D1F5]" />
                  <span>{(ventasSemanales * 4).toFixed(0)} pólizas cerradas por mes</span>
                </div>
              </div>

              {/* Card 2: Nuevos Ingresos Mensuales Estimados (Destacado en CIAN) */}
              <div className="bg-gradient-to-br from-[#1258FA]/20 to-[#16D1F5]/10 border-2 border-[#16D1F5] rounded-3xl p-6 sm:p-7 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#16D1F5] font-extrabold">
                    Nuevos Ingresos Mensuales Estimados
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5]">
                    <DollarSign size={18} />
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-[#16D1F5] tracking-tight">
                    {formatMoney(ingresosMensuales)}
                    <span className="text-sm font-semibold text-white/80 block mt-1">USD / mes</span>
                  </div>
                  <p className="text-xs text-blue-100/80 mt-2">
                    Calculado: {ventasSemanales.toFixed(1)} ventas/sem × {formatMoney(comisionPorPoliza)} × 4 semanas.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/15 text-xs text-white font-semibold flex items-center justify-between">
                  <span>Proyección 12 meses:</span>
                  <span className="text-[#16D1F5] font-bold text-sm">{formatMoney(ingresosAnuales)}</span>
                </div>
              </div>
            </div>

            {/* Bottom Comprehensive ROI Comparison Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-[#16D1F5]" />
                  <h4 className="text-base font-bold text-white">Retorno Neto sobre Inversión</h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#16D1F5]/15 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-bold">
                  ROI de {roiMultiplicador}x sobre el CRM
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-[#FFF9F2]/80">
                  <span>Ingreso bruto mensual generado por las citas:</span>
                  <span className="font-bold text-white text-base">{formatMoney(ingresosMensuales)}</span>
                </div>
                <div className="flex items-center justify-between text-[#FFF9F2]/80">
                  <span>Inversión Ecosistema Negoxia (Plan Interno):</span>
                  <span className="font-semibold text-red-300">−{formatMoney(costoMensualSistema)} / mes</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-base sm:text-lg font-bold">
                  <span className="text-white">Beneficio Neto Mensual Estimado:</span>
                  <span className="text-[#16D1F5] text-xl sm:text-2xl font-black">
                    +{formatMoney(beneficioNetoMensual)} USD
                  </span>
                </div>
              </div>

              {/* Call to action inside calculator */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#FFF9F2]/70 text-center sm:text-left">
                  Con solo <strong className="text-white">1 póliza cerrada al mes</strong>, el ecosistema se paga solo y genera ganancia neta.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="btn-primary w-full sm:w-auto px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-xl whitespace-nowrap cursor-pointer"
                >
                  <span>Quiero estas 10 Citas Semanales</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
