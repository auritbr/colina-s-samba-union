import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import { User } from "lucide-react";
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
  "Presidente","Vice-Presidente","Diretor de Carnaval","Diretor Cultural","Diretor Financeiro","Diretor de Comunicação",
];

function Diretoria() {
  return (
    <>
      <PageHero title="Diretoria" subtitle="Liderança e gestão institucional da União da Colina." image={historia} />
      <section className="bg-background">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle eyebrow="Institucional" title="Quem conduz a escola" description="A diretoria é responsável pela gestão institucional, cultural e artística da União da Colina, zelando pela preservação da memória e pelo futuro da escola." />
          <div className="mt-4"><PlaceholderNote>Informações da gestão atual em atualização</PlaceholderNote></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cargos.map((c) => (
              <article key={c} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6 shadow-sm">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[color:var(--verde-claro)] text-[color:var(--verde-profundo)]">
                  <User className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[color:var(--verde-profundo)]">{c}</h3>
                <p className="mt-1 text-sm text-[color:var(--cinza-texto)]">Nome em atualização</p>
                <p className="mt-3 text-sm text-[color:var(--cinza-texto)]">Mini biografia em atualização.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc py-16 md:py-20 text-center">
          <h3 className="text-2xl font-bold md:text-3xl">Uma escola construída a muitas mãos</h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">A gestão da União da Colina é feita com respeito à comunidade, à velha guarda e às gerações que virão.</p>
        </div>
      </section>
    </>
  );
}