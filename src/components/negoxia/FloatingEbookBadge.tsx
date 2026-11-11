import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDown } from 'lucide-react';

interface FloatingEbookBadgeProps {
  onScrollClick?: () => void;
}

export const FloatingEbookBadge: React.FC<FloatingEbookBadgeProps> = ({ onScrollClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (onScrollClick) {
      onScrollClick();
    } else {
      const el = document.getElementById('ebook');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const content = (
    <div
      aria-label="Aviso de E-book de regalo"
      className="fixed bottom-6 right-6 z-[9999] pointer-events-auto"
      style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999 }}
    >
      <button
        onClick={handleClick}
        type="button"
        className="group flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#060E32] hover:bg-[#0a1545] text-white border border-[#16D1F5]/50 shadow-2xl animate-bounce hover:animate-none transition-all duration-300 cursor-pointer active:scale-95"
      >
        <span className="text-base sm:text-lg">🎁</span>
        <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-[#16D1F5] transition-colors">
          E-book de regalo más abajo
        </span>
        <ArrowDown
          size={14}
          className="text-[#16D1F5] group-hover:translate-y-0.5 transition-transform shrink-0"
        />
      </button>
    </div>
  );

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  // Portal directo a document.body para aislarlo de transform / filter / relative
  return createPortal(content, document.body);
};
