import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError('Por favor, ingresa tu nombre completo.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 8) {
      setError('Por favor, ingresa un número de WhatsApp válido con código de área.');
      return;
    }

    setSubmitting(true);

    try {
      // Save lead to Supabase
      const { error: insertError } = await supabase
        .from('leads')
        .insert([{ nombre: name.trim(), telefono: cleanPhone }]);

      if (insertError) {
        console.warn('Supabase lead note:', insertError);
      }

      // Meta Pixel Lead tracking
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Diagnóstico Negoxia Autopilot',
        });
      }

      setSuccess(true);

      // Open WhatsApp directly after short delay
      setTimeout(() => {
        const message = encodeURIComponent(
          `Hola Negoxia Autopilot, mi nombre es ${name.trim()} y acabo de solicitar mi diagnóstico gratis de 30 minutos.`
        );
        window.open(`https://wa.me/18328901102?text=${message}`, '_blank');
      }, 1200);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Hubo un problema de conexión. Inténtalo de nuevo.');
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto modal-overlay">
      <div className="relative w-full max-w-lg fade-in my-auto">
        <div className="bg-[#FFF9F2] rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#EDE3D5] relative overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#060E32]/5 hover:bg-[#060E32]/10 flex items-center justify-center text-[#060E32] transition-colors"
          >
            <X size={18} />
          </button>

          {!success ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles size={13} />
                  <span>Diagnóstico Estratégico · 30 Minutos</span>
                </div>

                <div className="flex justify-center mb-3">
                  <img
                    src="./brand/negoxia-logo.jpg"
                    alt="Negoxia Autopilot"
                    className="h-9 w-auto object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#060E32] tracking-tight">
                  Reserva tu diagnóstico gratuito
                </h3>
                <p className="text-xs sm:text-sm text-[#556080] mt-1.5 max-w-sm mx-auto">
                  Evaluaremos tu negocio y te mostraremos una simulación de cómo se vería tu clon de IA.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#060E32] mb-1.5">
                    Tu Nombre Completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    className="input-clean"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#060E32] mb-1.5">
                    Tu Número de WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +1 (555) 000-0000"
                    className="input-clean"
                    autoComplete="tel"
                    required
                  />
                  <p className="text-[11px] text-[#7380A0] mt-1">
                    Te enviaremos los detalles de la videollamada y la confirmación a tu WhatsApp.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-4 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 mt-4 shadow-xl disabled:opacity-60 cursor-pointer"
                >
                  <span>{submitting ? 'Verificando disponibilidad...' : 'Confirmar y agendar diagnóstico'}</span>
                  <ArrowRight size={17} />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7380A0] mt-3">
                  <ShieldCheck size={13} className="text-[#1258FA]" />
                  <span>Sin costo ni compromiso · Tus datos están protegidos</span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#060E32] mb-2">¡Solicitud Recibida!</h3>
              <p className="text-sm text-[#556080] max-w-sm mx-auto mb-6">
                Estamos abriendo tu conversación de WhatsApp para coordinar el día y horario exacto de tu sesión.
              </p>
              <button
                onClick={onClose}
                className="btn-secondary px-6 py-2.5 text-xs font-bold"
              >
                Cerrar ventana
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
