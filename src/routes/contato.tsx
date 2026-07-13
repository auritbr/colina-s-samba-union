import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Mail, MapPin, Phone, Instagram, CheckCircle2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — G.R.E.S. União da Colina" },
      { name: "description", content: "Entre em contato com a União da Colina. Formulário, redes sociais, endereço e horários de atendimento." },
      { property: "og:title", content: "Contato — União da Colina" },
      { property: "og:description", content: "Fale com a União da Colina." },
    ],
  }),
  component: Contato,
});

const assuntos = ["Informações gerais","História e acervo","Participação na escola","Imprensa","Parcerias","Carnaval 2026","Outro"];

function Contato() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!(fd.get("nome") as string)?.trim()) errs.nome = "Informe o seu nome.";
    const email = (fd.get("email") as string)?.trim() || "";
    if (!email) errs.email = "Informe o seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "E-mail inválido.";
    if (!(fd.get("mensagem") as string)?.trim()) errs.mensagem = "Escreva a sua mensagem.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("err");
      return;
    }
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero title="Contato" eyebrow="Fale conosco" subtitle="Fale com a União da Colina." breadcrumb="Contato" />
      <section className="bg-background">
        <div className="container-uc section-y grid gap-10 md:grid-cols-[1fr_360px] md:gap-14">
          <div className="max-w-[680px]">
            <SectionTitle eyebrow="Formulário" title="Envie a sua mensagem" />
            <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4">
              <Field label="Nome" name="nome" error={errors.nome} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="E-mail" name="email" type="email" error={errors.email} />
                <Field label="Telefone" name="telefone" type="tel" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[color:var(--verde-profundo)]" htmlFor="assunto">Assunto</label>
                <select id="assunto" name="assunto" className="h-12 w-full rounded-lg border border-[color:var(--verde-claro)] bg-white px-3.5 text-[15px] focus:border-[color:var(--verde)] focus:outline-none focus:ring-2 focus:ring-[color:var(--verde-medio)]/30">
                  {assuntos.map((a) => (<option key={a}>{a}</option>))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[color:var(--verde-profundo)]" htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={5} className="min-h-[140px] w-full rounded-lg border border-[color:var(--verde-claro)] bg-white px-3.5 py-3 text-[15px] focus:border-[color:var(--verde)] focus:outline-none focus:ring-2 focus:ring-[color:var(--verde-medio)]/30" aria-invalid={!!errors.mensagem} />
                {errors.mensagem && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="h-3.5 w-3.5" />{errors.mensagem}</p>}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button type="submit" className="btn-uc bg-[color:var(--verde)] text-white hover:bg-[color:var(--verde-escuro)]">
                  Enviar mensagem
                </button>
                {status === "ok" && (
                  <p className="flex items-center gap-2 text-sm text-[color:var(--verde-escuro)]"><CheckCircle2 className="h-4 w-4" />Mensagem enviada. Em breve entraremos em contato.</p>
                )}
                {status === "err" && Object.keys(errors).length === 0 && (
                  <p className="text-sm text-red-600">Ocorreu um erro. Tente novamente.</p>
                )}
              </div>
            </form>
          </div>
          <aside className="rounded-2xl border border-[color:var(--verde-claro)] bg-[color:var(--cinza-claro)] p-6 md:h-fit">
            <h3 className="text-[17px] font-bold text-[color:var(--verde-profundo)]">Informações de contato</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <InfoLine icon={MapPin} title="Endereço" text="Em atualização" />
              <InfoLine icon={Phone} title="Telefone" text="Em atualização" />
              <InfoLine icon={Mail} title="E-mail" text="contato@uniaodacolina.org" />
              <InfoLine icon={Instagram} title="Instagram" text="@uniaodacolina" />
            </ul>
            <div className="mt-5 rounded-xl border border-[color:var(--verde-claro)] bg-white p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[color:var(--verde-profundo)]">Horários</h4>
              <p className="mt-1.5 text-[13.5px] text-[color:var(--cinza-texto)]">Horários de atendimento e ensaios em atualização.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-[color:var(--verde-profundo)]">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        className="h-12 w-full rounded-lg border border-[color:var(--verde-claro)] bg-white px-3.5 text-[15px] focus:border-[color:var(--verde)] focus:outline-none focus:ring-2 focus:ring-[color:var(--verde-medio)]/30"
      />
      {error && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="h-3.5 w-3.5" />{error}</p>}
    </div>
  );
}

function InfoLine({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[color:var(--verde-profundo)]"><Icon className="h-4 w-4" /></span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--verde-profundo)]">{title}</p>
        <p className="text-[13.5px] text-[color:var(--cinza-texto)]">{text}</p>
      </div>
    </li>
  );
}