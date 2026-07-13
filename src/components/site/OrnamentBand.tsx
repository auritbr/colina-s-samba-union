import heroBand from "@/assets/ornamento-hero.png.asset.json";
import footerBand from "@/assets/ornamento-footer.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Horizontal ornamental band used as a transition between sections.
 *
 * The source artworks have a large blank area at the top and the decorative
 * greenery concentrated at the bottom. To behave as a proper divider we clip
 * that empty space by rendering the image as a background positioned to the
 * bottom of a shorter container, so only the ornament shows.
 */
export function OrnamentBand({
  variant,
  className,
}: {
  variant: "hero" | "footer";
  className?: string;
}) {
  const src = variant === "hero" ? heroBand.url : footerBand.url;
  // Aspect ratio of the visible crop (container). Wider ratio → shorter band.
  const aspect = variant === "hero" ? "1280 / 190" : "1280 / 230";
  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full overflow-hidden leading-[0] select-none bg-no-repeat",
        className,
      )}
      style={{
        aspectRatio: aspect,
        backgroundImage: `url(${src})`,
        backgroundPosition: "center bottom",
        backgroundSize: "100% auto",
      }}
    />
  );
}