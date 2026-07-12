import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Sparkles, HeartHandshake, BookOpen, Flame } from "lucide-react";
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
      <PageHero
        eyebrow="Ala das Baianas"
        title="Ancestralidade que gira na avenida"
        subtitle="Tradição, resistência e devoção em cada desfile."
        image={baianas}
        breadcrumb="Ala das Baianas"
      />

      <SegmentAbout
        title="O giro das saias que carrega a história"
        eyebrow="Tradição"
        image={baianas}
        paragraphs={[
          "A Ala das Baianas é uma das mais importantes tradições do samba brasileiro. Na União da Colina, representa força, ancestralidade e devoção — presença fundamental em cada desfile.",
          "É também um espaço de encontro entre gerações, de transmissão de saberes e de valorização das mulheres que sustentam a memória e a espiritualidade do samba.",
          "Os registros históricos, integrantes e depoimentos deste segmento estão em processo de organização e serão acrescentados ao acervo digital da União da Colina.",
        ]}
      />

      <SegmentRoleCards
        title="Significado e importância"
        eyebrow="Ancestralidade"
        items={[
          { icon: Flame, t: "Ancestralidade", d: "Presença que remete às matrizes afro-brasileiras que sustentam culturalmente o samba." },
          { icon: Sparkles, t: "Tradição", d: "Segmento fundamental em uma escola de samba, respeitado pelas ligas e escolas irmãs." },
          { icon: HeartHandshake, t: "Resistência", d: "Espaço de força coletiva, afeto e permanência das mulheres na história da escola." },
          { icon: BookOpen, t: "Transmissão", d: "Passagem de saberes, cantos e movimentos para as novas gerações de sambistas." },
        ]}
      />

      <SegmentTrajectory
        title="A trajetória da ala"
        items={[
          { t: "Origem", d: "Os primeiros registros da ala na União da Colina estão em processo de pesquisa a partir de fontes e depoimentos." },
          { t: "Integrantes históricas", d: "Nomes e períodos serão publicados após validação com a comunidade da escola." },
          { t: "Integrantes atuais", d: "Composição atual em atualização." },
          { t: "Vestimentas e trajes", d: "Registros de fantasias, saias e adereços em processo de digitalização." },
          { t: "Participação nos desfiles", d: "Marcos das apresentações em atualização." },
          { t: "Homenagens", d: "Espaço para reconhecer baianas homenageadas pela escola." },
        ]}
      />

      <SegmentMembers title="As baianas da União da Colina" eyebrow="Integrantes" />
      <SegmentTimeline title="Marcos da ala" />
      <SegmentTestimonials />
      <SegmentGallery />
      <SegmentRelated
        items={[
          { t: "Velha Guarda", to: "/velha-guarda" },
          { t: "Bateria", to: "/bateria" },
          { t: "Mestre-Sala e Porta-Bandeiras", to: "/mestre-sala-e-porta-bandeiras" },
          { t: "A Escola", to: "/a-escola" },
        ]}
      />
    </>
  );
}
