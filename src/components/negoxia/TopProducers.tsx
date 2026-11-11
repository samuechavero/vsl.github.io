import React from 'react';
import { Award, Star } from 'lucide-react';

interface TopProducer {
  name: string;
  company: string;
  image: string;
  initials: string;
}

const PRODUCERS: TopProducer[] = [
  {
    name: 'Isidro Perez',
    company: 'WFG (World Financial Group)',
    image: './isidroperez.JPG',
    initials: 'IP',
  },
  {
    name: 'Ana Cordones',
    company: 'Curiman Brokers Group',
    image: './anacordones.JPG',
    initials: 'AC',
  },
  {
    name: 'Patricia Bautista',
    company: 'WFG (World Financial Group)',
    image: './patriciabautista.JPG',
    initials: 'PB',
  },
  {
    name: 'Angel Caridad',
    company: 'National Life Group',
    image: './angelcaridad.JPG',
    initials: 'AC',
  },
  {
    name: 'Helen Jimenez',
    company: 'WFG (World Financial Group)',
    image: './helenjimenez.JPG',
    initials: 'HJ',
  },
  {
    name: 'Juan C. Franco',
    company: 'Solid Financial Plan',
    image: './juancfranco.JPG',
    initials: 'JF',
  },
  {
    name: 'Marisol Aguero',
    company: 'Seguros con Marisol',
    image: './marisolaguero.JPG',
    initials: 'MA',
  },
  {
    name: 'David Reyes',
    company: 'WFG (World Financial Group)',
    image: './davidreyes.JPG',
    initials: 'DR',
  },
];

export const TopProducers: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FFF9F2] border-t border-[#EDE3D5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1258FA]/10 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-3">
            <Award size={14} />
            <span>Casos Reales en Seguros de Vida</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#060E32] tracking-tight">
            Agentes que confían en nuestra infraestructura
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#4B5578]">
            Producen consistentemente en las principales compañías y agencias del mercado estadounidense.
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
                    // Fallback to initials if image path fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060E32] via-[#060E32]/30 to-transparent" />

                {/* Star badge */}
                <div className="absolute top-3 right-3 bg-[#060E32]/80 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 text-[10px] text-[#16D1F5] font-bold border border-white/10">
                  <Star size={10} className="fill-[#16D1F5]" />
                  <span>Top Producer</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                  <h4 className="text-base font-bold text-white leading-tight">
                    {producer.name}
                  </h4>
                  <p className="text-xs text-[#16D1F5] font-medium mt-0.5">
                    {producer.company}
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
