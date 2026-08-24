import heroAsset from "@/assets/hero.png.asset.json";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-soft)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-8 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="order-1 lg:order-2">
          <div className="reveal relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2rem] opacity-40"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden
            />
            <img
              src={heroAsset.url}
              alt="Eliana Alves, terapeuta comportamental e psicanalista da Essenza Terapias, em Toledo – PR"
              className="relative w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>

        <div className="reveal order-2 lg:order-1">
          <p className="eyebrow">Essenza Terapias · Toledo – PR</p>
          <div className="gold-rule mt-5" />
          <h1 className="mt-6 text-[2rem] leading-[1.15] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Cuidar da mente também é{" "}
            <em className="text-gold-gradient not-italic">cuidar da vida.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um espaço de acolhimento, escuta e acompanhamento individualizado para
            crianças, adolescentes e adultos.
          </p>
          <p className="mt-5 max-w-lg border-l border-gold/60 pl-5 text-sm leading-relaxed text-foreground/70 sm:text-base">
            Terapia Comportamental, Psicanálise e ABA com um olhar humano e
            individualizado para cada história.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-center text-xs tracking-[0.18em] uppercase text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-gold)" }}
            >
              Agendar atendimento
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-border px-8 py-4 text-center text-xs tracking-[0.18em] uppercase text-foreground/70 transition-colors duration-300 hover:border-gold hover:text-gold-deep"
            >
              Conheça meu trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
