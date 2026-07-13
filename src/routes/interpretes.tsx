import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Mic2, Music, PlayCircle, Users, BookOpen } from "lucide-react";
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
import interpretes from "@/assets/interpretes.jpg";

export const Route = createFileRoute("/interpretes")({
  head: () => ({
    meta: [
      { title: "Intérpretes — G.R.E.S. União da Colina" },
      { name: "description", content: "As vozes que conduzem o samba da União da Colina. Intérprete atual, históricos, direção musical e compositores." },
      { property: "og:title", content: "Intérpretes — União da Colina" },
      { property: "og:description", content: "As vozes que conduzem o samba." },
    ],
  }),
  component: Interpretes,
});

function Interpretes() {
  return (
    <>
      <PageHero
        eyebrow="Intérpretes"
        title="As vozes da União da Colina"
        subtitle="Quem canta a nossa história."
        image={interpretes}
        breadcrumb="Intérpretes"
      />

      <SegmentAbout
        title="A voz que conduz a avenida"
        eyebrow="Vozes"
        image={interpretes}
        paragraphs={[
          "O intérprete é a voz que conduz o samba do início ao fim do desfile, sustentando a harmonia entre bateria, alas e público. Sua entrega é fundamental para o desempenho da escola na avenida.",
          "Além da apresentação, o intérprete participa dos ensaios, gravações e da preparação vocal, dialogando com a direção musical e os compositores.",
          "Os registros históricos, nomes e gravações deste segmento estão em processo de organização e serão acrescentados ao acervo digital da União da Colina.",
        ]}
      />

      <SegmentRoleCards
        title="Papel e importância"
        eyebrow="Função"
        items={[
          { icon: Mic2, t: "Condução do samba", d: "Sustenta o canto do início ao fim do desfile, com afinação, força e emoção." },
          { icon: Music, t: "Direção musical", d: "Trabalha em conjunto com a direção musical na definição de andamento e arranjo." },
          { icon: BookOpen, t: "Compositores", d: "Interpreta o samba-enredo construído por compositores da comunidade e parceiros." },
          { icon: Users, t: "Preparação vocal", d: "Ensaios, aquecimento e cuidado com a voz ao longo do ciclo carnavalesco." },
        ]}
      />

      <SegmentTrajectory
        title="A trajetória vocal da escola"
        items={[
          { t: "Intérprete atual", d: "Nome do intérprete atual em atualização." },
          { t: "Intérpretes históricos", d: "Nomes e períodos dos intérpretes anteriores em processo de organização." },
          { t: "Direção musical", d: "Composição atual e histórica da direção musical em atualização." },
          { t: "Compositores", d: "Registros dos compositores da escola serão publicados após validação com a comunidade." },
          { t: "Sambas interpretados", d: "Relação dos sambas-enredo e gravações em processo de digitalização." },
          { t: "Registros audiovisuais", d: "Áudios, vídeos e apresentações em atualização." },
        ]}
      />

      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc section-y">
          <SectionTitle invert eyebrow="Áudio" title="Sambas interpretados" description="Este espaço reunirá as gravações oficiais dos sambas-enredo interpretados pela União da Colina." />
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <PlayCircle className="h-10 w-10 text-white/80" />
            <div className="flex-1">
              <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 w-1/4 rounded-full bg-[color:var(--dourado)]" /></div>
              <p className="mt-2 text-xs text-white/60">Gravações em processo de organização</p>
            </div>
          </div>
          <div className="mt-6"><EmptyState className="bg-white/5 text-white/80 border-white/20">Os áudios oficiais serão disponibilizados após a validação dos registros com a direção musical.</EmptyState></div>
        </div>
      </section>

      <SegmentMembers title="Intérpretes e direção musical" eyebrow="Quem canta" />
      <SegmentTimeline title="Marcos da voz da Colina" />
      <SegmentTestimonials />
      <SegmentGallery />
      <SegmentRelated
        items={[
          { t: "Bateria", to: "/bateria" },
          { t: "Comissão de Frente", to: "/comissao-de-frente" },
          { t: "Carnaval 2026", to: "/carnaval-2026" },
          { t: "A Escola", to: "/a-escola" },
        ]}
      />
    </>
  );
}
