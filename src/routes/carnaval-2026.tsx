import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
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
      <PageHero eyebrow="Carnaval 2026" title="Uma nova página da nossa história" subtitle="O próximo capítulo da União da Colina na avenida." image={hero} />
      <section className="bg-background">
        <div className="container-uc grid gap-12 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <SectionTitle eyebrow="Enredo 2026" title="Nome do enredo em atualização" description="Assim que o enredo for anunciado, este espaço apresentará a sinopse, a justificativa e o processo criativo por trás do desfile." />
            <div className="mt-6"><PlaceholderNote>Conteúdo em atualização</PlaceholderNote></div>
            <div className="mt-8 flex gap-3">
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--verde)] px-5 py-3 text-sm font-semibold text-white hover:bg-[color:var(--verde-escuro)]">Fale conosco</Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[36px] border-8 border-[color:var(--verde-claro)]">
            <img src={pavilhao} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc py-20">
          <SectionTitle eyebrow="Estrutura do desfile" title="Todos os elementos do Carnaval 2026" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blocos.map((b) => (
              <article key={b} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6">
                <h3 className="text-base font-bold text-[color:var(--verde-profundo)]">{b}</h3>
                <p className="mt-2 text-sm text-[color:var(--cinza-texto)]">Conteúdo em atualização.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--dourado)]"><Music className="h-4 w-4" /> Samba-enredo</div>
              <h3 className="mt-3 h-section">Samba-enredo em breve</h3>
              <p className="mt-4 text-white/80">A letra completa, os autores e o áudio oficial estarão disponíveis nesta seção assim que forem divulgados.</p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <PlayCircle className="h-10 w-10 text-white/80" />
                <div className="flex-1">
                  <div className="h-2 rounded-full bg-white/10"><div className="h-2 w-1/3 rounded-full bg-[color:var(--dourado)]" /></div>
                  <p className="mt-2 text-xs text-white/60">Áudio em atualização</p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--dourado)]"><Calendar className="h-4 w-4" /> Agenda de ensaios</div>
              <h3 className="mt-3 h-section">Ensaios abertos à comunidade</h3>
              <ul className="mt-6 space-y-3">
                {[1,2,3].map((i) => (
                  <li key={i} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="font-bold">Data em atualização</p>
                      <p className="text-sm text-white/70">Local e horário em atualização</p>
                    </div>
                    <PlaceholderNote>Em breve</PlaceholderNote>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}