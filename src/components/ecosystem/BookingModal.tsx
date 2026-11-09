import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Workflow, ShieldCheck } from 'lucide-react';
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
          content_name: 'Ecosistema Ascent by Flow Money',
        });
      }

      setSuccess(true);

      // Open WhatsApp directly after short delay
      setTimeout(() => {
        const message = encodeURIComponent(
          `Hola Ascent by Flow Money, mi nombre es ${name.trim()} y quiero obtener mi Ecosistema CRM y Automatización 100% Plug & Play.`
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
                  <Workflow size={13} />
                  <span>Sesión de Alineación · Ecosistema Plug & Play</span>
                </div>

                <div className="flex items-center justify-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#060E32] flex items-center justify-center text-white font-extrabold text-base border border-[#EDE3D5]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#1258FA] to-[#16D1F5]">A</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-base font-black tracking-tight text-[#060E32] leading-none">
                      ASCENT
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[#1258FA] uppercase">
                      by Flow Money
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#060E32] tracking-tight">
                  Obtén tu Ecosistema CRM & Meta Ads
                </h3>
                <p className="text-xs sm:text-sm text-[#556080] mt-1.5 max-w-sm mx-auto">
                  Coordinaremos la entrega de tu máquina de ventas con GoHighLevel, Twilio y campañas activas.
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
                    Te enviaremos los accesos y la confirmación directa a tu WhatsApp.
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
                  <span>{submitting ? 'Verificando...' : 'Obtener mi Ecosistema'}</span>
                  <ArrowRight size={17} />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7380A0] mt-3">
                  <ShieldCheck size={13} className="text-[#1258FA]" />
                  <span>Sin fricción técnica · Tus datos están 100% protegidos</span>
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
