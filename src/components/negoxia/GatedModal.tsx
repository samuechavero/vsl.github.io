import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { supabase } from '../../supabase';
import { PrizeWheel } from './PrizeWheel';

interface GatedModalProps {
  onUnlock: () => void;
}

export const GatedModal: React.FC<GatedModalProps> = ({ onUnlock }) => {
  const [step, setStep] = useState<'form' | 'wheel'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanName = name.trim();
    const cleanPhone = phone.trim();

    if (cleanName.length < 2) {
      setError('Por favor, ingresa tu nombre completo.');
      return;
    }

    if (cleanPhone.length < 7) {
      setError('Por favor, ingresa un número de WhatsApp válido.');
      return;
    }

    setLoading(true);

    try {
      // Guardar en la tabla 'prospectos' de Supabase
      const { error: insertError } = await supabase
        .from('prospectos')
        .insert([{ nombre: cleanName, telefono: cleanPhone }]);

      if (insertError) {
        console.warn('Supabase note:', insertError);
      }

      // Meta Pixel Event Lead
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      // Avanzar al paso de la Ruleta de Premios (en lugar de desbloquear directo)
      setLoading(false);
      setStep('wheel');
    } catch (err) {
      console.error('Error al registrar prospecto:', err);
      // En caso de fallo de red puntual, avanzar a la ruleta para no bloquear la experiencia comercial
      setLoading(false);
      setStep('wheel');
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4 py-6 overflow-y-auto bg-[#060E32]/85 backdrop-blur-md">
      <div className="relative w-full max-w-md fade-in my-auto">
        <div className="bg-[#FFF9F2] rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#EDE3D5] relative overflow-hidden">
          {step === 'form' ? (
            <>
              {/* Header Badge */}
              <div className="flex items-center justify-center mb-5">
                <div className="h-px w-10 bg-[#1258FA]/40" />
                <span className="px-3 text-xs tracking-[0.25em] uppercase font-bold text-[#1258FA] flex items-center gap-1.5">
                  <Lock size={13} />
                  <span>Acceso Privado</span>
                </span>
                <div className="h-px w-10 bg-[#1258FA]/40" />
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src="./brand/negoxia-logo.jpg"
                  alt="Negoxia Autopilot"
                  className="h-10 sm:h-11 w-auto object-contain rounded"
                />
              </div>

              {/* Headline & Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#060E32] text-center tracking-tight leading-snug">
                Hay un video <span className="text-gradient-blue">especial</span> para ti.
              </h2>
              <p className="text-center text-xs sm:text-sm text-[#4B5578] mt-2.5 max-w-xs mx-auto leading-relaxed">
                Completa los datos para desbloquear el acceso inmediato.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="gate-name" className="block text-xs uppercase tracking-wider font-bold text-[#060E32] mb-1.5">
                    Tu Nombre <span className="text-[#1258FA]">*</span>
                  </label>
                  <input
                    id="gate-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre y apellido"
                    required
                    disabled={loading}
                    className="input-clean text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="gate-phone" className="block text-xs uppercase tracking-wider font-bold text-[#060E32] mb-1.5">
                    Tu Número de WhatsApp <span className="text-[#1258FA]">*</span>
                  </label>
                  <input
                    id="gate-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (832) 890 1102"
                    required
                    disabled={loading}
                    className="input-clean text-sm"
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium text-center">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-2 shadow-xl mt-3 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Validando acceso...</span>
                    </>
                  ) : (
                    <>
                      <span>Ver el Video</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Privacy Disclaimer */}
              <p className="text-[11px] text-center text-[#8C96AB] mt-5 leading-relaxed flex items-center justify-center gap-1.5">
                <ShieldCheck size={14} className="text-[#1258FA]" />
                <span>Tu información es 100% confidencial.</span>
              </p>
            </>
          ) : (
            /* Paso 2: Ruleta de Premios (Spin-to-win) */
            <PrizeWheel
              userName={name || 'Agente'}
              onClaimPrize={onUnlock}
            />
          )}
        </div>
      </div>
    </div>
  );
};
