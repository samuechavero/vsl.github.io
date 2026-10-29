import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Expand, ShieldCheck, Sparkles, X } from 'lucide-react';
import './presentation.css';

const phases = [
  'Encuadre', 'Diagnóstico', 'La transformación', 'Autoridad', 'Ecosistema', 'Calificación', 'Implementación', 'Escenario', 'Inversión',
];

function Money({ value }: { value: number }) {
  return <>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)}</>;
}

function SlideFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`slide-frame ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

export function HeroSlide() {
  return <SlideFrame className="hero-slide">
    <div className="hero-copy">
      <div className="hero-lockup"><img src="./brand/ascent-wordmark.jpg" alt="Ascent" /></div>
      <Eyebrow>Presentación privada de estrategia comercial</Eyebrow>
      <h1><span>Ecosistema de Adquisición</span><br /><span>Prequalificada para</span><br /><em>Top Producers</em></h1>
      <p className="hero-lede">Objetivo: construir un sistema que aspire a generar hasta 10 reuniones calificadas por semana. Es una meta de trabajo, no una promesa de volumen ni de resultados.</p>
      <div className="hero-meta"><span><i /> Objetivo de esta llamada: revisar el plan de punta a punta, sin interrupciones.</span><span>Una conversación. Un plan claro.</span></div>
    </div>
    <div className="hero-art">
      <div className="hero-image"><img src="./brand/ascent-meeting-photo.jpg" alt="Una conversación de estrategia entre un asesor y una familia" /></div>
      <div className="hero-quote"><span className="quote-mark">“</span><p>La confianza empieza antes<br />de la primera cita.</p><small>EL PRINCIPIO ASCENT</small></div>
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="hero-index">01 <span>/ 09</span></div>
    </div>
    <div className="hero-bottom"><span>Hoy: entender dónde estás y diseñar lo que sigue.</span><span className="scroll-cue">DESLIZA PARA COMENZAR <ArrowDown size={14} /></span></div>
  </SlideFrame>;
}

export function ProblemSlide() {
  const questions = [
    ['01', '¿Con qué compañía o broker operas hoy?'],
    ['02', '¿Cuentas con equipo de ventas o cierras personalmente?'],
    ['03', '¿Cuál es tu tasa real de conversión en citas agendadas?'],
  ];
  return <SlideFrame>
    <div className="slide-heading"><Eyebrow>Primero, el espejo</Eyebrow><h2>Antes de diseñar el crecimiento,<br /><em>entendamos tu realidad.</em></h2><p>Estas respuestas determinan qué sistema tiene sentido para tu negocio.</p></div>
    <div className="diagnostic-layout">
      <div className="question-stack">{questions.map(([n, q]) => <div className="question-row" key={n}><span>{n}</span><p>{q}</p><ArrowUpRight size={17} /></div>)}</div>
      <div className="pain-panel"><div className="pain-icon"><X size={17} /></div><Eyebrow>El costo de lo conocido</Eyebrow><h3>Mucho movimiento.<br /><em>Poca conexión.</em></h3><ul><li>Leads genéricos compartidos con otros agentes.</li><li>Llamadas en frío que nadie esperaba.</li><li>Horas persiguiendo a quien no responde.</li></ul><div className="pain-foot">No es falta de esfuerzo. Es un sistema que no filtra afinidad.</div></div>
    </div>
  </SlideFrame>;
}

export function TransformationSlide() {
  return <SlideFrame>
    <div className="slide-heading"><Eyebrow>La idea que cambia la conversación</Eyebrow><h2>No vendemos pólizas.<br /><em>Comunicamos una transformación.</em></h2><p>La solución empieza por la necesidad de la familia. El producto solo es un posible vehículo.</p></div>
    <div className="compare-grid">
      <div className="compare-card traditional"><span className="card-kicker">La conversación tradicional</span><h3>El producto<br />al centro.</h3><div className="term-cloud"><span>IUL</span><span>Ilustraciones</span><span>Tasas</span><span>Jerga técnica</span></div><p>Una explicación compleja antes de entender qué importa.</p></div>
      <div className="compare-arrow"><ArrowRight size={22} /></div>
      <div className="compare-card ascent"><span className="card-kicker">La conversación Ascent</span><h3>La vida que la familia<br /><em>quiere proteger.</em></h3><div className="outcomes"><div><span>01</span><p>Planificación educativa para los hijos.</p></div><div><span>02</span><p>Explorar beneficios en vida y gastos críticos cubiertos.</p></div><div><span>03</span><p>Planificación de retiro y retiros con enfoque fiscal.</p></div><div><span>04</span><p>Transferencia intergeneracional y legado familiar.</p></div></div><div className="outcome-qualifier">Cada opción depende de los términos de la póliza, underwriting, jurisdicción y circunstancias individuales.</div></div>
    </div>
    <p className="footnote center">Los beneficios dependen del producto, sus términos, underwriting, jurisdicción y circunstancias individuales.</p>
  </SlideFrame>;
}

export function AuthoritySlide() {
  return <SlideFrame>
    <div className="split-story"><div className="story-copy"><Eyebrow>Fase 01 · autoridad personal</Eyebrow><h2>Tu historia es<br /><em>tu ventaja.</em></h2><p>Antes de hablar de soluciones, encontramos el momento real que te convirtió en agente. Una historia verídica crea contexto; no sustituye una explicación clara ni una recomendación adecuada.</p><div className="story-steps"><span><b>01</b> Entrevista 1:1</span><span><b>02</b> Historia y mensaje</span></div><div className="concepts-list"><small>CONCEPTOS ILUSTRATIVOS DE eBOOK</small><p>“Cómo empecé a planear la educación de mis hijos como madre soltera”</p><p>“Una ruta para proteger lo que más importa en mi familia”</p></div><div className="story-note"><Sparkles size={16} /> Entregables: guiones para anuncios y landing page · producción y edición de video.</div></div>
      <div className="book-stage"><div className="book-shadow" /><div className="ebook"><div className="book-top">UNA HISTORIA REAL</div><div className="book-art"><span className="sun-disc" /><div className="book-horizon" /><div className="book-path" /></div><div className="book-copy"><small>PROTECCIÓN · FAMILIA · FUTURO</small><h3>Una decisión<br /><em>que abrió camino.</em></h3><span>La historia de tu familia, en tus palabras.</span></div><div className="book-spine" /></div><div className="book-caption"><span>01 / ACTIVO EDITORIAL</span><span>eBook personalizado</span></div><div className="video-tile"><div className="play-mark">▶</div><small>GUION + VIDEO</small></div></div>
    </div>
  </SlideFrame>;
}

export function AuthorityFunnel() {
  const steps = [
    { n: '01', title: 'Impacto visual', body: 'Anuncio con una historia reconocible', tag: 'ATENCIÓN' },
    { n: '02', title: 'Educación emocional', body: 'Video y recurso editorial', tag: 'CONFIANZA' },
    { n: '03', title: 'Filtro de afinidad', body: 'Contexto, necesidad y encaje', tag: 'CALIFICACIÓN' },
    { n: '04', title: 'Agenda directa', body: 'Conversación en tu calendario', tag: 'ACCIÓN' },
  ];
  return <SlideFrame>
    <div className="slide-heading"><Eyebrow>Fase 02 · ecosistema digital</Eyebrow><h2>Que te encuentre alguien<br /><em>que ya se reconoce en ti.</em></h2><p>El “nicho espejo” conecta tu voz con personas que comparten idioma, valores, etapa o desafío.</p></div>
    <div className="funnel-layout"><div className="funnel-path">{steps.map((s, i) => <div className="funnel-step" key={s.n}><div className="funnel-node">{s.n}</div><div className="funnel-content"><small>{s.tag}</small><h3>{s.title}</h3><p>{s.body}</p></div>{i < steps.length - 1 && <div className="funnel-link" />}</div>)}</div>
      <div className="landing-preview"><div className="preview-bar"><span /><span /><span /><small>ASCENT · PÁGINA DE CAMPAÑA</small></div><div className="preview-screen"><div className="preview-text"><small>UNA CONVERSACIÓN DISTINTA</small><h3>Tu próxima etapa<br /><em>empieza con una historia.</em></h3><p>Conoce opciones para cuidar lo que más importa.</p><button type="button">Descargar guía <ArrowRight size={12} /></button></div><div className="preview-person"><div className="person-circle">A</div><span>La voz del agente</span></div></div><div className="preview-footer"><span>VIDEO · PRUEBA SOCIAL · FORMULARIO</span><span>12 MESES INCLUIDOS</span></div></div>
    </div><div className="integration-strip"><span><Check size={14} /> Captura de nombre y teléfono</span><span><Check size={14} /> CRM y registro de prospectos</span><span><Check size={14} /> Sitio web incluido por 12 meses</span><span className="disclaimer-inline">Sujeto a consentimiento, configuración y políticas de plataforma.</span></div>
  </SlideFrame>;
}

export function QualificationSlide() {
  return <SlideFrame>
    <div className="qualification-layout"><div><Eyebrow>Fase 03 · producción y calificación</Eyebrow><h2>Tu energía vuelve<br /><em>a donde importa.</em></h2><p className="qual-intro">Un equipo de setters contacta a cada prospecto para explorar interés, capacidad y encaje antes de proponer una cita.</p><div className="status-list"><div><span className="status-dot muted" /> Contactado <small>Primer intento y contexto</small></div><div><span className="status-dot indigo" /> Agendado <small>Hora elegida y registrada</small></div><div><span className="status-dot teal" /> Confirmado <small>Recordatorio previo opcional</small></div></div></div>
      <div className="calendar-card"><div className="calendar-top"><div><small>VISTA DE EJEMPLO</small><h3>Tu semana, con intención.</h3></div><div className="calendar-date">JUN <b>09—13</b></div></div><div className="calendar-grid"><div className="calendar-times"><span>9:00</span><span>10:00</span><span>11:00</span><span>12:00</span></div>{['LUN','MAR','MIÉ','JUE','VIE'].map((d,i)=><div className="calendar-day" key={d}><small>{d}</small>{[0,1,2].map((_,j)=><div className={`appointment ap-${(i+j)%4}`} key={j} style={{top:`${30+j*53+(i%2)*10}px`}}><b>{['9:30','10:15','11:00','12:30'][(i+j)%4]}</b><span>{['Revisión','Consulta','Seguimiento','Inicial'][(i+j)%4]}</span></div>)}</div>)}</div><div className="calendar-bottom"><ShieldCheck size={15} /> Objetivo operativo: hasta 10 reuniones calificadas por semana; volumen no garantizado.</div></div>
    </div><p className="footnote">WhatsApp y otros recordatorios solo se envían cuando el prospecto ha dado su consentimiento.</p>
  </SlideFrame>;
}

export function TimelineSlide() {
  const phases = [
    { week:'01', label:'Semana 1', title:'Encontrar la historia', items:['Entrevista de identidad','Ángulo y guion editorial'] },
    { week:'02', label:'Semana 2', title:'Construir el sistema', items:['eBook, página y video','CRM y flujo de campaña'] },
    { week:'03', label:'Viernes previo', title:'Validar y activar', items:['Prueba de punta a punta','Activación operativa: $997'] },
    { week:'04', label:'Semana 3+', title:'Medir y optimizar', items:['Objetivo: 10–15 citas semanales*','Aprendizaje continuo'] },
  ];
  return <SlideFrame>
    <div className="slide-heading"><Eyebrow>La ruta crítica · tres semanas de preparación</Eyebrow><h2>De una buena historia<br /><em>a un sistema en marcha.</em></h2><p>Una secuencia de trabajo visible, con responsables y decisiones claras.</p></div>
    <div className="timeline-track">{phases.map((p,i)=><div className={`timeline-phase tp-${i}`} key={p.week}><div className="timeline-dot">{p.week}</div><small>{p.label}</small><h3>{p.title}</h3><ul>{p.items.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div>
    <div className="activation-callout"><div className="activation-icon"><Check size={17}/></div><div><small>ANTES DE LANZAR</small><b>Pago operativo por el agendamiento de esa semana: $997</b></div><p>La oferta muestra una tarifa estándar de $1,000 por semana.</p></div>
    <p className="footnote">* 10–15 citas semanales es un objetivo, no una garantía. Depende de demanda, campaña, presupuesto, disponibilidad y criterios de calificación.</p>
  </SlideFrame>;
}

export function InteractiveGrowthCalculator() {
  const [meetings, setMeetings] = useState(10);
  const [closeRate, setCloseRate] = useState(10);
  const [premium, setPremium] = useState(250);
  const [commission, setCommission] = useState(85);
  const annualPremium = premium * 12;
  const perPolicy = annualPremium * (commission / 100);
  const weeklySales = Math.floor(meetings * (closeRate / 100));
  const totalCitasMes1 = meetings * 2;
  const monthOneSales = weeklySales * 2;
  const monthOneGross = monthOneSales * perPolicy;
  const monthOneCost = 1500 + (1000 * 2);
  const monthOneNetIllustration = monthOneGross - monthOneCost;
  const totalCitasMes2 = meetings * 4;
  const monthTwoSales = weeklySales * 4;
  const monthTwoGross = monthTwoSales * perPolicy;
  const monthTwoCost = 1000 * 4;
  const monthTwoNetIllustration = monthTwoGross - monthTwoCost;
  const annualGross = monthOneGross + (monthTwoGross * 11);
  const annualCost = monthOneCost + (monthTwoCost * 11);
  const annualNetIllustration = annualGross - annualCost;
  const breakEvenSales = perPolicy > 0 ? Math.ceil(monthOneCost / perPolicy) : 0;
  const salesEveryTen = Math.floor(10 * (closeRate / 100));
  const closeReference = closeRate === 10
    ? '1 venta cerrada cada 10 citas'
    : closeRate === 20
      ? '2 ventas cada 10 citas'
      : `${salesEveryTen} ${salesEveryTen === 1 ? 'venta' : 'ventas'} cada 10 citas`;
  const currency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
  return <SlideFrame className="calculator-slide">
    <div className="calc-header"><div><Eyebrow>Escenario interactivo · no una promesa</Eyebrow><h2>Haz las cuentas<br /><em>con tus supuestos.</em></h2></div><div className="scenario-badge"><span /> MODELO ILUSTRATIVO</div></div>
    <div className="calculator-layout"><div className="calc-controls">
      <div className="control-row"><label htmlFor="meetings">Citas calificadas semanales <small>Objetivo de planificación, no garantía</small></label><div className="range-value">{meetings}<span> citas/sem.</span></div><input id="meetings" data-testid="calculator-meetings" type="range" min="5" max="20" step="1" value={meetings} onChange={e=>setMeetings(Number(e.target.value))}/></div>
      <div className="control-row"><label htmlFor="close">Tasa de cierre del agente <small>{closeReference}</small></label><div className="range-value">{closeRate}<span>%</span></div><input id="close" data-testid="calculator-close-rate" type="range" min="5" max="30" step="5" value={closeRate} onChange={e=>setCloseRate(Number(e.target.value))}/></div>
      <div className="input-row"><label htmlFor="premium">Prima mensual promedio</label><div className="money-input"><span>$</span><input id="premium" data-testid="calculator-premium" type="number" min="100" max="1000" step="25" value={premium} onChange={e=>setPremium(Math.min(1000,Math.max(100,Number(e.target.value)||100)))}/><span>USD / mes</span></div></div>
      <div className="control-row commission-control"><label htmlFor="commission">Comisión sobre prima anual</label><div className="range-value">{commission}<span>%</span></div><input id="commission" data-testid="calculator-commission" type="range" min="50" max="110" step="5" value={commission} onChange={e=>setCommission(Number(e.target.value))}/></div>
      <div className="method-note"><span>MÉTODO DE PROYECCIÓN</span><p>Comisión/póliza = prima mensual × 12 × comisión %.</p><p>Ventas/semana = piso(citas semanales × tasa de cierre).</p><p>Mes 1: 2 semanas activas. Mes 2+: 4 semanas activas.</p></div>
    </div><div className="calc-results">
      <div className="scenario-cards"><div className="scenario-card"><small>MES 1 · 2 SEMANAS ACTIVAS</small><strong data-testid="month-one-sales">{monthOneSales}</strong><span>{totalCitasMes1} citas · ventas estimadas</span><b>{currency(monthOneGross)} <i>comisión bruta</i></b></div><div className="scenario-card featured"><small>MES 2+ · 4 SEMANAS ACTIVAS</small><strong data-testid="month-two-sales">{monthTwoSales}</strong><span>{totalCitasMes2} citas · ventas estimadas</span><b>{currency(monthTwoGross)} <i>comisión bruta / mes</i></b></div></div>
      <div className="cost-comparison"><div><span>Comisión bruta · Mes 1</span><b>{currency(monthOneGross)}</b></div><div><span>Setup + 2 semanas activas · Mes 1</span><b className="cost-value">−{currency(monthOneCost)}</b></div><div className="net-row"><span>Beneficio neto ilustrativo · Mes 1</span><b data-testid="month-one-net">{currency(monthOneNetIllustration)}</b></div><div><span>Comisión bruta · Mes 2+</span><b data-testid="gross-monthly">{currency(monthTwoGross)}</b></div><div><span>4 semanas de servicio · Mes 2+</span><b className="cost-value">−{currency(monthTwoCost)}</b></div><div className="net-row"><span>Beneficio neto ilustrativo · Mes 2+</span><b data-testid="illustrative-net">{currency(monthTwoNetIllustration)}</b></div><div className="break-even"><span>Ventas para cubrir setup + servicio de Mes 1</span><b data-testid="break-even-sales">{breakEvenSales} <i>ventas</i></b></div></div>
      <div className="annual-note"><div className="annual-metric"><span>12 MESES · COMISIÓN BRUTA</span><b data-testid="gross-annual">{currency(annualGross)}</b></div><div className="annual-metric"><span>12 MESES · NETO ILUSTRATIVO</span><b data-testid="net-annual">{currency(annualNetIllustration)}</b></div></div>
    </div></div>
    <div className="calc-disclaimer">Escenario ilustrativo, no pronóstico. El neto solo resta setup y servicio según las semanas activas indicadas; no contempla persistencia, adelantos, chargebacks, gastos de campaña, otros costos ni impuestos. Las comisiones, elegibilidad y términos dependen de cada póliza y contrato. Los resultados reales varían; no se garantizan ventas, ingresos ni citas. Consulta profesionales de impuestos o derecho con licencia.</div>
  </SlideFrame>;
}

export function PricingSlide() {
  return <SlideFrame className="pricing-slide">
    <div className="pricing-head"><Eyebrow>La inversión · con transparencia</Eyebrow><h2>Un sistema claro.<br /><em>Una decisión informada.</em></h2><p>Revisemos el alcance, la inversión y si encaja con la etapa de tu práctica.</p></div>
    <div className="pricing-cards"><div className="price-card"><div className="price-top"><small>UNA SOLA VEZ</small><span>ARMADO</span></div><h3>Setup completo</h3><div className="price-amount"><Money value={1500}/><span>USD</span></div><p>Construcción de los activos para salir al mercado.</p><ul><li><Check/> Página y funnel</li><li><Check/> eBook e historia</li><li><Check/> Producción de video</li><li><Check/> Configuración de campaña</li></ul><div className="price-foot">Opción de 2 pagos de $750 USD</div></div>
      <div className="price-card primary-price"><div className="price-top"><small>SERVICIO SEMANAL</small><span>OPERACIÓN</span></div><h3>Calificación y agenda</h3><div className="price-amount"><Money value={1000}/><span>USD / semana</span></div><p>Servicio semanal con objetivo operativo de hasta 10 reuniones calificadas; no garantizado.</p><ul><li><Check/> Contacto y filtro 1:1</li><li><Check/> Registro de estatus</li><li><Check/> Agenda y seguimiento</li><li><Check/> Optimización continua</li></ul><div className="price-foot">Tarifa mínima: $1,000 USD / semana</div></div>
    </div><div className="close-band"><div><span>01</span><p>¿El modelo coincide con tus metas y tu capacidad de atención?</p></div><div><span>02</span><p>¿Qué necesitas validar antes de tomar una decisión?</p></div><div className="capacity-note">La capacidad mensual es operativa y limitada por recursos de implementación; se confirma disponibilidad al conversar.</div></div>
    <p className="pricing-disclaimer">El pago operativo de $997 corresponde a la semana de activación indicada en la ruta crítica; la oferta muestra una tarifa estándar de $1,000 por semana. No se cuenta como una tarifa adicional dentro del escenario de arranque. Alcance, fechas y condiciones se confirman por escrito. Cualquier producto y beneficio depende de términos, underwriting, jurisdicción y circunstancias individuales. Consulta a profesionales fiscales o legales con licencia.</p>
  </SlideFrame>;
}

const SlideContent = [HeroSlide, ProblemSlide, TransformationSlide, AuthoritySlide, AuthorityFunnel, QualificationSlide, TimelineSlide, InteractiveGrowthCalculator, PricingSlide];

export function AscentPresentation({ onClose }: { onClose?: () => void }) {
  const [active, setActive] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slidesRef = useRef<HTMLElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(SlideContent.length - 1, index));
    slidesRef.current[next]?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  }, []);

  useEffect(() => {
    const nodes = slidesRef.current.filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
          setActive(Number((entry.target as HTMLElement).dataset.slide));
        }
      });
    }, { threshold: [0.45, 0.65] });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT','TEXTAREA','SELECT'].includes((e.target as HTMLElement).tagName)) return;
      if (['ArrowDown','PageDown',' '].includes(e.key)) { e.preventDefault(); goTo(active + 1); }
      if (['ArrowUp','PageUp'].includes(e.key)) { e.preventDefault(); goTo(active - 1); }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End') { e.preventDefault(); goTo(SlideContent.length - 1); }
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          void document.exitFullscreen();
        } else if (onClose) {
          e.preventDefault();
          onClose();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    const onFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('fullscreenchange', onFullscreen);
    };
  }, [active, goTo, onClose]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen?.();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <main
      className="ascent-presentation"
      ref={containerRef}
      onTouchStart={e => { touchStart.current = e.touches[0].clientY; }}
      onTouchEnd={e => {
        if (touchStart.current === null) return;
        const delta = touchStart.current - e.changedTouches[0].clientY;
        if (Math.abs(delta) > 55) goTo(active + (delta > 0 ? 1 : -1));
        touchStart.current = null;
      }}
    >
      <div className="presentation-top">
        <div className="mini-brand">
          <img src="./brand/ascent-mark.jpg" alt="Ascent" />
          <span>ASCENT</span>
          <i>PRIVATE STRATEGY</i>
        </div>
        <div className="top-right">
          <span className="live-indicator"><i /> Presentación privada</span>
          <button
            className="fullscreen-button"
            data-testid="fullscreen-toggle"
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Ver en pantalla completa'}
          >
            <Expand size={15} />
            <span>{isFullscreen ? 'Salir' : 'Pantalla completa'}</span>
          </button>
          {onClose && (
            <button
              className="close-presentation-button"
              type="button"
              onClick={onClose}
              aria-label="Volver a la web"
            >
              <X size={15} />
              <span>Volver a la web</span>
            </button>
          )}
        </div>
      </div>
      <div className="slides-viewport">
        {SlideContent.map((Component, index) => (
          <section
            className={`presentation-slide ${active === index ? 'is-active' : ''}`}
            key={index}
            data-slide={index}
            aria-label={`Fase ${index + 1}: ${phases[index]}`}
            ref={el => { if (el) slidesRef.current[index] = el; }}
          >
            <Component />
          </section>
        ))}
      </div>
      <nav className="phase-nav" aria-label="Navegación de fases">
        {phases.map((name, index) => (
          <button
            key={name}
            data-testid={`phase-${index + 1}`}
            className={active === index ? 'active' : ''}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Ir a fase ${index + 1}: ${name}`}
            aria-current={active === index ? 'step' : undefined}
          >
            <span className="phase-dot" />
            <span className="phase-tooltip">{String(index + 1).padStart(2, '0')} · {name}</span>
          </button>
        ))}
      </nav>
      <div className="presentation-footer">
        <span>{String(active + 1).padStart(2, '0')} <i>/</i> 09</span>
        <div className="footer-progress">
          <span style={{ transform: `scaleX(${(active + 1) / 9})` }} />
        </div>
        <div className="footer-hint">
          <ArrowUpRight size={13} /> Usa flechas o desplaza
        </div>
      </div>
      <div className="slide-arrows">
        <button
          type="button"
          data-testid="previous-slide"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Fase anterior"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          data-testid="next-slide"
          onClick={() => goTo(active + 1)}
          disabled={active === 8}
          aria-label="Fase siguiente"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </main>
  );
}

export default AscentPresentation;
