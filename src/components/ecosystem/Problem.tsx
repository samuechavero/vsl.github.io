import React from 'react';
import { Layers, TrendingDown, DollarSign, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: Layers,
      title: 'El laberinto de herramientas desconectadas',
      desc: 'Tienes Zapier por un lado, una plataforma para la landing, otra para el calendario y hojas de Excel sueltas. Cuando algo falla, pierdes prospectos en el limbo.',
    },
    {
      icon: TrendingDown,
      title: 'Leads que se enfrían por falta de automatización',
      desc: 'Un prospecto interesado que no recibe un SMS o llamada de confirmación inmediata se olvida de ti o no asiste a la reunión agendada.',
    },
    {
      icon: DollarSign,
      title: 'Pagar publicidad en Meta Ads sin un embudo que convierta',
      desc: 'Inviertes dinero en campañas que dirigen a formularios fríos o perfiles sociales sin captura de datos ni seguimiento automatizado, pulverizando tu presupuesto.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060E32]/5 border border-[#060E32]/10 text-[#060E32] text-xs font-semibold tracking-wide uppercase mb-3">
            <AlertCircle size={14} className="text-[#1258FA]" />
            <span>El verdadero problema</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            La fricción técnica te está costando{' '}
            <span className="text-gradient-blue block mt-1">miles de dólares cada mes.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            Tu tiempo debe estar en cerrar ventas y entregar valor a tus clientes, no en pelear con integraciones, APIs y configuraciones complejas.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="clean-card p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#060E32] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#556080] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#EDE3D5]/60 text-xs text-[#8A95AF] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1258FA]" />
                  <span>Fricción crítica 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Punchline Box (Dark Accent) */}
        <div className="dark-card p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <CheckCircle2 className="w-8 h-8 text-[#16D1F5] mx-auto mb-3" />
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
              El problema no es tu capacidad de venta. <br className="hidden sm:block" />
              <span className="text-[#16D1F5]">Es la falta de un ecosistema que trabaje en automático.</span>
            </p>
            <p className="mt-3 text-sm text-[#FFF9F2]/80">
              En <strong>Ascent by Flow Money</strong> te entregamos la máquina completamente montada, testeada y conectada a tu nombre. 100% Plug & Play.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
