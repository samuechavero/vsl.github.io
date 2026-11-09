import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué es exactamente la subcuenta en GoHighLevel y qué incluye?',
      a: 'GoHighLevel es el software todo-en-uno líder para agencias y negocios de alto rendimiento. En tu subcuenta configuramos tus embudos de ventas, calendarios sincronizados, pipelines de etapas comerciales, base de datos de contactos y automatizaciones. Todo queda centralizado para que no necesites 5 aplicaciones distintas.',
    },
    {
      q: '¿Cómo funciona la integración de Twilio / LC Phone?',
      a: 'Asignamos un número exclusivo verificado para tu negocio. A través de este número, el sistema dispara automáticamente mensajes SMS de confirmación instantánea y recordatorios antes de cada cita agendada, además de permitir llamadas directas. Esto reduce drásticamente el ausentismo (no-shows) en tu calendario.',
    },
    {
      q: '¿Quién administra la publicidad en Meta Ads y qué presupuesto necesito?',
      a: 'Nuestro equipo se encarga de la gestión integral de tus campañas en Facebook e Instagram: definimos la segmentación, testeamos creativos, configuramos la Conversions API (CAPI) y revisamos métricas semanalmente. El presupuesto de pauta publicitaria es independiente y se invierte directamente en tu propia cuenta de anuncios de Meta.',
    },
    {
      q: '¿Qué incluye el bono de Identidad Web, Dominio y Hosting?',
      a: 'Hacemos una entrevista 1 a 1 contigo para extraer tu metodología e historia, redactamos un Lead Magnet en formato "Libro" de alta autoridad y desarrollamos una Landing Page optimizada para la conversión. Además, te cubrimos el hosting de alta velocidad y el dominio durante el primer año completo.',
    },
    {
      q: '¿Cuánto tiempo tarda la puesta en marcha de mi Ecosistema?',
      a: 'Una vez realizada la sesión inicial de alineación estratégica de 30 minutos, nuestro equipo técnico completa la configuración, clonación de embudos, integraciones telefónicas y campañas de Meta Ads en un plazo de 5 a 7 días hábiles.',
    },
    {
      q: '¿Cómo funciona el soporte técnico continuo?',
      a: 'Cuentas con acompañamiento y soporte técnico para monitorear que tus webhooks, automatizaciones y conexiones de Twilio y Meta funcionen permanentemente sin interrupciones. Si surge cualquier duda o ajuste en tus flujos, nuestro equipo te asiste de inmediato.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-t border-[#EDE3D5]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <HelpCircle size={14} />
            <span>Preguntas frecuentes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Todo lo que necesitas saber antes de empezar.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5578]">
            Claridad total para poner a trabajar tu máquina de ventas sin dudas técnicas.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="clean-card overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#060E32] hover:text-[#1258FA] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1258FA] text-white' : ''
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B5578] leading-relaxed border-t border-[#EDE3D5]/50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
