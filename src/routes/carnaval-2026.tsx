import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EmptyState } from "@/components/site/SegmentSections";
import { Calendar, Music, PlayCircle } from "lucide-react";
import hero from "@/assets/hero-desfile.jpg";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/carnaval-2026")({
  head: () => ({
    meta: [
      { title: "Carnaval 2026 — G.R.E.S. União da Colina" },
      { name: "description", content: "Enredo, samba, ficha técnica e agenda de ensaios do Carnaval 2026 da União da Colina." },
      { property: "og:title", content: "Carnaval 2026 — União da Colina" },
      { property: "og:description", content: "O próximo carnaval da primeira escola de samba da cidade." },
    ],
  }),
  component: Carnaval,
});

const blocos = [
  "Sinopse","Justificativa","Carnavalesco","Autores do samba","Intérprete","Direção de carnaval",
  "Comissão de Frente","Mestre-Sala e Porta-Bandeiras","Bateria","Alas","Fantasias","Alegorias","Ficha técnica",
];

function Carnaval() {
  return (
    <>
      <PageHero eyebrow="Carnaval 2026" title="Uma nova página da nossa história" subtitle="O próximo capítulo da União da Colina na avenida." image={hero} breadcrumb="Carnaval 2026" />

      <section className="bg-background">
        <div className="container-uc section-y grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
          <div>
            <SectionTitle eyebrow="Enredo 2026" title="Nome do enredo em atualização" description="Assim que o enredo for anunciado, este espaço apresentará a sinopse, a justificativa e o processo criativo por trás do desfile." />
            <div className="mt-6"><EmptyState>O enredo, a sinopse e a justificativa serão publicados após o anúncio oficial da escola.</EmptyState></div>
            <div className="mt-6 flex gap-3">
              <Link to="/contato" className="btn-uc bg-[color:var(--verde)] text-white hover:bg-[color:var(--verde-escuro)]">Fale conosco</Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border-4 border-[color:var(--verde-claro)]">
            <img src={pavilhao} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Estrutura do desfile" title="Todos os elementos do Carnaval 2026" description="Cada item será preenchido conforme os anúncios oficiais da escola ao longo do ciclo carnavalesco." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {blocos.map((b) => (
              <article key={b} className="card-uc">
                <h3 className="text-[15px] font-bold text-[color:var(--verde-profundo)]">{b}</h3>
                <p className="mt-1.5 text-[13.5px] text-[color:var(--cinza-texto)]">Em atualização.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc section-y">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--dourado)]"><Music className="h-4 w-4" /> Samba-enredo</div>
              <h3 className="mt-3 h-section text-white">Samba-enredo em breve</h3>
              <p className="mt-3 text-lede text-white/80">A letra completa, os autores e o áudio oficial estarão disponíveis assim que forem divulgados.</p>
              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <PlayCircle className="h-9 w-9 text-white/80" />
                <div className="flex-1">
                  <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 w-1/4 rounded-full bg-[color:var(--dourado)]" /></div>
                  <p className="mt-2 text-xs text-white/60">Áudio em atualização</p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--dourado)]"><Calendar className="h-4 w-4" /> Agenda de ensaios</div>
              <h3 className="mt-3 h-section text-white">Ensaios abertos à comunidade</h3>
              <ul className="mt-5 space-y-2.5">
                {[1,2,3].map((i) => (
                  <li key={i} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <div>
                      <p className="font-bold text-[15px]">Data em atualização</p>
                      <p className="text-[13px] text-white/70">Local e horário em atualização</p>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--dourado)]">Em breve</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Galeria e notícias" title="Registros e novidades" description="Fotografias, vídeos e notícias do Carnaval 2026 serão publicados aqui ao longo do ciclo carnavalesco." />
          <div className="mt-8"><EmptyState>O acervo do Carnaval 2026 será construído gradualmente, respeitando os anúncios oficiais da escola.</EmptyState></div>
        </div>
      </section>
    </>
  );
}
