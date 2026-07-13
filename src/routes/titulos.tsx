import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EmptyState } from "@/components/site/SegmentSections";
import { Award, Medal, Trophy } from "lucide-react";
import { Link } from "@tanstack/react-router";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/titulos")({
  head: () => ({
    meta: [
      { title: "Títulos — G.R.E.S. União da Colina" },
      { name: "description", content: "Sala de troféus da União da Colina. As conquistas que marcaram a nossa história no carnaval." },
      { property: "og:title", content: "Títulos — União da Colina" },
      { property: "og:description", content: "As conquistas que marcaram a nossa história." },
    ],
  }),
  component: Titulos,
});

function Titulos() {
  return (
    <>
      <PageHero title="Sala de Troféus" eyebrow="Títulos" subtitle="As conquistas que marcaram nossa história." image={pavilhao} breadcrumb="Títulos" />

      {/* Resumo das conquistas */}
      <section className="bg-background">
        <div className="container-uc section-y">
          <SectionTitle
            align="center"
            eyebrow="Conquistas"
            title="Cada troféu é uma memória"
            description="Este espaço reúne os títulos conquistados pela União da Colina ao longo de sua trajetória. Cada linha é fruto do trabalho coletivo da comunidade."
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6 text-center shadow-sm">
              <Trophy className="mx-auto h-8 w-8 text-[color:var(--dourado)]" />
              <p className="mt-3 text-3xl font-extrabold text-[color:var(--verde-profundo)]">—</p>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--cinza-texto)]">Títulos de campeã</p>
            </div>
            <div className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6 text-center shadow-sm">
              <Medal className="mx-auto h-8 w-8 text-[color:var(--verde-medio)]" />
              <p className="mt-3 text-3xl font-extrabold text-[color:var(--verde-profundo)]">—</p>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--cinza-texto)]">Vice-campeonatos</p>
            </div>
            <div className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6 text-center shadow-sm">
              <Award className="mx-auto h-8 w-8 text-[color:var(--verde-profundo)]" />
              <p className="mt-3 text-3xl font-extrabold text-[color:var(--verde-profundo)]">1947</p>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--cinza-texto)]">Ano de fundação</p>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <EmptyState>A lista completa de títulos será publicada após validação com o arquivo institucional da escola. Nenhuma conquista será incluída sem confirmação documental.</EmptyState>
          </div>
        </div>
      </section>

      {/* Seção Campeã */}
      <section className="bg-[color:var(--verde-escuro)] text-white">
        <div className="container-uc section-y">
          <SectionTitle
            invert
            eyebrow="Campeã"
            title="Anos de título"
            description="Carnavais em que a União da Colina cruzou a linha de chegada em primeiro lugar."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <article key={i} className="relative overflow-hidden rounded-2xl border border-[color:var(--dourado)]/40 bg-gradient-to-b from-white/10 to-white/[0.02] p-5">
                <div className="flex items-center justify-between">
                  <Trophy className="h-7 w-7 text-[color:var(--dourado)]" />
                  <span className="rounded-full bg-[color:var(--dourado)]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--dourado)]">Campeã</span>
                </div>
                <p className="mt-4 text-2xl font-extrabold">Ano</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">Categoria em atualização</p>
                <h3 className="mt-3 text-[15px] font-bold">Enredo</h3>
                <p className="mt-1.5 text-[13px] text-white/70">Sinopse em atualização.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Vice-campeã */}
      <section className="bg-[color:var(--verde-claro)]/40">
        <div className="container-uc section-y">
          <SectionTitle
            eyebrow="Vice-campeã"
            title="Segundos lugares memoráveis"
            description="Carnavais em que a escola esteve entre as melhores da avenida, conquistando o vice-campeonato."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <article key={i} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <Medal className="h-7 w-7 text-[color:var(--verde-medio)]" />
                  <span className="rounded-full bg-[color:var(--verde-claro)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--verde-profundo)]">Vice</span>
                </div>
                <p className="mt-4 text-2xl font-extrabold text-[color:var(--verde-profundo)]">Ano</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--cinza-texto)]">Categoria em atualização</p>
                <h3 className="mt-3 text-[15px] font-bold text-[color:var(--verde-profundo)]">Enredo</h3>
                <p className="mt-1.5 text-[13px] text-[color:var(--cinza-texto)]">Sinopse em atualização.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc section-y text-center">
          <Award className="mx-auto h-10 w-10 text-[color:var(--dourado)]" />
          <h2 className="mx-auto mt-5 max-w-2xl h-section">Uma história construída por gerações</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/80">
            Cada troféu representa o trabalho coletivo da comunidade, das alas, da bateria e da velha guarda. Conheça mais sobre a trajetória da União da Colina.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/a-escola" className="btn-uc bg-white text-[color:var(--verde-profundo)] hover:bg-[color:var(--verde-claro)]">Conheça a escola</Link>
            <Link to="/carnaval-2026" className="btn-uc border border-white/25 text-white hover:bg-white/5">Carnaval 2026</Link>
          </div>
        </div>
      </section>
    </>
  );
}