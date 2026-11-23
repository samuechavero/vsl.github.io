import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Mail, Phone, User } from 'lucide-react';
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

      // Meta Pixel Event: Lead
      if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead');
      }

      setLoading(false);
      onUnlock();
    } catch (err) {
      console.error('Error al registrar prospecto:', err);
      // Disparar evento Lead para registrar la conversión del formulario
      if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead');
      }
      setLoading(false);
      onUnlock();
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4 py-6 overflow-y-auto bg-[#060E32]/90 backdrop-blur-xl">
      <div className="relative w-full max-w-md fade-in my-auto">
        <div className="bg-[#FFF9F2] rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#EDE3D5] relative overflow-hidden">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="./brand/negoxia-logo.png"
              alt="Negoxia"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </div>

          {/* Badge o etiqueta superior (Cyan de alta jerarquía visual) */}
          <div className="flex justify-center mb-3.5">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#060E32] border border-[#16D1F5]/80 text-[#16D1F5] text-[10px] sm:text-xs font-black tracking-wide text-center shadow-[0_0_16px_rgba(22,209,245,0.3)]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>WEBINAR EN VIVO • MIÉRCOLES 25 | 6:00 PM (HORA CENTRAL)</span>
            </div>
          </div>

          {/* TÍTULO PRINCIPAL REQUERIDO */}
          <h2 className="text-2xl sm:text-3xl font-black text-[#060E32] text-center tracking-tight leading-snug">
            Completa tu inscripción al <span className="text-gradient-blue">Webinar</span>
          </h2>

          {/* SUBTÍTULO / INSTRUCCIÓN DIRECTA */}
          <p className="text-center text-xs sm:text-sm text-[#4B5578] mt-2 max-w-sm mx-auto leading-relaxed">
            Deja tus datos para completar tu inscripción al webinar de este miércoles 25 a las 6:00 PM (Hora Central).
          </p>

          {/* Formulario Obligatorio (Content Gate) */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#060E32] mb-1.5">
                Tu Nombre y Apellido <span className="text-[#1258FA]">*</span>
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C96AB] pointer-events-none z-10" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Roberto Sánchez"
                  required
                  disabled={loading}
                  className="input-clean input-with-icon !pl-12 text-sm py-3.5"
                  style={{ paddingLeft: '48px' }}
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#060E32] mb-1.5">
                Tu Número de WhatsApp <span className="text-[#1258FA]">*</span>
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C96AB] pointer-events-none z-10" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (832) 000 0000"
                  required
                  disabled={loading}
                  className="input-clean input-with-icon !pl-12 text-sm py-3.5"
                  style={{ paddingLeft: '48px' }}
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#060E32] mb-1.5">
                Tu Correo Electrónico <span className="text-[#1258FA]">*</span>
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C96AB] pointer-events-none z-10" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="agencia@ejemplo.com"
                  required
                  disabled={loading}
                  className="input-clean input-with-icon !pl-12 text-sm py-3.5"
                  style={{ paddingLeft: '48px' }}
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
              className="btn-primary w-full py-4 text-base font-black flex items-center justify-center gap-2 shadow-xl shadow-[#1258FA]/25 hover:shadow-[#1258FA]/45 hover:scale-[1.01] active:scale-95 transition-all mt-4 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <span>Completando inscripción...</span>
              ) : (
                <>
                  <span>Completar mi inscripción</span>
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
