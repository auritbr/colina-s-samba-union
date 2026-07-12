import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Star, BookOpen, HeartHandshake, Users } from "lucide-react";
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
      <PageHero title="Guardadores da memória da Colina" eyebrow="Velha Guarda" subtitle="Memória viva, experiência e ancestralidade." image={velhaGuarda} breadcrumb="Velha Guarda" />

      <SegmentAbout
        title="Os que sustentam a nossa história"
        eyebrow="Guardiões"
        image={velhaGuarda}
        paragraphs={[
          "A Velha Guarda é a expressão da ancestralidade da União da Colina. Reúne sambistas que viveram e ajudaram a construir a trajetória da escola, transmitindo tradição e afeto para as novas gerações.",
          "Mais do que um segmento, a Velha Guarda é uma referência viva de memória oral, história e continuidade — presença respeitosa em cada desfile, ensaio e homenagem.",
          "Os registros históricos, nomes e depoimentos deste segmento estão em processo de organização e serão acrescentados ao acervo digital da União da Colina.",
        ]}
      />

      <SegmentRoleCards
        title="A importância da Velha Guarda"
        eyebrow="Significado"
        items={[
          { icon: BookOpen, t: "Transmissão de conhecimentos", d: "A Velha Guarda partilha experiências, cantos e vivências que ajudam a formar as novas gerações da escola." },
          { icon: Users, t: "Presença na avenida", d: "Sua participação nos desfiles é símbolo de respeito à história e à trajetória coletiva da União da Colina." },
          { icon: HeartHandshake, t: "Vínculo comunitário", d: "Mantém laços com famílias, sambistas e moradores que fizeram parte da construção da escola." },
          { icon: Star, t: "Preservação da tradição", d: "Zela pela memória do samba e pelo respeito às raízes que sustentam a identidade da escola." },
        ]}
      />

      <SegmentTrajectory
        title="A trajetória da Velha Guarda"
        items={[
          { t: "Origem", d: "A formação inicial da Velha Guarda está em processo de pesquisa a partir de fontes documentais e depoimentos." },
          { t: "Fundadores e pioneiros", d: "Os nomes dos fundadores e das primeiras gerações serão publicados após validação com a comunidade." },
          { t: "Integrantes históricos", d: "Registros de integrantes históricos em processo de organização." },
          { t: "Integrantes atuais", d: "Composição atual em atualização." },
          { t: "Encontros e homenagens", d: "Espaço para registrar reuniões, celebrações e homenagens realizadas pela escola." },
          { t: "In memoriam", d: "Este espaço será dedicado, com respeito, a integrantes que já partiram, preservando seus nomes e sua contribuição." },
        ]}
      />

      <SegmentMembers title="Integrantes da Velha Guarda" eyebrow="Quem faz" />
      <SegmentTimeline title="Marcos da Velha Guarda" />
      <SegmentTestimonials title="Memórias da comunidade" eyebrow="Depoimentos" />
      <SegmentGallery />
      <SegmentRelated
        items={[
          { t: "Diretoria", to: "/diretoria" },
          { t: "Bateria", to: "/bateria" },
          { t: "Ala das Baianas", to: "/ala-das-baianas" },
          { t: "A Escola", to: "/a-escola" },
        ]}
      />
    </>
  );
}