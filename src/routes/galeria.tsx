import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Images } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PlaceholderNote } from "@/components/site/PlaceholderNote";
import bgOrnamental from "@/assets/bg-verde-ornamental.png.asset.json";
import historia from "@/assets/historia.jpg";
import bateria from "@/assets/bateria.jpg";
import baianas from "@/assets/baianas.jpg";
import comissao from "@/assets/comissao.jpg";
import interpretes from "@/assets/interpretes.jpg";
import mestreSala from "@/assets/mestre-sala.jpg";
import velhaGuarda from "@/assets/velha-guarda.jpg";
import pavilhao from "@/assets/pavilhao.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — G.R.E.S. União da Colina" },
      { name: "description", content: "Imagens da União da Colina: desfiles, integrantes, bastidores, pavilhão e comunidade." },
      { property: "og:title", content: "Galeria — União da Colina" },
      { property: "og:description", content: "O acervo visual da União da Colina em construção." },
    ],
  }),
  component: Galeria,
});

type Foto = { src: string; legenda: string; categoria: string; span?: string };

const albuns = [
  { titulo: "Desfiles", capa: comissao, total: "Em atualização" },
  { titulo: "Bateria", capa: bateria, total: "Em atualização" },
  { titulo: "Baianas", capa: baianas, total: "Em atualização" },
  { titulo: "Velha Guarda", capa: velhaGuarda, total: "Em atualização" },
  { titulo: "Pavilhão", capa: pavilhao, total: "Em atualização" },
  { titulo: "Comunidade", capa: historia, total: "Em atualização" },
];

const fotos: Foto[] = [
  { src: historia, legenda: "Registro histórico", categoria: "Memória", span: "md:col-span-2 md:row-span-2" },
  { src: bateria, legenda: "Bateria", categoria: "Segmentos" },
  { src: baianas, legenda: "Ala das Baianas", categoria: "Segmentos" },
  { src: comissao, legenda: "Comissão de frente", categoria: "Desfiles", span: "md:row-span-2" },
  { src: interpretes, legenda: "Intérpretes", categoria: "Segmentos" },
  { src: mestreSala, legenda: "Mestre-sala e porta-bandeira", categoria: "Desfiles" },
  { src: velhaGuarda, legenda: "Velha guarda", categoria: "Memória", span: "md:col-span-2" },
  { src: pavilhao, legenda: "Pavilhão da escola", categoria: "Institucional" },
];

function Galeria() {
  return (
    <>
      <PageHero
        eyebrow="Acervo visual"
        title="Galeria"
        subtitle="Imagens que contam, atravessam gerações e preservam a memória da União da Colina."
        breadcrumb="Galeria"
        image={historia}
      />

      {/* Álbuns */}
      <section className="bg-background">
        <div className="container-uc section-y">
          <SectionTitle
            align="center"
            eyebrow="Álbuns"
            title="Coleções da escola"
            description="A galeria está organizada em álbuns temáticos para facilitar a navegação pelo acervo."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {albuns.map((a) => (
              <button
                key={a.titulo}
                type="button"
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-[color:var(--verde-profundo)] text-left shadow-sm"
              >
                <img
                  src={a.capa}
                  alt={a.titulo}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(3,47,29,0.9))" }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--dourado)]">
                    Álbum
                  </p>
                  <h3 className="mt-1 text-2xl font-extrabold text-white">{a.titulo}</h3>
                  <div className="mt-3 flex items-center justify-between text-[12.5px] text-white/85">
                    <span className="inline-flex items-center gap-1.5">
                      <Camera className="h-3.5 w-3.5" /> {a.total}
                    </span>
                    <span className="inline-flex items-center gap-1 opacity-90 transition group-hover:translate-x-1">
                      Explorar <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaico */}
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
              "linear-gradient(180deg, rgba(3,47,29,0.72), rgba(3,47,29,0.85))",
          }}
        />
        <div className="container-uc section-y">
          <SectionTitle
            invert
            align="center"
            eyebrow="Mosaico"
            title="Fragmentos de memória"
            description="Imagens selecionadas do nosso acervo em construção."
          />
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {fotos.map((f, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-black/30 ${f.span ?? ""}`}
              >
                <img
                  src={f.src}
                  alt={f.legenda}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--dourado)]">
                    {f.categoria}
                  </p>
                  <p className="mt-0.5 text-[13.5px] font-semibold text-white">{f.legenda}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 mx-auto max-w-2xl">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center text-[13.5px] text-white/85 backdrop-blur">
              O acervo fotográfico da União da Colina está em processo de digitalização e curadoria. Novas imagens serão publicadas conforme forem organizadas.
            </div>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-[color:var(--cinza-claro)]">
        <div className="container-uc section-y text-center">
          <Images className="mx-auto h-10 w-10 text-[color:var(--verde-medio)]" />
          <h2 className="mx-auto mt-5 max-w-2xl h-section">Contribua com o nosso acervo</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-[color:var(--cinza-texto)]">
            Se você guarda fotografias, vídeos ou documentos que fazem parte da história da União da Colina, entre em contato conosco. Toda memória é bem-vinda.
          </p>
          <div className="mt-6 mx-auto max-w-2xl">
            <PlaceholderNote>Envie seu material entrando em contato pelos canais oficiais.</PlaceholderNote>
          </div>
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
