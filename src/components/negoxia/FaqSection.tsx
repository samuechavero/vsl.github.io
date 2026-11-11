import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué es exactamente la subcuenta de GoHighLevel y el Snapshot?',
      a: 'GoHighLevel es el software de gestión comercial líder a nivel mundial. Nosotros te creamos una subcuenta oficial 100% a tu nombre (eres dueño de tus datos) y clonamos nuestro "Snapshot" exclusivo para agentes de seguros: embudos prediseñados de IUL y retiro, formularios de calificación, calendarios y secuencias automáticas que han generado millones de dólares en primas.',
    },
    {
      q: '¿Cómo funcionan los $200 USD de publicidad incluidos en el Paquete 1?',
      a: 'A diferencia de otras agencias o plataformas que solo te cobran por el software, en tu mensualidad de $769 USD (para internos) o $1,169 USD (para externos) ya vienen incluidos $200 USD destinados directamente a tus campañas publicitarias para inyectar prospectos nuevos a tu embudo desde el primer mes.',
    },
    {
      q: '¿Por qué es indispensable la integración Twilio / LC Phone con número exclusivo?',
      a: 'La velocidad de respuesta es el factor #1 para cerrar pólizas. Al conectar tu propio número exclusivo mediante Twilio / LC Phone, el sistema responde en segundos por SMS y WhatsApp a cada persona que llena el formulario, programando recordatorios automáticos para que asistan a la cita sin que tengas que mandar un solo mensaje a mano.',
    },
    {
      q: '¿Cuál es la diferencia entre el Paquete 1 y el Paquete 2 (Publicidad Propia)?',
      a: 'El Paquete 1 te entrega toda la infraestructura tecnológica (CRM, Snapshot, Twilio, soporte y $200 de ads). El Paquete 2 (+ $800 USD/mes) añade la gestión publicitaria experta en Meta Ads realizada por nuestro equipo, junto con regalos exclusivos al 100%: creación de tu historia / eBook, diseño de tu Landing Page y producción continua de creativos y videos para anuncios.',
    },
    {
      q: '¿Cuánto tiempo tarda la instalación completa?',
      a: 'Una vez completado el formulario de bienvenida y la llamada inicial de diagnóstico, nuestro equipo técnico tarda entre 5 a 7 días hábiles en tener tu subcuenta, embudo, telefonía y campañas 100% activas y operando.',
    },
    {
      q: '¿Tengo que firmar algún contrato de permanencia forzosa?',
      a: 'No. No creemos en retener a nadie con contratos abusivos. Tu suscripción es mensual y puedes cancelarla en cualquier momento avisando con 15 días de anticipación. Además, la subcuenta y los prospectos generados son siempre de tu propiedad.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] border-t border-[#EDE3D5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold tracking-wide uppercase mb-3">
            <HelpCircle size={14} />
            <span>Preguntas frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E32] tracking-tight">
            Todo claro desde el primer día
          </h2>
          <p className="mt-3 text-base text-[#4B5578]">
            Respuestas directas para que tomes una decisión informada para tu agencia.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="clean-card overflow-hidden transition-all duration-200 bg-white"
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
