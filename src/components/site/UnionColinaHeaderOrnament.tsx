import { cn } from "@/lib/utils";

/**
 * Ornamental horizontal frame designed exclusively for the top of the
 * União da Colina site. Rendered as a responsive SVG that paints two
 * green bands separated by a slim white ribbon, ends in an organic
 * curve, and radiates delicate curves outward from the crest area.
 *
 * Decorative only — pointer-events none, aria-hidden true.
 */
export function UnionColinaHeaderOrnament({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-x-0 top-0 h-full w-full", className)}
    >
      <defs>
        <linearGradient id="uc-band-main" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B5D35" />
          <stop offset="100%" stopColor="#043D25" />
        </linearGradient>
        <linearGradient id="uc-band-lower" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#16834C" />
          <stop offset="100%" stopColor="#0B5D35" />
        </linearGradient>
        <radialGradient id="uc-glow" cx="0.08" cy="0.5" r="0.55">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* main deep-green band */}
      <path
        d="M0,0 H1440 V108 C1240,132 1000,92 720,116 C440,140 200,96 0,120 Z"
        fill="url(#uc-band-main)"
      />

      {/* soft radial glow behind crest position (left) */}
      <rect x="0" y="0" width="1440" height="160" fill="url(#uc-glow)" />

      {/* white separator ribbon */}
      <path
        d="M0,120 C200,96 440,140 720,116 C1000,92 1240,132 1440,108 L1440,116 C1240,140 1000,100 720,124 C440,148 200,104 0,128 Z"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* lower lighter green band with organic bottom curve */}
      <path
        d="M0,128 C200,104 440,148 720,124 C1000,100 1240,140 1440,116 L1440,150 C1220,166 980,132 720,148 C460,164 220,132 0,154 Z"
        fill="url(#uc-band-lower)"
      />

      {/* thin gold hairline riding the white ribbon */}
      <path
        d="M0,124 C200,100 440,144 720,120 C1000,96 1240,136 1440,112"
        fill="none"
        stroke="#C8A84E"
        strokeOpacity="0.55"
        strokeWidth="0.6"
      />

      {/* ornamental curves radiating from the crest area (left) */}
      <g fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.9">
        <path d="M90,42 C260,26 460,54 680,40" />
        <path d="M90,58 C280,46 500,74 720,54" />
        <path d="M90,74 C300,64 540,92 760,68" />
      </g>
      <g fill="none" stroke="rgba(200,168,78,0.35)" strokeWidth="0.7">
        <path d="M90,50 C280,36 500,64 720,46" />
      </g>

      {/* symmetric echo curves from the right edge */}
      <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8">
        <path d="M1360,44 C1200,30 1020,58 820,44" />
        <path d="M1360,60 C1180,50 980,78 780,58" />
      </g>

      {/* tiny gold star/point accents */}
      <g fill="#C8A84E">
        <circle cx="360" cy="132" r="1.4" />
        <circle cx="720" cy="126" r="1.6" />
        <circle cx="1080" cy="132" r="1.4" />
      </g>
    </svg>
  );
}
