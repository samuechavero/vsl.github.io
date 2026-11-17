import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen } from 'lucide-react';

interface FloatingEbookBadgeProps {
  onScrollClick?: () => void;
  onOpenReader?: () => void;
}

export const FloatingEbookBadge: React.FC<FloatingEbookBadgeProps> = ({ onScrollClick, onOpenReader }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (onOpenReader) {
      onOpenReader();
    } else if (onScrollClick) {
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
        className="group flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#060E32] to-[#08123B] hover:from-[#0a1545] hover:to-[#060E32] text-white border-2 border-[#16D1F5]/60 shadow-[0_10px_30px_rgba(22,209,245,0.3)] animate-bounce hover:animate-none transition-all duration-300 cursor-pointer active:scale-95"
      >
        <BookOpen size={16} className="text-[#16D1F5] animate-pulse" />
        <span className="text-xs sm:text-sm font-black tracking-tight text-white group-hover:text-[#16D1F5] transition-colors">
          Leer E-book de Regalo
        </span>
      </button>
    </div>
  );

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  // Portal directo a document.body para aislarlo de transform / filter / relative
  return createPortal(content, document.body);
};
