import React from 'react';
import { Mail, Shield, Calculator, FileText, CheckCircle2 } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

interface FooterProps {
  onScrollToCalculator?: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToCalculator,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <footer className="bg-[#04081E] text-[#FFF9F2] pt-16 pb-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="./brand/negoxia-logo.jpg"
                alt="Negoxia LLC"
                className="h-10 w-auto object-contain rounded bg-white p-1"
              />
              <span className="text-sm font-black tracking-widest uppercase text-white">
                NEGOXIA LLC
              </span>
            </div>
            <p className="text-xs text-[#FFF9F2]/75 leading-relaxed max-w-sm mt-1">
              Infraestructura tecnológica con Inteligencia Artificial y CRM para la atracción, calificación y reclutamiento sistemático de nuevos agentes de seguros.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#16D1F5] font-semibold mt-1">
              <CheckCircle2 size={14} />
              <span>Plataforma especializada en escalado de agencias</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs text-[#FFF9F2]/80 font-medium">
            <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Navegación
            </span>
            <a href="#soluciones" className="hover:text-[#16D1F5] transition-colors">
              Soluciones con IA 24/7
            </a>
            <a href="#como-funciona" className="hover:text-[#16D1F5] transition-colors">
              Cómo Funciona
            </a>
            <a href="#casos-reales" className="hover:text-[#16D1F5] transition-colors">
              Casos Reales
            </a>
            <a href="#paquetes" className="hover:text-[#16D1F5] transition-colors">
              Negoxia Pack Fast Start ($789)
            </a>
            {onScrollToCalculator && (
              <button
                onClick={onScrollToCalculator}
                className="text-left hover:text-[#16D1F5] text-[#16D1F5] font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Calculator size={13} />
                <span>Calculadora de Agencia</span>
              </button>
            )}
          </div>

          {/* Contact & Meta Compliance (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Contacto y Soporte
            </span>
            <div className="space-y-2 text-xs text-[#FFF9F2]/80">
              <a
                href="mailto:info@negoxiaautopilot.com"
                className="flex items-center gap-2 hover:text-[#16D1F5] transition-colors"
              >
                <Mail size={14} className="text-[#16D1F5]" />
                <span>info@negoxiaautopilot.com</span>
              </a>
              <a
                href="mailto:support@negoxiaautopilot.com"
                className="flex items-center gap-2 hover:text-[#16D1F5] transition-colors"
              >
                <Mail size={14} className="text-[#16D1F5]" />
                <span>support@negoxiaautopilot.com</span>
              </a>
            </div>

            {/* Meta Compliance Links */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#16D1F5]">
              <button
                onClick={onOpenPrivacy}
                type="button"
                className="hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Shield size={12} />
                <span>Política de Privacidad</span>
              </button>
              <button
                onClick={onOpenTerms}
                type="button"
                className="hover:underline flex items-center gap-1 cursor-pointer"
              >
                <FileText size={12} />
                <span>Términos de Servicio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer USA Exact Required Text */}
        <div className="pt-8 space-y-4 text-center md:text-left">
          <p className="text-[11px] text-[#FFF9F2]/60 leading-relaxed max-w-5xl mx-auto md:mx-0">
            <strong>Descargo de responsabilidad:</strong> Todos los números, cifras y métricas mostradas en esta página están desarrollados en base a pruebas y casos de estudio específicos. No garantizamos resultados. No garantizamos ventas ni garantizamos reclutamiento de personal.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FFF9F2]/40 gap-2 border-t border-white/5">
            <p>© {new Date().getFullYear()} Negoxia LLC. Todos los derechos reservados.</p>
            <p>Sistemas y Automatizaciones de Reclutamiento para Agencias de Seguros en Estados Unidos.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
