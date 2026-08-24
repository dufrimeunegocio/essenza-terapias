import { WHATSAPP_URL } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-foreground/[0.03] py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="eyebrow">Primeiro passo</p>
        <h2 className="mt-5 text-[1.85rem] leading-tight sm:text-4xl">
          Talvez o primeiro passo seja simplesmente{" "}
          <em className="text-gold-gradient not-italic">conversar.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Se você está buscando um espaço de acolhimento, escuta e acompanhamento
          individualizado, estou aqui para te ouvir.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full px-10 py-4 text-xs tracking-[0.18em] uppercase text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
          style={{ background: "var(--gradient-gold)" }}
        >
          Agendar atendimento
        </a>
      </div>
    </section>
  );
}
