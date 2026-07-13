import { cn } from "@/lib/utils";

/**
 * Ornamento decorativo do rodapé — inspirado no acabamento do hero, porém
 * com composição própria: ramos partindo dos cantos inferiores, arcos
 * concêntricos na base, contorno circular parcial no canto inferior direito,
 * estrelas douradas discretas e uma faixa orgânica horizontal.
 * Puramente decorativo — aria-hidden.
 */
export function FooterBrandPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 380"
      preserveAspectRatio="xMidYMax slice"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      {/* Marca-d'água muito suave: círculo abstrato central-superior */}
      <g opacity="0.04" fill="none" stroke="#ffffff" strokeWidth="1">
        <circle cx="720" cy="60" r="150" />
        <circle cx="720" cy="60" r="110" />
        <circle cx="720" cy="60" r="70" />
      </g>

      {/* Arcos concêntricos na base */}
      <g fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1">
        <path d="M-200,360 Q720,240 1640,360" />
        <path d="M-200,380 Q720,270 1640,380" opacity="0.7" />
        <path d="M-200,400 Q720,300 1640,400" opacity="0.45" />
      </g>

      {/* Faixa orgânica horizontal (verde intermediário) na parte inferior */}
      <path
        d="M0,330 C240,300 480,360 720,332 C960,304 1200,360 1440,330 L1440,380 L0,380 Z"
        fill="rgba(30, 95, 60, 0.35)"
      />

      {/* Ramo de folhas — canto inferior esquerdo */}
      <g transform="translate(20, 300)" fill="none" stroke="rgba(200,168,78,0.55)" strokeWidth="1.2">
        <path d="M0,60 C40,20 90,-10 160,-30" />
        <path d="M20,40 C40,30 60,28 78,34" />
        <path d="M60,10 C80,0 100,-2 118,4" />
        <path d="M110,-20 C130,-30 150,-32 168,-26" />
        {/* folhas */}
        <path d="M35,40 C45,28 60,26 68,34 C58,42 44,44 35,40 Z" fill="rgba(200,168,78,0.18)" />
        <path d="M78,10 C92,0 108,-2 116,6 C104,14 88,16 78,10 Z" fill="rgba(200,168,78,0.18)" />
        <path d="M130,-20 C144,-30 160,-30 168,-22 C156,-14 140,-14 130,-20 Z" fill="rgba(200,168,78,0.18)" />
      </g>

      {/* Ramo de folhas — canto inferior direito (espelhado, composição diferente) */}
      <g transform="translate(1420, 310) scale(-1,1)" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2">
        <path d="M0,50 C30,10 80,-20 170,-40" />
        <path d="M30,30 C50,20 72,18 92,24" />
        <path d="M90,-2 C112,-14 134,-14 154,-6" />
        <path d="M40,25 C52,15 68,14 76,22 C64,30 48,30 40,25 Z" fill="rgba(255,255,255,0.10)" />
        <path d="M100,-4 C118,-14 138,-14 146,-6 C132,4 114,4 100,-4 Z" fill="rgba(255,255,255,0.10)" />
      </g>

      {/* Contorno circular parcial — canto inferior direito */}
      <g transform="translate(1320,340)" fill="none" stroke="rgba(200,168,78,0.35)" strokeWidth="1">
        <path d="M -120,0 A 120,120 0 0 1 120,0" />
        <path d="M -90,0 A 90,90 0 0 1 90,0" opacity="0.7" />
        <path d="M -60,0 A 60,60 0 0 1 60,0" opacity="0.5" />
      </g>

      {/* Linhas curvas subindo pelas laterais */}
      <path
        d="M40,380 C60,260 30,160 90,60"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1"
      />
      <path
        d="M1400,380 C1380,260 1420,160 1360,60"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1"
      />

      {/* Pequenas estrelas douradas discretas */}
      <g fill="rgba(200,168,78,0.65)">
        {[
          [200, 80],
          [340, 40],
          [560, 110],
          [860, 70],
          [1080, 40],
          [1240, 100],
          [1180, 200],
          [260, 200],
          [720, 180],
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx},${cy})`}>
            <path d="M0,-3 L0.9,-0.9 L3,0 L0.9,0.9 L0,3 L-0.9,0.9 L-3,0 L-0.9,-0.9 Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}