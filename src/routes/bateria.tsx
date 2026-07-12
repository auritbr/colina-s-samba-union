import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Drum, Music, Users, Crown, HeartHandshake } from "lucide-react";
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

const instrumentos = [
  "Surdo de primeira","Surdo de segunda","Surdo de terceira","Caixa","Repique","Tamborim","Chocalho","Cuíca","Agogô","Reco-reco",
];

function Bateria() {
  return (
    <>
      <PageHero title="Bateria" subtitle="O coração pulsante da União da Colina." image={bateria} breadcrumb="Bateria" />

      <SegmentAbout
        title="A força que move a avenida"
        eyebrow="Ritmo"
        image={bateria}
        paragraphs={[
          "A bateria da União da Colina reúne ritmistas de várias gerações, mantendo viva a sonoridade que caracteriza a escola desde suas primeiras apresentações.",
          "É o motor rítmico do desfile e também um espaço de formação musical, encontro entre gerações e construção coletiva de identidade sonora.",
          "Os registros históricos, mestres e ritmistas deste segmento estão em processo de organização e serão acrescentados ao acervo digital da União da Colina.",
        ]}
      />

      <SegmentRoleCards
        title="Função da bateria"
        eyebrow="Papel"
        items={[
          { icon: Music, t: "Condução do desfile", d: "Sustenta o ritmo e o andamento do samba-enredo do início ao fim da apresentação." },
          { icon: Users, t: "Formação musical", d: "Espaço de aprendizado, escuta e prática coletiva para ritmistas de várias gerações." },
          { icon: Crown, t: "Rainha e representantes", d: "Quando presente, a rainha, musa ou representantes têm papel simbólico e artístico junto à bateria." },
          { icon: HeartHandshake, t: "Vínculo comunitário", d: "Ensaios abertos que aproximam a escola dos moradores, famílias e novos sambistas." },
        ]}
      />

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Instrumentos" title="A instrumentação da bateria" description="A instrumentação organiza a base grave, a marcação, o repinique e o brilho característico do samba da União da Colina." />
          <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {instrumentos.map((i) => (
              <div key={i} className="flex items-center gap-2.5 rounded-xl border border-[color:var(--verde-claro)] bg-white p-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--verde-claro)] text-[color:var(--verde-profundo)]">
                  <Drum className="h-4 w-4" />
                </div>
                <p className="text-[13.5px] font-semibold text-[color:var(--verde-profundo)]">{i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SegmentTrajectory
        title="A trajetória da bateria"
        items={[
          { t: "História", d: "Os primeiros registros da bateria estão em processo de pesquisa e serão publicados após validação com a comunidade." },
          { t: "Antigos mestres", d: "Nomes e períodos dos mestres anteriores em atualização." },
          { t: "Mestres atuais", d: "Composição atual em atualização." },
          { t: "Ritmistas", d: "Formação atual e histórica em processo de organização." },
          { t: "Ensaios", d: "Locais, horários e ensaios abertos serão divulgados nos canais oficiais da escola." },
          { t: "Registros históricos", d: "Acervo de áudios, vídeos e fotografias em digitalização." },
        ]}
      />

      <SegmentMembers title="Ritmistas" eyebrow="Quem faz" />
      <SegmentTimeline title="Marcos da bateria" />
      <SegmentTestimonials />
      <SegmentGallery />
      <SegmentRelated
        items={[
          { t: "Intérpretes", to: "/interpretes" },
          { t: "Comissão de Frente", to: "/comissao-de-frente" },
          { t: "Ala das Baianas", to: "/ala-das-baianas" },
          { t: "Carnaval 2026", to: "/carnaval-2026" },
        ]}
      />
    </>
  );
}