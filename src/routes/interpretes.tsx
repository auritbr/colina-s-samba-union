import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { Mic2, Music } from "lucide-react";
import interpretes from "@/assets/interpretes.jpg";

export const Route = createFileRoute("/interpretes")({
  head: () => ({
    meta: [
      { title: "Intérpretes — G.R.E.S. União da Colina" },
      { name: "description", content: "As vozes que conduzem o samba da União da Colina. Intérprete atual, históricos, diretores musicais e compositores." },
      { property: "og:title", content: "Intérpretes — União da Colina" },
      { property: "og:description", content: "As vozes que conduzem o samba." },
    ],
  }),
  component: Interpretes,
});

function Interpretes() {
  return (
    <>
      <PageHero title="Intérpretes" subtitle="As vozes que conduzem o samba da União da Colina." image={interpretes} />
      <section className="bg-background">
        <div className="container-uc py-20 md:py-28">
          <SectionTitle eyebrow="Vozes" title="Quem canta a nossa história" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Intérprete atual", i: Mic2 },
              { t: "Intérpretes históricos", i: Mic2 },
              { t: "Diretores musicais", i: Music },
            ].map(({ t, i: Icon }) => (
              <article key={t} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--verde-claro)] text-[color:var(--verde-profundo)]"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-lg font-bold text-[color:var(--verde-profundo)]">{t}</h3>
                <p className="mt-2 text-sm text-[color:var(--cinza-texto)]">Conteúdo em atualização.</p>
              </article>
            ))}
          </div>
          <div className="mt-8"><PlaceholderNote>Compositores, sambas marcantes e áudios em atualização</PlaceholderNote></div>
        </div>
      </section>
    </>
  );
}