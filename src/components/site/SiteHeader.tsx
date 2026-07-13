import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import brasao from "@/assets/brasao.png.asset.json";
import { NAV } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { BrandPattern } from "./BrandPattern";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to?: string) =>
    !!to && (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--verde-profundo)] text-white backdrop-blur">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <BrandPattern variant="header" className="opacity-40" />
      </div>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-1 focus:text-[color:var(--verde-profundo)]"
      >
        Pular para o conteúdo
      </a>
      <div className="container-uc relative flex h-[72px] items-center gap-6 lg:h-[84px]">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="União da Colina — Início">
          <img
            src={brasao.url}
            alt="Brasão da União da Colina"
            className="h-[54px] w-[54px] object-contain lg:h-[64px] lg:w-[64px]"
            width={64}
            height={64}
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--verde-claro)]/80">
              G.R.E.S.
            </span>
            <span className="text-[15px] font-bold">União da Colina</span>
          </span>
        </Link>

        <nav className="ml-auto hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              {item.to ? (
                <Link
                  to={item.to}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13.5px] font-semibold text-white/85 transition hover:text-white",
                    isActive(item.to) && "text-white",
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                  {isActive(item.to) && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-[color:var(--dourado)]" />
                  )}
                </Link>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13.5px] font-semibold text-white/85 transition hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </button>
              )}
              {item.children && (
                <div className="invisible absolute left-0 top-full z-[60] min-w-[260px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-[color:var(--verde-escuro)] shadow-2xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className={cn(
                          "block border-b border-white/5 px-4 py-2.5 text-sm text-white/85 transition hover:bg-white/5 hover:text-white",
                          isActive(c.to) && "bg-white/5 text-white",
                        )}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto lg:ml-2 flex items-center gap-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da União da Colina"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-white/40 hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <Link
            to="/a-escola"
            className="hidden xl:inline-flex items-center rounded-full bg-white px-4 py-2 text-[13.5px] font-semibold text-[color:var(--verde-profundo)] transition hover:bg-[color:var(--verde-claro)]"
          >
            Conheça nossa história
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:border-white/40 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 origin-top overflow-y-auto bg-[color:var(--verde-profundo)] transition duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2",
        )}
      >
        <nav className="container-uc py-6" aria-label="Navegação mobile">
          <ul className="flex flex-col divide-y divide-white/10">
            {NAV.map((item) => (
              <li key={item.label} className="py-2">
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-white"
                      aria-expanded={expanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition",
                          expanded === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="mt-1 space-y-1 pb-2 pl-3">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link
                              to={c.to}
                              className="block rounded-md px-3 py-2 text-white/85 hover:bg-white/5 hover:text-white"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to!}
                    className="block py-2 text-lg font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <Link
              to="/a-escola"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-[color:var(--verde-profundo)]"
            >
              Conheça nossa história
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}