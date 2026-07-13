import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Crown, BookOpen, Users, Sparkles } from "lucide-react";
import {
  SegmentAbout,
  SegmentTrajectory,
  SegmentRoleCards,
  SegmentMembers,
  SegmentTimeline,
  SegmentTestimonials,
  SegmentGallery,
  SegmentRelated,
} from "@/components/site/SegmentSections";
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

function Comissao() {
  return (
    <>
      <PageHero
        eyebrow="Comissão de Frente"
        title="A primeira apresentação da escola"
        subtitle="A abertura do espetáculo da União da Colina."
        image={comissao}
        breadcrumb="Comissão de Frente"
      />

      <SegmentAbout
        title="O primeiro olhar da avenida"
        eyebrow="Apresentação"
        image={comissao}
        paragraphs={[
          "A Comissão de Frente é responsável por abrir o desfile e apresentar o enredo ao público, com uma performance coreografada, cheia de simbolismo e sintonia com a proposta da escola.",
          "É o primeiro contato do público com a narrativa do samba, e reúne coreógrafos, bailarinos e figurinistas em um trabalho colaborativo que traduz o enredo em movimento.",
          "Os registros históricos e as informações detalhadas deste segmento estão em processo de organização e serão acrescentados ao acervo digital da União da Colina.",
        ]}
      />

      <SegmentRoleCards
        title="Função e importância"
        eyebrow="Papel"
        items={[
          { icon: Crown, t: "Apresentar a escola", d: "Recebe o público na avenida e conduz o primeiro olhar sobre o enredo." },
          { icon: BookOpen, t: "Traduzir o enredo", d: "Transforma a proposta narrativa do carnaval em coreografia e simbolismo visual." },
          { icon: Users, t: "Trabalho coletivo", d: "Envolve coreógrafos, bailarinos, figurinistas e direção artística em um processo colaborativo." },
          { icon: Sparkles, t: "Impacto visual", d: "Aliar técnica, expressão corporal e figurino para criar uma abertura marcante." },
        ]}
      />

      <SegmentTrajectory
        title="A trajetória da comissão"
        items={[
          { t: "História", d: "Os registros históricos das comissões de frente da União da Colina estão em processo de pesquisa." },
          { t: "Apresentações marcantes", d: "Apresentações memoráveis serão relatadas após validação com a comunidade da escola." },
          { t: "Coreógrafos", d: "Nomes e períodos dos profissionais responsáveis pelas coreografias em atualização." },
          { t: "Figurinos", d: "Registros dos figurinos utilizados ao longo dos anos em digitalização." },
          { t: "Processo criativo", d: "O processo de criação envolve estudo do enredo, pesquisa de referências e ensaios contínuos." },
          { t: "Relação com o enredo", d: "Cada comissão é pensada para dialogar diretamente com a proposta narrativa do samba." },
        ]}
      />

      <SegmentMembers title="Integrantes" eyebrow="Quem faz" />
      <SegmentTimeline title="Marcos da comissão" />
      <SegmentTestimonials />
      <SegmentGallery />
      <SegmentRelated
        items={[
          { t: "Bateria", to: "/bateria" },
          { t: "Mestre-Sala e Porta-Bandeiras", to: "/mestre-sala-e-porta-bandeiras" },
          { t: "Intérpretes", to: "/interpretes" },
          { t: "Carnaval 2026", to: "/carnaval-2026" },
        ]}
      />
    </>
  );
}
