import heroBand from "@/assets/ornamento-hero.png.asset.json";
import footerBand from "@/assets/ornamento-footer.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Horizontal ornamental band used as a transition between sections.
 * Renders the provided artwork edge-to-edge, stretched across the full width
 * of the layout, without any surrounding padding or container.
 */
export function OrnamentBand({
  variant,
  className,
}: {
  variant: "hero" | "footer";
  className?: string;
}) {
  const src = variant === "hero" ? heroBand.url : footerBand.url;
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full overflow-hidden leading-[0] select-none",
        className,
      )}
    >
      <img
        src={src}
        alt=""
        className="block h-auto w-full"
        draggable={false}
      />
    </div>
  );
}