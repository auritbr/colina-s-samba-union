import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { Drum } from "lucide-react";
import bateria from "@/assets/bateria.jpg";

export const Route = createFileRoute("/bateria")({
  head: () => ({
    meta: [
      { title: "Bateria — G.R.E.S. União da Colina" },
      { name: "description", content: "O coração pulsante da União da Colina. Conheça a bateria, seus mestres, ritmistas e instrumentos." },
      { property: "og:title", content: "Bateria — União da Colina" },
      { property: "og:description", content: "O coração pulsante da União da Colina." },
    ],
  }),
  component: Bateria,
});

const instrumentos = ["Surdo","Caixa","Repique","Tamborim","Chocalho","Cuíca","Agogô","Reco-reco"];

function Bateria() {
  return (
    <>
      <PageHero title="Bateria" subtitle="O coração pulsante da União da Colina." image={bateria} />
      <section className="bg-background">
        <div className="container-uc py-20 md:py-28">
          <SectionTitle eyebrow="Ritmo" title="A força que move a avenida" description="A bateria da União da Colina reúne ritmistas de várias gerações, mantendo viva a sonoridade que caracteriza a escola desde suas primeiras apresentações." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Mestres","Rainha da Bateria","Ritmistas"].map((t) => (
              <article key={t} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6">
                <h3 className="text-lg font-bold text-[color:var(--verde-profundo)]">{t}</h3>
                <p className="mt-2 text-sm text-[color:var(--cinza-texto)]">Conteúdo em atualização.</p>
                <div className="mt-4"><PlaceholderNote /></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc py-20 md:py-24">
          <SectionTitle eyebrow="Instrumentos" title="A instrumentação da bateria" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {instrumentos.map((i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl border border-[color:var(--verde-claro)] bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--verde-claro)] text-[color:var(--verde-profundo)]">
                  <Drum className="h-5 w-5" />
                </div>
                <p className="font-bold text-[color:var(--verde-profundo)]">{i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}