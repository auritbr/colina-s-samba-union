import ornamentBorder from "@/assets/ornament-footer-border.png.asset.json";
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
      {/* Ornamental border image: white area blends with the previous section,
          green base merges seamlessly with the footer background. */}
      <img
        src={ornamentBorder.url}
        alt=""
        className="block w-full select-none"
        style={{ marginBottom: "-1px" }}
      />
    </div>
  );
}
