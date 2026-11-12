import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo funciona el Negoxia Pack Fast Start de $789?',
      a: 'Es una solución integral llave en mano diseñada para el reclutamiento continuo de nuevos agentes. Incluye tu plataforma CRM a tu nombre, agentes conversacionales con IA 24/7 en WhatsApp, Instagram y Messenger, embudos probados de atracción, telefonía exclusiva con número local, sincronización de calendarios y gestión publicitaria con presupuesto incluido.',
    },
    {
      q: '¿Cómo califica el agente de IA a los candidatos?',
      a: 'Nuestro agente conversacional con IA interactúa de forma humana y al instante en WhatsApp y redes sociales. Hace las preguntas clave (experiencia previa, estado de licencia, motivación, disponibilidad horaria) y solo cuando el candidato cumple tus requisitos mínimos, le ofrece el enlace para agendar la entrevista en tu calendario.',
    },
    {
      q: '¿Qué condiciones aplican sobre el contrato y los pagos?',
      a: 'El servicio cuenta con un contrato mínimo de permanencia de 3 meses para permitir el despliegue técnico, la optimización algorítmica y la consolidación de tu flujo de contratación. Todos los pagos son no reembolsables debido a los costos operativos inmediatos y servidores dedicados asignados a tu agencia.',
    },
    {
      q: '¿Cómo funciona el presupuesto publicitario incluido?',
      a: 'Dentro de tu cuota mensual de $789 USD ya contemplamos el presupuesto publicitario necesario en Meta Ads para mantener activas las campañas de atracción sin que tengas que lidiar con cuentas complejas ni recargos sorpresa.',
    },
    {
      q: '¿Cuánto tiempo tarda la instalación e inicio de entrevistas?',
      a: 'Una vez completado el onboarding inicial y recibidos los accesos, nuestro equipo técnico tarda entre 3 a 5 días hábiles en tener tus agentes IA, embudos y campañas operando. Muchos líderes reciben sus primeras entrevistas agendadas durante la primera semana.',
    },
    {
      q: '¿Los candidatos y datos de mi agencia me pertenecen?',
      a: 'Sí, 100%. Todos los prospectos, contactos, conversaciones y métricas generadas son propiedad exclusiva de tu agencia. Tienes acceso completo e irrestricto a tu subcuenta.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] border-t border-[#EDE3D5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-bold tracking-wide uppercase mb-3">
            <HelpCircle size={14} />
            <span>Preguntas frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#060E32] tracking-tight">
            Todo claro desde el primer día
          </h2>
          <p className="mt-3 text-base text-[#4B5578]">
            Respuestas transparentes para que tomes la mejor decisión para escalar tu equipo de agentes.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="clean-card overflow-hidden transition-all duration-200 bg-white shadow-sm"
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
