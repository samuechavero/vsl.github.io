import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué es exactamente la subcuenta de plataforma de gestión?',
      a: 'Nosotros te entregamos una subcuenta oficial 100% a tu nombre donde eres dueño absoluto de tus datos y contactos. En ella dejamos instalados nuestros embudos probados para venta de IUL y pólizas, así como embudos de atracción para nuevos agentes, calendarios sincronizados y secuencias automáticas de seguimiento.',
    },
    {
      q: '¿Cómo funciona el presupuesto publicitario incluido?',
      a: 'A diferencia de otras agencias que te cobran honorarios elevados y luego te piden dinero extra para comenzar a pautar, en tu inversión mensual de $769 USD ya viene contemplado el presupuesto publicitario necesario para mantener tus campañas activas e inyectar prospectos precalificados a tu calendario de manera continua.',
    },
    {
      q: '¿El sistema sirve tanto para vender pólizas como para reclutar agentes?',
      a: 'Sí, exactamente. El ecosistema está diseñado con dos motores activos: embudos y campañas publicitarias enfocadas en atraer familias interesadas en IUL / seguros de vida, y embudos en paralelo diseñados para atraer profesionales que desean unirse a tu equipo como agentes bajo tu liderazgo.',
    },
    {
      q: '¿Por qué es indispensable la telefonía con número exclusivo?',
      a: 'La rapidez de contacto marca la diferencia entre cerrar un cliente o perderlo. Al integrar un número telefónico exclusivo a tu nombre, el sistema envía mensajes instantáneos por SMS y WhatsApp a cada persona que llena el formulario, enviando confirmaciones y recordatorios automáticos para asegurar que asistan a la cita.',
    },
    {
      q: '¿Cuánto tiempo tarda la instalación completa?',
      a: 'Una vez completado el formulario inicial de bienvenida y tu sesión de diagnóstico, nuestro equipo técnico tarda entre 5 a 7 días hábiles en tener tu plataforma, embudos, telefonía y campañas de pauta 100% activas y operando.',
    },
    {
      q: '¿Tengo que firmar algún contrato de permanencia forzosa?',
      a: 'No. Creemos en relaciones comerciales basadas en resultados. Tu suscripción es mensual y puedes cancelarla en cualquier momento. La subcuenta, tus prospectos y tus agentes son siempre de tu propiedad.',
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
            Respuestas directas y transparentes para que tomes la mejor decisión para tu negocio.
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
