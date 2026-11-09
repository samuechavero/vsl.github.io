import React from 'react';
import { Workflow } from 'lucide-react';

interface FooterProps {
  onOpenPresentation?: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPresentation, onOpenBooking }) => {
  return (
    <footer className="bg-[#04081E] text-[#FFF9F2] pt-14 pb-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          {/* Brand Logo in Footer */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-extrabold text-base border border-white/20">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#1258FA] to-[#16D1F5]">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-white leading-none">
                  ASCENT
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#16D1F5] uppercase">
                  by Flow Money
                </span>
              </div>
            </div>
            <p className="text-xs text-[#FFF9F2]/60 text-center md:text-left max-w-sm mt-1">
              Ecosistema CRM, automatización en GoHighLevel y publicidad gestionada en Meta Ads 100% Plug & Play.
            </p>
          </div>

          {/* Nav / Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF9F2]/75 font-medium">
            <button
              onClick={onOpenBooking}
              className="hover:text-[#16D1F5] transition-colors cursor-pointer"
            >
              Obtener mi Ecosistema
            </button>
            {onOpenPresentation && (
              <button
                onClick={onOpenPresentation}
                className="hover:text-[#16D1F5] transition-colors flex items-center gap-1.5 text-[#16D1F5] cursor-pointer"
              >
                <Workflow size={13} />
                <span>Presentación Privada</span>
              </button>
            )}
            <a href="#terminos" className="hover:text-[#16D1F5] transition-colors">
              Términos de servicio
            </a>
            <a href="#privacidad" className="hover:text-[#16D1F5] transition-colors">
              Política de privacidad
            </a>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#FFF9F2]/50 text-center md:text-left">
          <p>© 2026 Ascent by Flow Money. Todos los derechos reservados.</p>
          <p className="max-w-xl">
            Ascent by Flow Money es una firma de implementación de sistemas comerciales y tráfico digital. Los resultados expuestos son casos de éxito documentados y varían de acuerdo a tu mercado, oferta comercial y capacidad operativa.
          </p>
        </div>
      </div>
    </footer>
  );
};
