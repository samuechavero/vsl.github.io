import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, UserPlus, DollarSign, Users, Award, Sparkles, TrendingUp } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const RoiCalculator: React.FC = () => {
  // Pestañas: 'ventas' (IUL) o 'reclutamiento'
  const [activeTab, setActiveTab] = useState<'ventas' | 'reclutamiento'>('ventas');

  // --- TAB 1: CALCULADORA DE IUL (VENTAS) ---
  // Inputs:
  const [citasVenta, setCitasVenta] = useState<number>(20); // Slider numérico
  const [tasaCierreVenta, setTasaCierreVenta] = useState<number>(10); // Slider del 1% al 100%
  const [primaMensual, setPrimaMensual] = useState<number>(200); // Input numérico (USD)
  const [comisionCierre, setComisionCierre] = useState<number>(80); // Input numérico (% sobre prima anualizada)

  // Lógica y Outputs:
  // Clientes Asegurados = Citas * (Porcentaje de Cierre / 100)
  const clientesAsegurados = citasVenta * (tasaCierreVenta / 100);
  // Prima Anualizada Generada = Clientes Asegurados * Prima Mensual * 12
  const primaAnualizada = clientesAsegurados * primaMensual * 12;
  // Ingresos Proyectados = Prima Anualizada Generada * (Comisión por Cierre / 100)
  const ingresosProyectadosVenta = primaAnualizada * (comisionCierre / 100);

  // --- TAB 2: CALCULADORA DE RECLUTAMIENTO ---
  // Inputs:
  const [entrevistasRecluta, setEntrevistasRecluta] = useState<number>(15); // Slider numérico
  const [tasaContratacion, setTasaContratacion] = useState<number>(20); // Slider del 1% al 100%
  const [produccionPromedio, setProduccionPromedio] = useState<number>(30000); // Input numérico (USD prima anualizada)
  const [margenOverride, setMargenOverride] = useState<number>(15); // Input numérico (% de ganancia de agencia)

  // Lógica y Outputs:
  // Nuevos Agentes Contratados = Entrevistas * (Porcentaje de Contratación / 100)
  const agentesContratados = entrevistasRecluta * (tasaContratacion / 100);
  // Producción Total del Nuevo Equipo = Nuevos Agentes Contratados * Producción Promedio
  const produccionTotalEquipo = agentesContratados * produccionPromedio;
  // Ingresos Pasivos (Override) = Producción Total del Nuevo Equipo * (Margen de Agencia / 100)
  const ingresosOverride = produccionTotalEquipo * (margenOverride / 100);

  // Formateador de moneda
  const formatMoney = (val: number) => {
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>Simulador Interactivo de Rentabilidad</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Calcula el retorno de tu <span className="text-gradient-blue">ecosistema</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#FFF9F2]/75 leading-relaxed">
            Simula en tiempo real tus proyecciones de venta directa de pólizas o la multiplicación de ingresos pasivos por reclutamiento de equipo.
          </p>

          {/* Interactive Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={() => setActiveTab('ventas')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'ventas'
                  ? 'bg-gradient-to-r from-[#1258FA] to-[#16D1F5] text-white shadow-md'
                  : 'text-[#FFF9F2]/70 hover:text-white'
              }`}
            >
              <ShieldCheck size={16} />
              <span>Calculadora de IUL (Ventas)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reclutamiento')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'reclutamiento'
                  ? 'bg-gradient-to-r from-[#1258FA] to-[#16D1F5] text-white shadow-md'
                  : 'text-[#FFF9F2]/70 hover:text-white'
              }`}
            >
              <UserPlus size={16} />
              <span>Calculadora de Reclutamiento</span>
            </button>
          </div>
        </div>

        {/* --- PESTAÑA 1: CALCULADORA DE IUL (VENTAS) --- */}
        {activeTab === 'ventas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
            {/* Inputs Column (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <Sparkles size={18} className="text-[#16D1F5]" />
                  <h3 className="text-lg font-bold text-white tracking-wide">Variables de Venta IUL</h3>
                </div>

                {/* Input 1: Cantidad de Citas */}
                <div className="mb-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="citas-venta" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Cantidad de Citas
                    </label>
                    <span className="text-2xl font-extrabold text-[#16D1F5]">
                      {citasVenta}
                    </span>
                  </div>
                  <input
                    id="citas-venta"
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={citasVenta}
                    onChange={(e) => setCitasVenta(Number(e.target.value))}
                    className="w-full accent-[#1258FA]"
                  />
                  <div className="flex justify-between text-[11px] text-[#FFF9F2]/50 mt-1.5">
                    <span>5 citas</span>
                    <span>100 citas</span>
                  </div>
                </div>

                {/* Input 2: Porcentaje de Cierre (%) */}
                <div className="mb-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="tasa-cierre-venta" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Porcentaje de Cierre (%)
                    </label>
                    <span className="text-2xl font-extrabold text-[#16D1F5]">
                      {tasaCierreVenta}%
                    </span>
                  </div>
                  <input
                    id="tasa-cierre-venta"
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={tasaCierreVenta}
                    onChange={(e) => setTasaCierreVenta(Number(e.target.value))}
                    className="w-full accent-[#1258FA]"
                  />
                  <div className="flex justify-between text-[11px] text-[#FFF9F2]/50 mt-1.5">
                    <span>1%</span>
                    <span>{tasaCierreVenta}% efectividad</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Input 3: Prima Mensual (USD) */}
                <div className="mb-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="prima-mensual" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Prima Mensual (USD)
                    </label>
                    <span className="text-xs text-[#FFF9F2]/50">Promedio</span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[#16D1F5]">
                      $
                    </span>
                    <input
                      id="prima-mensual"
                      type="number"
                      min="50"
                      max="2000"
                      step="25"
                      value={primaMensual}
                      onChange={(e) => setPrimaMensual(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg focus:border-[#16D1F5] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Input 4: Comisión por Cierre (%) */}
                <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="comision-cierre" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Comisión por Cierre (%)
                    </label>
                    <span className="text-xs text-[#FFF9F2]/50">% sobre prima anual</span>
                  </div>
                  <div className="relative">
                    <input
                      id="comision-cierre"
                      type="number"
                      min="10"
                      max="150"
                      step="5"
                      value={comisionCierre}
                      onChange={(e) => setComisionCierre(Math.max(0, Number(e.target.value)))}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg focus:border-[#16D1F5] focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base font-bold text-[#16D1F5]">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {/* Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Output 1: Clientes Asegurados */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-bold">
                      Clientes Asegurados
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#1258FA]/20 flex items-center justify-center text-[#16D1F5]">
                      <Users size={18} />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-[#16D1F5] tracking-tight">
                    {clientesAsegurados.toFixed(1).replace('.0', '')}
                    <span className="text-sm font-semibold text-[#FFF9F2]/70 ml-2">pólizas</span>
                  </div>
                  <p className="text-xs text-[#FFF9F2]/60 mt-2">
                    Cálculo: {citasVenta} citas × {tasaCierreVenta}% de cierre.
                  </p>
                </div>

                {/* Output 2: Prima Anualizada Generada */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-bold">
                      Prima Anualizada Generada
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#1258FA]/20 flex items-center justify-center text-[#16D1F5]">
                      <DollarSign size={18} />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#16D1F5] tracking-tight">
                    {formatMoney(primaAnualizada)}
                  </div>
                  <p className="text-xs text-[#FFF9F2]/60 mt-2">
                    {clientesAsegurados.toFixed(1)} clientes × {formatMoney(primaMensual)}/mes × 12 meses.
                  </p>
                </div>
              </div>

              {/* Main KPI Card: Ingresos Proyectados */}
              <div className="bg-gradient-to-br from-[#1258FA]/25 to-[#16D1F5]/10 border-2 border-[#16D1F5] rounded-3xl p-7 sm:p-9 backdrop-blur-md relative overflow-hidden shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#16D1F5] font-extrabold flex items-center gap-1.5">
                      <TrendingUp size={16} />
                      <span>Ingresos Proyectados</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#16D1F5]/20 text-[#16D1F5] text-xs font-bold">
                      Comisión: {comisionCierre}%
                    </span>
                  </div>

                  <div className="text-4xl sm:text-6xl font-black text-[#16D1F5] tracking-tight my-3">
                    {formatMoney(ingresosProyectadosVenta)}
                    <span className="text-sm font-semibold text-white/80 block sm:inline sm:ml-3">USD</span>
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-xl">
                    Comisión neta estimada resultante de colocar {clientesAsegurados.toFixed(1)} pólizas con {formatMoney(primaMensual)} de prima mensual al {comisionCierre}% de contrato.
                  </p>
                </div>

                {/* CTA inside calculator */}
                <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#FFF9F2]/70 text-center sm:text-left">
                    El ecosistema gestiona tus citas para que tú solo te enfoques en presentar y cerrar.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full sm:w-auto px-7 py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-2xl whitespace-nowrap cursor-pointer"
                  >
                    <span>Quiero atención prioritaria</span>
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PESTAÑA 2: CALCULADORA DE RECLUTAMIENTO --- */}
        {activeTab === 'reclutamiento' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
            {/* Inputs Column (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <UserPlus size={18} className="text-[#16D1F5]" />
                  <h3 className="text-lg font-bold text-white tracking-wide">Variables de Expansión</h3>
                </div>

                {/* Input 1: Cantidad de Entrevistas */}
                <div className="mb-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="entrevistas-recluta" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Cantidad de Entrevistas
                    </label>
                    <span className="text-2xl font-extrabold text-[#16D1F5]">
                      {entrevistasRecluta}
                    </span>
                  </div>
                  <input
                    id="entrevistas-recluta"
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={entrevistasRecluta}
                    onChange={(e) => setEntrevistasRecluta(Number(e.target.value))}
                    className="w-full accent-[#1258FA]"
                  />
                  <div className="flex justify-between text-[11px] text-[#FFF9F2]/50 mt-1.5">
                    <span>5 entrevistas</span>
                    <span>100 entrevistas</span>
                  </div>
                </div>

                {/* Input 2: Porcentaje de Contratación (%) */}
                <div className="mb-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="tasa-contratacion" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Porcentaje de Contratación (%)
                    </label>
                    <span className="text-2xl font-extrabold text-[#16D1F5]">
                      {tasaContratacion}%
                    </span>
                  </div>
                  <input
                    id="tasa-contratacion"
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={tasaContratacion}
                    onChange={(e) => setTasaContratacion(Number(e.target.value))}
                    className="w-full accent-[#1258FA]"
                  />
                  <div className="flex justify-between text-[11px] text-[#FFF9F2]/50 mt-1.5">
                    <span>1%</span>
                    <span>{tasaContratacion}% se unen al equipo</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Input 3: Producción Promedio por Agente (USD) */}
                <div className="mb-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="prod-promedio" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Producción Promedio por Agente
                    </label>
                    <span className="text-xs text-[#FFF9F2]/50">Prima Anualizada</span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[#16D1F5]">
                      $
                    </span>
                    <input
                      id="prod-promedio"
                      type="number"
                      min="5000"
                      max="200000"
                      step="5000"
                      value={produccionPromedio}
                      onChange={(e) => setProduccionPromedio(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg focus:border-[#16D1F5] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Input 4: Margen de Agencia / Override (%) */}
                <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="margen-override" className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-semibold">
                      Margen de Agencia / Override (%)
                    </label>
                    <span className="text-xs text-[#FFF9F2]/50">Spread de comisión</span>
                  </div>
                  <div className="relative">
                    <input
                      id="margen-override"
                      type="number"
                      min="1"
                      max="50"
                      step="1"
                      value={margenOverride}
                      onChange={(e) => setMargenOverride(Math.max(0, Number(e.target.value)))}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg focus:border-[#16D1F5] focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base font-bold text-[#16D1F5]">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {/* Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Output 1: Nuevos Agentes Contratados */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-bold">
                      Nuevos Agentes Contratados
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#1258FA]/20 flex items-center justify-center text-[#16D1F5]">
                      <Award size={18} />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-[#16D1F5] tracking-tight">
                    {agentesContratados.toFixed(1).replace('.0', '')}
                    <span className="text-sm font-semibold text-[#FFF9F2]/70 ml-2">agentes</span>
                  </div>
                  <p className="text-xs text-[#FFF9F2]/60 mt-2">
                    Cálculo: {entrevistasRecluta} entrevistas × {tasaContratacion}% de contratación.
                  </p>
                </div>

                {/* Output 2: Producción Total del Nuevo Equipo */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#FFF9F2]/70 font-bold">
                      Producción Total del Equipo
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#1258FA]/20 flex items-center justify-center text-[#16D1F5]">
                      <TrendingUp size={18} />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#16D1F5] tracking-tight">
                    {formatMoney(produccionTotalEquipo)}
                  </div>
                  <p className="text-xs text-[#FFF9F2]/60 mt-2">
                    {agentesContratados.toFixed(1)} agentes × {formatMoney(produccionPromedio)} de producción.
                  </p>
                </div>
              </div>

              {/* Main KPI Card: Ingresos Pasivos (Override) */}
              <div className="bg-gradient-to-br from-[#1258FA]/25 to-[#16D1F5]/10 border-2 border-[#16D1F5] rounded-3xl p-7 sm:p-9 backdrop-blur-md relative overflow-hidden shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#16D1F5] font-extrabold flex items-center gap-1.5">
                      <DollarSign size={16} />
                      <span>Ingresos Pasivos (Override de Agencia)</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#16D1F5]/20 text-[#16D1F5] text-xs font-bold">
                      Margen: {margenOverride}%
                    </span>
                  </div>

                  <div className="text-4xl sm:text-6xl font-black text-[#16D1F5] tracking-tight my-3">
                    {formatMoney(ingresosOverride)}
                    <span className="text-sm font-semibold text-white/80 block sm:inline sm:ml-3">USD</span>
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-xl">
                    Ganancia pasiva generada para tu agencia por la producción de {agentesContratados.toFixed(1)} nuevos agentes reclutados con un {margenOverride}% de spread de comisión.
                  </p>
                </div>

                {/* CTA inside calculator */}
                <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#FFF9F2]/70 text-center sm:text-left">
                    Atrae agentes calificados con embudos de contratación predecibles y escala tu agencia.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full sm:w-auto px-7 py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-2xl whitespace-nowrap cursor-pointer"
                  >
                    <span>Quiero atención prioritaria</span>
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
