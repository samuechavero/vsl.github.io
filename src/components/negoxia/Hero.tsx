import React, { useRef, useState } from 'react';
import { Volume2, Play, Sparkles, Gift, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, User } from 'lucide-react';
import { supabase } from '../../supabase';

interface HeroProps {
  onOpenWheel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWheel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Formulario de Captura: Nombre, Teléfono y Correo Electrónico
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInteraction = () => {
    setHasInteracted(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();

    if (cleanName.length < 2) {
      setError('Por favor, ingresa tu nombre completo.');
      return;
    }

    if (cleanPhone.length < 7) {
      setError('Por favor, ingresa un número de teléfono o WhatsApp válido.');
      return;
    }

    if (!cleanEmail.includes('@') || cleanEmail.length < 5) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setLoading(true);

    try {
      // Intento de inserción en Supabase con tolerancia a columnas existentes
      const { error: insertError } = await supabase
        .from('prospectos')
        .insert([{ nombre: cleanName, telefono: `${cleanPhone} | ${cleanEmail}` }]);

      if (insertError) {
        console.warn('Supabase note:', insertError);
      }

      // Meta Pixel Lead Event con enriquecimiento de email
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Hero Form Reclutamiento',
          em: cleanEmail.toLowerCase(),
        });
      }

      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.error('Error al registrar prospecto:', err);
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Ambient Tech Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-[#1258FA]/12 via-[#16D1F5]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1258FA]/8 border border-[#1258FA]/25 text-[#1258FA] text-xs sm:text-sm font-bold tracking-tight shadow-sm">
            <Sparkles size={14} className="text-[#16D1F5] animate-pulse" />
            <span>Automatización Inteligente con IA para Reclutamiento · Negoxia LLC</span>
          </div>
        </div>

        {/* H1 Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#060E32] tracking-tight leading-[1.14] text-center max-w-4xl mx-auto mb-6">
          Automatización Inteligente con IA para{' '}
          <span className="text-gradient-blue">Reclutar Nuevos Agentes</span> y Escalar tu Agencia 24/7.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#4B5578] text-center max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-14">
          Integramos tu CRM, agentes conversacionales con IA 24/7 y embudos de alta conversión para captar candidatos a agentes, calificarlos al instante en WhatsApp y llenar tu calendario de entrevistas sin carga operativa manual.
        </p>

        {/* Main Grid: Video + Capture Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-8">
          {/* Video Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full clean-card p-2.5 sm:p-3 bg-white/95 backdrop-blur-md shadow-2xl relative border-2 border-[#1258FA]/25">
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#060E32]" style={{ paddingTop: '56.25%' }}>
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  src="./samuvsl.mp4?v=2"
                  controls={hasInteracted}
                  playsInline
                  muted
                />

                {/* Click to Play / Unmute Interactive Overlay */}
                {!hasInteracted && (
                  <div
                    onClick={handleInteraction}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#060E32]/50 z-10 cursor-pointer backdrop-blur-xs transition-opacity hover:bg-[#060E32]/40"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#1258FA] to-[#16D1F5] p-1 shadow-2xl mb-3 group hover:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full bg-[#060E32] flex items-center justify-center text-white">
                        <Play size={28} className="translate-x-0.5 fill-white text-white" />
                      </div>
                    </div>

                    <div className="bg-[#060E32]/90 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-2 text-white text-xs sm:text-sm font-semibold shadow-xl">
                      <Volume2 size={16} className="text-[#16D1F5] animate-pulse" />
                      <span>Toca para ver el video con sonido</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video CTA button for wheel pop-up */}
            <div className="w-full mt-4 text-center">
              <button
                onClick={onOpenWheel}
                type="button"
                className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#1258FA] via-[#16D1F5] to-[#1258FA] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-[#1258FA]/25 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer animate-pulse"
              >
                <Gift size={18} className="text-white group-hover:rotate-12 transition-transform" />
                <span className="tracking-wide">
                  Aprieta aquí abajo para que te regalemos a ver si tienes suerte
                </span>
                <span className="text-base">🎰</span>
              </button>
            </div>
          </div>

          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="clean-card p-6 sm:p-8 bg-white border border-[#EDE3D5] shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-[11px] font-extrabold uppercase tracking-wider">
                  Acceso Prioritario
                </span>
                <span className="text-xs text-[#8C96AB]">· Plazas Limitadas</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#060E32] tracking-tight leading-snug">
                Escala tu Agencia con IA
              </h3>
              <p className="text-xs text-[#556080] mt-1 mb-5">
                Completa tus datos para evaluar la activación de tu ecosistema de reclutamiento.
              </p>

              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  {/* Nombre */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-[#060E32] mb-1">
                      Nombre y Apellido <span className="text-[#1258FA]">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C96AB]" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Roberto Sánchez"
                        required
                        disabled={loading}
                        className="input-clean pl-10 text-sm py-2.5"
                      />
                    </div>
                  </div>

                  {/* Teléfono / WhatsApp */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-[#060E32] mb-1">
                      Teléfono / WhatsApp <span className="text-[#1258FA]">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C96AB]" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (832) 000 0000"
                        required
                        disabled={loading}
                        className="input-clean pl-10 text-sm py-2.5"
                      />
                    </div>
                  </div>

                  {/* Correo Electrónico (Requisito Obligatorio Añadido) */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-extrabold text-[#060E32] mb-1">
                      Correo Electrónico <span className="text-[#1258FA]">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C96AB]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="agencia@ejemplo.com"
                        required
                        disabled={loading}
                        className="input-clean pl-10 text-sm py-2.5"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs text-center font-medium">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-60 mt-1"
                  >
                    {loading ? (
                      <span>Procesando...</span>
                    ) : (
                      <>
                        <span>Quiero reclutar en automático</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-1.5 text-[10px] text-[#8C96AB]">
                    <ShieldCheck size={12} className="text-[#1258FA]" />
                    <span>Tus datos son 100% confidenciales. Sin spam.</span>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#060E32] mb-1">
                    ¡Datos Registrados!
                  </h4>
                  <p className="text-xs text-[#556080] mb-4">
                    Un consultor de Negoxia LLC se pondrá en contacto para tu sesión de onboarding.
                  </p>
                  <button
                    onClick={onOpenWheel}
                    type="button"
                    className="btn-primary w-full py-3 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Gift size={14} />
                    <span>Girar la Ruleta de Regalo Ahora</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
