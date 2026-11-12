import React from 'react';
import { MessageSquareCode, CalendarCheck, LayoutDashboard, ArrowRight, CheckCircle2, Sparkles, Zap, Bot } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

export const ServicesFeatures: React.FC = () => {
  const solutions = [
    {
      icon: Bot,
      badge: 'Atención Continua',
      title: 'Agentes Conversacionales con IA 24/7',
      desc: 'Atención automática y calificación en WhatsApp, Instagram y Messenger. Nuestro agente con IA interactúa con los candidatos a agentes en tiempo real, resuelve sus dudas y filtra por licencia o motivación antes de agendar.',
      points: [
        'Calificación multicanal en WhatsApp, IG y Messenger',
        'Filtro de idoneidad, experiencia y antecedentes',
        'Respuestas humanas e instantáneas sin intervención manual',
      ],
      gradient: 'from-[#1258FA] to-[#16D1F5]',
    },
    {
      icon: CalendarCheck,
      badge: 'Cero No-Shows',
      title: 'Agendamiento y Seguimiento Automatizado',
      desc: 'Sincronización de calendarios y recordatorios pre/post cita. Tus entrevistas de reclutamiento se agendan automáticamente en Google Calendar o Outlook con secuencias de confirmación por SMS y WhatsApp para garantizar máxima asistencia.',
      points: [
        'Sincronización directa con tu agenda personal o de equipo',
        'Recordatorios estratégicos multicanal antes de la llamada',
        'Seguimiento automático post-cita para agilizar contratos',
      ],
      gradient: 'from-[#16D1F5] to-[#0A43C8]',
    },
    {
      icon: LayoutDashboard,
      badge: 'Control Total',
      title: 'Ecosistema Todo-en-Uno',
      desc: 'Centralización de mensajes y embudos en tiempo real. Todo el flujo de reclutamiento de tu agencia en una única plataforma: chats unificados, pipeline de candidatos, campañas activas y métricas de crecimiento.',
      points: [
        'Bandeja omnicanal de mensajes y llamadas',
        'Pipeline visual de reclutamiento y etapas de firma',
        'Monitoreo en tiempo real de nuevos agentes incorporados',
      ],
      gradient: 'from-[#060E32] to-[#1258FA]',
    },
  ];

  return (
    <section id="soluciones" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-y border-[#EDE3D5] relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#16D1F5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#1258FA]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1258FA]/10 border border-[#1258FA]/20 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-[#16D1F5]" />
            <span>Infraestructura Tecnológica Exclusiva</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#060E32] tracking-tight leading-tight">
            Soluciones Principales con <span className="text-gradient-blue">IA para Escalar tu Agencia</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5578] leading-relaxed">
            Elimina el trabajo repetitivo de prospección. Automatiza el ciclo completo: desde el primer contacto del candidato hasta la entrevista en tu calendario.
          </p>
        </div>

        {/* 3 Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-7 sm:p-8 bg-white/75 backdrop-blur-xl border border-white/80 shadow-xl shadow-[#060E32]/5 hover:shadow-2xl hover:border-[#1258FA]/40 hover:-translate-y-1.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-[11px] font-extrabold uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md`}>
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#060E32] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556080] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-[#EDE3D5]/70">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#060E32] font-semibold">
                      <CheckCircle2 size={15} className="text-[#1258FA] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#060E32] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#16D1F5]/20 flex items-center justify-center text-[#16D1F5] shrink-0 hidden sm:flex">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                ¿Listo para activar tu ecosistema de reclutamiento con IA?
              </h4>
              <p className="text-xs sm:text-sm text-[#FFF9F2]/75 mt-0.5">
                Evaluamos tu agencia y te mostramos en vivo cómo llenar tu agenda con nuevos agentes calificados.
              </p>
            </div>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-xl whitespace-nowrap cursor-pointer"
          >
            <span>Quiero atención prioritaria</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};
