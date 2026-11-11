import React from 'react';
import { Calculator } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
  onScrollToCalculator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToCalculator }) => {
  return (
    <footer className="bg-[#04081E] text-[#FFF9F2] pt-14 pb-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          {/* Brand Logo in Footer */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="./brand/negoxia-logo.jpg"
              alt="Negoxia Autopilot"
              className="h-10 w-auto object-contain rounded"
            />
            <p className="text-xs text-[#FFF9F2]/70 text-center md:text-left max-w-sm mt-1">
              Tu Ecosistema de Automatización 100% "Plug & Play" para agentes de seguros de vida. Embudos, calendarios y publicidad gestionada en Meta Ads.
            </p>
          </div>

          {/* Nav / Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF9F2]/80 font-medium">
            <a
              href="https://calendly.com/vitalshieldinsurance"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#16D1F5] text-[#16D1F5] font-bold transition-colors cursor-pointer"
            >
              Quiero atención prioritaria
            </a>
            {onScrollToCalculator && (
              <button
                onClick={onScrollToCalculator}
                className="hover:text-[#16D1F5] transition-colors flex items-center gap-1 text-[#16D1F5] cursor-pointer"
              >
                <Calculator size={13} />
                <span>Calculadora ROI</span>
              </button>
            )}
            <a href="#paquetes" className="hover:text-[#16D1F5] transition-colors">
              Paquetes de Inversión
            </a>
            <a href="#como-funciona" className="hover:text-[#16D1F5] transition-colors">
              Cómo Funciona
            </a>
            <a href="#faq" className="hover:text-[#16D1F5] transition-colors">
              Preguntas Frecuentes
            </a>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#FFF9F2]/50 text-center md:text-left">
          <p>© {new Date().getFullYear()} Negoxia Autopilot. Todos los derechos reservados.</p>
          <p className="max-w-xl">
            Negoxia Autopilot es una solución de infraestructura comercial para agentes y agencias de seguros. Las proyecciones mostradas se basan en supuestos operativos del agente. No se garantizan comisiones fijas ni rendimientos sin el cierre efectivo de las pólizas.
          </p>
        </div>
      </div>
    </footer>
  );
};
