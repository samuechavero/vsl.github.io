import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ShieldCheck, UserCheck } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'Carlos Ramírez', action: 'agendó entrevista para su agencia.' },
  { name: 'María Fernanda Gómez', action: 'incorporó 2 nuevos agentes hoy.' },
  { name: 'Javier Torres', action: 'tiene atención prioritaria.' },
  { name: 'Lucía Medina', action: 'activó el sistema de reclutamiento.' },
  { name: 'Diego Herrera', action: 'agendó 3 entrevistas de candidatos.' },
  { name: 'Sofía Castillo', action: 'tiene atención prioritaria.' },
  { name: 'Andrés Vargas', action: 'incorporó nuevo talento a su equipo.' },
  { name: 'Camila Ríos', action: 'agendó entrevista para su agencia.' },
  { name: 'Mateo Silva', action: 'tiene atención prioritaria.' },
  { name: 'Valentina Rojas', action: 'activó Negoxia Pack Fast Start.' },
];

export const SocialProofToast: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState<{ name: string; action: string }>(NOTIFICATIONS[0]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    let hideTimer: NodeJS.Timeout;

    const triggerNotification = () => {
      const randomIndex = Math.floor(Math.random() * NOTIFICATIONS.length);
      setCurrent(NOTIFICATIONS[randomIndex]);
      setIsVisible(true);

      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimer = setTimeout(() => {
      triggerNotification();
    }, 2500);

    const intervalTimer = setInterval(() => {
      triggerNotification();
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  const content = (
    <div
      aria-live="polite"
      className={`fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-[9999] max-w-[calc(100vw-2rem)] sm:max-w-sm pointer-events-none transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
      style={{
        position: 'fixed',
        zIndex: 9999,
      }}
    >
      <div className="bg-[#FFF9F2] border border-[#EDE3D5] rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-[#060E32]/15 backdrop-blur-md flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
          <UserCheck size={20} className="text-emerald-600" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-[#060E32] leading-snug">
            <span className="mr-1">✅</span>
            <strong className="font-extrabold text-[#060E32]">{current.name}</strong>{' '}
            <span className="text-[#333D59]">{current.action}</span>
          </p>
          <p className="text-[10px] text-[#8C96AB] flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verificado · Hace un momento</span>
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
