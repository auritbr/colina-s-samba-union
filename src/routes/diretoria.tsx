import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { User, Shield, Users, Landmark, FileText, HeartHandshake } from "lucide-react";
import {
  SegmentAbout,
  SegmentTrajectory,
  SegmentRoleCards,
  SegmentMembers,
  SegmentTimeline,
  SegmentTestimonials,
  SegmentGallery,
  SegmentRelated,
  EmptyState,
} from "@/components/site/SegmentSections";
import { SectionTitle } from "@/components/site/SectionTitle";
import historia from "@/assets/historia.jpg";

export const Route = createFileRoute("/diretoria")({
  head: () => ({
    meta: [
      { title: "Diretoria — G.R.E.S. União da Colina" },
      { name: "description", content: "Conheça a diretoria da União da Colina — presidente, vice-presidente e demais cargos que conduzem a escola." },
      { property: "og:title", content: "Diretoria — União da Colina" },
      { property: "og:description", content: "Presidente, vice-presidente e demais cargos da escola." },
    ],
  }),
  component: Diretoria,
});

const cargos = [
  { c: "Presidente", i: Shield },
  { c: "Vice-Presidente", i: Shield },
  { c: "Secretário(a) Geral", i: FileText },
  { c: "Tesoureiro(a)", i: Landmark },
  { c: "Diretor(a) de Carnaval", i: User },
  { c: "Diretor(a) de Harmonia", i: Users },
  { c: "Diretor(a) Cultural", i: HeartHandshake },
  { c: "Diretor(a) de Comunicação", i: User },
];

function Diretoria() {
  return (
    <>
      <PageHero
        title="Diretoria"
        subtitle="Liderança e gestão institucional da União da Colina."
        image={historia}
        breadcrumb="Diretoria"
      />

      <SegmentAbout
        title="Quem conduz a escola"
        eyebrow="Institucional"
        image={historia}
        imageAlt="Registro histórico da União da Colina"
        paragraphs={[
          "A diretoria é responsável pela gestão institucional, cultural e artística da União da Colina, zelando pela preservação da memória e pelo futuro da escola.",
          "Cabe a esse grupo articular decisões, coordenar os segmentos, representar a escola junto às instituições parceiras e manter viva a relação com a comunidade que a fundou.",
          "Os registros históricos e as informações detalhadas da gestão atual estão em processo de organização e serão acrescentados ao acervo digital da União da Colina.",
        ]}
      />

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Estrutura" title="Cargos e áreas de atuação" description="A estrutura administrativa da escola organiza as áreas de decisão e execução das atividades ao longo do ano." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cargos.map(({ c, i: Icon }) => (
              <article key={c} className="card-uc">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--verde-claro)] text-[color:var(--verde-profundo)]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-[17px] font-bold text-[color:var(--verde-profundo)]">{c}</h3>
                <p className="mt-1 text-[13.5px] text-[color:var(--cinza-texto)]">Nome em atualização</p>
              </article>
            ))}
          </div>
          <div className="mt-8"><EmptyState>Os nomes da gestão atual e as gestões anteriores serão publicados após revisão do acervo institucional.</EmptyState></div>
        </div>
      </section>

      <SegmentRoleCards
        eyebrow="Papel"
        title="Função e importância da diretoria"
        items={[
          { icon: Shield, t: "Representação institucional", d: "Representa a União da Colina junto a órgãos públicos, ligas de carnaval e instituições culturais." },
          { icon: Users, t: "Coordenação dos segmentos", d: "Articula bateria, alas, comissão de frente e demais segmentos ao longo do ano." },
          { icon: HeartHandshake, t: "Vínculo comunitário", d: "Mantém o diálogo com a comunidade, famílias e apoiadores que sustentam a escola." },
          { icon: FileText, t: "Preservação institucional", d: "Zela pelos documentos, registros e patrimônio material e imaterial da escola." },
          { icon: Landmark, t: "Gestão financeira", d: "Administra recursos, patrocínios e contribuições necessários à realização do carnaval." },
          { icon: HeartHandshake, t: "Formação de novas gerações", d: "Estimula a participação de novos sambistas e famílias na continuidade da tradição." },
        ]}
      />

      <SegmentTrajectory
        title="A trajetória da diretoria"
        items={[
          { t: "Primeiras gestões", d: "Os registros das primeiras gestões estão em processo de organização a partir de fontes documentais e depoimentos." },
          { t: "Gestões históricas", d: "Nomes e períodos das gestões anteriores serão publicados após validação com a comunidade da escola." },
          { t: "Gestão atual", d: "Composição atual da diretoria em atualização." },
          { t: "Documentos e registros", d: "Estatuto, atas e registros institucionais estão sendo digitalizados para compor o acervo público." },
        ]}
      />

      <SegmentMembers title="Diretoria atual" eyebrow="Gestão" emptyMessage="A composição atual da diretoria será apresentada em breve, com nomes, cargos e fotografias." />
      <SegmentTimeline title="Gestões ao longo dos anos" eyebrow="Trajetória" />
      <SegmentTestimonials />
      <SegmentGallery />
      <SegmentRelated
        items={[
          { t: "Velha Guarda", to: "/velha-guarda" },
          { t: "Bateria", to: "/bateria" },
          { t: "A Escola", to: "/a-escola" },
          { t: "Carnaval 2026", to: "/carnaval-2026" },
        ]}
      />
    </>
  );
}