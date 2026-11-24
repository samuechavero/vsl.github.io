import React, { useState, useEffect } from 'react';
import { ArrowRight, Calculator, Clock, Menu, X, Bot, HelpCircle, Users, Sparkles, TrendingUp } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/13463249088?text=Hola%2C%20ya%20realic%C3%A9%20mi%20registro';

interface NavbarProps {
  onScrollToCalculator?: () => void;
}

const TOTAL_SECONDS = 30 * 60; // 30:00 minutos

export const Navbar: React.FC<NavbarProps> = ({ onScrollToCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Inicialización del temporizador persistente por sesión
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const storedEndTime = sessionStorage.getItem('negoxia_timer_end');
      const now = Date.now();
      if (storedEndTime) {
        const remaining = Math.max(0, Math.floor((parseInt(storedEndTime, 10) - now) / 1000));
        return remaining;
      }
      const newEndTime = now + TOTAL_SECONDS * 1000;
      sessionStorage.setItem('negoxia_timer_end', newEndTime.toString());
    }
    return TOTAL_SECONDS;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const navLinks = [
    { name: 'Soluciones IA', href: '#soluciones' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Casos Reales', href: '#casos-reales' },
    {
      name: 'Calculadora de Agencia',
      href: '#calculadora',
      onClick: (e: React.MouseEvent) => {
        if (onScrollToCalculator) {
          e.preventDefault();
          onScrollToCalculator();
          setMobileMenuOpen(false);
        }
      },
    },
    { name: 'Fast Start Pack', href: '#paquetes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Escalado de Agencias', href: '#escalado' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, customClick?: (e: React.MouseEvent) => void) => {
    if (customClick) {
      customClick(e);
      return;
    }
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-xl border-b border-[#EDE3D5]/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
        {/* Brand Logo - Transparent Tech Aesthetic */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="relative flex items-center justify-center">
            {/* Tech glowing ambient behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1258FA]/20 to-[#16D1F5]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="./brand/negoxia-logo.png"
              alt="Negoxia"
              className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-sm transition-transform group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = './brand/negoxia-logo.jpg';
              }}
            />
          </div>
          <div className="hidden xs:flex flex-col">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#1258FA] uppercase">
              Negoxia
            </span>
            <span className="text-[9px] text-[#4B5578] font-medium tracking-wider">
              AI Agency Recruiting
            </span>
          </div>
        </a>

        {/* ELEMENTO DE URGENCIA: STICKY COUNTDOWN TIMER (30:00) */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#060E32] border border-[#16D1F5]/40 shadow-[0_0_18px_rgba(22,209,245,0.25)] text-white select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <Clock size={13} className="text-[#16D1F5] shrink-0 animate-pulse" />
          <span className="hidden lg:inline text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white/90">
            Oferta Especial:
          </span>
          <span className="font-mono text-xs sm:text-sm font-black text-[#16D1F5] tracking-widest tabular-nums">
            {formattedTime}
          </span>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden 2xl:flex items-center gap-4 text-xs xl:text-sm font-bold text-[#4B5578]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.onClick)}
              className="hover:text-[#1258FA] transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Nav Links for Large Desktops (Compact set if between xl and 2xl) */}
        <nav className="hidden xl:flex 2xl:hidden items-center gap-3.5 text-xs font-bold text-[#4B5578]">
          {navLinks.slice(0, 5).map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.onClick)}
              className="hover:text-[#1258FA] transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className="hover:text-[#1258FA] transition-colors whitespace-nowrap"
          >
            FAQ
          </a>
        </nav>

        {/* Right CTA con "Inicia ahora" y Glow Azul Eléctrico + Hamburguesa Móvil */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-3.5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-black flex items-center gap-1.5 sm:gap-2 shadow-xl shadow-[#1258FA]/25 hover:shadow-[#1258FA]/45 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Inicia ahora</span>
            <ArrowRight size={15} />
          </a>

          {/* Botón Menú Hamburguesa para Móvil y Tablet */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="xl:hidden p-2 rounded-xl bg-white/70 hover:bg-white text-[#060E32] border border-[#EDE3D5] shadow-sm transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil / Tablet */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFF9F2] border-b border-[#EDE3D5] px-5 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3.5 mb-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.onClick)}
                className="text-sm font-extrabold text-[#060E32] hover:text-[#1258FA] py-2 border-b border-[#EDE3D5]/50 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight size={14} className="text-[#1258FA]/50" />
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full py-3.5 text-sm font-black flex items-center justify-center gap-2 shadow-xl shadow-[#1258FA]/25 cursor-pointer"
          >
            <span>Inicia ahora</span>
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};
