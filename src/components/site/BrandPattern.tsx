import { cn } from "@/lib/utils";

type Variant = "header" | "hero" | "divider" | "footer" | "watermark";

/**
 * Ornamental SVG inspired by the União da Colina brasão:
 * circular medallion, symmetric ribbons, radial rays and leaves.
 * Purely decorative — always aria-hidden.
 */
export function BrandPattern({
  variant = "hero",
  className,
  tone = "light",
}: {
  variant?: Variant;
  className?: string;
  tone?: "light" | "gold";
}) {
  const stroke = tone === "gold" ? "var(--dourado)" : "rgba(255,255,255,0.35)";
  const fill = tone === "gold" ? "rgba(200,168,78,0.14)" : "rgba(255,255,255,0.06)";

  if (variant === "divider") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={cn("block h-10 w-full", className)}
      >
        <path
          d="M0,40 C240,10 480,60 720,32 C960,4 1200,60 1440,20 L1440,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // Common medallion + ribbons pattern, positioned per variant
  const Ornament = (
    <g fill="none" stroke={stroke} strokeWidth="1">
      {/* medallion */}
      <circle cx="0" cy="0" r="120" fill={fill} />
      <circle cx="0" cy="0" r="96" />
      <circle cx="0" cy="0" r="72" />
      {/* radial rays */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1="-96"
          x2="0"
          y2="-120"
          transform={`rotate(${(i * 360) / 12})`}
        />
      ))}
      {/* leaves */}
      <path d="M-140,0 C-180,-30 -220,-10 -240,20 C-210,25 -170,20 -140,0 Z" fill={fill} />
      <path d="M140,0 C180,-30 220,-10 240,20 C210,25 170,20 140,0 Z" fill={fill} />
      {/* ribbon curves */}
      <path d="M-260,60 C-160,90 -60,90 40,60" />
      <path d="M260,60 C160,90 60,90 -40,60" />
    </g>
  );

  const size =
    variant === "header"
      ? "h-full w-full"
      : variant === "footer"
        ? "h-full w-full"
        : variant === "watermark"
          ? "h-full w-full"
          : "h-full w-full";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none absolute inset-0 -z-0", size, className)}
    >
      {/* left ornament */}
      <g transform="translate(120, 200)" opacity="0.55">{Ornament}</g>
      {/* right ornament */}
      <g transform="translate(1320, 200)" opacity="0.55">{Ornament}</g>
      {/* center subtle arc */}
      <path
        d="M0,360 C360,300 1080,300 1440,360"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M0,380 C360,340 1080,340 1440,380"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
