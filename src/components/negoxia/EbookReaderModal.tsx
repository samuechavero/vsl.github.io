import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, MessageCircle, Sparkles, CheckCircle2, X, ShieldCheck } from 'lucide-react';

interface EbookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_URL = 'https://wa.me/18328901102?text=Hola%20Samuel%2C%20acabo%20de%20leer%20tu%20libro%20El%20Vendedor%20Invisible%20y%20quiero%20construir%20mi%20m%C3%A1quina%20de%20adquisici%C3%B3n.';

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] overflow-y-auto bg-[#040A24] text-white flex flex-col font-sans selection:bg-[#1258FA] selection:text-white">
      {/* Sticky Top Bar con "Volver a la página principal" */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#040A24]/90 border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
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
            <span>Lectura Oficial Online</span>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Cerrar libro"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
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
            <span>E-Book Exclusivo · Negoxia Autopilot</span>
          </div>

          {/* Book Cover Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group max-w-[240px] sm:max-w-[280px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(18,88,250,0.35)] border-2 border-[#16D1F5]/30">
              <img
                src="./ebook-cover.png"
                alt="La Anatomía del Vendedor Invisible - Samuel Chavero"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040A24]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            La Anatomía del <span className="text-gradient-blue">Vendedor Invisible</span>
          </h1>

          <p className="text-lg sm:text-xl font-bold text-[#16D1F5] max-w-xl mx-auto leading-snug mb-3">
            El secreto que utilizan los empresarios para atraer a sus clientes ideales
          </p>

          <p className="text-sm italic text-white/60 font-medium">
            Por Samuel Chavero
          </p>
        </div>

        {/* Book Content - Maquetación con correcta jerarquía HTML */}
        <article className="prose prose-invert prose-headings:text-white prose-p:text-[#CBD5E1] prose-strong:text-white prose-p:leading-relaxed max-w-none space-y-8 text-base sm:text-lg">
          {/* Introducción */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#08123B]/80 border border-[#1258FA]/30 shadow-xl leading-relaxed">
            <p className="text-[#E2E8F0] font-medium text-base sm:text-lg m-0 leading-relaxed">
              Descubre <strong>"El Vendedor Invisible"</strong>, el sistema que los dueños de negocio del 1% utilizan para atraer clientes de alto valor sin presiones ni tácticas obsoletas. Aprende a convertirte en una autoridad en tu industria, eliminando la resistencia del cliente y generando citas predecibles mediante estrategias innovadoras. Libérate del estrés del autoempleo y transforma tu negocio en una máquina de ventas eficiente que trabaja incluso mientras duermes.
            </p>
          </div>

          {/* Sección 1 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight border-l-4 border-[#16D1F5] pl-4">
              La Cruda Realidad
            </h2>
            <p className="text-[#CBD5E1] leading-relaxed">
              Si estás leyendo esto, es probable que seas excelente en lo que haces. Tienes un gran servicio, tus clientes actuales te aman y sabes que aportas un valor real al mercado. Pero tienes un problema que te quita el sueño: <strong>Tu flujo de nuevos clientes no es predecible.</strong>
            </p>
            <p className="text-[#CBD5E1] leading-relaxed">
              Si te pregunto ahora mismo: <em>"¿Cuántos clientes nuevos y calificados van a entrar por tu puerta (o a tu celular) el próximo martes a las 3:00 p.m.?"</em> ... probablemente no sepas la respuesta.
            </p>
          </div>

          {/* Sección 2 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight border-l-4 border-[#1258FA] pl-4">
              Estrategia de la Esperanza
            </h2>
            <p className="text-[#CBD5E1] leading-relaxed">
              La mayoría de los dueños de negocio operan bajo la Estrategia de la Esperanza: rezan para que un cliente actual los recomiende, gastan miles de dólares en agencias que solo les dan "likes", o peor aún, pierden horas valiosas persiguiendo a prospectos que no tienen dinero para pagarles.
            </p>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1258FA]/15 to-[#16D1F5]/10 border-l-4 border-[#16D1F5] my-6">
              <p className="text-white font-extrabold text-base sm:text-lg m-0 italic">
                El "boca a boca" es excelente, pero no es un modelo de negocio escalable. Si no tienes una máquina que genere citas predecibles, no tienes un negocio; tienes un autoempleo muy estresante.
              </p>
            </div>
          </div>

          {/* Sección 3 */}
          <div className="space-y-5 pt-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight border-l-4 border-[#16D1F5] pl-4">
              El Fin de la Fricción
            </h2>
            <p className="text-[#CBD5E1] leading-relaxed">
              Las élites de tu industria no persiguen clientes, los atraen y los filtran. Ellos entienden que el cliente de alto valor de hoy no quiere que le vendan, quiere comprar con estatus. No quiere hablar con un vendedor desesperado; quiere ser diagnosticado por una autoridad.
            </p>
            <p className="text-[#CBD5E1] leading-relaxed">
              Para lograr esto, no necesitas ser un genio de la tecnología. Solo necesitas un ecosistema de 3 piezas que trabaje para ti 24/7. Yo lo llamo <strong>"El Vendedor Invisible"</strong>.
            </p>

            {/* Piezas del Ecosistema */}
            <div className="space-y-4 mt-6">
              {/* Pieza 1 */}
              <div className="p-6 rounded-2xl bg-[#08123B]/60 border border-[#16D1F5]/25">
                <h3 className="text-xl font-black text-[#16D1F5] tracking-tight mb-2.5">
                  Pieza #1 - El Imán de Autoridad
                </h3>
                <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed m-0">
                  Nadie le compra a un desconocido. El Vendedor Invisible no interrumpe a la gente pidiéndoles su tarjeta de crédito. Primero, les entrega valor masivo y gratuito que resuelve un pequeño problema. (Exactamente como este documento que estás leyendo ahora). Al entregar valor primero, eliminas la resistencia. El prospecto baja sus defensas y te percibe como un experto, no como un vendedor.
                </p>
              </div>

              {/* Pieza 2 */}
              <div className="p-6 rounded-2xl bg-[#08123B]/60 border border-[#1258FA]/30">
                <h3 className="text-xl font-black text-[#16D1F5] tracking-tight mb-2.5">
                  Pieza #2 - La Bóveda de Captura
                </h3>
                <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed m-0">
                  Olvídate de tu sitio web tradicional. Los sitios web corporativos con botones de "Misión", "Visión" y "Contáctanos" son laberintos donde el cliente se pierde y se va. El Vendedor Invisible utiliza una Bóveda de Captura (una página de un solo objetivo). Su única misión es ofrecer el Imán de Autoridad a cambio del Nombre, Correo y WhatsApp del prospecto. Así es como separas a los curiosos de los que tienen verdadera intención de compra, construyendo una base de datos que tú controlas al 100%.
                </p>
              </div>

              {/* Pieza 3 */}
              <div className="p-6 rounded-2xl bg-[#08123B]/60 border border-[#16D1F5]/25">
                <h3 className="text-xl font-black text-[#16D1F5] tracking-tight mb-2.5">
                  Pieza #3 - El Clon de Ventas Automático
                </h3>
                <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed m-0">
                  Aquí es donde ocurre la magia. Una vez que el prospecto entra a la Bóveda, no lo mandas a un callejón sin salida. Lo llevas frente a tu Clon de Ventas. Es un video corto, estratégico y directo al grano, donde tú (o tu mensaje) hace la presentación perfecta. Sin nervios, sin olvidar partes importantes, sin que te interrumpan. Tu Clon de Ventas diagnostica el problema del cliente, eleva el valor de tu solución y le dice exactamente qué hacer a continuación (agendar una cita o comprar). Mientras tú estás durmiendo, cenando con tu familia o atendiendo la operación de tu negocio, tu Clon está cerrando tratos.
                </p>
              </div>
            </div>
          </div>

          {/* Sección 4 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight border-l-4 border-[#1258FA] pl-4">
              La Gran Revelación
            </h2>
            <p className="text-[#CBD5E1] leading-relaxed">
              Analiza por un segundo lo que acaba de pasar. Tú viste un mensaje mío, te llamó la atención, dejaste tus datos en mi Bóveda y ahora estás invirtiendo tu valioso tiempo leyendo mi estrategia. <strong>Mi Vendedor Invisible funcionó contigo.</strong>
            </p>
            <p className="text-[#CBD5E1] leading-relaxed">
              Imagina tener este mismo nivel de predictibilidad exacto, pero aplicado a tu negocio. Imagina despertar cada mañana con notificaciones en tu celular de personas que ya pasaron por tu filtro, ya vieron tu video y están listos para pagarte por tus servicios.
            </p>
          </div>

          {/* Sección 5 - Opciones */}
          <div className="space-y-5 pt-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight border-l-4 border-[#16D1F5] pl-4">
              Tienes dos opciones:
            </h2>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <p className="text-white font-bold m-0">
                <strong className="text-amber-400">Opción 1:</strong> Intentar armar este rompecabezas técnico tú solo. Perder meses probando herramientas, escribiendo textos que no convierten y gastando miles de dólares en el proceso.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1258FA]/20 to-[#16D1F5]/20 border-2 border-[#16D1F5]/40 shadow-xl space-y-2">
              <p className="text-white font-black text-base sm:text-lg m-0">
                <strong className="text-[#16D1F5]">Opción 2:</strong> Dejar que mi equipo y yo instalemos este Ecosistema Completo de Adquisición de Clientes en tu negocio esta misma semana, por una fracción de lo que te cobraría cualquier agencia tradicional.
              </p>
            </div>

            <p className="text-[#E2E8F0] font-extrabold text-lg sm:text-xl text-center py-4 leading-relaxed">
              Si estás listo para dejar de rogar por referidos y quieres que construyamos tu máquina, toca el enlace de WhatsApp en la web y hablemos.
            </p>
          </div>
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
              <span>Atención personalizada directa sin compromiso</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
