import React from 'react';
import { Sparkles } from 'lucide-react';

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
            <img
              src="./brand/negoxia-logo.jpg"
              alt="Negoxia Autopilot"
              className="h-9 w-auto object-contain rounded brightness-105"
            />
            <p className="text-xs text-[#FFF9F2]/60 text-center md:text-left max-w-sm mt-1">
              El motor de inteligencia artificial que crea y publica tu contenido y anuncios sin grabarte nunca más.
            </p>
          </div>

          {/* Nav / Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF9F2]/75 font-medium">
            <button
              onClick={onOpenBooking}
              className="hover:text-[#16D1F5] transition-colors"
            >
              Diagnóstico gratis
            </button>
            {onOpenPresentation && (
              <button
                onClick={onOpenPresentation}
                className="hover:text-[#16D1F5] transition-colors flex items-center gap-1 text-[#16D1F5]"
              >
                <Sparkles size={12} />
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
          <p>© 2026 Negoxia Autopilot. Todos los derechos reservados.</p>
          <p className="max-w-xl">
            Negoxia Autopilot integra modelos de IA de última generación. Los resultados de los casos mostrados son reales pero dependen de la calidad de tu oferta, mercado, presupuesto publicitario y cierre de ventas.
          </p>
        </div>
      </div>
    </footer>
  );
};
