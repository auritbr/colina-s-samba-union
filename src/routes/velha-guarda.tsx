import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { Star } from "lucide-react";
import velhaGuarda from "@/assets/velha-guarda.jpg";

export const Route = createFileRoute("/velha-guarda")({
  head: () => ({
    meta: [
      { title: "Velha Guarda — G.R.E.S. União da Colina" },
      { name: "description", content: "Memória viva, experiência e ancestralidade. Conheça a Velha Guarda da União da Colina." },
      { property: "og:title", content: "Velha Guarda — União da Colina" },
      { property: "og:description", content: "Memória viva, experiência e ancestralidade." },
    ],
  }),
  component: VelhaGuarda,
});

function VelhaGuarda() {
  return (
    <>
      <PageHero title="Velha Guarda" subtitle="Memória viva, experiência e ancestralidade." image={velhaGuarda} />
      <section className="bg-background">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle eyebrow="Guardiões" title="Os que sustentam a nossa história" description="A Velha Guarda é a expressão da ancestralidade da União da Colina. Reúne sambistas que viveram e ajudaram a construir a trajetória da escola, transmitindo tradição e afeto para as novas gerações." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((i) => (
              <article key={i} className="overflow-hidden rounded-2xl border border-[color:var(--verde-claro)] bg-white shadow-sm">
                <div className="aspect-[4/5] bg-[color:var(--verde-claro)]" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[color:var(--dourado)]"><Star className="h-4 w-4 fill-current" /><span className="text-xs font-bold uppercase tracking-wider">Velha Guarda</span></div>
                  <h3 className="mt-2 text-lg font-bold text-[color:var(--verde-profundo)]">Nome em atualização</h3>
                  <p className="mt-1 text-sm text-[color:var(--cinza-texto)]">Período de participação em atualização.</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10"><PlaceholderNote>Homenagens e depoimentos em atualização</PlaceholderNote></div>
        </div>
      </section>
      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc py-20 text-center">
          <SectionTitle invert align="center" eyebrow="In memoriam" title="Homenagem respeitosa" description="Este espaço será dedicado a integrantes da Velha Guarda que já partiram, preservando com respeito seus nomes e sua contribuição." />
        </div>
      </section>
    </>
  );
}