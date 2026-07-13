import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EmptyState } from "@/components/site/SegmentSections";
import { Award, Crown, Medal, Trophy } from "lucide-react";
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
          <div className="flex flex-col items-center text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-[color:var(--dourado)]/50 bg-[color:var(--dourado)]/10">
              <Crown className="h-8 w-8 text-[color:var(--dourado)]" />
            </span>
            <SectionTitle
              invert
              align="center"
              eyebrow="Campeã"
              title="Anos de título"
              description="Carnavais em que a União da Colina cruzou a linha de chegada em primeiro lugar."
              className="mt-5"
            />
            <span aria-hidden="true" className="mt-6 block h-px w-24 bg-[color:var(--dourado)]/60" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="rounded-2xl border-2 border-[color:var(--dourado)]/70 bg-[#FBF7EA] p-5 shadow-md"
              >
                <Trophy className="h-7 w-7 text-[color:var(--dourado)]" />
                <p className="mt-4 text-2xl font-extrabold text-[color:var(--verde-profundo)]">Ano</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--verde-medio)]">Categoria em atualização</p>
                <h3 className="mt-3 text-[15px] font-bold text-[color:var(--verde-profundo)]">Enredo</h3>
                <p className="mt-1.5 text-[13px] text-[color:var(--cinza-texto)]">Sinopse em atualização.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Vice-campeã */}
      <section className="bg-[color:var(--verde-claro)]/40">
        <div className="container-uc section-y">
          <div className="flex flex-col items-center text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-[#B8BDC4] bg-[#EEF1F4]">
              <Medal className="h-8 w-8 text-[#8A929B]" />
            </span>
            <SectionTitle
              align="center"
              eyebrow="Vice-campeã"
              title="Segundos lugares memoráveis"
              description="Carnavais em que a escola esteve entre as melhores da avenida, conquistando o vice-campeonato."
              className="mt-5"
            />
            <span aria-hidden="true" className="mt-6 block h-px w-24 bg-[#B8BDC4]" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="rounded-2xl border-2 border-[#C7CCD3] bg-white p-5 shadow-md"
              >
                <Medal className="h-7 w-7 text-[#8A929B]" />
                <p className="mt-4 text-2xl font-extrabold text-[color:var(--verde-profundo)]">Ano</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--verde-medio)]">Categoria em atualização</p>
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