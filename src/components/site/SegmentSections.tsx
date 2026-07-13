import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { cn } from "@/lib/utils";

/**
 * Editorial building blocks for segment pages
 * (Diretoria, Velha Guarda, Bateria, Baianas, Comissão, Mestre-sala, Intérpretes).
 * All content is placeholder-friendly and never invents names/dates.
 */

export function SegmentAbout({
  title = "Sobre o segmento",
  eyebrow = "Apresentação",
  paragraphs,
  image,
  imageAlt = "",
}: {
  title?: string;
  eyebrow?: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-background">
      <div className="container-uc section-y grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
        <div>
          <SectionTitle eyebrow={eyebrow} title={title} />
          <div className="mt-6 space-y-4 text-[color:var(--cinza-texto)] text-lede max-w-[65ch]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        {image && (
          <div className="relative overflow-hidden rounded-2xl border-4 border-[color:var(--verde-claro)]">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        )}
      </div>
    </section>
  );
}

export function SegmentTrajectory({
  title = "A trajetória na União da Colina",
  items,
}: {
  title?: string;
  items: { t: string; d: string }[];
}) {
  return (
    <section className="bg-[color:var(--cinza-claro)]">
      <div className="container-uc section-y">
        <SectionTitle eyebrow="História" title={title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <article key={b.t} className="card-uc">
              <h3 className="text-lg font-bold text-[color:var(--verde-profundo)]">{b.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--cinza-texto)]">{b.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SegmentRoleCards({
  title = "Função e importância",
  eyebrow = "Papel",
  items,
}: {
  title?: string;
  eyebrow?: string;
  items: { icon?: React.ComponentType<{ className?: string }>; t: string; d: string }[];
}) {
  return (
    <section className="bg-background">
      <div className="container-uc section-y">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => {
            const Icon = b.icon;
            return (
              <article key={b.t} className="card-uc">
                {Icon && (
                  <div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-[color:var(--verde-claro)] text-[color:var(--verde-profundo)]">
                    <Icon className="h-4 w-4" />
                  </div>
                )}
                <h3 className="text-[17px] font-bold text-[color:var(--verde-profundo)]">{b.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--cinza-texto)]">{b.d}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EmptyState({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed border-[color:var(--verde-claro)] bg-white/60 p-8 text-center text-[15px] text-[color:var(--cinza-texto)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SegmentMembers({
  title = "Integrantes",
  eyebrow = "Quem faz",
  emptyMessage = "Os integrantes deste segmento serão apresentados em breve.",
}: {
  title?: string;
  eyebrow?: string;
  emptyMessage?: string;
}) {
  return (
    <section className="bg-[color:var(--cinza-claro)]">
      <div className="container-uc section-y">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <div className="mt-10">
          <EmptyState>{emptyMessage}</EmptyState>
        </div>
      </div>
    </section>
  );
}

export function SegmentTimeline({
  title = "Linha do tempo",
  eyebrow = "Marcos",
  emptyMessage = "Linha do tempo em processo de construção.",
}: {
  title?: string;
  eyebrow?: string;
  emptyMessage?: string;
}) {
  return (
    <section className="bg-background">
      <div className="container-uc section-y">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <div className="mt-10">
          <EmptyState>{emptyMessage}</EmptyState>
        </div>
      </div>
    </section>
  );
}

export function SegmentTestimonials({
  title = "Depoimentos",
  eyebrow = "Memória oral",
  emptyMessage = "Em breve, este espaço reunirá relatos de pessoas que ajudaram a construir esta história.",
}: {
  title?: string;
  eyebrow?: string;
  emptyMessage?: string;
}) {
  return (
    <section className="bg-[color:var(--cinza-claro)]">
      <div className="container-uc section-y">
        <SectionTitle eyebrow={eyebrow} title={title} />
        <div className="mt-10">
          <EmptyState>{emptyMessage}</EmptyState>
        </div>
      </div>
    </section>
  );
}

export function SegmentGallery({
  title = "Galeria",
  eyebrow = "Registros",
  images = [],
  emptyMessage = "As imagens deste segmento serão publicadas em breve.",
}: {
  title?: string;
  eyebrow?: string;
  images?: string[];
  emptyMessage?: string;
}) {
  return (
    <section className="bg-background">
      <div className="container-uc section-y">
        <SectionTitle eyebrow={eyebrow} title={title} />
        {images.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {images.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl bg-[color:var(--verde-claro)]">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10"><EmptyState>{emptyMessage}</EmptyState></div>
        )}
      </div>
    </section>
  );
}

export function SegmentRelated({
  items,
  title = "Conheça também",
  eyebrow = "Outros segmentos",
}: {
  items: { t: string; to: string; d?: string }[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-[color:var(--verde-profundo)] text-white">
      <div className="container-uc section-y">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--dourado)]">{eyebrow}</p>
        <h2 className="mt-2 h-section text-white">{title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
            >
              <span>
                <p className="font-bold">{it.t}</p>
                {it.d && <p className="mt-1 text-xs text-white/70">{it.d}</p>}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[color:var(--dourado)] transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
