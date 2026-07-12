import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import historia from "@/assets/historia.jpg";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/a-escola")({
  head: () => ({
    meta: [
      { title: "A Escola — G.R.E.S. União da Colina" },
      { name: "description", content: "Tradição, memória e pertencimento desde 1947. Conheça a história da União da Colina, a primeira escola de samba da cidade." },
      { property: "og:title", content: "A Escola — União da Colina" },
      { property: "og:description", content: "Tradição, memória e pertencimento desde 1947." },
    ],
  }),
  component: AEscola,
});

const blocos = [
  { t: "Origem", d: "Fundada em 1947 pela força coletiva de sambistas, famílias e moradores da Colina." },
  { t: "Contexto da fundação", d: "Conteúdo em atualização." },
  { t: "Primeiros integrantes", d: "Conteúdo em atualização." },
  { t: "Primeiros desfiles", d: "Conteúdo em atualização." },
  { t: "Evolução da escola", d: "Conteúdo em atualização." },
  { t: "Importância para a cidade", d: "Reconhecida como a primeira escola de samba da cidade, é parte fundamental da memória do carnaval local." },
  { t: "Relação com o território", d: "Conteúdo em atualização." },
  { t: "Contribuições culturais", d: "Conteúdo em atualização." },
  { t: "Interrupções e retomadas", d: "Conteúdo em atualização." },
  { t: "Situação atual", d: "Conteúdo em atualização." },
  { t: "Preservação da memória", d: "Um trabalho contínuo de escuta, registro e valorização das gerações que fazem a escola." },
];

function AEscola() {
  return (
    <>
      <PageHero title="A Escola" subtitle="Tradição, memória e pertencimento desde 1947." image={historia} />
      <section className="bg-background">
        <div className="container-uc grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div>
            <SectionTitle eyebrow="Nossa história" title="A primeira escola de samba da cidade" description="A União da Colina nasceu da força coletiva de sambistas, famílias e moradores que transformaram tradição, música e pertencimento em patrimônio cultural." />
            <div className="mt-8 space-y-4 text-[color:var(--cinza-texto)]">
              <p>Como primeira escola de samba da cidade, a União da Colina representa uma parte essencial da memória do carnaval local — construída por gerações de sambistas, famílias e artistas populares.</p>
              <p>Este espaço foi criado para reunir, organizar e preservar os registros dessa trajetória, tornando-a acessível a todos que quiserem conhecê-la.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border-8 border-[color:var(--verde-claro)]">
            <img src={pavilhao} alt="Pavilhão da União da Colina" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc py-20 md:py-28">
          <SectionTitle eyebrow="Trajetória" title="Marcos da nossa história" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blocos.map((b) => (
              <article key={b.t} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6">
                <h3 className="text-lg font-bold text-[color:var(--verde-profundo)]">{b.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--cinza-texto)]">{b.d}</p>
              </article>
            ))}
          </div>
          <div className="mt-10"><PlaceholderNote>Acervo fotográfico, depoimentos e documentos históricos em atualização.</PlaceholderNote></div>
        </div>
      </section>
    </>
  );
}