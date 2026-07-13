import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { EmptyState, SegmentRelated } from "@/components/site/SegmentSections";
import { ArrowRight, BookOpen, Camera, FileText, Users } from "lucide-react";
import historia from "@/assets/historia.jpg";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/a-escola")({
  head: () => ({
    meta: [
      { title: "A Escola — G.R.E.S. União da Colina" },
      { name: "description", content: "Tradição, memória e pertencimento desde 1947. Conheça a história da União da Colina, a primeira escola de samba da cidade." },
      { property: "og:title", content: "A Escola — União da Colina" },
      { property: "og:description", content: "Tradição, memória e pertencimento desde 1947." },
    ],
  }),
  component: AEscola,
});

const trajetoria = [
  { t: "Fundação em 1947", d: "A União da Colina foi fundada em 1947 pela força coletiva de sambistas, famílias e moradores da Colina." },
  { t: "Contexto histórico da criação", d: "O período de fundação e o cenário cultural da cidade estão em processo de pesquisa a partir de fontes documentais." },
  { t: "Fundadores e primeiras gerações", d: "Os nomes dos fundadores serão publicados após validação com a comunidade e as famílias sambistas." },
  { t: "Primeiros desfiles", d: "Os registros das primeiras apresentações estão sendo organizados junto ao acervo institucional." },
  { t: "A primeira escola da cidade", d: "Reconhecida como a primeira escola de samba da cidade, é parte fundamental da memória do carnaval local." },
  { t: "Relação com o bairro", d: "A escola nasce enraizada no território da Colina, mantendo relação profunda com moradores e famílias." },
  { t: "Evolução ao longo das décadas", d: "As diferentes fases da escola estão sendo mapeadas a partir de depoimentos e documentos." },
  { t: "Interrupções e retomadas", d: "Períodos de pausa, resistência e retomadas serão descritos após revisão do acervo." },
  { t: "Situação atual", d: "A escola segue ativa, com trabalho voltado à preservação de sua memória e à continuidade da tradição." },
  { t: "Preservação da memória", d: "Um trabalho contínuo de escuta, registro e valorização das gerações que fazem a escola." },
];

const eixos = [
  { icon: Users, t: "Comunidade", d: "Sambistas, famílias e moradores que fizeram — e fazem — a escola acontecer." },
  { icon: BookOpen, t: "Memória oral", d: "Depoimentos, cantos e histórias transmitidas entre gerações." },
  { icon: Camera, t: "Acervo fotográfico", d: "Registros de desfiles, ensaios, pavilhão e bastidores em digitalização." },
  { icon: FileText, t: "Documentos históricos", d: "Estatuto, atas, recortes de jornal e materiais institucionais em organização." },
];

function AEscola() {
  return (
    <>
      <PageHero
        title="A primeira escola de samba da cidade"
        eyebrow="A Escola"
        subtitle="Tradição, memória e pertencimento desde 1947."
        image={historia}
        breadcrumb="A Escola"
      />

      <section className="bg-background">
        <div className="container-uc section-y grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <SectionTitle eyebrow="Apresentação" title="Uma escola construída por gerações" />
            <div className="mt-6 space-y-4 text-lede text-[color:var(--cinza-texto)] max-w-[65ch]">
              <p>Como primeira escola de samba da cidade, a União da Colina representa uma parte essencial da memória do carnaval local — construída por gerações de sambistas, famílias e artistas populares.</p>
              <p>Este espaço foi criado para reunir, organizar e preservar os registros dessa trajetória, tornando-a acessível a todos que quiserem conhecê-la.</p>
              <p>Os registros históricos e as informações detalhadas estão em processo de organização e serão acrescentados ao acervo digital da União da Colina, sempre a partir de fontes documentais e depoimentos validados.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border-4 border-[color:var(--verde-claro)]">
            <img src={pavilhao} alt="Pavilhão da União da Colina" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Trajetória" title="Marcos da nossa história" description="Uma linha de continuidade entre a fundação da escola, sua consolidação como referência do samba na cidade e sua permanência como patrimônio afetivo." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trajetoria.map((b) => (
              <article key={b.t} className="card-uc">
                <h3 className="text-[17px] font-bold text-[color:var(--verde-profundo)]">{b.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--cinza-texto)]">{b.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Eixos de preservação" title="Como organizamos a memória" description="A construção do acervo digital da União da Colina se apoia em fontes documentais, depoimentos e imagens da comunidade." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eixos.map(({ icon: Icon, t, d }) => (
              <article key={t} className="card-uc">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--verde-claro)] text-[color:var(--verde-profundo)]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-[17px] font-bold text-[color:var(--verde-profundo)]">{t}</h3>
                <p className="mt-2 text-[14.5px] text-[color:var(--cinza-texto)]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Memória oral" title="Depoimentos e vídeos" description="Este espaço reunirá relatos de sambistas, famílias, mestres e moradores que ajudaram a construir a União da Colina." />
          <div className="mt-8"><EmptyState>Em breve, este espaço reunirá depoimentos, entrevistas e registros audiovisuais organizados junto à comunidade.</EmptyState></div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-uc section-y">
          <SectionTitle eyebrow="Acervo" title="Fotografias e documentos" description="Fotografias históricas, recortes de jornal, atas e registros institucionais estão sendo digitalizados para compor o acervo público da escola." />
          <div className="mt-8"><EmptyState>O acervo fotográfico e documental será disponibilizado gradualmente, após validação com a comunidade.</EmptyState></div>
        </div>
      </section>

      <section className="bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc section-y">
          <SectionTitle
            invert
            eyebrow="Preservação"
            title="Uma história que pertence à cidade"
            description="Preservar a memória da União da Colina é reconhecer as pessoas, os territórios e as tradições que ajudaram a construir o carnaval local."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="btn-uc bg-white text-[color:var(--verde-profundo)] hover:bg-[color:var(--verde-claro)]">
              Contribua com o acervo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/carnaval-2026" className="btn-uc border border-white/25 text-white hover:bg-white/5">
              Carnaval 2026
            </Link>
          </div>
        </div>
      </section>

      <SegmentRelated
        title="Conheça cada segmento"
        eyebrow="Segmentos"
        items={[
          { t: "Diretoria", to: "/diretoria" },
          { t: "Velha Guarda", to: "/velha-guarda" },
          { t: "Bateria", to: "/bateria" },
          { t: "Ala das Baianas", to: "/ala-das-baianas" },
          { t: "Comissão de Frente", to: "/comissao-de-frente" },
          { t: "Mestre-Sala e Porta-Bandeiras", to: "/mestre-sala-e-porta-bandeiras" },
          { t: "Intérpretes", to: "/interpretes" },
          { t: "Títulos", to: "/titulos" },
        ]}
      />
    </>
  );
}
