import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { Flag } from "lucide-react";
import mestreSala from "@/assets/mestre-sala.jpg";

export const Route = createFileRoute("/mestre-sala-e-porta-bandeiras")({
  head: () => ({
    meta: [
      { title: "Mestre-Sala e Porta-Bandeiras — União da Colina" },
      { name: "description", content: "Elegância, respeito e proteção ao pavilhão. Conheça os casais de mestre-sala e porta-bandeiras da União da Colina." },
      { property: "og:title", content: "Mestre-Sala e Porta-Bandeiras — União da Colina" },
      { property: "og:description", content: "Elegância, respeito e proteção ao pavilhão." },
    ],
  }),
  component: MestreSala,
});

function MestreSala() {
  return (
    <>
      <PageHero title="Mestre-Sala e Porta-Bandeiras" subtitle="Elegância, respeito e proteção ao pavilhão." image={mestreSala} />
      <section className="bg-background">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle eyebrow="Primeiro casal" title="O bailado que protege o pavilhão" description="Um dos segmentos mais tradicionais do samba, o casal de mestre-sala e porta-bandeiras carrega e protege o pavilhão da escola com respeito e elegância." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[1,2].map((i) => (
              <article key={i} className="overflow-hidden rounded-2xl border border-[color:var(--verde-claro)] bg-white shadow-sm">
                <div className="aspect-[16/10] bg-[color:var(--verde-claro)]" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[color:var(--dourado)]"><Flag className="h-4 w-4" /><span className="text-xs font-bold uppercase tracking-wider">Casal {i}</span></div>
                  <h3 className="mt-2 text-lg font-bold text-[color:var(--verde-profundo)]">Mestre-Sala e Porta-Bandeiras</h3>
                  <p className="mt-1 text-sm text-[color:var(--cinza-texto)]">Nomes em atualização · Período em atualização</p>
                  <p className="mt-3 text-sm text-[color:var(--cinza-texto)]">Biografia curta em atualização.</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8"><PlaceholderNote>Casais históricos e depoimentos em atualização</PlaceholderNote></div>
        </div>
      </section>
      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc py-16 md:py-20 text-center">
          <SectionTitle invert align="center" eyebrow="Significado do pavilhão" title="Símbolo maior da escola" description="O pavilhão representa a identidade, a memória e a comunidade da União da Colina. Sua defesa em cada desfile é ato de amor e respeito." />
        </div>
      </section>
    </>
  );
}