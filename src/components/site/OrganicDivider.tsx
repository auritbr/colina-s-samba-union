import { cn } from "@/lib/utils";

export function OrganicDivider({
  from = "var(--verde-profundo)",
  to = "#fff",
  flip = false,
  className,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden leading-[0]", className)}
      style={{ background: to }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn("block h-14 w-full md:h-20", flip && "rotate-180")}
        style={{ color: from }}
      >
        <path
          d="M0,0 L1440,0 L1440,50 C1200,90 960,20 720,50 C480,80 240,15 0,55 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}