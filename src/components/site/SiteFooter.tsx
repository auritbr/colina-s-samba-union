import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import brasao from "@/assets/brasao.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative bg-[color:var(--verde-profundo)] text-white">
      <OrganicTop />
      <div className="container-uc grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={brasao.url} alt="" className="h-14 w-14 object-contain" width={56} height={56} />
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--verde-claro)]/80">G.R.E.S.</p>
              <p className="text-lg font-bold">União da Colina</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Preservando a memória, a cultura e a tradição do samba desde 1947.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-white/40"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="A Escola">
          <FooterLink to="/a-escola">A Escola</FooterLink>
          <FooterLink to="/diretoria">Diretoria</FooterLink>
          <FooterLink to="/velha-guarda">Velha Guarda</FooterLink>
          <FooterLink to="/bateria">Bateria</FooterLink>
          <FooterLink to="/ala-das-baianas">Ala das Baianas</FooterLink>
          <FooterLink to="/comissao-de-frente">Comissão de Frente</FooterLink>
          <FooterLink to="/mestre-sala-e-porta-bandeiras">Mestre-Sala e Porta-Bandeiras</FooterLink>
          <FooterLink to="/interpretes">Intérpretes</FooterLink>
        </FooterCol>

        <FooterCol title="Carnaval">
          <FooterLink to="/titulos">Títulos</FooterLink>
          <FooterLink to="/carnaval-2026">Carnaval 2026</FooterLink>
          <FooterLink to="/contato">Contato</FooterLink>
        </FooterCol>

        <FooterCol title="Contato">
          <li className="flex items-start gap-2 text-sm text-white/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--dourado)]" />
            <span>Endereço em atualização</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-white/75">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--dourado)]" />
            <span>Telefone em atualização</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-white/75">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--dourado)]" />
            <span>contato@uniaodacolina.org</span>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-uc flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} G.R.E.S. União da Colina — Todos os direitos reservados.</p>
          <p>
            <Link to="/contato" className="hover:text-white">Política de privacidade</Link>
            <span className="mx-2 opacity-40">•</span>
            <span>Site institucional</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--verde-claro)]">
        {title}
      </h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-white/75 transition hover:text-white">
        {children}
      </Link>
    </li>
  );
}

function OrganicTop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="block h-10 w-full text-[color:var(--verde-profundo)]"
    >
      <path
        d="M0,32 C240,0 480,60 720,32 C960,4 1200,60 1440,24 L1440,60 L0,60 Z"
        fill="currentColor"
      />
    </svg>
  );
}