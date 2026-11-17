import React from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles, Zap, AlertTriangle, Crown } from 'lucide-react';

const STRIPE_FAST_START_URL = 'https://buy.stripe.com/bJe14meu32AOcz17ux63K07';
const STRIPE_PREMIUM_URL = 'https://buy.stripe.com/28E8wO99J2AOdD57ux63K08';

export const PricingPackages: React.FC = () => {
  const fastStartFeatures = [
    {
      title: 'BONO DE INICIO: $200 USD de presupuesto para pauta publicitaria en Meta Ads INCLUIDOS',
      desc: 'Absorbido 100% dentro de tu pago mensual. Cero costo extra.',
      highlight: true,
    },
    {
      title: 'Subcuenta de CRM y Plataforma de Gestión',
      desc: 'Acceso total a tu sistema oficial a tu nombre para gestionar candidatos, pipelines y llamadas.',
    },
    {
      title: 'Agente Conversacional con IA 24/7',
      desc: 'Atención automática y calificación en WhatsApp, Instagram y Messenger para aspirantes a agentes.',
    },
    {
      title: 'Embudos de Alta Conversión para Reclutamiento',
      desc: 'Páginas y flujos optimizados para atraer y filtrar profesionales interesados en unirse a tu agencia.',
    },
    {
      title: 'Integración Telefónica con Número Exclusivo',
      desc: 'Telefonía local dedicada para llamadas y SMS automáticos de confirmación instantánea.',
    },
    {
      title: 'Sincronización de Calendarios y Recordatorios Anti-No-Show',
      desc: 'Sincronización directa con Google y Outlook con secuencias previas y posteriores a la entrevista.',
    },
    {
      title: 'Onboarding Personalizado y Capacitación 1 a 1',
      desc: 'Acompañamiento en el lanzamiento y entrenamiento para dominar tu plataforma y cerrar más contratos.',
    },
    {
      title: 'Soporte Técnico Continuo Anti-Fallas',
      desc: 'Asistencia prioritaria para garantizar que tu infraestructura opere sin interrupciones los 365 días del año.',
    },
  ];

  const premiumFeatures = [
    {
      title: 'Todo lo incluido en el Plan Fast Start',
      desc: 'Infraestructura completa de CRM, agentes IA, embudos, telefonía y onboarding 1 a 1.',
      highlight: true,
    },
    {
      title: 'Gestión y Escala Avanzada de Campañas Publicitarias',
      desc: 'Estrategias multicanal agresivas en Meta Ads y optimización de conversión continua por especialistas.',
    },
    {
      title: 'Agentes IA Multi-Nivel y Flujos Avanzados de Calificación',
      desc: 'Automatizaciones complejas de seguimiento multietapa y reactivación de aspirantes de alto perfil.',
    },
    {
      title: 'Canal de Soporte VIP Prioritario Directo',
      desc: 'Acceso directo a especialistas senior y tiempos de respuesta garantizados ultra-rápidos.',
    },
    {
      title: 'Sesiones de Consultoría y Estrategia Semanal',
      desc: 'Revisión periódica de métricas de reclutamiento, tasa de conversión y optimización de entrevistas.',
    },
    {
      title: 'Personalización Total de Embudos a la Marca',
      desc: 'Alineación de marca, assets premium y configuración a medida para agencias consolidadas.',
    },
  ];

  return (
    <section id="paquetes" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-[#16D1F5]" />
            <span>Planes de Inversión Oficiales</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#060E32] tracking-tight">
            Elige el Plan para <span className="text-gradient-blue">Escalar tu Agencia con IA</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Sin costos ocultos ni sorpresas técnicas. Desplegamos tu infraestructura de reclutamiento llave en mano.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: Negoxia Autopilot Fast Start */}
          <div className="relative rounded-3xl bg-white border-2 border-[#1258FA]/40 shadow-2xl p-7 sm:p-10 flex flex-col justify-between overflow-hidden">
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#1258FA] to-[#16D1F5] text-white text-[11px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-md">
              MÁS POPULAR · LANZAMIENTO
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <Zap size={18} className="text-[#1258FA]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1258FA]">
                  Plan Oficial de Expansión
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#060E32] mb-3">
                Negoxia Autopilot Fast Start
              </h3>
              <p className="text-xs sm:text-sm text-[#556080] leading-relaxed mb-5">
                La solución integral para líderes y agencias que desean reclutar de forma predecible sin perder tiempo en prospección manual.
              </p>

              {/* FRASE EXACTA REQUERIDA DE LANZAMIENTO */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#1258FA]/15 via-[#16D1F5]/20 to-[#1258FA]/15 border-2 border-[#1258FA]/40 text-[#060E32] text-xs sm:text-sm font-black text-center mb-6 shadow-sm">
                ✨ Precio de lanzamiento, de 789 + bono de regalo de 200 dolares
              </div>

              {/* Price Display */}
              <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-[#EDE3D5] mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg sm:text-xl font-bold text-[#060E32]/45 line-through decoration-[#060E32]/40 tracking-tight">
                    $1497 USD
                  </span>
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#1258FA] bg-[#1258FA]/10 px-2 py-0.5 rounded-full">
                    Ahorra 47%
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-[#060E32]">$789</span>
                  <span className="text-xs sm:text-sm text-[#7380A0] font-semibold">USD / mes</span>
                </div>
                <div className="mt-2.5 p-2 rounded-xl bg-[#1258FA]/10 border border-[#1258FA]/20 flex items-center gap-2 text-xs text-[#1258FA] font-extrabold">
                  <Check size={14} className="stroke-[3] shrink-0" />
                  <span>$200 USD de presupuesto publicitario absorbido</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#060E32] mb-3">
                  ¿Qué incluye el Plan Fast Start?
                </h4>
                {fastStartFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex items-start gap-3 ${
                      item.highlight
                        ? 'bg-gradient-to-r from-[#1258FA]/10 to-[#16D1F5]/10 border-[#1258FA]/40'
                        : 'bg-[#FFF9F2] border-[#EDE3D5]/80'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-[#060E32]">
                        {item.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-[#556080] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA & Legal */}
            <div>
              <a
                href={STRIPE_FAST_START_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <span>Comenzar con Fast Start ($789)</span>
                <ArrowRight size={18} />
              </a>

              {/* TÉRMINOS DE PAGO VISIBLES */}
              <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold flex items-center justify-center gap-2 text-center">
                <AlertTriangle size={15} className="text-amber-600 shrink-0" />
                <span>Contrato mínimo de 3 meses. Pagos no reembolsables.</span>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#8C96AB]">
                <ShieldCheck size={13} className="text-[#1258FA]" />
                <span>Pago Seguro Vía Stripe · Despliegue en 5-7 días</span>
              </div>
            </div>
          </div>

          {/* Card 2: Negoxia Autopilot Premium */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#08123B] to-[#040A24] border-2 border-[#16D1F5]/40 shadow-2xl p-7 sm:p-10 flex flex-col justify-between overflow-hidden text-white">
            {/* Top highlight ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#16D1F5] to-[#1258FA] text-white text-[11px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-md">
              ALTO RENDIMIENTO · ESCALADO TOTAL
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown size={18} className="text-[#16D1F5]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#16D1F5]">
                  Solución Premium para Agencias
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Negoxia Autopilot Premium
              </h3>
              <p className="text-xs sm:text-sm text-[#B4C0DB] leading-relaxed mb-5">
                Diseñado para agencias y líderes que buscan máximo volumen, personalización total y aceleración agresiva en su reclutamiento.
              </p>

              {/* Badge destacado */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-[#16D1F5]/30 text-white text-xs sm:text-sm font-black text-center mb-6 shadow-sm">
                🚀 Máxima Capacidad de Reclutamiento y Soporte VIP Directo
              </div>

              {/* Price / Plan Display */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#16D1F5] uppercase tracking-wider">
                    Paquete Corporativo Avanzado
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-white">Plan Premium</span>
                </div>
                <div className="mt-2.5 p-2 rounded-xl bg-[#16D1F5]/10 border border-[#16D1F5]/20 flex items-center gap-2 text-xs text-[#16D1F5] font-extrabold">
                  <Check size={14} className="stroke-[3] shrink-0" />
                  <span>Escalado publicitario, optimización continua y atención prioritaria</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#E2E8F0] mb-3">
                  ¿Qué incluye el Plan Premium?
                </h4>
                {premiumFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex items-start gap-3 ${
                      item.highlight
                        ? 'bg-[#16D1F5]/10 border-[#16D1F5]/30'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 mt-0.5">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white">
                        {item.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA & Legal */}
            <div>
              <a
                href={STRIPE_PREMIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-base font-bold flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#16D1F5] to-[#1258FA] text-white shadow-xl shadow-[#16D1F5]/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <span>Comenzar con Plan Premium</span>
                <ArrowRight size={18} />
              </a>

              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-xs font-bold flex items-center justify-center gap-2 text-center">
                <AlertTriangle size={15} className="text-[#16D1F5] shrink-0" />
                <span>Configuración técnica personalizada y onboarding prioritario.</span>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#94A3B8]">
                <ShieldCheck size={13} className="text-[#16D1F5]" />
                <span>Pago Seguro Vía Stripe · Garantía de Servicio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
