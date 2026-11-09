import React, { useState } from 'react';
import { Award, ArrowRight, BarChart3, Database, Calendar, Megaphone, CheckCircle2 } from 'lucide-react';

interface EvidenceCasesProps {
  onOpenBooking: () => void;
}

export const EvidenceCases: React.FC<EvidenceCasesProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'crm' | 'ads' | 'sales'>('all');

  const cases = [
    {
      category: 'ads',
      tag: 'Meta Ads & Embudo',
      name: 'Bryan Paladines',
      role: 'Agente de seguros de vida · NJ',
      highlight: '32 citas agendadas en 9 días a $11.16 por cita calificada',
      metric1: { label: 'Antes (Formularios Fríos)', value: '0 citas (7 leads perdidos)' },
      metric2: { label: 'Con Ecosistema CRM', value: '32 citas agendadas' },
      badge: 'Inversión: $356 USD',
      quote: '«Las 32 citas de alta calidad vinieron directamente del embudo conectado con el calendario y la segmentación estratégica en Meta Ads».',
      source: 'Fuente: administrador de anuncios de Meta y calendario GoHighLevel verificado.',
    },
    {
      category: 'sales',
      tag: 'Ventas Directas',
      name: 'Poli',
      role: 'Marca de Retail y E-commerce',
      highlight: '1 embudo de alta conversión → 32 compras → $7,967 en ventas',
      metric1: { label: 'Ventas atribuidas', value: '$7,967.15 USD' },
      metric2: { label: 'ROAS Obtenido', value: '11.2× Retorno' },
      badge: 'Inversión: $709.18 USD',
      quote: '«Con la instalación del Píxel/API y la landing optimizada, cada dólar invertido en publicidad se convirtió en retorno medible y constante».',
      source: 'Fuente: métricas de eventos de compra en Meta Ads Manager.',
    },
    {
      category: 'crm',
      tag: 'Automatización Twilio',
      name: 'David Reyes',
      role: 'Consultoría y Servicios Profesionales',
      highlight: 'Reducción del 42% en ausencias gracias a recordatorios automáticos',
      metric1: { label: 'Tasa de Asistencia', value: '88.5% en llamadas' },
      metric2: { label: 'Integración', value: 'Twilio LC Phone' },
      badge: 'Cero Fricción Técnica',
      quote: '«El envío automático de SMS de confirmación y recordatorio antes de cada cita eliminó por completo los prospectos que se olvidaban de la reunión».',
      source: 'Fuente: panel de actividad de subcuenta GoHighLevel.',
    },
    {
      category: 'crm',
      tag: 'Pipeline & Embudos',
      name: 'Ana Cordones',
      role: 'Servicios Financieros & Asesoría',
      highlight: 'Ecosistema montado y funcionando en menos de una semana',
      metric1: { label: 'Leads Calificados', value: '10 a 15 por semana' },
      metric2: { label: 'Tiempo de Setup', value: '100% Plug & Play' },
      badge: 'Alta Conversión',
      quote: '«Tener la subcuenta configurada con los embudos clonados me quitó meses de dolores de cabeza técnicos. Solo entro a atender a los clientes que agendan».',
      source: 'Fuente: caso de estudio verificado.',
    },
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter((c) => c.category === filter);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-b border-[#EDE3D5]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <Award size={14} />
            <span>Evidencia con métricas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Resultados Comprobados.{' '}
            <span className="text-gradient-blue block mt-1">Embudos, CRM y Meta Ads.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            Métricas verificadas en GoHighLevel y administradores de anuncios donde la automatización generó citas y ventas.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Todos los resultados' },
              { id: 'crm', label: 'CRM & Automatización' },
              { id: 'ads', label: 'Meta Ads' },
              { id: 'sales', label: 'Ventas y ROAS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#060E32] text-white shadow-md'
                    : 'bg-white text-[#556080] border border-[#EDE3D5] hover:bg-[#F5EEE4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCases.map((item, idx) => (
            <div key={idx} className="clean-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold tracking-wide uppercase">
                    {item.tag}
                  </span>
                  <span className="text-xs font-medium text-[#16D1F5] bg-[#060E32] px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#060E32] mb-1">{item.name}</h3>
                <p className="text-xs text-[#7380A0] mb-4 font-medium">{item.role}</p>

                <div className="p-3.5 bg-[#FFF9F2] rounded-xl border border-[#EDE3D5] mb-5">
                  <p className="text-sm font-semibold text-[#060E32]">{item.highlight}</p>
                </div>

                {/* Metrics 2-column strip */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white p-3 rounded-lg border border-[#EDE3D5]">
                    <span className="text-[11px] uppercase tracking-wider text-[#8A95AF] block mb-1">
                      {item.metric1.label}
                    </span>
                    <strong className="text-sm sm:text-base font-extrabold text-[#060E32] block">
                      {item.metric1.value}
                    </strong>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#EDE3D5]">
                    <span className="text-[11px] uppercase tracking-wider text-[#8A95AF] block mb-1">
                      {item.metric2.label}
                    </span>
                    <strong className="text-sm sm:text-base font-extrabold text-[#1258FA] block">
                      {item.metric2.value}
                    </strong>
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm text-[#4B5578] italic leading-relaxed mb-4">
                  {item.quote}
                </blockquote>
              </div>

              <div className="pt-3 border-t border-[#EDE3D5]/60 text-[11px] text-[#8A95AF]">
                {item.source}
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <p className="text-center text-xs text-[#8A95AF] max-w-2xl mx-auto leading-relaxed">
          * Estos son resultados de casos reales documentados. Tus resultados dependerán de tu oferta comercial, tu mercado, tu presupuesto publicitario y tu proceso de venta.
        </p>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenBooking}
            className="btn-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Obtener mi Ecosistema</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
