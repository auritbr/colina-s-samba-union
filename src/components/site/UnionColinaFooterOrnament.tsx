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

        {/* radiating curves left */}
        <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="0.9">
          <path d="M60,182 C280,168 500,196 720,178" />
          <path d="M60,196 C300,186 540,214 760,192" />
        </g>
        {/* radiating curves right */}
        <g fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8">
          <path d="M1380,182 C1160,168 940,196 720,178" />
          <path d="M1380,196 C1140,186 900,214 680,192" />
        </g>
        {/* gold accents */}
        <g fill="none" stroke="rgba(200,168,78,0.45)" strokeWidth="0.7">
          <path d="M120,172 C340,158 560,186 780,168" />
          <path d="M1320,172 C1100,158 880,186 660,168" />
        </g>

        {/* tiny gold star accents */}
        <g fill="#C8A84E">
          <circle cx="360" cy="150" r="1.6" />
          <circle cx="720" cy="144" r="1.8" />
          <circle cx="1080" cy="150" r="1.6" />
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
