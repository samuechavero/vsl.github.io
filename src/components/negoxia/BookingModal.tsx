import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, User, Phone } from 'lucide-react';
import { supabase } from '../../supabase';

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

    const cleanPhone = phone.trim();
    if (cleanPhone.length < 7) {
      setError('Por favor, ingresa un número de WhatsApp válido.');
      return;
    }

    setSubmitting(true);

    try {
      // Save lead to Supabase in table 'prospectos'
      const { error: insertError } = await supabase
        .from('prospectos')
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
          `Hola Negoxia Autopilot, mi nombre es ${name.trim()} y quiero construir mi máquina de ventas y agendar mi diagnóstico.`
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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto modal-overlay bg-[#060E32]/75 backdrop-blur-md">
      <div className="relative w-full max-w-lg fade-in my-auto">
        <div className="bg-[#FFF9F2] rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#EDE3D5] relative overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#060E32]/5 hover:bg-[#060E32]/10 flex items-center justify-center text-[#060E32] transition-colors cursor-pointer"
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
                    className="h-10 w-auto object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#060E32] tracking-tight">
                  Construir mi Máquina de Ventas
                </h3>
                <p className="text-xs sm:text-sm text-[#556080] mt-1.5 max-w-sm mx-auto">
                  Completa tus datos para coordinar tu sesión de diagnóstico y evaluar la activación de tu ecosistema.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs uppercase tracking-wider font-bold text-[#060E32] mb-1.5">
                    Tu Nombre y Apellido <span className="text-[#1258FA]">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C96AB] pointer-events-none z-10" />
                    <input
                      id="modal-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Roberto Sánchez"
                      className="input-clean input-with-icon !pl-12 text-sm py-3.5"
                      style={{ paddingLeft: '48px' }}
                      required
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs uppercase tracking-wider font-bold text-[#060E32] mb-1.5">
                    Tu Número de WhatsApp <span className="text-[#1258FA]">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C96AB] pointer-events-none z-10" />
                    <input
                      id="modal-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (832) 890 1102"
                      className="input-clean input-with-icon !pl-12 text-sm py-3.5"
                      style={{ paddingLeft: '48px' }}
                      required
                      disabled={submitting}
                    />
                  </div>
                  <span className="text-[11px] text-[#8C96AB] mt-1.5 block">
                    Te enviaremos los detalles de acceso y confirmación por WhatsApp.
                  </span>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-xl mt-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <span>Solicitar Diagnóstico Gratuito</span>
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </form>

              {/* Trust footer */}
              <div className="mt-5 pt-4 border-t border-[#EDE3D5] flex items-center justify-center gap-2 text-[11px] text-[#8C96AB]">
                <ShieldCheck size={14} className="text-[#1258FA]" />
                <span>100% Confidencial · Cero spam · Sin compromiso</span>
              </div>
            </>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#1258FA]/15 text-[#1258FA] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-black text-[#060E32] mb-2">
                ¡Solicitud Recibida!
              </h3>
              <p className="text-sm text-[#556080] max-w-sm mx-auto mb-6">
                Te estamos redirigiendo a WhatsApp para confirmar tu horario de diagnóstico inmediatamente...
              </p>
              <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#EDE3D5] text-xs text-[#1258FA] font-semibold">
                Abriendo chat oficial de Negoxia Autopilot...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
