import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Newspaper, Tag } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import bgOrnamental from "@/assets/bg-verde-ornamental.png.asset.json";
import historia from "@/assets/historia.jpg";
import bateria from "@/assets/bateria.jpg";
import baianas from "@/assets/baianas.jpg";
import interpretes from "@/assets/interpretes.jpg";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — G.R.E.S. União da Colina" },
      { name: "description", content: "Acompanhe as últimas notícias, comunicados e novidades da União da Colina." },
      { property: "og:title", content: "Notícias — União da Colina" },
      { property: "og:description", content: "Comunicados, ensaios, eventos e novidades da escola." },
    ],
  }),
  component: Noticias,
});

const categorias = ["Todas", "Escola", "Bateria", "Comunidade", "Eventos", "Institucional"];

const destaque = {
  categoria: "Escola",
  data: "Em atualização",
  titulo: "Novidades da União da Colina em breve",
  resumo:
    "Este é o espaço oficial de comunicados da escola. Ensaios, eventos, entrevistas e notas institucionais serão publicados aqui assim que confirmados pela diretoria.",
  imagem: historia,
};

const noticias = [
  { categoria: "Bateria", data: "Em breve", titulo: "Ensaios da bateria", resumo: "Datas, horários e locais serão divulgados após confirmação.", imagem: bateria },
  { categoria: "Comunidade", data: "Em breve", titulo: "Encontros da comunidade", resumo: "Ações comunitárias e mobilizações da escola no bairro.", imagem: baianas },
  { categoria: "Eventos", data: "Em breve", titulo: "Rodas de samba e apresentações", resumo: "Programação artística com os intérpretes e integrantes da escola.", imagem: interpretes },
  { categoria: "Institucional", data: "Em breve", titulo: "Comunicados da diretoria", resumo: "Notas oficiais e informações institucionais da União da Colina.", imagem: pavilhao },
  { categoria: "Escola", data: "Em breve", titulo: "Bastidores do Carnaval 2026", resumo: "Registros do trabalho coletivo rumo à avenida.", imagem: historia },
  { categoria: "Comunidade", data: "Em breve", titulo: "Memória viva", resumo: "Depoimentos e histórias de quem construiu a União da Colina.", imagem: bateria },
];

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Comunicados oficiais"
        title="Notícias"
        subtitle="Acompanhe os comunicados, eventos e novidades da União da Colina."
        breadcrumb="Notícias"
        image={pavilhao}
      />

      {/* Destaque */}
      <section className="bg-background">
        <div className="container-uc section-y">
          <SectionTitle
            eyebrow="Em destaque"
            title="A notícia mais recente"
            description="Um espaço dedicado a manter a comunidade informada sobre o que acontece na escola."
          />
          <article className="mt-10 grid gap-8 overflow-hidden rounded-3xl border border-[color:var(--verde-claro)] bg-white shadow-sm md:grid-cols-5">
            <div className="relative md:col-span-3">
              <img src={destaque.imagem} alt="" className="h-full max-h-[440px] w-full object-cover" loading="lazy" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--verde-profundo)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                <Tag className="h-3 w-3" /> {destaque.categoria}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 md:col-span-2">
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--verde-medio)]">
                <CalendarDays className="h-3.5 w-3.5" /> {destaque.data}
              </p>
              <h3 className="text-2xl font-bold text-[color:var(--verde-profundo)] md:text-3xl">{destaque.titulo}</h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--cinza-texto)]">{destaque.resumo}</p>
              <PlaceholderNote>Conteúdo em atualização</PlaceholderNote>
            </div>
          </article>
        </div>
      </section>

      {/* Filtros + Grade */}
      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Últimas publicações"
              title="Todas as notícias"
              description="Filtre por categoria para acompanhar assuntos específicos."
              className="mt-0"
            />
            <div className="flex flex-wrap gap-2">
              {categorias.map((c, i) => (
                <button
                  key={c}
                  type="button"
                  className={
                    i === 0
                      ? "rounded-full bg-[color:var(--verde-profundo)] px-4 py-1.5 text-[12px] font-semibold text-white"
                      : "rounded-full border border-[color:var(--verde-claro)] bg-white px-4 py-1.5 text-[12px] font-semibold text-[color:var(--verde-profundo)] hover:bg-[color:var(--verde-claro)]/40"
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {noticias.map((n, i) => (
              <article key={i} className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--verde-claro)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={n.imagem} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-[color:var(--verde-profundo)]">
                    {n.categoria}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--verde-medio)]">
                    <CalendarDays className="h-3 w-3" /> {n.data}
                  </p>
                  <h3 className="text-lg font-bold text-[color:var(--verde-profundo)]">{n.titulo}</h3>
                  <p className="text-[13.5px] leading-relaxed text-[color:var(--cinza-texto)]">{n.resumo}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[color:var(--verde-medio)]">
                    Ler mais <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 mx-auto max-w-3xl">
            <PlaceholderNote>A publicação de notícias começará assim que o fluxo editorial for validado com a diretoria da escola.</PlaceholderNote>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA com fundo ornamental */}
      <section className="relative isolate overflow-hidden bg-[color:var(--verde-profundo)] text-white">
        <img
          src={bgOrnamental.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,47,29,0.55), rgba(3,47,29,0.75))",
          }}
        />
        <div className="container-uc section-y text-center">
          <Newspaper className="mx-auto h-10 w-10 text-[color:var(--dourado)]" />
          <h2 className="mx-auto mt-5 max-w-2xl h-section">Fique por dentro da União da Colina</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/85">
            Acompanhe os canais oficiais da escola para receber comunicados, datas de ensaios e novidades sobre o Carnaval 2026.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="btn-uc bg-white text-[color:var(--verde-profundo)] hover:bg-[color:var(--verde-claro)]">
              Entrar em contato <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/carnaval-2026" className="btn-uc border border-white/25 text-white hover:bg-white/5">
              Carnaval 2026
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
