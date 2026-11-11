import React from 'react';
import { Check, ArrowRight, Sparkles, Shield, Zap, Layers, Headphones, Megaphone } from 'lucide-react';

interface PricingPackagesProps {
  onOpenBooking: () => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenBooking }) => {
  return (
    <section id="paquetes" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF9F2] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Inversión Todo Incluido</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#060E32] tracking-tight leading-tight">
            Un solo plan.{' '}
            <span className="text-gradient-blue">Toda la máquina activa.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Sin tarifas sorpresa, sin configuraciones complejas y con el presupuesto publicitario ya contemplado.
          </p>
        </div>

        {/* Pricing Card Principal */}
        <div className="clean-card p-8 sm:p-12 relative overflow-hidden bg-white border-2 border-[#1258FA]/30 shadow-2xl">
          {/* Top Decorative Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1258FA] to-[#16D1F5]" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-[#EDE3D5] gap-6">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                Plan Completo · Plug & Play
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
                Ecosistema CRM y Automatización
              </h3>
              <p className="text-sm text-[#556080] mt-1.5 max-w-lg">
                La solución definitiva para agentes de seguros de vida que buscan delegar la tecnología y llenar su agenda semanalmente.
              </p>
            </div>

            {/* Price Tag */}
            <div className="p-6 rounded-2xl bg-[#FFF9F2] border border-[#EDE3D5] text-center md:text-right shrink-0 w-full md:w-auto">
              <span className="text-xs uppercase tracking-widest text-[#556080] font-bold block mb-1">
                Inversión Mensual
              </span>
              <div className="flex items-baseline justify-center md:justify-end gap-1.5">
                <span className="text-4xl sm:text-5xl font-black text-[#060E32]">$769</span>
                <span className="text-sm font-bold text-[#556080]">USD / mes</span>
              </div>
              <p className="text-xs font-semibold text-[#1258FA] mt-1">
                Presupuesto publicitario incluido
              </p>
            </div>
          </div>

          {/* Entregables List */}
          <div className="py-8 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-[#060E32] font-black mb-4">
              Entregables del Ecosistema:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#060E32]">Subcuenta de CRM a tu nombre</h5>
                  <p className="text-xs text-[#556080] mt-0.5">
                    Propiedad total de tus datos, contactos y pipelines de venta sin intermediarios.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#060E32]">Clonación de embudos y calendarios</h5>
                  <p className="text-xs text-[#556080] mt-0.5">
                    Páginas de alta conversión para seguros y calendarios sincronizados listos para agendar.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#060E32]">Llamadas y SMS con números exclusivos</h5>
                  <p className="text-xs text-[#556080] mt-0.5">
                    Telefonía integrada para contactar a tus prospectos al instante con tu número local propio.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#EDE3D5] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1258FA]/15 flex items-center justify-center text-[#1258FA] shrink-0 mt-0.5">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#060E32]">Gestión de campañas publicitarias</h5>
                  <p className="text-xs text-[#556080] mt-0.5">
                    Campañas en Meta Ads con presupuesto publicitario incluido y optimización constante.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner Full-Width Soporte */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#060E32] to-[#0A1A5C] text-white flex items-center gap-3.5 shadow-md">
              <div className="w-8 h-8 rounded-full bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0">
                <Headphones size={18} />
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold text-white">Soporte continuo anti-fallas</h5>
                <p className="text-xs text-[#FFF9F2]/75">
                  Acompañamiento técnico para que tu sistema nunca se detenga y tus citas lleguen sin interrupción.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 border-t border-[#EDE3D5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#556080]">
              <Shield size={16} className="text-[#1258FA]" />
              <span>Sin contratos forzosos · Cancela cuando lo desees</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-primary w-full sm:w-auto px-8 py-4 text-base font-bold flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <span>Construir mi Máquina de Ventas</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
