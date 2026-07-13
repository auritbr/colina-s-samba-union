import brasao from "@/assets/brasao.png.asset.json";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { BrandPattern } from "./BrandPattern";

export function PageHero({
  eyebrow = "G.R.E.S. União da Colina",
  title,
  subtitle,
  image,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--verde-profundo)] text-white">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(3,47,29,0.94), rgba(11,93,53,0.78) 60%, rgba(3,47,29,0.96))",
        }}
      />
      <BrandPattern variant="hero" className="opacity-70" />
      <img
        src={brasao.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 hidden h-[280px] w-[280px] opacity-10 md:block"
      />
      <div className="container-uc relative py-16 md:py-24 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--dourado)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl h-display">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lede text-white/85">{subtitle}</p>
        )}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mt-6 flex items-center gap-1.5 text-xs text-white/70">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-white">
              <Home className="h-3 w-3" /> Início
            </Link>
            <ChevronRight className="h-3 w-3 opacity-60" />
            <span className="text-white/90">{breadcrumb}</span>
          </nav>
        )}
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full text-background md:h-16"
      >
        <path
          d="M0,50 C120,20 220,70 360,48 C500,26 620,72 780,50 C920,30 1060,74 1200,52 C1320,32 1400,66 1440,44 L1440,80 L0,80 Z"
          fill="currentColor"
        />
        <path
          d="M0,58 C160,34 300,78 460,60 C620,42 760,80 920,62 C1080,44 1240,78 1440,58 L1440,80 L0,80 Z"
          fill="currentColor"
          opacity="0.55"
        />
      </svg>
    </section>
  );
}