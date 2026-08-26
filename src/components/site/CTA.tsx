import { WHATSAPP_URL } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-28">
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
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">Primeiro passo</p>
        <h2 className="mt-5 text-[1.85rem] leading-tight text-ink-foreground sm:text-4xl">
          Talvez o primeiro passo seja simplesmente{" "}
          <em className="text-gold-gradient not-italic">conversar.</em>
        </h2>
        <div className="gold-rule mx-auto mt-6" />
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-foreground/70 sm:text-base">
          Se você está buscando um espaço de acolhimento, escuta e acompanhamento
          individualizado, estou aqui para te ouvir.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-gold px-10 py-4 text-xs tracking-[0.18em] uppercase text-ink transition-colors duration-500 hover:bg-ink-foreground hover:text-ink"
        >
          Agendar atendimento
        </a>
      </div>
    </section>
  );
}
