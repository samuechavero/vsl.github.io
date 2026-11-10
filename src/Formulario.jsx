import React, { useState } from 'react';
import { supabase } from './supabase';

/**
 * @param {{
 *   title?: string;
 *   subtitle?: string;
 *   badge?: string;
 *   buttonText?: string;
 *   showLogo?: boolean;
 *   onSuccess?: () => void;
 * }} [props]
 */
export default function Formulario({
  title = 'Solicitar Asesoría',
  subtitle = 'Déjanos tus datos y un especialista de Ascent te contactará hoy mismo.',
  badge = 'Contacto Directo',
  buttonText = 'Enviar',
  showLogo = false,
  onSuccess = undefined,
} = {}) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setExito(false);

    const cleanNombre = nombre.trim();
    const cleanTelefono = telefono.trim();

    if (!cleanNombre) {
      setErrorMsg('Por favor, ingresa tu nombre.');
      return;
    }

    if (!cleanTelefono) {
      setErrorMsg('Por favor, ingresa tu número de teléfono.');
      return;
    }

    setCargando(true);

    try {
      const { error } = await supabase
        .from('prospectos')
        .insert([
          {
            nombre: cleanNombre,
            telefono: cleanTelefono,
          },
        ]);

      if (error) {
        console.error('Error insertando en Supabase:', error);
        setErrorMsg(error.message || 'Ocurrió un error al guardar tus datos. Inténtalo de nuevo.');
        setCargando(false);
        return;
      }

      // Éxito confirmado en Supabase
      setExito(true);
      setNombre('');
      setTelefono('');
      setCargando(false);

      // Meta Pixel Event si está disponible
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead');
      }

      if (onSuccess && typeof onSuccess === 'function') {
        // Breve delay para que el usuario perciba el mensaje de éxito antes de desbloquear
        setTimeout(() => {
          onSuccess();
        }, 800);
      }
    } catch (err) {
      console.error('Error inesperado en formulario:', err);
      setErrorMsg('Error de conexión. Por favor, verifica tu red e inténtalo nuevamente.');
      setCargando(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-[#07191b]/95 border border-[#4A9B9B]/30 rounded-2xl shadow-2xl backdrop-blur-md">
      <div className="text-center mb-6">
        {showLogo && (
          <div className="flex justify-center mb-4">
            <img src="./ascent-logo.jpg" alt="Ascent LLC" className="h-10 w-auto object-contain rounded" />
          </div>
        )}
        <div className="flex items-center justify-center mb-3">
          <div className="h-px w-8 bg-[#4A9B9B]/50" />
          <span className="px-3 text-[11px] tracking-widest uppercase font-semibold text-[#4A9B9B]">
            {badge}
          </span>
          <div className="h-px w-8 bg-[#4A9B9B]/50" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mt-2">
          {subtitle}
        </p>
      </div>

      {exito && (
        <div className="mb-5 p-4 rounded-xl bg-[#4A9B9B]/20 border border-[#4A9B9B] text-teal-200 text-sm flex items-center gap-3">
          <svg className="w-5 h-5 flex-shrink-0 text-[#4A9B9B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>¡Datos recibidos con éxito! Nos comunicaremos contigo muy pronto.</span>
        </div>
      )}

      {errorMsg && (
        <div className="mb-5 p-4 rounded-xl bg-red-900/30 border border-red-500/50 text-red-200 text-sm flex items-center gap-3">
          <svg className="w-5 h-5 flex-shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">
            Nombre <span className="text-[#4A9B9B]">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Carlos Mendoza"
            disabled={cargando}
            className="w-full px-4 py-3 bg-[#051314] border border-gray-700 focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B] rounded-lg text-white placeholder-gray-500 text-sm outline-none transition-all disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-2">
            Teléfono <span className="text-[#4A9B9B]">*</span>
          </label>
          <input
            id="telefono"
            type="tel"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Ej: +1 (832) 890 1102"
            disabled={cargando}
            className="w-full px-4 py-3 bg-[#051314] border border-gray-700 focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B] rounded-lg text-white placeholder-gray-500 text-sm outline-none transition-all disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={cargando}
          className="w-full mt-2 py-3.5 px-6 rounded-lg bg-[#4A9B9B] hover:bg-[#3d8383] active:bg-[#326d6d] text-white font-semibold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#4A9B9B]/25 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {cargando ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span>Enviando...</span>
            </>
          ) : (
            <span>{buttonText}</span>
          )}
        </button>
      </form>

      <p className="text-[11px] text-center text-gray-400 mt-4 leading-relaxed">
        Tu información es 100% confidencial. Solo se usará para contactarte.
      </p>
    </div>
  );
}
