import { useEffect, useState, useRef } from "react";
import { supabase } from "./lib/supabaseClient";

const WHATSAPP_URL = "https://wa.me/18328901102?text=hola%20samuel%20quiero%20mas%20informacion%20sobre%20el%20sistema";

type Client = {
  name: string;
  brand: string;
  image: string;
  brandInitials: string;
  instagram: string;
  website: string;
  websiteLabel: string;
  accent: string;
};

const CLIENTS: Client[] = [
  {
    name: "Juan C. Franco",
    brand: "Solid Financial Plan",
    image: "./juancfranco.png",
    brandInitials: "SFP",
    instagram: "https://www.instagram.com/solidfinancialplan/",
    website: "https://juancfranco.com",
    websiteLabel: "juancfranco.com",
    accent: "from-amber-900/40 to-zinc-900",
  },
  {
    name: "Isidro Pérez",
    brand: "WFG · Arena Financial Center",
    image: "./isidroperez.png",
    brandInitials: "AFC",
    instagram: "https://www.instagram.com/arenafinancialcenter/",
    website: "https://www.arenafinancialcenter.com",
    websiteLabel: "arenafinancialcenter.com",
    accent: "from-emerald-900/30 to-zinc-900",
  },
  {
    name: "Ana Cordones",
    brand: "Curiman Brokers",
    image: "./anacordones.png",
    brandInitials: "CB",
    instagram: "https://www.instagram.com/anacordonesinsurance/",
    website: "https://www.anacordones.com",
    websiteLabel: "anacordones.com",
    accent: "from-indigo-900/30 to-zinc-900",
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

      onUnlock();
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Ocurrió un error inesperado.");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto">
      <div className="absolute inset-0 bg-[#021013]/70 backdrop-blur-md" />
      <div className="relative w-full max-w-md fade-in">
        <div className="gem-card rounded-2xl p-7 sm:p-9 shadow-2xl">
          <div className="flex items-center justify-center mb-5">
            <div className="h-px w-10 bg-[#00b4d8]/60" />
            <span className="px-3 text-[10px] tracking-[0.3em] uppercase diamond-text font-semibold">Acceso Privado</span>
            <div className="h-px w-10 bg-[#00b4d8]/60" />
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
    <header className="border-b border-[rgba(226,232,240,0.15)] bg-[rgba(3,16,19,0.5)] backdrop-blur-lg sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Samuel <span className="diamond-text">Chavero</span>
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)] hover:diamond-text transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          WhatsApp
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
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Acceso desbloqueado
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Cómo los dueños de negocio del{" "}
          <span className="diamond-text italic">1%</span> atraen prospectos predecibles
          <br className="hidden sm:block" /> sin rogar por referidos.
        </h1>

        <h2 className="mt-6 sm:mt-8 text-lg sm:text-xl text-[var(--fg-muted)] max-w-3xl mx-auto leading-relaxed">
          Construimos tu Bóveda Privada de clientes calificados para escalar tu facturación en piloto automático. <br className="hidden sm:block" />
          <strong className="diamond-text text-xl font-bold mt-2 inline-block">(Solo 5 lugares disponibles hasta nuevo aviso)</strong>
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
                  <div className="bg-[#48CAE4]/20 border border-[#48CAE4]/50 backdrop-blur-md px-6 py-4 sm:px-8 sm:py-5 rounded-full flex items-center gap-3 sm:gap-4 animate-pulse shadow-[0_0_30px_rgba(72,202,228,0.4)] hover:bg-[#48CAE4]/30 transition-colors">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Hablar con Samuel en WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function EbookSection() {
  return (
    <section className="px-5 py-16 sm:py-24 border-t border-[rgba(226,232,240,0.1)] relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div className="flex justify-center md:justify-end">
          <div className="book">
            <div className="book-inner flex flex-col justify-between p-6 sm:p-7 text-left">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] diamond-text mb-3">Manual Estratégico</div>
                <div className="h-px w-12 bg-[#2FA4A9] mb-5" />
                <h3 className="font-display text-2xl sm:text-3xl text-white leading-tight">
                  La Anatomía del <span className="diamond-text italic">Vendedor Invisible</span>
                </h3>
              </div>
              <div>
                <div className="h-px w-12 bg-[#2FA4A9] mb-3" />
                <div className="text-xs uppercase tracking-widest text-[var(--fg-muted)]">
                  Samuel Chavero
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
            Descubre el sistema exacto que elimina la fricción técnica y convierte desconocidos en clientes de alto valor 24/7.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/el-vendedor-invisible.pdf"
              download
              className="btn-gem inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Descargar E-book
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-gem inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
            >
              Hablar con Samuel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonAvatar({ image, gradient }: { image: string; gradient: string }) {
  return (
    <div className={`relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br ${gradient} border border-[var(--border-strong)] flex items-center justify-center`}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(47,164,169,0.25), transparent 60%)" }} />
      <img src={image} alt="Client" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

function ClientsSection() {
  return (
    <section className="px-5 py-16 sm:py-24 border-t border-[rgba(226,232,240,0.1)] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] diamond-text mb-3">Resultados Comprobados</div>
          <h3 className="font-display text-4xl sm:text-5xl">Clientes Destacados</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {CLIENTS.map((c) => (
            <div key={c.name} className="gem-card rounded-2xl overflow-hidden flex flex-col">
              <PersonAvatar image={c.image} gradient={c.accent} />
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-xs font-bold text-white">
                    {c.brandInitials}
                  </div>
                  <div>
                    <div className="font-display text-xl text-white leading-tight">{c.name}</div>
                    <div className="text-xs text-[var(--fg-muted)] mt-0.5">{c.brand}</div>
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-2.5 pt-4">
                  <a
                    href={c.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost-gem flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Instagram
                  </a>
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost-gem flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    Sitio Web
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center italic text-[var(--fg-muted)]">
          ...y más de 25 profesionales que confiaron en nosotros para escalar sus ventas.
        </p>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="px-5 py-16 sm:py-24 border-t border-[rgba(226,232,240,0.1)] relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[260px_1fr] gap-10 sm:gap-14 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-full accent-gradient blur-2xl opacity-40 scale-110" />
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-[rgba(226,232,240,0.4)] bg-gradient-to-br from-[#1a1a20] to-[#0a0a0e] flex items-center justify-center">
                <img src="./samuprofile.jpeg?v=2" className="absolute inset-0 w-full h-full object-cover" alt="Samuel Chavero" />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="text-xs uppercase tracking-[0.3em] diamond-text mb-3">Sobre el Estratega</div>
            <h3 className="font-display text-3xl sm:text-5xl leading-tight">
              Samuel <span className="diamond-text italic">Chavero</span>
            </h3>
            <p className="mt-5 text-[var(--fg-muted)] leading-relaxed text-base sm:text-lg">
              Samuel Chavero es el arquitecto digital detrás de los ecosistemas de venta de los Top Producers y dueños de negocio más agresivos del mercado. Su enfoque no es el diseño web tradicional, sino la ingeniería de adquisición de clientes y la rentabilidad absoluta. Si tu negocio tiene la capacidad de operar a gran escala, Samuel construye la máquina que lo alimenta.
            </p>

            <div className="mt-8 flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
              <a href="https://www.linkedin.com/in/samuel-chavero-4b1188151/" target="_blank" rel="noreferrer" className="icon-social" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/samuchavero/" target="_blank" rel="noreferrer" className="icon-social" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094558473741" target="_blank" rel="noreferrer" className="icon-social" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="icon-social" aria-label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 py-16 sm:py-20 border-t border-[rgba(226,232,240,0.1)] relative">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-display text-3xl sm:text-5xl leading-tight">
          ¿Listo para construir tu <span className="diamond-text italic">máquina</span> de adquisición?
        </h3>
        <p className="mt-5 text-[var(--fg-muted)] text-base sm:text-lg">
          Conversemos directamente. Sin intermediarios, sin formularios eternos.
        </p>
        <div className="mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gem inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Hablar con Samuel ahora
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(226,232,240,0.1)] bg-[rgba(3,16,19,0.8)] px-5 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--fg-muted)]">
        <div className="font-display text-base">
          Samuel <span className="diamond-text">Chavero</span>
        </div>
        <div>© {new Date().getFullYear()} Samuel Chavero. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
function ValueSection() {
  const benefits = [
    {
      title: 'Tu propia "Mina de Oro"',
      desc: "Base de datos privada de prospectos con intención de compra.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" /></svg>
      )
    },
    {
      title: "Máquina de Ventas 24/7",
      desc: "Página web élite optimizada para convertir tráfico en dólares.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /><path d="M19.36 10a1.5 1.5 0 0 0-1.07-2.36l-2.02-.27a1.5 1.5 0 0 1-1.05-2.05l.77-1.89" /><circle cx="12" cy="12" r="10" strokeDasharray="4 4" /></svg>
      )
    },
    {
      title: "Venta Silenciosa",
      desc: "E-book estratégico que utiliza el storytelling para pre-vender tu producto.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="m14 8-2 3 2 3" /><path d="M10 8h.01" /><path d="M10 14h.01" /></svg>
      )
    },
    {
      title: "Dominio de Redes",
      desc: "Pack de 7 guiones diseñados para viralizar y vender.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
      )
    },
    {
      title: "Edición de Alto Impacto",
      desc: "Videos editados para retener la atención y generar clics.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3" /></svg>
      )
    },
    {
      title: "Garantía de Velocidad",
      desc: "Recupera tu inversión en menos de 15 días.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
      )
    }
  ];

  return (
    <section className="px-5 py-2 relative">
      <div className="max-w-6xl mx-auto gem-card rounded-3xl p-7 sm:p-12 mb-16 shadow-2xl">
        <h3 className="font-display text-3xl sm:text-4xl text-center mb-10 diamond-text">
          El Sistema Completo
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center group p-6 rounded-2xl bg-[rgba(3,16,19,0.4)] border border-[rgba(226,232,240,0.05)] hover:border-[#48cae4]/50 hover:bg-[rgba(0,180,216,0.1)] transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00b4d8]/20 to-[#031013] border border-[#00b4d8]/30 flex items-center justify-center text-[#48cae4] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(72,202,228,0.4)] transition-all duration-300">
                {b.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{b.title}</h4>
              <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Gift Item spans full width */}
        <div className="mt-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#00b4d8]/10 to-[#031013] border border-[#00b4d8]/40 shadow-inner">
          <div className="w-16 h-16 shrink-0 mx-auto sm:mx-0 rounded-full bg-[#00b4d8]/20 border border-[#00b4d8]/50 flex items-center justify-center text-white animate-pulse">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect width="20" height="5" x="2" y="7" /><line x1="12" x2="12" y1="22" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">
              <span className="diamond-text text-2xl uppercase tracking-widest font-black mr-2">REGALO:</span>
            </h4>
            <p className="text-[var(--fg)] text-base sm:text-lg">
              El <strong>"Playbook de Ventas" de $3,000 USD</strong> incluido sin costo para cerrar cada lead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainContent({ unlocked }: { unlocked: boolean }) {
  return (
    <div className="fade-in">
      <Header />
      <HeroVSL unlocked={unlocked} />
      <ValueSection />
      <ClientsSection />
      <EbookSection />
      <AuthoritySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (unlocked) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [unlocked]);

  return (
    <div className="min-h-screen relative">
      <div className="parallax-bg" />
      <div className={unlocked ? "" : "blur-bg select-none"}>
        <MainContent unlocked={unlocked} />
      </div>
      {!unlocked && <Modal onUnlock={() => setUnlocked(true)} />}
    </div>
  );
}
