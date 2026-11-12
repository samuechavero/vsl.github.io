import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, Mail, Phone, User } from 'lucide-react';
import { supabase } from '../../supabase';
import { PrizeWheel } from './PrizeWheel';

interface GatedModalProps {
  onUnlock: () => void;
}

export const GatedModal: React.FC<GatedModalProps> = ({ onUnlock }) => {
  const [step, setStep] = useState<'form' | 'wheel'>('form');
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
      setError('Por favor, ingresa un número de WhatsApp válido.');
      return;
    }

    if (!cleanEmail.includes('@')) {
      setError('Por favor, ingresa un correo válido.');
      return;
    }

    setLoading(true);

    try {
      await supabase
        .from('prospectos')
        .insert([{ nombre: cleanName, telefono: `${cleanPhone} | ${cleanEmail}` }]);

      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', { em: cleanEmail });
      }

      setLoading(false);
      setStep('wheel');
    } catch (err) {
      console.error('Error:', err);
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
              <div className="flex items-center justify-center mb-5">
                <div className="h-px w-10 bg-[#1258FA]/40" />
                <span className="px-3 text-xs tracking-[0.25em] uppercase font-bold text-[#1258FA] flex items-center gap-1.5">
                  <Lock size={13} />
                  <span>Acceso Prioritario</span>
                </span>
                <div className="h-px w-10 bg-[#1258FA]/40" />
              </div>

              <div className="flex justify-center mb-4">
                <img
                  src="./brand/negoxia-logo.jpg"
                  alt="Negoxia LLC"
                  className="h-10 sm:h-11 w-auto object-contain rounded"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#060E32] text-center tracking-tight leading-snug">
                Reclutamiento de Agentes <br />
                <span className="text-gradient-blue">con Inteligencia Artificial</span>
              </h2>
              <p className="text-center text-xs sm:text-sm text-[#4B5578] mt-2.5 max-w-xs mx-auto leading-relaxed">
                Completa tus datos para desbloquear la sesión de diagnóstico.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#060E32] mb-1.5">
                    Tu Nombre <span className="text-[#1258FA]">*</span>
                  </label>
                  <input
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
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#060E32] mb-1.5">
                    Tu Teléfono / WhatsApp <span className="text-[#1258FA]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (832) 000 0000"
                    required
                    disabled={loading}
                    className="input-clean text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#060E32] mb-1.5">
                    Tu Correo Electrónico <span className="text-[#1258FA]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="agencia@ejemplo.com"
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
                    <span>Validando acceso...</span>
                  ) : (
                    <>
                      <span>Acceder a la Presentación</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-[11px] text-center text-[#8C96AB] mt-5 leading-relaxed flex items-center justify-center gap-1.5">
                <ShieldCheck size={14} className="text-[#1258FA]" />
                <span>Tu información es 100% confidencial.</span>
              </p>
            </>
          ) : (
            <PrizeWheel
              onClaim={onUnlock}
              onClose={onUnlock}
            />
          )}
        </div>
      </div>
    </div>
  );
};
