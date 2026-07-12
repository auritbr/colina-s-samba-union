import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.24em]",
            invert ? "text-[color:var(--dourado)]" : "text-[color:var(--verde-medio)]",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold leading-tight md:text-5xl",
          invert ? "text-white" : "text-[color:var(--verde-profundo)]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            invert ? "text-white/75" : "text-[color:var(--cinza-texto)]",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}