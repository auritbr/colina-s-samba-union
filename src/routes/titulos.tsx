import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
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
      <PageHero title="Sala de Troféus" subtitle="As conquistas que marcaram nossa história." image={pavilhao} />
      <section className="bg-[color:var(--verde-escuro)] text-white">
        <div className="container-uc py-20 md:py-28">
          <SectionTitle invert eyebrow="Conquistas" title="Cada troféu é uma memória" description="Este espaço reúne os títulos conquistados pela União da Colina ao longo de sua trajetória. Cada linha é fruto do trabalho coletivo da comunidade." />
          <div className="mt-6"><PlaceholderNote>Lista de títulos em atualização</PlaceholderNote></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Trophy className="h-8 w-8 text-[color:var(--dourado)]" />
                <p className="mt-4 text-3xl font-extrabold">Ano</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/70">Categoria em atualização</p>
                <h3 className="mt-4 text-lg font-bold">Título conquistado</h3>
                <p className="mt-2 text-sm text-white/70">Enredo e informações em atualização.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}