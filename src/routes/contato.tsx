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
      <PageHero title="Contato" subtitle="Fale com a União da Colina." />
      <section className="bg-background">
        <div className="container-uc grid gap-12 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <SectionTitle eyebrow="Formulário" title="Envie a sua mensagem" />
            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
              <Field label="Nome" name="nome" error={errors.nome} />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="E-mail" name="email" type="email" error={errors.email} />
                <Field label="Telefone" name="telefone" type="tel" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[color:var(--verde-profundo)]" htmlFor="assunto">Assunto</label>
                <select id="assunto" name="assunto" className="w-full rounded-lg border border-[color:var(--verde-claro)] bg-white px-4 py-3 text-sm focus:border-[color:var(--verde)] focus:outline-none focus:ring-2 focus:ring-[color:var(--verde-medio)]/30">
                  {assuntos.map((a) => (<option key={a}>{a}</option>))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[color:var(--verde-profundo)]" htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={5} className="w-full rounded-lg border border-[color:var(--verde-claro)] bg-white px-4 py-3 text-sm focus:border-[color:var(--verde)] focus:outline-none focus:ring-2 focus:ring-[color:var(--verde-medio)]/30" aria-invalid={!!errors.mensagem} />
                {errors.mensagem && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="h-3.5 w-3.5" />{errors.mensagem}</p>}
              </div>
              <div className="flex items-center justify-between gap-4">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--verde)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--verde-escuro)]">
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
          <aside className="rounded-3xl border border-[color:var(--verde-claro)] bg-[color:var(--cinza-claro)] p-8">
            <h3 className="text-xl font-bold text-[color:var(--verde-profundo)]">Informações de contato</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <InfoLine icon={MapPin} title="Endereço" text="Em atualização" />
              <InfoLine icon={Phone} title="Telefone" text="Em atualização" />
              <InfoLine icon={Mail} title="E-mail" text="contato@uniaodacolina.org" />
              <InfoLine icon={Instagram} title="Instagram" text="@uniaodacolina" />
            </ul>
            <div className="mt-6 rounded-2xl border border-[color:var(--verde-claro)] bg-white p-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--verde-profundo)]">Horários</h4>
              <p className="mt-2 text-sm text-[color:var(--cinza-texto)]">Horários de atendimento e ensaios em atualização.</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--verde-claro)]">
              <div className="aspect-[4/3] w-full bg-[color:var(--verde-claro)]/60 grid place-items-center text-sm text-[color:var(--cinza-texto)]">
                Mapa incorporado em breve
              </div>
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
        className="w-full rounded-lg border border-[color:var(--verde-claro)] bg-white px-4 py-3 text-sm focus:border-[color:var(--verde)] focus:outline-none focus:ring-2 focus:ring-[color:var(--verde-medio)]/30"
      />
      {error && <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><AlertCircle className="h-3.5 w-3.5" />{error}</p>}
    </div>
  );
}

function InfoLine({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[color:var(--verde-profundo)]"><Icon className="h-4 w-4" /></span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--verde-profundo)]">{title}</p>
        <p className="text-sm text-[color:var(--cinza-texto)]">{text}</p>
      </div>
    </li>
  );
}