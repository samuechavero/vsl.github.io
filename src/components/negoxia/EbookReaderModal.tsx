import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, MessageCircle, Sparkles, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { BookCoverCode } from './BookCoverCode';

interface EbookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_URL = 'https://wa.me/18328901102?text=Hola%20Negoxia%2C%20acabo%20de%20leer%20el%20libro%20El%20Vendedor%20Invisible%20y%20quiero%20escalar%20mi%20negocio.';

export const EbookReaderModal: React.FC<EbookReaderModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Listener para cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] overflow-y-auto bg-[#040A24] text-white flex flex-col font-sans selection:bg-[#1258FA] selection:text-white">
      {/* Sticky Top Bar con botón permanente "Volver a la página principal" y "X" */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#040A24]/95 border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-[#1258FA]/30 hover:to-[#16D1F5]/20 border border-white/20 hover:border-[#16D1F5]/50 text-white text-xs sm:text-sm font-black transition-all cursor-pointer shadow-lg group active:scale-95"
        >
          <ArrowLeft size={17} className="text-[#16D1F5] group-hover:-translate-x-1 transition-transform" />
          <span>Volver a la página principal</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1258FA]/15 border border-[#16D1F5]/30 text-[11px] font-extrabold text-[#16D1F5]">
            <BookOpen size={13} />
            <span>Lector Oficial Negoxia</span>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Cerrar libro"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer border border-white/10"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main Reading Container */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 sm:px-8 py-10 sm:py-16">
        {/* Cover & Title Section */}
        <div className="text-center mb-12 sm:mb-16 pb-10 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/10 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-black uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>E-Book Digital · Negoxia</span>
          </div>

          {/* Book Cover mediante Código CSS 3D */}
          <div className="flex justify-center mb-8">
            <BookCoverCode />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            La Anatomía del <span className="text-gradient-blue">Vendedor Invisible</span>
          </h1>

          <p className="text-base sm:text-xl font-bold italic text-[#16D1F5] max-w-2xl mx-auto leading-relaxed mb-6">
            El secreto que utilizan los empresarios para atraer a sus clientes ideales.
          </p>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#08123B]/80 border border-[#1258FA]/40 shadow-xl max-w-2xl mx-auto text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#16D1F5] mb-2.5">
              Sinopsis / Introducción
            </h2>
            <p className="text-[#E2E8F0] font-medium text-sm sm:text-base leading-relaxed m-0">
              Descubre &quot;El Vendedor Invisible&quot;, el sistema que los dueños de negocio del 1% utilizan para atraer clientes de alto valor sin presiones ni tácticas obsoletas.
              <br /><br />
              Aprende a convertirte en una autoridad en tu industria, eliminando la resistencia del cliente y generando citas predecibles mediante estrategias innovadoras.
              <br /><br />
              Libérate del estrés del autoempleo y transforma tu negocio en una máquina de ventas eficiente que trabaja incluso mientras duermes.
            </p>
          </div>
        </div>

        {/* Tabla de Contenidos */}
        <div className="mb-12 p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-[#16D1F5]/30">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-[#16D1F5]" />
            <span>Tabla de Contenidos</span>
          </h2>
          <ul className="space-y-2.5 text-sm sm:text-base text-[#CBD5E1]">
            {[
              'El sistema exacto que los dueños de negocio del 1% utilizan para atraer clientes de alto valor, sin hacer llamadas en frío ni rogar por referidos.',
              'La Cruda Realidad',
              'El Fin de la Fricción',
              'Pieza #1 - El Imán de Autoridad',
              'Pieza #2 - La Bóveda de Captura',
              'Pieza #3 - El Clon de Ventas Automático',
              'La Gran Revelación',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-white/90 font-medium">
                <ChevronRight size={16} className="text-[#16D1F5] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px w-full bg-white/10 my-10" />

        {/* Book Content - Maquetación con estructura jerárquica exacta requerida */}
        <article className="space-y-12 text-base sm:text-lg leading-relaxed text-[#CBD5E1]">
          {/* SECCIÓN 1 */}
          <section className="space-y-5">
            <div className="p-4 rounded-xl bg-[#1258FA]/15 border border-[#1258FA]/30 text-xs font-black uppercase tracking-widest text-[#16D1F5]">
              SECCIÓN 1
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              El Vendedor Invisible
            </h2>
            <p className="text-base sm:text-lg font-bold text-[#16D1F5]">
              El sistema exacto que los dueños de negocio del 1% utilizan para atraer clientes de alto valor, sin hacer llamadas en frío ni rogar por referidos.
            </p>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-3 border-l-4 border-[#16D1F5] pl-4">
              La Cruda Realidad
            </h3>
            <p>
              Si estás leyendo esto, es probable que seas excelente en lo que haces. Tienes un gran servicio, tus clientes actuales te aman y sabes que aportas un valor real al mercado. Pero tienes un problema que te quita el sueño: <strong className="text-white">Tu flujo de nuevos clientes no es predecible.</strong>
            </p>
            <p>
              Si te pregunto ahora mismo: <em>&quot;¿Cuántos clientes nuevos y calificados van a entrar por tu puerta (o a tu celular) el próximo martes a las 3:00 p.m.?&quot;</em> ... probablemente no sepas la respuesta.
            </p>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-3 border-l-4 border-[#1258FA] pl-4">
              La Estrategia de la Esperanza
            </h3>
            <p>
              La mayoría de los dueños de negocio operan bajo la Estrategia de la Esperanza: rezan para que un cliente actual los recomiende, gastan miles de dólares en agencias que solo les dan &quot;likes&quot;, o peor aún, pierden horas valiosas persiguiendo a prospectos que no tienen dinero para pagarles.
            </p>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1258FA]/15 to-[#16D1F5]/10 border-l-4 border-[#16D1F5] my-4">
              <p className="text-white font-extrabold text-base sm:text-lg m-0 italic">
                El &quot;boca a boca&quot; es excelente, pero no es un modelo de negocio escalable. Si no tienes una máquina que genere citas predecibles, no tienes un negocio; tienes un autoempleo muy estresante.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-3 border-l-4 border-[#16D1F5] pl-4">
              El Fin de la Fricción
            </h3>
            <p>
              Las élites de tu industria no persiguen clientes, los atraen y los filtran. Ellos entienden que el cliente de alto valor de hoy no quiere que le vendan, quiere comprar con estatus. No quiere hablar con un vendedor desesperado; quiere ser diagnosticado por una autoridad.
            </p>
            <p>
              Para lograr esto, no necesitas ser un genio de la tecnología. Solo necesitas un ecosistema de 3 piezas que trabaje para ti 24/7. Yo lo llamo <strong className="text-white">&quot;El Vendedor Invisible&quot;</strong>.
            </p>
          </section>

          <div className="h-px w-full bg-white/10 my-8" />

          {/* SECCIÓN 2: LAS 3 PIEZAS */}
          <section className="space-y-6">
            <div className="p-4 rounded-xl bg-[#1258FA]/15 border border-[#1258FA]/30 text-xs font-black uppercase tracking-widest text-[#16D1F5]">
              SECCIÓN 2: LAS 3 PIEZAS
            </div>

            {/* Pieza #1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#08123B]/70 border border-[#16D1F5]/30 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-black text-[#16D1F5] tracking-tight mb-3">
                Pieza #1 - El Imán de Autoridad
              </h3>
              <p className="mb-3 text-white/90">
                Nadie le compra a un desconocido. El Vendedor Invisible no interrumpe a la gente pidiéndoles su tarjeta de crédito. Primero, les entrega valor masivo y gratuito que resuelve un pequeño problema. (Exactamente como este documento que estás leyendo ahora).
              </p>
              <p className="m-0 text-white/90 font-semibold">
                Al entregar valor primero, eliminas la resistencia. El prospecto baja sus defensas y te percibe como un experto, no como un vendedor.
              </p>
            </div>

            {/* Pieza #2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#08123B]/70 border border-[#1258FA]/40 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-black text-[#16D1F5] tracking-tight mb-3">
                Pieza #2 - La Bóveda de Captura
              </h3>
              <p className="mb-3 text-white/90">
                Olvídate de tu sitio web tradicional. Los sitios web corporativos con botones de &quot;Misión&quot;, &quot;Visión&quot; y &quot;Contáctanos&quot; son laberintos donde el cliente se pierde y se va.
              </p>
              <p className="m-0 text-white/90 font-semibold">
                El Vendedor Invisible utiliza una Bóveda de Captura (una página de un solo objetivo). Su única misión es ofrecer el Imán de Autoridad a cambio del Nombre, Correo y WhatsApp del prospecto. Así es como separas a los curiosos de los que tienen verdadera intención de compra, construyendo una base de datos que tú controlas al 100%.
              </p>
            </div>

            {/* Pieza #3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#08123B]/70 border border-[#16D1F5]/30 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-black text-[#16D1F5] tracking-tight mb-3">
                Pieza #3 - El Clon de Ventas Automático
              </h3>
              <p className="mb-3 text-white/90">
                Aquí es donde ocurre la magia. Una vez que el prospecto entra a la Bóveda, no lo mandas a un callejón sin salida. Lo llevas frente a tu Clon de Ventas.
              </p>
              <p className="mb-3 text-white/90">
                Es un video corto, estratégico y directo al grano, donde tú (o tu mensaje) hace la presentación perfecta. Sin nervios, sin olvidar partes importantes, sin que te interrumpan. Tu Clon de Ventas diagnostica el problema del cliente, eleva el valor de tu solución y le dice exactamente qué hacer a continuación (agendar una cita o comprar).
              </p>
              <p className="m-0 text-white/90 font-semibold">
                Mientras tú estás durmiendo, cenando con tu familia o atendiendo la operación de tu negocio, tu Clon está cerrando tratos.
              </p>
            </div>
          </section>

          <div className="h-px w-full bg-white/10 my-8" />

          {/* SECCIÓN 3: CIERRE */}
          <section className="space-y-6">
            <div className="p-4 rounded-xl bg-[#1258FA]/15 border border-[#1258FA]/30 text-xs font-black uppercase tracking-widest text-[#16D1F5]">
              SECCIÓN 3: CIERRE
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight border-l-4 border-[#1258FA] pl-4">
              La Gran Revelación
            </h2>
            <p>
              Analiza por un segundo lo que acaba de pasar. Tú viste un mensaje, te llamó la atención, dejaste tus datos en la Bóveda y ahora estás invirtiendo tu valioso tiempo leyendo esta estrategia. <strong className="text-white">El Vendedor Invisible funcionó contigo.</strong>
            </p>
            <p>
              Imagina tener este mismo nivel de predictibilidad exacto, pero aplicado a tu negocio. Imagina despertar cada mañana con notificaciones en tu celular de personas que ya pasaron por tu filtro, ya vieron tu video y están listos para pagarte por tus servicios.
            </p>
            <p className="text-white font-black text-lg pt-2">
              Tienes dos opciones:
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
              <p className="text-white m-0">
                <strong className="text-amber-400">Opción 1:</strong> Intentar armar este rompecabezas técnico tú solo. Perder meses probando herramientas, escribiendo textos que no convierten y gastando miles de dólares en el proceso.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1258FA]/25 to-[#16D1F5]/20 border-2 border-[#16D1F5]/50 shadow-xl space-y-1">
              <p className="text-white font-extrabold text-base sm:text-lg m-0">
                <strong className="text-[#16D1F5]">Opción 2:</strong> Dejar que nuestro equipo instale este Ecosistema Completo de Adquisición de Clientes en tu negocio esta misma semana, por una fracción de lo que te cobraría cualquier agencia tradicional.
              </p>
            </div>

            <p className="text-[#E2E8F0] font-black text-lg sm:text-xl text-center py-5 leading-relaxed">
              Si estás listo para dejar de rogar por referidos y quieres que construyamos tu máquina, toca el enlace de WhatsApp en la web y hablemos.
            </p>
          </section>
        </article>

        {/* Bottom CTA Block */}
        <div className="mt-14 pt-10 border-t border-white/10 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#08123B] to-[#040A24] border-2 border-[#16D1F5]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16D1F5]/15 border border-[#16D1F5]/30 text-[#16D1F5] text-xs font-black uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Siguiente Paso</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
              ¿Listo para instalar tu <span className="text-[#16D1F5]">Vendedor Invisible</span>?
            </h3>
            <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed mb-8">
              Hablemos directamente por WhatsApp. Revisamos tu situación actual y te mostramos cómo implementar esta misma infraestructura en tu negocio esta misma semana.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#16D1F5] to-[#1258FA] text-white font-black text-base shadow-xl shadow-[#16D1F5]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle size={19} className="fill-white" />
                <span>Escala aquí tu negocio</span>
              </a>

              <button
                onClick={onClose}
                type="button"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-base transition-all cursor-pointer"
              >
                <span>Volver a la página principal</span>
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
              <ShieldCheck size={14} className="text-[#16D1F5]" />
              <span>Atención personalizada directa sin compromiso · Negoxia</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back Button at the bottom-right for easy one-tap return */}
      <div className="fixed bottom-6 right-6 z-[100001] pointer-events-auto">
        <button
          onClick={onClose}
          type="button"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#060E32] hover:bg-[#0c184c] text-white border border-[#16D1F5]/50 shadow-2xl transition-all duration-300 cursor-pointer active:scale-95"
        >
          <ArrowLeft size={16} className="text-[#16D1F5] group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-xs sm:text-sm font-black text-white">
            Volver a la página principal
          </span>
        </button>
      </div>
    </div>
  );
};
