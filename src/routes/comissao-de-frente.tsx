import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import comissao from "@/assets/comissao.jpg";

export const Route = createFileRoute("/comissao-de-frente")({
  head: () => ({
    meta: [
      { title: "Comissão de Frente — G.R.E.S. União da Colina" },
      { name: "description", content: "A abertura do espetáculo da União da Colina. Conheça o trabalho, os integrantes e a coreografia." },
      { property: "og:title", content: "Comissão de Frente — União da Colina" },
      { property: "og:description", content: "A abertura do espetáculo da União da Colina." },
    ],
  }),
  component: Comissao,
});

const blocos = [
  { t: "Função", d: "Apresentar a escola, contextualizar o enredo e emocionar o público logo na abertura do desfile." },
  { t: "História", d: "Conteúdo em atualização." },
  { t: "Coreografia", d: "Conteúdo em atualização." },
  { t: "Processo de criação", d: "Conteúdo em atualização." },
];

function Comissao() {
  return (
    <>
      <PageHero title="Comissão de Frente" subtitle="A abertura do espetáculo da União da Colina." image={comissao} />
      <section className="bg-background">
        <div className="container-uc py-20 md:py-28">
          <SectionTitle eyebrow="Apresentação" title="O primeiro olhar da avenida" description="A Comissão de Frente é a responsável por abrir o desfile e apresentar o enredo ao público, com uma performance coreografada e cheia de simbolismo." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blocos.map((b) => (
              <article key={b.t} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6">
                <h3 className="text-lg font-bold text-[color:var(--verde-profundo)]">{b.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--cinza-texto)]">{b.d}</p>
              </article>
            ))}
          </div>
          <div className="mt-8"><PlaceholderNote>Integrantes e vídeos em atualização</PlaceholderNote></div>
        </div>
      </section>
    </>
  );
}