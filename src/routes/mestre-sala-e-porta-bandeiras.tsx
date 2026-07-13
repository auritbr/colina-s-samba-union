import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Flag, Crown, Sparkles, HeartHandshake } from "lucide-react";
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
import mestreSala from "@/assets/mestre-sala.jpg";

export const Route = createFileRoute("/mestre-sala-e-porta-bandeiras")({
  head: () => ({
    meta: [
      { title: "Mestre-Sala e Porta-Bandeiras — G.R.E.S. União da Colina" },
      { name: "description", content: "Elegância e respeito ao pavilhão da União da Colina. Conheça o bailado que carrega o símbolo maior da escola." },
      { property: "og:title", content: "Mestre-Sala e Porta-Bandeiras — União da Colina" },
      { property: "og:description", content: "Elegância e respeito ao pavilhão." },
    ],
  }),
  component: MSPB,
});

function MSPB() {
  return (
    <>
      <PageHero
        eyebrow="Mestre-Sala e Porta-Bandeiras"
        title="Elegância e respeito ao pavilhão"
        subtitle="O casal que carrega o símbolo maior da União da Colina."
        image={mestreSala}
        breadcrumb="Mestre-Sala e Porta-Bandeiras"
      />

      <SegmentAbout
        title="O bailado que reverencia o pavilhão"
        eyebrow="Tradição"
        image={mestreSala}
        paragraphs={[
          "O casal de mestre-sala e porta-bandeiras representa a escola em seu bailado sereno e cerimonioso. É responsabilidade e honra — carrega o pavilhão diante do público, dos jurados e da comunidade.",
          "É uma das tradições mais respeitadas do samba, exigindo preparo técnico, sensibilidade artística e profundo respeito à história do símbolo que representa.",
          "Os registros históricos, casais e depoimentos deste segmento estão em processo de organização e serão acrescentados ao acervo digital da União da Colina.",
        ]}
      />

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y">
          <SectionTitle
            eyebrow="Símbolo"
            title="O pavilhão da União da Colina"
            description="O pavilhão reúne o brasão, as cores e a identidade visual da escola. Sua representação simbólica está em processo de descrição junto à comunidade, respeitando a história e evitando interpretações não confirmadas."
          />
          <div className="mt-8"><EmptyState>Detalhes históricos sobre o significado do brasão e do pavilhão estão em processo de organização.</EmptyState></div>
        </div>
      </section>

      <SegmentRoleCards
        title="Função e importância"
        eyebrow="Papel"
        items={[
          { icon: Flag, t: "Representar o pavilhão", d: "Conduz o símbolo maior da escola com respeito, cerimônia e presença artística." },
          { icon: Crown, t: "Bailado tradicional", d: "Sustenta uma das tradições mais valorizadas do samba, com técnica e sensibilidade." },
          { icon: Sparkles, t: "Figurino", d: "Os trajes seguem simbologias e cores que dialogam com a identidade da escola." },
          { icon: HeartHandshake, t: "Formação de novos casais", d: "Espaço de aprendizado e continuidade da tradição para novas gerações." },
        ]}
      />

      <SegmentTrajectory
        title="Os casais da União da Colina"
        items={[
          { t: "Primeiro casal", d: "O primeiro casal está em processo de identificação a partir dos registros históricos disponíveis." },
          { t: "Casais anteriores", d: "Nomes e períodos dos casais anteriores serão publicados após validação com a comunidade da escola." },
          { t: "Casal atual", d: "Composição atual em atualização." },
          { t: "Figurinos históricos", d: "Registros dos trajes utilizados ao longo dos anos em processo de digitalização." },
          { t: "Apresentações", d: "Marcos e apresentações memoráveis em atualização." },
          { t: "Novos casais", d: "Espaço para acompanhar a formação de novos casais dentro da escola." },
        ]}
      />

      <SegmentMembers title="Casal atual" eyebrow="Quem representa" />
      <SegmentTimeline title="Marcos do segmento" />
      <SegmentTestimonials />
      <SegmentGallery />
      <SegmentRelated
        items={[
          { t: "Comissão de Frente", to: "/comissao-de-frente" },
          { t: "Ala das Baianas", to: "/ala-das-baianas" },
          { t: "Bateria", to: "/bateria" },
          { t: "A Escola", to: "/a-escola" },
        ]}
      />
    </>
  );
}
