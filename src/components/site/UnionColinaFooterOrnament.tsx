import brasao from "@/assets/brasao.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Structural ornamental composition for the top of the footer.
 * Comes down from the white content area and transforms — through curves,
 * bands and ribbons — into the deep-green footer, with the school crest
 * anchored as a medallion at the visual origin point.
 *
 * Purely decorative wrapper; the crest keeps its original colors.
 */
export function UnionColinaFooterOrnament({ className }: { className?: string }) {
  return (
    <div className={cn("relative isolate", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="block h-[140px] w-full sm:h-[170px] lg:h-[200px]"
      >
        <defs>
          <linearGradient id="uc-foot-main" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0B5D35" />
            <stop offset="100%" stopColor="#032F1D" />
          </linearGradient>
          <linearGradient id="uc-foot-mid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#16834C" />
            <stop offset="100%" stopColor="#0B5D35" />
          </linearGradient>
          {/* Reusable leaf shape inspired by the laurel branch of the crest */}
          <symbol id="uc-leaf" viewBox="-6 -14 12 28">
            <path
              d="M0,-13 C4.2,-9 5.6,-3 3.6,3 C2.1,7.6 0.9,10.6 0,13 C-0.9,10.6 -2.1,7.6 -3.6,3 C-5.6,-3 -4.2,-9 0,-13 Z"
              fill="currentColor"
            />
            <path d="M0,-11 L0,11" stroke="rgba(0,0,0,0.18)" strokeWidth="0.6" fill="none" />
          </symbol>
          {/* Small five-point star, echoing the stars around the seal */}
          <symbol id="uc-star" viewBox="-5 -5 10 10">
            <path
              d="M0,-4.6 L1.15,-1.4 L4.5,-1.4 L1.75,0.6 L2.85,3.8 L0,1.85 L-2.85,3.8 L-1.75,0.6 L-4.5,-1.4 L-1.15,-1.4 Z"
              fill="currentColor"
            />
          </symbol>
        </defs>

        {/* upper light green fold */}
        <path
          d="M0,60 C260,20 520,90 720,60 C920,30 1180,90 1440,50 L1440,120 C1180,150 920,90 720,120 C520,150 260,90 0,130 Z"
          fill="url(#uc-foot-mid)"
          opacity="0.95"
        />

        {/* thin white ribbon */}
        <path
          d="M0,118 C260,88 520,148 720,118 C920,88 1180,148 1440,110 L1440,124 C1180,160 920,100 720,132 C520,160 260,100 0,140 Z"
          fill="#FFFFFF"
        />

        {/* gold hairline riding the ribbon */}
        <path
          d="M0,120 C260,90 520,150 720,120 C920,90 1180,150 1440,112"
          fill="none"
          stroke="#C8A84E"
          strokeOpacity="0.6"
          strokeWidth="0.8"
        />

        {/* main deep green wave */}
        <path
          d="M0,140 C240,110 500,168 720,138 C940,108 1200,168 1440,130 L1440,220 L0,220 Z"
          fill="url(#uc-foot-main)"
        />

        {/* concentric arcs echoing the circular seal of the crest */}
        <g fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.9">
          <path d="M540,178 C620,150 820,150 900,178" />
          <path d="M520,190 C610,158 830,158 920,190" />
        </g>
        <g fill="none" stroke="rgba(200,168,78,0.55)" strokeWidth="0.7">
          <path d="M560,170 C630,146 810,146 880,170" />
        </g>

        {/* laurel branch — left side (leaves of decreasing size following the ribbon) */}
        <g style={{ color: "rgba(255,255,255,0.55)" }}>
          {[
            { x: 520, y: 178, r: -62, s: 1 },
            { x: 470, y: 180, r: -55, s: 0.95 },
            { x: 420, y: 184, r: -48, s: 0.9 },
            { x: 370, y: 188, r: -42, s: 0.85 },
            { x: 320, y: 190, r: -36, s: 0.8 },
            { x: 270, y: 194, r: -30, s: 0.75 },
            { x: 220, y: 196, r: -24, s: 0.7 },
            { x: 170, y: 198, r: -18, s: 0.65 },
            { x: 120, y: 200, r: -12, s: 0.6 },
          ].map((l, i) => (
            <use
              key={`ll-${i}`}
              href="#uc-leaf"
              x={-6}
              y={-14}
              width={12}
              height={28}
              transform={`translate(${l.x},${l.y}) rotate(${l.r}) scale(${l.s})`}
            />
          ))}
          {/* stem of the branch */}
          <path
            d="M120,200 C240,196 380,190 520,182"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.9"
          />
        </g>

        {/* laurel branch — right side, mirrored */}
        <g style={{ color: "rgba(255,255,255,0.55)" }}>
          {[
            { x: 920, y: 178, r: 62, s: 1 },
            { x: 970, y: 180, r: 55, s: 0.95 },
            { x: 1020, y: 184, r: 48, s: 0.9 },
            { x: 1070, y: 188, r: 42, s: 0.85 },
            { x: 1120, y: 190, r: 36, s: 0.8 },
            { x: 1170, y: 194, r: 30, s: 0.75 },
            { x: 1220, y: 196, r: 24, s: 0.7 },
            { x: 1270, y: 198, r: 18, s: 0.65 },
            { x: 1320, y: 200, r: 12, s: 0.6 },
          ].map((l, i) => (
            <use
              key={`lr-${i}`}
              href="#uc-leaf"
              x={-6}
              y={-14}
              width={12}
              height={28}
              transform={`translate(${l.x},${l.y}) rotate(${l.r}) scale(${l.s})`}
            />
          ))}
          <path
            d="M920,182 C1060,190 1200,196 1320,200"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.9"
          />
        </g>

        {/* discrete gold stars punctuating the composition */}
        <g style={{ color: "#C8A84E" }}>
          <use href="#uc-star" transform="translate(180,164) scale(0.9)" />
          <use href="#uc-star" transform="translate(1260,164) scale(0.9)" />
          <use href="#uc-star" transform="translate(360,150) scale(0.7)" />
          <use href="#uc-star" transform="translate(1080,150) scale(0.7)" />
        </g>
        <g style={{ color: "rgba(255,255,255,0.75)" }}>
          <use href="#uc-star" transform="translate(720,138) scale(0.75)" />
        </g>
      </svg>

      {/* medallion with the school crest, anchored between white and green */}
      <div className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-[96px] w-[96px] items-center justify-center sm:h-[112px] sm:w-[112px]">
          <span className="absolute inset-0 rounded-full bg-white shadow-[0_8px_24px_-12px_rgba(3,47,29,0.55)]" />
          <span className="absolute inset-[3px] rounded-full ring-1 ring-[color:var(--dourado)]/70" />
          <span className="absolute inset-[8px] rounded-full ring-1 ring-[color:var(--verde)]/25" />
          <img
            src={brasao.url}
            alt=""
            className="relative h-[68px] w-[68px] object-contain sm:h-[80px] sm:w-[80px]"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
