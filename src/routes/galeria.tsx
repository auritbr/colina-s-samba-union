import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Images } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import historia from "@/assets/historia.jpg";
import bateria from "@/assets/bateria.jpg";
import baianas from "@/assets/baianas.jpg";
import comissao from "@/assets/comissao.jpg";
import velhaGuarda from "@/assets/velha-guarda.jpg";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — G.R.E.S. União da Colina" },
      { name: "description", content: "Imagens que preservam os desfiles, as pessoas e as memórias da União da Colina, organizadas por ano." },
      { property: "og:title", content: "Galeria — União da Colina" },
      { property: "og:description", content: "O acervo visual da União da Colina, organizado por ano." },
    ],
  }),
  component: Galeria,
});

type Album = {
  slug: string;
  titulo: string;
  periodo: string;
  capa: string;
  descricao: string;
  total: string;
};

const albunsPorAno: Record<number, Album[]> = {
  2026: [
    { slug: "bastidores-2026", titulo: "Bastidores do Carnaval 2026", periodo: "2026", capa: historia, descricao: "Conteúdo em atualização", total: "Em breve" },
    { slug: "ensaios-2026", titulo: "Ensaios da comunidade", periodo: "2026", capa: bateria, descricao: "Conteúdo em atualização", total: "Em breve" },
  ],
  2025: [
    { slug: "desfile-2025", titulo: "Desfile 2025", periodo: "2025", capa: comissao, descricao: "Conteúdo em atualização", total: "Em breve" },
    { slug: "baianas-2025", titulo: "Ala das Baianas", periodo: "2025", capa: baianas, descricao: "Conteúdo em atualização", total: "Em breve" },
    { slug: "pavilhao-2025", titulo: "Pavilhão da escola", periodo: "2025", capa: pavilhao, descricao: "Conteúdo em atualização", total: "Em breve" },
  ],
  2024: [
    { slug: "velha-guarda-2024", titulo: "Velha Guarda", periodo: "2024", capa: velhaGuarda, descricao: "Conteúdo em atualização", total: "Em breve" },
  ],
  2023: [],
};

function Galeria() {
  const availableYears = useMemo(
    () => Object.keys(albunsPorAno).map(Number).sort((a, b) => b - a),
    [],
  );
  const [selectedYear, setSelectedYear] = useState<number>(availableYears[0]);
  const albuns = albunsPorAno[selectedYear] ?? [];

  return (
    <>
      <PageHero
        eyebrow="Acervo visual"
        title="Galeria"
        subtitle="Imagens que preservam os desfiles, as pessoas e as memórias da União da Colina."
        breadcrumb="Galeria"
        image={historia}
      />

      <section className="bg-background">
        <div className="container-uc section-y">
          <SectionTitle
            align="center"
            eyebrow="Por ano"
            title="Galeria por ano"
            description="Selecione um ano para conhecer os registros, eventos e momentos preservados no acervo da União da Colina."
          />

          <div
            role="tablist"
            aria-label="Selecione o ano"
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {availableYears.map((year) => {
              const active = year === selectedYear;
              return (
                <button
                  key={year}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedYear(year)}
                  className={
                    active
                      ? "rounded-full bg-[color:var(--verde-profundo)] px-5 py-2 text-[13px] font-bold text-white ring-2 ring-[color:var(--dourado)] ring-offset-2 ring-offset-background"
                      : "rounded-full border border-[color:var(--verde-claro)] bg-white px-5 py-2 text-[13px] font-semibold text-[color:var(--verde-profundo)] transition hover:bg-[color:var(--verde-claro)]/40"
                  }
                >
                  {year}
                </button>
              );
            })}
          </div>

          <div className="mt-12">
            {albuns.length === 0 ? (
              <div className="mx-auto max-w-xl">
                <PlaceholderNote>Os registros deste ano serão adicionados em breve.</PlaceholderNote>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {albuns.map((a) => (
                  <article
                    key={a.slug}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--verde-claro)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={a.capa}
                        alt={a.titulo}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-[color:var(--verde-profundo)]">
                        {a.periodo}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="text-lg font-bold text-[color:var(--verde-profundo)]">{a.titulo}</h3>
                      <p className="text-[13.5px] leading-relaxed text-[color:var(--cinza-texto)]">{a.descricao}</p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-[color:var(--cinza-texto)]">
                          <Camera className="h-3.5 w-3.5" /> {a.total}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[color:var(--verde-medio)]">
                          Ver álbum <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y text-center">
          <Images className="mx-auto h-10 w-10 text-[color:var(--verde-medio)]" />
          <h2 className="mx-auto mt-5 max-w-2xl h-section">Contribua com o nosso acervo</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-[color:var(--cinza-texto)]">
            Se você guarda fotografias, vídeos ou documentos que fazem parte da história da União da Colina, entre em contato conosco. Toda memória é bem-vinda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="btn-uc bg-[color:var(--verde-profundo)] text-white hover:bg-[color:var(--verde-escuro)]">
              Entrar em contato <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}