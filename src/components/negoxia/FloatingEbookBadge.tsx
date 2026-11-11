import React from 'react';
import { ArrowDown } from 'lucide-react';

interface FloatingEbookBadgeProps {
  onScrollClick?: () => void;
}

export const FloatingEbookBadge: React.FC<FloatingEbookBadgeProps> = ({ onScrollClick }) => {
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

  return (
    <aside aria-label="Aviso de E-book de regalo" className="fixed bottom-4 right-4 z-50">
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
    </aside>
  );
};
