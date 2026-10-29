import { useEffect, useState, useRef } from "react";
import { supabase } from "./lib/supabaseClient";
import { AscentPresentation } from "./components/ascent/AscentPresentation";

const WHATSAPP_URL = "https://wa.me/18328901102?text=Hola%20Ascent,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20sistema";
const INSTAGRAM_URL = "https://www.instagram.com/ascentllc.us/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61588301643585&locale=es_LA";

type TopProducer = {
  name: string;
  company: string;
  image: string;
  initials: string;
};

const TOP_PRODUCERS: TopProducer[] = [
  {
    name: "Isidro Perez",
    company: "WFG (World Financial Group)",
    image: "./isidroperez.JPG",
    initials: "IP",
  },
  {
    name: "Ana Cordones",
    company: "Curiman Brokers Group",
    image: "./anacordones.JPG",
    initials: "AC",
  },
  {
    name: "Patricia Bautista",
    company: "WFG (World Financial Group)",
    image: "./patriciabautista.JPG",
    initials: "PB",
  },
  {
    name: "Angel Caridad",
    company: "National Life Group",
    image: "./angelcaridad.JPG",
    initials: "AC",
  },
  {
    name: "Helen Jimenez",
    company: "WFG (World Financial Group)",
    image: "./helenjimenez.JPG",
    initials: "HJ",
  },
  {
    name: "Juan C. Franco",
    company: "Solid Financial Plan",
    image: "./juancfranco.JPG",
    initials: "JF",
  },
  {
    name: "Marisol Aguero",
    company: "Seguros con Marisol",
    image: "./marisolaguero.JPG",
    initials: "MA",
  },
  {
    name: "David Reyes",
    company: "WFG (World Financial Group)",
    image: "./davidreyes.JPG",
    initials: "DR",
  },
];

function Modal({ onUnlock }: { onUnlock: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) {
      setError("Por favor, ingresa tu nombre.");
      return;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 8) {
      setError("Por favor, ingresa un número de WhatsApp válido.");
      return;
    }
    setSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from("leads")
        .insert([{ nombre: name.trim(), telefono: cleanPhone }]);

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        setError("Hubo un problema de conexión. Inténtalo de nuevo.");
        setSubmitting(false);
        return;
      }

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      onUnlock();
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Ocurrió un error inesperado.");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto">
      <div className="absolute inset-0 bg-[#051314]/80 backdrop-blur-md" />
      <div className="relative w-full max-w-md fade-in">
        <div className="gem-card rounded-2xl p-7 sm:p-9 shadow-2xl">
          <div className="flex items-center justify-center mb-5">
            <div className="h-px w-10 bg-[#4A9B9B]/60" />
            <span className="px-3 text-[10px] tracking-[0.3em] uppercase diamond-text font-semibold">Acceso Privado</span>
            <div className="h-px w-10 bg-[#4A9B9B]/60" />
          </div>
          <div className="flex justify-center mb-4">
            <img src="./ascent-logo.jpg" alt="Ascent LLC" className="h-10 w-auto object-contain rounded" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-center leading-tight">
            Hay un video <span className="diamond-text italic">especial</span> para ti.
          </h2>
          <p className="text-center text-sm text-[var(--fg-muted)] mt-3">
            Completa los datos para desbloquear el acceso inmediato.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[var(--fg-muted)] mb-2">
                Tu Nombre
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-gem w-full px-4 py-3 rounded-lg text-base"
                placeholder="Nombre y apellido"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[var(--fg-muted)] mb-2">
                Tu Número de WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-gem w-full px-4 py-3 rounded-lg text-base"
                placeholder="+1 (832) 890 1102"
                autoComplete="tel"
                required
              />
            </div>

            {error && (
              <div className="text-sm text-red-400 text-center">{error}</div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn-gem w-full py-4 rounded-lg text-base sm:text-lg uppercase tracking-wider mt-2 disabled:opacity-60"
            >
              {submitting ? "Desbloqueando..." : "Ver el Video"}
            </button>
          </form>

          <p className="text-[11px] text-center text-[var(--fg-muted)] mt-5 leading-relaxed">
            Tu información es 100% confidencial. Solo se usará para enviarte recursos relacionados.
          </p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-[rgba(226,232,240,0.15)] bg-[rgba(5,19,20,0.65)] backdrop-blur-lg sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="./ascent-logo.jpg"
            alt="Ascent LLC"
            className="h-9 sm:h-11 w-auto object-contain rounded transition-transform group-hover:scale-105"
          />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--fg-muted)] hover:text-[#4A9B9B] transition-colors py-1.5 px-3.5 rounded-full border border-[rgba(226,232,240,0.15)] bg-white/5 hover:border-[#4A9B9B]/50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Hablar con Ascent
        </a>
      </div>
    </header>
  );
}

function HeroVSL({ unlocked }: { unlocked: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // El video permanece pausado hasta que el usuario hace click en el overlay
  }, [unlocked]);

  const handleInteraction = () => {
    setHasInteracted(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="top" className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-strong)] bg-white/5 text-xs uppercase tracking-[0.25em] text-[var(--fg-muted)] mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A9B9B] animate-pulse" />
          Acceso desbloqueado
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight">
          Cómo los Agentes de Seguros de Vida del{" "}
          <span className="diamond-text italic">1%</span> consiguen{" "}
          <span className="diamond-text italic">10 citas semanales</span> sin comprar leads compartidos ni rogar por referidos.
        </h1>

        <h2 className="mt-6 sm:mt-8 text-lg sm:text-xl text-[var(--fg-muted)] max-w-3xl mx-auto leading-relaxed">
          Construimos tu ecosistema de adquisición y nuestro equipo de agendadores llena tu calendario con prospectos precalificados, listos para planificar su retiro. <br className="hidden sm:block" />
          <strong className="diamond-text text-xl font-bold mt-2 inline-block">
            (Cupos limitados para garantizar 10 citas semanales por agente)
          </strong>
        </h2>

        {/* VSL container */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="gem-card rounded-2xl overflow-hidden p-1">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="./samuvsl.mp4?v=2"
                controls={hasInteracted}
                playsInline
                muted
              />

              {!hasInteracted && (
                <div
                  onClick={handleInteraction}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 cursor-pointer backdrop-blur-sm"
                >
                  <div className="bg-[#4A9B9B]/25 border border-[#4A9B9B]/60 backdrop-blur-md px-6 py-4 sm:px-8 sm:py-5 rounded-full flex items-center gap-3 sm:gap-4 animate-pulse shadow-[0_0_30px_rgba(74,155,155,0.45)] hover:bg-[#4A9B9B]/35 transition-colors">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                    </svg>
                    <span className="text-white font-black tracking-widest text-lg sm:text-xl uppercase drop-shadow-lg">
                      Toca para escuchar
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-xs text-[var(--fg-muted)] mt-3 italic">
            Mira el video completo antes de continuar.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gem inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hablar con Ascent por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  const benefits = [
    {
      title: "Lead Generation Exclusiva",
      desc: "Base de datos privada al 100%. Nunca más competirás por leads compartidos.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "Máquina de Captación 24/7",
      desc: "Página web élite y embudo optimizado para educar y pre-calificar a tus prospectos.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
    {
      title: "Autoridad Instantánea",
      desc: "E-book estratégico \"La Anatomía del Vendedor Invisible\" escrito para ti (Ghostwriting) basado en tu historia real para posicionarte como el experto.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          <path d="m14 8-2 3 2 3" />
        </svg>
      ),
    },
    {
      title: "Campañas en Piloto Automático",
      desc: "Gestión total de tus campañas publicitarias en Meta Ads, optimizadas semanalmente por nuestro equipo.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" x2="18" y1="12" y2="12" />
          <line x1="6" x2="2" y1="12" y2="12" />
          <line x1="12" x2="12" y1="6" y2="2" />
          <line x1="12" x2="12" y1="22" y2="18" />
        </svg>
      ),
    },
    {
      title: "Video Marketing de Alto Impacto",
      desc: "Guiones y edición de videos profesionales para retener la atención y generar clics de prospectos ideales.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
      ),
    },
    {
      title: "Equipo de Setters Dedicado",
      desc: "Nuestro equipo llama a tus leads en menos de 5 minutos y agenda las citas directamente en tu calendario. Tú solo te presentas a cerrar.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-5 py-2 relative">
      <div className="max-w-6xl mx-auto gem-card rounded-3xl p-7 sm:p-12 mb-16 shadow-2xl">
        <h3 className="font-display text-3xl sm:text-4xl text-center mb-10 diamond-text">
          El Ecosistema Ascent: Tu Máquina de Agendamiento
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group p-6 rounded-2xl bg-[rgba(5,19,20,0.5)] border border-[rgba(226,232,240,0.08)] hover:border-[#4A9B9B]/60 hover:bg-[rgba(74,155,155,0.12)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4A9B9B]/25 to-[#051314] border border-[#4A9B9B]/40 flex items-center justify-center text-[#4A9B9B] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(74,155,155,0.45)] transition-all duration-300">
                {b.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{b.title}</h4>
              <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Gift / Bonus Item */}
        <div className="mt-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#4A9B9B]/15 to-[#051314] border border-[#4A9B9B]/40 shadow-inner">
          <div className="w-16 h-16 shrink-0 mx-auto sm:mx-0 rounded-full bg-[#4A9B9B]/20 border border-[#4A9B9B]/50 flex items-center justify-center text-white animate-pulse">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect width="20" height="5" x="2" y="7" />
              <line x1="12" x2="12" y1="22" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">
              <span className="diamond-text text-2xl uppercase tracking-widest font-black mr-2">BONUS:</span>
            </h4>
            <p className="text-[var(--fg)] text-base sm:text-lg">
              Guiones probados y estructurados para maximizar tu tasa de cierre en las presentaciones de IUL y Gastos Finales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProducerCard({ producer }: { producer: TopProducer }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="gem-card rounded-2xl overflow-hidden group hover:border-[#4A9B9B]/80 transition-all duration-300 w-full max-w-[290px] sm:max-w-none mx-auto flex flex-col shadow-xl">
      {/* Contenedor con Aspect Ratio exacto de 9:16 (formato historia/vertical) */}
      <div
        className="relative w-full aspect-[9/16] bg-gradient-to-br from-[#102a2c] to-[#051314] overflow-hidden flex items-center justify-center"
        style={{ aspectRatio: "9 / 16" }}
      >
        {!imgError ? (
          <img
            src={producer.image}
            alt={producer.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-[#4A9B9B]/20 border border-[#4A9B9B]/50 flex items-center justify-center mb-3 shadow-[0_0_24px_rgba(74,155,155,0.4)]">
              <span className="font-display font-bold text-3xl diamond-text">{producer.initials}</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#67B8B8] font-semibold">Top Producer</span>
          </div>
        )}

        {/* Badge sutil superior */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#051314]/80 backdrop-blur-md text-[#4A9B9B] border border-[#4A9B9B]/40 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A9B9B] animate-pulse" />
            Top Producer
          </span>
        </div>

        {/* Gradiente oscuro únicamente en el tercio/mitad inferior para proteger el texto */}
        <div
          className="absolute bottom-0 inset-x-0 h-[48%] pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(5,19,20,0.96) 0%, rgba(5,19,20,0.75) 30%, rgba(5,19,20,0.3) 65%, rgba(5,19,20,0) 100%)",
          }}
        />

        {/* Texto anclado en la parte inferior con p-6 para óptimo respiro */}
        <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end z-10">
          <h4 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#4A9B9B] transition-colors leading-tight drop-shadow-md">
            {producer.name}
          </h4>
          <p className="text-xs sm:text-sm text-[#4A9B9B] font-medium mt-1 tracking-wide drop-shadow">
            {producer.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ClientsSection() {
  return (
    <section className="px-5 py-16 sm:py-24 border-t border-[rgba(226,232,240,0.1)] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] diamond-text mb-3">Resultados Comprobados</div>
          <h3 className="font-display text-4xl sm:text-5xl">Casos de Éxito</h3>
          <p className="mt-3.5 text-sm sm:text-base text-[var(--fg-muted)] max-w-2xl mx-auto leading-relaxed">
            Más de 25 profesionales y Top Producers confían en el ecosistema Ascent para escalar sus ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOP_PRODUCERS.map((p) => (
            <ProducerCard key={p.name} producer={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EbookSection() {
  return (
    <section id="lead-magnet" className="px-5 py-16 sm:py-24 border-t border-[rgba(226,232,240,0.1)] relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div className="flex justify-center md:justify-end">
          <div className="book">
            <div className="book-inner flex flex-col justify-between p-6 sm:p-7 text-left">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] diamond-text mb-3">Manual Estratégico</div>
                <div className="h-px w-12 bg-[#4A9B9B] mb-5" />
                <h3 className="font-display text-2xl sm:text-3xl text-white leading-tight">
                  La Anatomía del <span className="diamond-text italic">Vendedor Invisible</span>
                </h3>
              </div>
              <div>
                <div className="h-px w-12 bg-[#4A9B9B] mb-3" />
                <div className="text-xs uppercase tracking-widest text-[var(--fg-muted)] font-semibold">
                  Ascent LLC
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="text-xs uppercase tracking-[0.3em] diamond-text mb-4">E-Book Gratuito</div>
          <h3 className="font-display text-3xl sm:text-5xl leading-tight">
            La Anatomía del <span className="diamond-text italic">Vendedor Invisible</span>
          </h3>
          <p className="mt-5 text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed max-w-xl mx-auto md:mx-0">
            Descubre el ecosistema exacto que elimina el trabajo de prospección en frío y convierte desconocidos en citas calificadas directamente en tu calendario.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="./el-vendedor-invisible.pdf"
              download
              className="btn-gem inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Descargar E-book
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-gem inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
            >
              Hablar con Ascent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="px-5 py-16 sm:py-24 border-t border-[rgba(74,155,155,0.2)] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] diamond-text mb-3">Equipo Fundador</div>
          <h3 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            Sobre Ascent: <span className="diamond-text italic">Los Arquitectos de tu Crecimiento</span>
          </h3>
          <p className="mt-4 text-[var(--fg-muted)] max-w-2xl mx-auto text-base sm:text-lg">
            Combinamos ingeniería de adquisición digital de alto calibre con operaciones de agendamiento en tiempo real para que tú solo te presentes a cerrar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Perfil 1: Samuel Chavero */}
          <div className="gem-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6 text-center sm:text-left">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#4A9B9B]/60 bg-gradient-to-br from-[#102a2c] to-[#051314] shrink-0 shadow-[0_0_24px_rgba(74,155,155,0.35)]">
                  <img
                    src="./samuprofile.jpeg?v=4"
                    className="w-full h-full object-cover"
                    alt="Samuel Chavero"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                    Samuel <span className="diamond-text italic">Chavero</span>
                  </h4>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-[#4A9B9B] font-bold mt-1.5">
                    Co-fundador y Arquitecto de Adquisición Digital
                  </div>
                </div>
              </div>

              <p className="text-[var(--fg-muted)] leading-relaxed text-sm sm:text-base text-justify sm:text-left">
                Samuel combina su profunda experiencia técnica como desarrollador de software y consultor de digitalización con la estrategia de ventas pura. En Ascent, él es el ingeniero detrás de tu ecosistema de captación: diseña los embudos de alta conversión, automatiza los sistemas de seguimiento y dirige la pauta publicitaria. Su misión es eliminar la fricción técnica para que los Top Producers operen con sistemas precisos, escalables y predecibles, transformando el tráfico digital en un flujo constante de clientes ideales.
              </p>
            </div>
          </div>

          {/* Perfil 2: Julieta Davila */}
          <div className="gem-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6 text-center sm:text-left">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#4A9B9B]/60 bg-gradient-to-br from-[#1b3d40] to-[#051314] shrink-0 shadow-[0_0_24px_rgba(74,155,155,0.35)]">
                  <img
                    src="./julietaprofile.jpeg"
                    className="w-full h-full object-cover"
                    alt="Julieta Davila"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                    Julieta <span className="diamond-text italic">Davila</span>
                  </h4>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-[#4A9B9B] font-bold mt-1.5">
                    Co-fundadora y Directora de Operaciones (COO)
                  </div>
                </div>
              </div>

              <p className="text-[var(--fg-muted)] leading-relaxed text-sm sm:text-base text-justify sm:text-left">
                Con una sólida trayectoria directiva en la gestión de proyectos, recursos humanos y desarrollo empresarial, Julieta es el motor operativo de Ascent. Ella es la encargada de alinear la estrategia de talento con tus objetivos de ventas, liderando y entrenando al equipo de agendadores (setters) bajo métricas de alto rendimiento. Su estricto control de calidad y enfoque en la mejora continua garantizan que cada prospecto sea contactado en minutos, traduciendo los leads digitales en citas reales y precalificadas en tu calendario.
              </p>
            </div>
          </div>
        </div>

        {/* Canales Oficiales de Ascent */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[var(--fg-muted)]">Canales Oficiales:</span>
          <div className="flex gap-3 justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-social"
              aria-label="Instagram Ascent"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-social"
              aria-label="Facebook Ascent"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-social"
              aria-label="WhatsApp Ascent"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onOpenPresentation }: { onOpenPresentation: () => void }) {
  return (
    <section className="px-5 py-16 sm:py-20 border-t border-[rgba(226,232,240,0.1)] relative">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-display text-3xl sm:text-5xl leading-tight">
          ¿Listo para convertirte en un <span className="diamond-text italic">Top Producer</span> con tu propio sistema de agendamiento?
        </h3>
        <p className="mt-5 text-[var(--fg-muted)] text-base sm:text-lg">
          Conversemos directamente con el equipo de Ascent. Sin intermediarios, sin formularios eternos.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gem inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg w-full sm:w-auto"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hablar con Ascent
          </a>
          <button
            type="button"
            onClick={onOpenPresentation}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full text-lg font-medium text-white border border-[#4A9B9B]/60 bg-[rgba(5,19,20,0.8)] hover:bg-[rgba(74,155,155,0.22)] hover:border-[#69bcbc] shadow-[0_0_24px_rgba(74,155,155,0.3)] hover:shadow-[0_0_35px_rgba(74,155,155,0.6)] transition-all duration-300 w-full sm:w-auto cursor-pointer group"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#69bcbc] group-hover:scale-110 transition-transform">
              <rect width="18" height="14" x="3" y="3" rx="2" />
              <path d="M7 21h10" />
              <path d="M12 17v4" />
              <path d="m10 8 5 3-5 3V8z" fill="currentColor" />
            </svg>
            Ver Presentación Comercial
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer({ onOpenPresentation }: { onOpenPresentation: () => void }) {
  return (
    <footer className="border-t border-[rgba(226,232,240,0.1)] bg-[rgba(5,19,20,0.85)] px-5 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--fg-muted)]">
        <div className="flex items-center gap-3">
          <img src="./ascent-logo.jpg" alt="Ascent LLC" className="h-8 w-auto object-contain rounded" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button
            type="button"
            onClick={onOpenPresentation}
            className="text-[#69bcbc] hover:text-white font-medium transition-colors cursor-pointer flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="14" x="3" y="3" rx="2" />
              <path d="M7 21h10" />
              <path d="M12 17v4" />
            </svg>
            Ver Presentación
          </button>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#4A9B9B] transition-colors">
            Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:text-[#4A9B9B] transition-colors">
            Facebook
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-[#4A9B9B] transition-colors">
            WhatsApp
          </a>
        </div>
        <div className="text-xs sm:text-sm">
          © 2026 Ascent LLC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingEbookCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#lead-magnet"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("lead-magnet")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[99] flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-4 rounded-full bg-[rgba(5,19,20,0.9)] backdrop-blur-md border border-[#4A9B9B]/50 text-white shadow-[0_0_24px_rgba(74,155,155,0.4)] hover:shadow-[0_0_36px_rgba(74,155,155,0.7)] hover:bg-[rgba(74,155,155,0.18)] transition-all duration-300 animate-bounce group"
    >
      <span className="text-xl sm:text-2xl drop-shadow-md">🎁</span>
      <span className="font-bold text-xs sm:text-sm tracking-widest uppercase group-hover:text-[#4A9B9B] transition-colors">
        E-book de Regalo Abajo
      </span>
    </a>
  );
}

function MainContent({ unlocked, onOpenPresentation }: { unlocked: boolean; onOpenPresentation: () => void }) {
  return (
    <div className="fade-in">
      <Header />
      <HeroVSL unlocked={unlocked} />
      <ValueSection />
      <ClientsSection />
      <EbookSection />
      <AuthoritySection />
      <FinalCTA onOpenPresentation={onOpenPresentation} />
      <Footer onOpenPresentation={onOpenPresentation} />
    </div>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#presentacion" || hash === "#presentation") {
        setShowPresentation(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    if (unlocked && !showPresentation) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [unlocked, showPresentation]);

  const handleOpenPresentation = () => {
    setShowPresentation(true);
    window.location.hash = "presentacion";
  };

  const handleClosePresentation = () => {
    setShowPresentation(false);
    if (window.location.hash === "#presentacion" || window.location.hash === "#presentation") {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <>
      <div className="min-h-screen relative">
        <div className="parallax-bg" />
        <div className={unlocked ? "" : "blur-bg select-none"}>
          <MainContent
            unlocked={unlocked}
            onOpenPresentation={handleOpenPresentation}
          />
        </div>
        {!unlocked && <Modal onUnlock={() => setUnlocked(true)} />}
      </div>
      <FloatingEbookCTA />
      {showPresentation && (
        <AscentPresentation onClose={handleClosePresentation} />
      )}
    </>
  );
}
