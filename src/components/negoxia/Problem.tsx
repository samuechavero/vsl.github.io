import React from 'react';
import { UserX, PhoneMissed, Shuffle, AlertCircle, Sparkles } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: UserX,
      title: 'El desgaste de la prospección manual',
      desc: 'Mandar cientos de mensajes fríos en LinkedIn, Instagram o rogar a tus conocidos para que se sumen a tu agencia agota tu energía y produce resultados inconsistentes.',
    },
    {
      icon: PhoneMissed,
      title: 'Candidatos no calificados y no-shows',
      desc: 'Entrevistas con personas sin motivación, sin interés real o que simplemente no asisten a la llamada. Pierdes horas valiosas que deberías dedicar al liderazgo y la producción.',
    },
    {
      icon: Shuffle,
      title: 'Desorden operativo y falta de seguimiento',
      desc: 'Mensajes sin responder en WhatsApp, chats desordenados y falta de recordatorios automáticos. Los mejores candidatos se enfrían o se firman con otra agencia más rápida.',
    },
  ];

  return (
    <section id="problema" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060E32]/5 border border-[#060E32]/10 text-[#060E32] text-xs font-semibold tracking-wide uppercase mb-3">
            <AlertCircle size={14} className="text-[#1258FA]" />
            <span>El verdadero obstáculo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#060E32] tracking-tight">
            ¿Por qué la mayoría de los líderes de agencia{' '}
            <span className="text-gradient-blue block mt-1">no logran escalar su equipo?</span>
          </h2>
          <p className="mt-4 text-base text-[#4B5578] leading-relaxed">
            No es tu visión ni la oportunidad de tu agencia. Es la falta de un sistema automatizado con Inteligencia Artificial que atraiga, califique y agende entrevistas de nuevos agentes de manera continua y predecible.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="clean-card p-6 sm:p-8 flex flex-col justify-between bg-white shadow-md">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1258FA]/10 flex items-center justify-center text-[#1258FA] mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-[#060E32] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#556080] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EDE3D5]/60 text-xs text-[#8A95AF] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1258FA]" />
                  <span>Cuello de Botella 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Punchline Box (Dark Accent) */}
        <div className="dark-card p-8 sm:p-12 text-center relative overflow-hidden rounded-3xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-9 h-9 text-[#16D1F5] mx-auto mb-3" />
            <p className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Las agencias en el Top 1% no persiguen candidatos manualmente. <br />
              <span className="text-[#16D1F5]">Tienen un ecosistema con IA que recluta 24/7.</span>
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed max-w-2xl mx-auto">
              Eso es exactamente <strong>Negoxia</strong>: tu infraestructura tecnológica completa con agentes IA conversacionales, embudos de reclutamiento, sincronización de calendarios y campañas publicitarias para llenar tu agencia con nuevo talento cada semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
