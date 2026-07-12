import brasao from "@/assets/brasao.png.asset.json";

export function PageHero({
  eyebrow = "G.R.E.S. União da Colina",
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
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
            "linear-gradient(135deg, rgba(3,47,29,0.92), rgba(11,93,53,0.75) 60%, rgba(3,47,29,0.95))",
        }}
      />
      <img
        src={brasao.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 hidden h-[420px] w-[420px] opacity-10 md:block"
      />
      <div className="container-uc relative py-24 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--dourado)]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">{subtitle}</p>
        )}
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-10 w-full text-background"
      >
        <path d="M0,40 C240,10 480,60 720,32 C960,4 1200,60 1440,20 L1440,60 L0,60 Z" fill="currentColor" />
      </svg>
    </section>
  );
}