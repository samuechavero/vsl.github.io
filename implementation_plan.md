# Reestructuración Estética: Bóveda de Cristal y Diamantes

Transformación total de la interfaz de la Landing Page hacia una estética ultradeluxe enfocada en transparencias de gema (Glassmorphism), gradientes de diamante, y paletas cian turquesa.

## User Review Required

> [!WARNING]  
> Este cambio sobrescribirá por completo la estética oscura neutra actual, inyectando animaciones pesadas y estilos translúcidos que alteran drásticamente la jerarquía visual de la página. Por favor revisa y aprueba estos cambios de diseño detallados a continuación.

## Proposed Changes

### 1. Sistema Global de Diseño CSS (`src/index.css`)

**Nuevas Variables de Color:**
- **Backgrounds**: Fondo general `radial-gradient(circle at 50% 0%, #082d33 0%, #031013 100%)` para simular seda turquesa oscura.
- **Transparencias (Glassmorphism)**: Variables `--bg-gem: rgba(0, 180, 216, 0.08)` y `--bg-gem-elevated: rgba(0, 180, 216, 0.15)`.
- **Montura Platino**: `--border-platinum: rgba(226, 232, 240, 0.4)` con brillos interactivos.
- **Destellos**: `--diamond-glow: 0 0 20px rgba(255, 255, 255, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3)`.

**Nuevas Clases Utilitarias (Animaciones & Glassmorphism):**
- `.diamond-text`: Gradiente lineal de blanco puro a cian platino con `text-shadow` de refracción.
- `.gem-card`: Reemplazará a `.card`. Usará `backdrop-filter: blur(16px); background: var(--bg-gem); border: 1px solid var(--border-platinum); box-shadow: 0 8px 32px 0 rgba(3, 16, 19, 0.37);`
- `.btn-gem`: Diseño escultural con inset shadows para dar volumen de gema facetada al botón, brillando en hover con animaciones de refracción al pasar el cursor.
- `@keyframes sparkle`: Para los brillos intermitentes en los bordes.

---

### 2. Actualización de Componentes React (`src/App.tsx`)

#### [MODIFY] App.tsx

**Fondos y Paralaje:**
- Se inyectará un div fijo translúcido detrás del contenedor principal con un `parallax bg` global de seda turquesa.
- Se eliminará la clase de fondo oscuro regular `bg-gradient-to-b from-[#0a0b0e] to-[var(--bg)]` y se sustituirán por espaciadores sutiles que permitan ver el cristal de fondo.

**Modales y Contenedores:**
- Reemplazo global de `bg-black/85` y contenedores oscuros sólidos por la clase de cristal tallado (`.gem-card`).
- Las imágenes de avatar usarán refracciones de luz en sus bordes circulares.

**Tipografías y Palabras Clave:**
- Títulos principales utilizarán `.diamond-text` para reemplazar colores planos.
- Se reemplazarán iteraciones de `text-[#2FA4A9]` por el gradiente de diamante facetado en el contexto de títulos.

**Botones e Interactividad:**
- Los CTA pasarán a utilizar `.btn-gem`, dándoles ese volumen característico de una joya pulida con halo, en lugar de clases planas de Tailwind de fondo sólido.

## Open Questions

> [!IMPORTANT]  
> ¿Deseas que los brillos de diamante ("sparkles") se activen de forma perpetua como un halo sutil, o exclusivamente cuando el usuario interactúe (hover) con las tarjetas/botones, para mantener una carga prestacional ligera y sutil?

## Verification Plan

### Manual Verification
- Cargar un servidor local usando `pnpm run dev`.
- Verificar en móvil y escritorio que los filtros `backdrop-blur` no presenten fallos gráficos en navegadores basados en WebKit (Safari).
- Asegurarse de que el contraste entre el texto *diamante* y el fondo *turquesa seda* pase los estándares de lectura de WCAG 2.0.
