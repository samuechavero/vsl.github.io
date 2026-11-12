import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Trophy, ArrowRight, X } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vitalshieldinsurance';

interface PrizeWheelProps {
  onClose?: () => void;
  onClaim?: () => void;
}

interface Slice {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  highlight?: boolean;
}

const SLICES: Slice[] = [
  {
    title: '10% OFF',
    subtitle: 'Descuento',
    bgColor: '#060E32',
    textColor: '#FFFFFF',
  },
  {
    title: 'Consultoría',
    subtitle: 'Estrategia 1 a 1',
    bgColor: '#1258FA',
    textColor: '#FFFFFF',
  },
  {
    title: 'SETUP A $0',
    subtitle: '¡Instalación $0!',
    bgColor: '#16D1F5',
    textColor: '#060E32',
    highlight: true, // WINNER SLICE (Index 2)
  },
  {
    title: 'Mes Prueba',
    subtitle: 'Garantía 30d',
    bgColor: '#0A1E66',
    textColor: '#FFFFFF',
  },
  {
    title: 'E-Book VIP',
    subtitle: 'Manual Pro',
    bgColor: '#1258FA',
    textColor: '#FFFFFF',
  },
  {
    title: 'Sin Premio',
    subtitle: 'Sigue Intentando',
    bgColor: '#334155',
    textColor: '#CBD5E1',
  },
];

export const PrizeWheel: React.FC<PrizeWheelProps> = ({ onClose, onClaim }) => {
  const [spinning, setSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const size = 300;
  const center = size / 2;
  const radius = center - 14;

  const handleSpin = () => {
    if (spinning || hasSpun) return;

    setSpinning(true);

    // LÓGICA MATEMÁTICA TRUCADA:
    // Slice 2 es "SETUP A $0" (centro en 150° en sentido horario desde las 12 en punto).
    // Rotación necesaria para llegar a las 12 (0°): (360° - 150°) = 210°.
    // 7 vueltas completas (2520°) + 210° = 2730°.
    const randomJitter = (Math.random() * 6) - 3;
    const totalRotation = (7 * 360) + 210 + randomJitter;

    setRotation(totalRotation);

    setTimeout(() => {
      setSpinning(false);
      setHasSpun(true);
      setShowCelebration(true);
    }, 4800);
  };

  // Confeti en Canvas
  useEffect(() => {
    if (!showCelebration || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const colors = ['#16D1F5', '#1258FA', '#FFD700', '#FFFFFF', '#060E32'];
    const particles = Array.from({ length: 65 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    }));

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [showCelebration]);

  const handleClaimClick = () => {
    if (onClaim) {
      onClaim();
    } else {
      window.open(CALENDLY_URL, '_blank');
      if (onClose) onClose();
    }
  };

  return (
    <div className="relative flex flex-col items-center text-center">
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-[#060E32]/5 hover:bg-[#060E32]/10 flex items-center justify-center text-[#060E32] transition-colors cursor-pointer z-30"
        >
          <X size={18} />
        </button>
      )}

      {showCelebration && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
        />
      )}

      {!showCelebration ? (
        <>
          {/* Header con Texto Exacto Requerido */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16D1F5]/15 border border-[#16D1F5]/30 text-[#1258FA] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} className="text-[#16D1F5]" />
              <span>Regalo Exclusivo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#060E32] tracking-tight leading-snug">
              Qué interesante que estés aquí... te quiero hacer un regalo
            </h3>
            <p className="text-xs text-[#556080] mt-1.5">
              Gira la ruleta y reclama tu bonificación especial para la activación de tu agencia.
            </p>
          </div>

          {/* Wheel Container */}
          <div className="relative my-2 flex items-center justify-center">
            {/* Top Fixed Pointer */}
            <div className="absolute -top-3 z-20 flex flex-col items-center drop-shadow-md">
              <div className="w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[20px] border-t-[#E11D48]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white -mt-4 shadow-sm" />
            </div>

            {/* Glowing border ring */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-[#1258FA] via-[#16D1F5] to-[#FFD700] shadow-2xl shadow-[#1258FA]/25">
              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="transform rounded-full"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning
                    ? 'transform 4.8s cubic-bezier(0.12, 0.9, 0.2, 1)'
                    : 'none',
                }}
              >
                <circle cx={center} cy={center} r={radius + 4} fill="#060E32" />

                {/* Slices */}
                {SLICES.map((slice, i) => {
                  const anglePerSlice = 60;
                  const startAngle = (i * anglePerSlice - 90) * (Math.PI / 180);
                  const endAngle = ((i + 1) * anglePerSlice - 90) * (Math.PI / 180);

                  const x1 = center + radius * Math.cos(startAngle);
                  const y1 = center + radius * Math.sin(startAngle);
                  const x2 = center + radius * Math.cos(endAngle);
                  const y2 = center + radius * Math.sin(endAngle);

                  const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
                  const midAngleDeg = i * anglePerSlice + 30;

                  return (
                    <g key={i}>
                      <path
                        d={pathData}
                        fill={slice.bgColor}
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      />
                      <g
                        transform={`rotate(${midAngleDeg} ${center} ${center}) translate(${center}, ${center - radius * 0.62})`}
                      >
                        <text
                          textAnchor="middle"
                          fill={slice.textColor}
                          className="font-black select-none"
                          style={{
                            fontSize: slice.highlight ? '11px' : '9.5px',
                            fontWeight: slice.highlight ? 900 : 800,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {slice.title}
                        </text>
                        <text
                          y="12"
                          textAnchor="middle"
                          fill={slice.textColor}
                          className="font-medium select-none opacity-85"
                          style={{ fontSize: '7.5px' }}
                        >
                          {slice.subtitle}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Bulbs */}
                {Array.from({ length: 12 }).map((_, idx) => {
                  const bulbAngle = (idx * 30 - 90) * (Math.PI / 180);
                  const bx = center + (radius - 5) * Math.cos(bulbAngle);
                  const by = center + (radius - 5) * Math.sin(bulbAngle);
                  return (
                    <circle
                      key={idx}
                      cx={bx}
                      cy={by}
                      r="2.5"
                      fill="#FFD700"
                      stroke="#FFFFFF"
                      strokeWidth="0.8"
                    />
                  );
                })}

                {/* Center Core Cap */}
                <circle cx={center} cy={center} r="26" fill="#060E32" stroke="#16D1F5" strokeWidth="2.5" />
                <circle cx={center} cy={center} r="20" fill="url(#centerGrad)" />
                <defs>
                  <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1258FA" />
                    <stop offset="100%" stopColor="#16D1F5" />
                  </linearGradient>
                </defs>
                <text
                  x={center}
                  y={center + 3.5}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="8"
                  fontWeight="bold"
                  className="select-none tracking-widest uppercase"
                >
                  SPIN
                </text>
              </svg>
            </div>
          </div>

          {/* Spin CTA Button */}
          <button
            onClick={handleSpin}
            disabled={spinning || hasSpun}
            type="button"
            className="w-full mt-4 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1258FA] via-[#16D1F5] to-[#1258FA] text-white font-black text-sm sm:text-base tracking-wide shadow-xl shadow-[#1258FA]/35 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed animate-pulse"
          >
            {spinning ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                <span>¡Girando la ruleta...!</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2 uppercase tracking-wider">
                <span>🎰 Girar Ruleta Ahora</span>
              </span>
            )}
          </button>
        </>
      ) : (
        /* Pantalla de Victoria */
        <div className="py-2 animate-fadeIn z-40 relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1258FA] to-[#16D1F5] text-white flex items-center justify-center mx-auto mb-3 shadow-xl">
            <Trophy size={32} className="text-white animate-bounce" />
          </div>

          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
            <span>🎉 ¡Premio Máximo Ganado!</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#060E32] tracking-tight leading-tight">
            ¡Felicidades!
          </h3>

          <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-[#16D1F5]/15 via-[#FFF9F2] to-[#1258FA]/10 border-2 border-[#16D1F5] shadow-inner text-center">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#1258FA] mb-1">
              Beneficio Desbloqueado:
            </p>
            <p className="text-xl sm:text-2xl font-black text-[#060E32]">
              Instalación del Sistema Costo $0
            </p>
            <p className="text-xs font-bold text-emerald-600 mt-1">
              (Setup 100% Bonificado)
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#4B5578] max-w-sm mx-auto leading-relaxed mb-6 font-medium">
            Has desbloqueado el Setup al 100% de descuento. Tu ecosistema de reclutamiento está listo para construirse.
          </p>

          <button
            onClick={handleClaimClick}
            type="button"
            className="btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-2 shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <span>Reclamar premio y agendar atención prioritaria</span>
            <ArrowRight size={18} />
          </button>

          <p className="text-[11px] text-[#8C96AB] mt-3">
            El beneficio ha quedado reservado para tu agencia.
          </p>
        </div>
      )}
    </div>
  );
};
