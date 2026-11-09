import React, { useState } from 'react';
import { TrendingUp, Users, Calendar, DollarSign, Award, ArrowUpRight, ArrowRight, Play, Check } from 'lucide-react';

interface EvidenceCasesProps {
  onOpenBooking: () => void;
}

export const EvidenceCases: React.FC<EvidenceCasesProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'organic' | 'ads' | 'sales'>('all');

  const cases = [
    {
      category: 'organic',
      tag: 'Orgánico',
      name: 'Samba',
      role: 'Coach de hábitos y productividad',
      highlight: 'Sin grabarse cada semana: su clon habla por él',
      metric1: { label: 'Instagram', value: '4,500 → 72.3k' },
      metric2: { label: 'TikTok', value: '3,412 → 125.8k' },
      badge: '1.4M Likes en TikTok',
      quote: '«Dale la vuelta a la tortilla y recupera tu atención de nuevo». Vistas y crecimiento sostenido gracias a la consistencia del clon.',
      source: 'Fuente: perfiles verificados y métricas de retención orgánica.',
    },
    {
      category: 'ads',
      tag: 'Anuncios',
      name: 'Bryan Paladines',
      role: 'Agente de seguros de vida · NJ',
      highlight: '32 citas agendadas en 9 días a $11.16 por cita',
      metric1: { label: 'Antes (Formularios)', value: '0 citas (7 leads fríos)' },
      metric2: { label: 'Con Avatar de IA', value: '32 citas agendadas' },
      badge: 'Inversión: $356 USD',
      quote: '«Las 32 citas de alta calidad vinieron directamente del anuncio producido con su avatar de IA y guion persuasivo».',
      source: 'Fuente: administrador de anuncios de Meta verificado.',
    },
    {
      category: 'sales',
      tag: 'Ventas',
      name: 'Poli',
      role: 'Marca de Retail y E-commerce',
      highlight: '1 creativo con IA → 32 compras → $7,967 en ventas',
      metric1: { label: 'Ventas atribuidas', value: '$7,967.15 USD' },
      metric2: { label: 'ROAS Obtenido', value: '11.2× Retorno' },
      badge: 'Inversión: $709.18 USD',
      quote: 'Con una sola pieza creativa optimizada y guionada con IA se generaron compras directas y visitas en tienda física y digital.',
      source: 'Fuente: métricas de eventos de compra en Meta Ads Manager.',
    },
    {
      category: 'organic',
      tag: 'Contenido',
      name: 'Angie Barrios',
      role: 'Calima Global Auto Broker',
      highlight: 'Presencia de marca imparable sin sacrificar su agenda',
      metric1: { label: 'Producción semanal', value: '7 videos / semana' },
      metric2: { label: 'Tiempo invertido', value: '10 min de revisión' },
      badge: 'Escala Comercial',
      quote: '«A pesar de que quería mucho todo esto, no sabía cómo comenzar... El clon me permitió posicionarme de inmediato sin estrés».',
      source: 'Fuente: caso de estudio en video testimonial.',
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
            Números con capturas.{' '}
            <span className="text-gradient-blue block mt-1">Orgánico, anuncios y ventas.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            Casos documentados donde el motor de IA convirtió presencia en tracción y clientes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Todos los casos' },
              { id: 'organic', label: 'Orgánico' },
              { id: 'ads', label: 'Anuncios' },
              { id: 'sales', label: 'Ventas directas' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
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

        {/* Legal Disclaimer matching Clonelab */}
        <p className="text-center text-xs text-[#8A95AF] max-w-2xl mx-auto leading-relaxed">
          * Estos son resultados de casos concretos y no constituyen una garantía típica de ingresos. Tus resultados dependen de tu oferta comercial, tu mercado, tu presupuesto publicitario y tu capacidad de cierre.
        </p>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenBooking}
            className="btn-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>Quiero estos resultados para mi negocio</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
