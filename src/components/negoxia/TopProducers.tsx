import React from 'react';
import { Award, Star } from 'lucide-react';

interface TopProducer {
  name: string;
  role: string;
  image: string;
  initials: string;
}

const PRODUCERS: TopProducer[] = [
  {
    name: 'Isidro Perez',
    role: 'Líder de Organización · Expansión Nacional',
    image: './isidroperez.JPG',
    initials: 'IP',
  },
  {
    name: 'Ana Cordones',
    role: 'Directora de Agencia · Reclutamiento Activo',
    image: './anacordones.JPG',
    initials: 'AC',
  },
  {
    name: 'Patricia Bautista',
    role: 'Líder Regional · Constructora de Equipos',
    image: './patriciabautista.JPG',
    initials: 'PB',
  },
  {
    name: 'Angel Caridad',
    role: 'Director de Crecimiento · Agencia Asociada',
    image: './angelcaridad.JPG',
    initials: 'AC',
  },
  {
    name: 'Helen Jimenez',
    role: 'Líder de Equipo · Escalamiento de Agencia',
    image: './helenjimenez.JPG',
    initials: 'HJ',
  },
  {
    name: 'Juan C. Franco',
    role: 'Director de Expansión · Organización Líder',
    image: './juancfranco.JPG',
    initials: 'JF',
  },
  {
    name: 'Marisol Aguero',
    role: 'Líder de Agencia · Reclutamiento Continuo',
    image: './marisolaguero.JPG',
    initials: 'MA',
  },
  {
    name: 'David Reyes',
    role: 'Constructor de Organización · Red Nacional',
    image: './davidreyes.JPG',
    initials: 'DR',
  },
];

export const TopProducers: React.FC = () => {
  return (
    <section id="casos-reales" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FFF9F2] border-t border-[#EDE3D5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-3">
            <Award size={14} />
            <span>Prueba Social & Liderazgo</span>
          </div>
          {/* Texto Exacto Requerido por Compliance */}
          <h3 className="text-2xl sm:text-4xl font-black text-[#060E32] tracking-tight">
            Agentes y clientes actuales reales de nuestra agencia
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#4B5578]">
            Líderes y dueños de agencia que escalan su organización e incorporan talento nuevo cada semana utilizando nuestro ecosistema de automatización.
          </p>
        </div>

        {/* 4-column responsive grid matching 9:16 aspect ratio */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCERS.map((producer, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-[#EDE3D5] bg-[#060E32] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative w-full aspect-[9/14] overflow-hidden">
                <img
                  src={producer.image}
                  alt={producer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E32] via-[#060E32]/35 to-transparent" />

                {/* Star badge */}
                <div className="absolute top-3 right-3 bg-[#060E32]/85 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 text-[10px] text-[#16D1F5] font-bold border border-white/10">
                  <Star size={10} className="fill-[#16D1F5]" />
                  <span>Líder Activo</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                  <h4 className="text-base font-bold text-white leading-tight">
                    {producer.name}
                  </h4>
                  <p className="text-xs text-[#16D1F5] font-medium mt-1 leading-snug">
                    {producer.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
