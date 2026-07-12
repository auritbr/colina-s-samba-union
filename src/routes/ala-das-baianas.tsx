import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import baianas from "@/assets/baianas.jpg";

export const Route = createFileRoute("/ala-das-baianas")({
  head: () => ({
    meta: [
      { title: "Ala das Baianas — G.R.E.S. União da Colina" },
      { name: "description", content: "Ancestralidade, resistência e tradição na avenida. Conheça a Ala das Baianas da União da Colina." },
      { property: "og:title", content: "Ala das Baianas — União da Colina" },
      { property: "og:description", content: "Ancestralidade, resistência e tradição na avenida." },
    ],
  }),
  component: Baianas,
});

function Baianas() {
  return (
    <>
      <PageHero title="Ala das Baianas" subtitle="Ancestralidade, resistência e tradição na avenida." image={baianas} />
      <section className="bg-background">
        <div className="container-uc grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <SectionTitle eyebrow="Tradição" title="O giro das saias que carrega a história" description="A Ala das Baianas é uma das mais importantes tradições do samba brasileiro. Na União da Colina, representa força, ancestralidade e devoção — presença obrigatória em cada desfile." />
            <div className="mt-6"><PlaceholderNote>Integrantes, trajes e depoimentos em atualização</PlaceholderNote></div>
          </div>
          <div className="relative overflow-hidden rounded-[36px] border-8 border-[color:var(--verde-claro)]">
            <img src={baianas} alt="Ala das baianas" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc py-20">
          <SectionTitle eyebrow="Integrantes" title="As baianas da União da Colina" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <article key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="aspect-square bg-[color:var(--verde-claro)]" />
                <div className="p-4">
                  <h3 className="font-bold text-[color:var(--verde-profundo)]">Nome em atualização</h3>
                  <p className="text-xs text-[color:var(--cinza-texto)]">Integrante da ala</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}