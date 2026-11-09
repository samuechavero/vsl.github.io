import React from 'react';
import { Clock, TrendingDown, DollarSign, AlertCircle, Sparkles } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Grabarte te roba horas valiosas',
      desc: 'La iluminación, ajustar el micrófono, el guion, repetir la misma toma diez veces y luego perder horas editando subtítulos.',
    },
    {
      icon: TrendingDown,
      title: 'Inconstancia que alimenta a tu competencia',
      desc: 'Publicas un par de días, el video no vende de inmediato y te desanimas. Mientras tanto, quien publica a diario se queda con tus clientes.',
    },
    {
      icon: DollarSign,
      title: 'La agencia tradicional no te resuelve el fondo',
      desc: 'Te cobran un retainee mensual elevado, te mandan guiones genéricos copiados y pegados… y de todas maneras eres tú quien tiene que sentarse a grabarse.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060E32]/5 border border-[#060E32]/10 text-[#060E32] text-xs font-semibold tracking-wide uppercase mb-3">
            <AlertCircle size={14} className="text-[#1258FA]" />
            <span>El problema</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Sabes que necesitas contenido.{' '}
            <span className="text-gradient-blue block mt-1">Todos los días.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4B5578]">
            El mercado no premia a quien mejor sabe hacer el trabajo, sino a quien tiene presencia
            constante en la mente del cliente.
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
                  <span>Punto crítico 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Punchline Box (Dark Accent) */}
        <div className="dark-card p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-[#16D1F5] mx-auto mb-3" />
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
              El problema no eres tú ni tu capacidad. <br className="hidden sm:block" />
              <span className="text-[#16D1F5]">Es que lo haces todo a mano.</span>
            </p>
            <p className="mt-3 text-sm text-[#FFF9F2]/80">
              Eso es exactamente lo que cambiamos con <strong>Negoxia Autopilot</strong>: un motor inteligente que trabaja mientras tú atiendes a tus clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
