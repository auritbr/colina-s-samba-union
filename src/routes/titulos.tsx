import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EmptyState } from "@/components/site/SegmentSections";
import { Trophy } from "lucide-react";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/titulos")({
  head: () => ({
    meta: [
      { title: "Títulos — G.R.E.S. União da Colina" },
      { name: "description", content: "Sala de troféus da União da Colina. As conquistas que marcaram a nossa história no carnaval." },
      { property: "og:title", content: "Títulos — União da Colina" },
      { property: "og:description", content: "As conquistas que marcaram a nossa história." },
    ],
  }),
  component: Titulos,
});

function Titulos() {
  return (
    <>
      <PageHero title="Sala de Troféus" eyebrow="Títulos" subtitle="As conquistas que marcaram nossa história." image={pavilhao} breadcrumb="Títulos" />
      <section className="bg-[color:var(--verde-escuro)] text-white">
        <div className="container-uc section-y">
          <SectionTitle invert eyebrow="Conquistas" title="Cada troféu é uma memória" description="Este espaço reúne os títulos conquistados pela União da Colina ao longo de sua trajetória. Cada linha é fruto do trabalho coletivo da comunidade." />
          <div className="mt-8 flex flex-wrap gap-2 text-[13px]">
            {["Todos","Por década","Por categoria"].map((f) => (
              <button key={f} type="button" className="rounded-full border border-white/20 px-3.5 py-1.5 font-semibold text-white/80 hover:border-white/40 hover:text-white">{f}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <article key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <Trophy className="h-6 w-6 text-[color:var(--dourado)]" />
                <p className="mt-3 text-xl font-extrabold">Ano</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">Categoria em atualização</p>
                <h3 className="mt-3 text-[15px] font-bold">Título</h3>
                <p className="mt-1.5 text-[13px] text-white/70">Enredo em atualização.</p>
              </article>
            ))}
          </div>
          <div className="mt-8"><EmptyState className="bg-white/5 border-white/20 text-white/80">A lista completa de títulos será publicada após validação com o arquivo institucional da escola. Nenhuma conquista será incluída sem confirmação documental.</EmptyState></div>
        </div>
      </section>
    </>
  );
}