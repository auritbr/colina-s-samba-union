import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Calendar,
  Crown,
  Drum,
  Flag,
  Mic2,
  PlayCircle,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import brasao from "@/assets/brasao.png.asset.json";
import heroDesfile from "@/assets/hero-desfile.jpg";
import historia from "@/assets/historia.jpg";
import baianas from "@/assets/baianas.jpg";
import bateria from "@/assets/bateria.jpg";
import comissao from "@/assets/comissao.jpg";
import interpretes from "@/assets/interpretes.jpg";
import mestreSala from "@/assets/mestre-sala.jpg";
import velhaGuarda from "@/assets/velha-guarda.jpg";
import pavilhao from "@/assets/pavilhao.jpg";
import ornamentLight from "@/assets/ornament-light-bg.png.asset.json";
import ornamentDark from "@/assets/ornament-dark-frame.png.asset.json";
import ornamentBand from "@/assets/ornament-green-band.png.asset.json";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "1947", label: "Ano de fundação" },
  { value: "Mais de 70 anos", label: "Décadas de história" },
  { value: "Em atualização", label: "Títulos conquistados" },
  { value: "Diversas gerações", label: "Famílias participantes" },
];

const timeline = [
  { year: "1947", title: "Fundação da União da Colina", text: "A escola nasce da força coletiva de sambistas, famílias e moradores da Colina." },
  { year: "Décadas de 1950–60", title: "Primeiros desfiles", text: "Consolidação como referência do samba na cidade." },
  { year: "Anos seguintes", title: "Primeiros títulos", text: "Conquistas que marcaram a memória do carnaval local." },
  { year: "Patrimônio", title: "Consolidação cultural", text: "Reconhecimento como patrimônio afetivo e cultural da comunidade." },
  { year: "Retomadas", title: "Novas gerações", text: "Manutenção da tradição por meio de novas famílias e sambistas." },
  { year: "2026", title: "Carnaval 2026", text: "Uma nova página da história será escrita na avenida." },
];

const segmentos = [
  { title: "Diretoria", to: "/diretoria", icon: Users, img: historia, desc: "Gestão institucional e liderança da escola." },
  { title: "Velha Guarda", to: "/velha-guarda", icon: Star, img: velhaGuarda, desc: "Memória viva, ancestralidade e sabedoria." },
  { title: "Bateria", to: "/bateria", icon: Drum, img: bateria, desc: "O coração pulsante do samba da Colina." },
  { title: "Ala das Baianas", to: "/ala-das-baianas", icon: Sparkles, img: baianas, desc: "Ancestralidade e resistência na avenida." },
  { title: "Comissão de Frente", to: "/comissao-de-frente", icon: Crown, img: comissao, desc: "A abertura do espetáculo da escola." },
  { title: "Mestre-Sala e Porta-Bandeiras", to: "/mestre-sala-e-porta-bandeiras", icon: Flag, img: mestreSala, desc: "Elegância e proteção ao pavilhão." },
  { title: "Intérpretes", to: "/interpretes", icon: Mic2, img: interpretes, desc: "As vozes que conduzem o samba." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[color:var(--verde-profundo)] text-white">
        <img
          src={heroDesfile}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          width={1920}
          height={1280}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(3,47,29,0.92) 0%, rgba(6,61,37,0.75) 50%, rgba(3,47,29,0.98) 100%)",
          }}
        />
        <img
          src={brasao.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 h-[640px] w-[640px] opacity-10 md:block"
        />

        <div className="container-uc relative flex min-h-[64vh] flex-col justify-center py-16 md:py-24 lg:min-h-[70vh]">
          <div className="fade-up max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 backdrop-blur">
              <img src={brasao.url} alt="Brasão" className="h-7 w-7 object-contain" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--dourado)]">
                Desde 1947 · A primeira escola de samba da cidade
              </span>
            </div>
            <h1 className="h-display">
              União <span className="text-[color:var(--verde-claro)]">da Colina</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lede text-white/85">
              A primeira escola de samba da cidade. Uma história construída por gerações.
            </p>
            <p className="mt-3 max-w-xl text-[14px] text-white/60">
              Desde 1947, preservando a memória, a cultura e a força do samba.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/a-escola"
                className="btn-uc bg-white text-[color:var(--verde-profundo)] hover:bg-[color:var(--verde-claro)]"
              >
                Conheça nossa história
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/carnaval-2026"
                className="btn-uc border border-white/25 text-white hover:border-white hover:bg-white/5"
              >
                Carnaval 2026
              </Link>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" className="block h-12 w-full text-background md:h-20">
          <path d="M0,40 C240,10 480,60 720,32 C960,4 1200,60 1440,20 L1440,60 L0,60 Z" fill="currentColor" />
        </svg>
      </section>

      {/* APRESENTAÇÃO */}
      <section
        className="relative bg-background"
        style={{
          backgroundImage: `url(${ornamentLight.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-uc relative grid gap-12 py-20 md:grid-cols-2 md:py-28 lg:gap-20">
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-[36px] border-8 border-[color:var(--verde-claro)] shadow-2xl">
              <img src={historia} alt="Fotografia histórica da comunidade da Colina" className="h-full w-full object-cover" loading="lazy" width={1280} height={1280} />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full"
              style={{ background: "var(--verde-medio)", opacity: 0.15 }}
            />
          </div>
          <div className="order-1 flex flex-col justify-center md:order-2">
            <SectionTitle
              eyebrow="Nossa origem"
              title="A história que nasceu na Colina"
              description="A União da Colina nasceu da força coletiva de sambistas, famílias e moradores que transformaram tradição, música e pertencimento em patrimônio cultural. Como primeira escola de samba da cidade, sua trajetória representa parte fundamental da memória do carnaval local."
            />
            <div className="mt-8">
              <Link
                to="/a-escola"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--verde)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--verde-escuro)]"
              >
                Conheça a trajetória completa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="relative bg-[color:var(--verde-claro)]/40">
        <div className="container-uc grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[color:var(--verde-claro)] bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-[color:var(--verde-profundo)] md:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[color:var(--cinza-texto)]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-background">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle
            eyebrow="Linha do tempo"
            title="Nossa trajetória"
            description="Marcos que atravessam gerações e mantêm viva a memória da União da Colina."
            align="center"
            className="mb-16"
          />
          <ol className="relative mx-auto max-w-4xl">
            <div aria-hidden="true" className="absolute left-4 top-2 h-full w-px bg-[color:var(--verde-claro)] md:left-1/2" />
            {timeline.map((item, i) => (
              <li key={item.title} className={`relative mb-10 grid gap-4 pl-14 md:grid-cols-2 md:pl-0 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--verde)] ring-4 ring-[color:var(--verde-claro)] md:left-[calc(50%-12px)]"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--verde-medio)]">{item.year}</p>
                  <h3 className="mt-1 text-xl font-bold text-[color:var(--verde-profundo)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--cinza-texto)]">{item.text}</p>
                </div>
                <div className="hidden md:block" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MEMÓRIA VIVA */}
      <section className="relative isolate overflow-hidden bg-[color:var(--verde-profundo)] text-white">
        <img
          src={ornamentDark.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,47,29,0.55) 0%, rgba(3,47,29,0.75) 100%)",
          }}
        />
        <div className="container-uc relative py-14 md:py-20">
          <SectionTitle
            eyebrow="Memória viva"
            title="A história permanece nas lembranças"
            description="A história da União da Colina também permanece nas lembranças de quem ajudou a construí-la."
            invert
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white/70">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Nome da pessoa</p>
                    <p className="text-xs uppercase tracking-wider text-white/60">Integrante da escola</p>
                  </div>
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-white/80">
                  "Depoimento em atualização."
                </blockquote>
                <div className="mt-4">
                  <PlaceholderNote>Depoimento em atualização</PlaceholderNote>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/velha-guarda" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5">
              Conheça mais depoimentos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="bg-background">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle
            eyebrow="Acervo audiovisual"
            title="Histórias contadas por quem viveu"
            description="Este espaço reunirá registros audiovisuais, entrevistas e relatos de pessoas que fazem parte da história da União da Colina."
            align="center"
            className="mb-12"
          />
          <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border-8 border-[color:var(--verde-claro)] bg-[color:var(--verde-profundo)]">
            <img src={historia} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-50" loading="lazy" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center text-white">
                <PlayCircle className="mx-auto h-20 w-20 opacity-90" />
                <p className="mt-4 text-lg font-semibold">Vídeo em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle
            eyebrow="Segmentos"
            title="Quem faz a União da Colina"
            description="Conheça os grupos que sustentam a tradição da escola dentro e fora da avenida."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {segmentos.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to={s.to}
                  className="group relative overflow-hidden rounded-3xl border border-transparent bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--verde-medio)] hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(3,47,29,0.85))" }} />
                    <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-[color:var(--verde-profundo)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white">
                      {s.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <p className="text-sm text-[color:var(--cinza-texto)]">{s.desc}</p>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[color:var(--verde-medio)] transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARNAVAL 2026 */}
      <section className="relative bg-[color:var(--verde-profundo)] text-white">
        <div className="container-uc grid gap-12 py-24 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--dourado)]">
              <Calendar className="h-4 w-4" /> Próximo carnaval
            </p>
            <h2 className="mt-4 h-section">Carnaval 2026</h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              O enredo, o samba e a fantasia que vão levar a União da Colina para a avenida. Uma nova página da nossa história será escrita.
            </p>
            <div className="mt-6"><PlaceholderNote>Conteúdo em atualização</PlaceholderNote></div>
            <div className="mt-10">
              <Link
                to="/carnaval-2026"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--verde-profundo)] hover:bg-[color:var(--verde-claro)]"
              >
                Conheça o Carnaval 2026 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src={pavilhao} alt="" className="aspect-[4/5] w-full rounded-[36px] object-cover shadow-2xl" loading="lazy" />
            <img src={brasao.url} alt="" className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white p-3 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* CONQUISTAS */}
      <section className="bg-[color:var(--verde-escuro)] text-white">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle
            eyebrow="Sala de troféus"
            title="Nossas conquistas"
            description="Cada título carrega no seu peso os ensaios, os desfiles e a força coletiva de gerações."
            invert
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <Trophy className="mx-auto h-10 w-10 text-[color:var(--dourado)]" />
                <p className="mt-4 text-2xl font-extrabold">Ano</p>
                <p className="mt-1 text-lg font-semibold">Título conquistado</p>
                <p className="mt-3 text-sm text-white/70">Informação em atualização</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/titulos" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5">
              Ver todos os títulos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-background">
        <div className="container-uc py-14 md:py-20">
          <SectionTitle
            eyebrow="Galeria"
            title="Imagens que contam nossa história"
            description="Fotografias históricas, desfiles, integrantes, pavilhão, bastidores e comunidade."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[historia, baianas, bateria, comissao, mestreSala, interpretes, velhaGuarda, pavilhao].map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl bg-[color:var(--verde-claro)] ${i % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              >
                <img src={src} alt="Imagem histórica da União da Colina" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="relative overflow-hidden bg-[color:var(--verde-profundo)] text-white">
        <img src={brasao.url} alt="" aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/2 hidden -translate-y-1/2 h-[520px] w-[520px] opacity-10 md:block" />
        <div className="container-uc relative py-16 text-center md:py-24">
          <Award className="mx-auto mb-6 h-10 w-10 text-[color:var(--dourado)]" />
          <h2 className="mx-auto max-w-3xl h-section">
            Uma história que pertence a toda a cidade
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Preservar a memória da União da Colina é reconhecer as pessoas, os territórios e as tradições que ajudaram a construir o carnaval local.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/a-escola" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--verde-profundo)] hover:bg-[color:var(--verde-claro)]">
              Conheça a escola
            </Link>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5">
              Entre em contato <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
