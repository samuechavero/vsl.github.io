import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, Mail, Phone, User, Play } from 'lucide-react';
import { supabase } from '../../supabase';

interface GatedModalProps {
  onUnlock: () => void;
}

export const GatedModal: React.FC<GatedModalProps> = ({ onUnlock }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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
      // Guardar prospecto en Supabase
      const { error: insertError } = await supabase
        .from('prospectos')
        .insert([{ nombre: cleanName, telefono: `${cleanPhone} | ${cleanEmail}` }]);

      if (insertError) {
        console.warn('Supabase lead note:', insertError);
      }

      // Meta Pixel Event Lead
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Content Gate Reclutamiento',
          em: cleanEmail.toLowerCase(),
        });
      }

      setLoading(false);
      onUnlock();
    } catch (err) {
      console.error('Error al registrar prospecto:', err);
      // En caso de incidencia de red, desbloquear para no frustrar la experiencia
      setLoading(false);
      onUnlock();
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4 py-6 overflow-y-auto bg-[#060E32]/90 backdrop-blur-xl">
      <div className="relative w-full max-w-md fade-in my-auto">
        <div className="bg-[#FFF9F2] rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#EDE3D5] relative overflow-hidden">
          {/* Header Badge */}
          <div className="flex items-center justify-center mb-5">
            <div className="h-px w-10 bg-[#1258FA]/30" />
            <span className="px-3 text-xs tracking-[0.25em] uppercase font-black text-[#1258FA] flex items-center gap-1.5">
              <Lock size={13} />
              <span>Acceso Privado</span>
            </span>
            <div className="h-px w-10 bg-[#1258FA]/30" />
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="./brand/negoxia-logo.jpg"
              alt="Negoxia LLC"
              className="h-10 sm:h-11 w-auto object-contain rounded mix-blend-multiply"
            />
          </div>

          {/* TÍTULO DESTACADO EXACTO REQUERIDO */}
          <h2 className="text-2xl sm:text-3xl font-black text-[#060E32] text-center tracking-tight leading-snug">
            Hay un video <span className="text-gradient-blue">especial</span> para ti
          </h2>
          <p className="text-center text-xs sm:text-sm text-[#4B5578] mt-2 max-w-xs mx-auto leading-relaxed">
            Completa tus datos para desbloquear el acceso inmediato a la presentación y la plataforma.
          </p>

          {/* Formulario Obligatorio (Content Gate) */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#060E32] mb-1.5">
                Tu Nombre y Apellido <span className="text-[#1258FA]">*</span>
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
                  className="input-clean pl-10 text-sm py-3"
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#060E32] mb-1.5">
                Tu Número de WhatsApp <span className="text-[#1258FA]">*</span>
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
                  className="input-clean pl-10 text-sm py-3"
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#060E32] mb-1.5">
                Tu Correo Electrónico <span className="text-[#1258FA]">*</span>
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
                  className="input-clean pl-10 text-sm py-3"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 text-base font-extrabold flex items-center justify-center gap-2 shadow-xl mt-3 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <span>Desbloqueando acceso...</span>
              ) : (
                <>
                  <Play size={18} className="fill-white" />
                  <span>Ver el Video</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Privacy Disclaimer */}
          <p className="text-[11px] text-center text-[#8C96AB] mt-5 leading-relaxed flex items-center justify-center gap-1.5">
            <ShieldCheck size={14} className="text-[#1258FA]" />
            <span>Acceso 100% privado y confidencial. Cero spam.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
