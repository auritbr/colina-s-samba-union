import { Info } from "lucide-react";

export function PlaceholderNote({ children = "Conteúdo em atualização" }: { children?: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--verde-claro)] bg-[color:var(--verde-claro)]/40 px-3 py-1.5 text-xs font-semibold text-[color:var(--verde-escuro)]">
      <Info className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}