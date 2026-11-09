import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Se va a ver falso o robótico?',
      a: 'Para nada. La tecnología de avatares y clonación de voz ha dado un salto cuántico en los últimos meses. Tu clon utiliza tu imagen real capturada en alta resolución y un modelo de voz entrenado con tus propios armónicos, pausas y modismos. Además, tienes control absoluto: si algo en un guion o en la gesticulación no te convence al 100%, se ajusta antes de ver la luz pública.',
    },
    {
      q: '¿Tengo que grabarme cada semana?',
      a: 'No. Solo te grabas una sola vez: una sesión corta y guiada de aproximadamente 5 a 10 minutos para capturar los patrones faciales y la muestra de voz necesaria para entrenar tu modelo personalizado. En el diagnóstico de 30 minutos te explicamos exactamente cómo se realiza.',
    },
    {
      q: '¿Qué apruebo yo exactamente en el día a día?',
      a: 'Absolutamente todo. El motor genera las propuestas de guiones virales, el audio y el render final en video con subtítulos. Tú tienes un panel privado donde con un solo clic dices "Aprobado" o solicitas cambios. Nada se publica jamás sin tu consentimiento explícito.',
    },
    {
      q: '¿Cuánto tiempo tarda la instalación completa?',
      a: 'Una vez completada la sesión de grabación única, nuestro equipo tarda entre 5 a 7 días hábiles en entrenar tu clon, configurar el motor de automatización, conectar las herramientas y dejar el sistema listo para operar.',
    },
    {
      q: '¿De quién es el clon, la voz y el motor?',
      a: 'Tuyo al 100%. A diferencia de las agencias que te retienen como rehén, en Negoxia Autopilot el motor queda configurado y registrado a tu nombre. Tu avatar y tu clon de voz son de tu exclusiva propiedad.',
    },
    {
      q: '¿Garantizan seguidores o ventas específicas?',
      a: 'Nadie ético ni profesional puede prometerte un número fijo de seguidores o ventas, ya que estos dependen de la competitividad de tu oferta, el mercado, tu presupuesto publicitario y tu capacidad para cerrar prospectos. Lo que sí te garantizamos al 100% es un motor instalado, funcionando a tu nombre, con contenido que suena y se ve idéntico a ti, y la certeza de que ninguna pieza saldrá sin tu aprobación previa.',
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
            Lo que todos preguntan antes de empezar.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5578]">
            Claridad total para que tomes una decisión informada.
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#060E32] hover:text-[#1258FA] transition-colors"
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
