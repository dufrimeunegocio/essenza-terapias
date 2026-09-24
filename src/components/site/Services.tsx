import { Brain, HeartHandshake, Puzzle, Sparkles, Users, Compass } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const SERVICES = [
  {
    icon: Brain,
    title: "Terapia Comportamental",
    text: "Acompanhamento voltado à compreensão e transformação de padrões comportamentais, desenvolvimento de habilidades e construção de estratégias práticas para o cotidiano.",
  },
  {
    icon: HeartHandshake,
    title: "Psicanálise",
    text: "Um espaço de escuta e reflexão para compreender sentimentos, conflitos, relações, experiências e aspectos da própria história.",
  },
  {
    icon: Puzzle,
    title: "Aplicação de ABA",
    text: "Acompanhamento baseado em princípios da Análise do Comportamento Aplicada, especialmente voltado ao desenvolvimento de habilidades e suporte a pessoas com TEA.",
  },
  {
    icon: Sparkles,
    title: "Acompanhamento para TEA",
    text: "Atendimento individualizado para crianças e adolescentes com Transtorno do Espectro Autista, considerando suas necessidades e particularidades.",
  },
  {
    icon: Users,
    title: "Orientação Parental",
    text: "Apoio às famílias para compreender comportamentos, lidar com desafios e desenvolver estratégias que possam contribuir para o cotidiano familiar.",
  },
  {
    icon: Compass,
    title: "Desenvolvimento Emocional e Comportamental",
    text: "Acompanhamento voltado para autonomia, regulação emocional, habilidades sociais, autoconhecimento e desenvolvimento.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-champagne/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Atendimentos</p>
          <h2 className="mt-4 text-[1.75rem] leading-tight sm:text-4xl">
            Como posso te ajudar
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cada pessoa possui uma história, necessidades e objetivos diferentes. Por
            isso, o acompanhamento é construído de forma individualizada, considerando
            cada realidade.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-gold/50 text-gold-deep transition-colors duration-500 group-hover:bg-gold/10">
                <Icon className="size-5" strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 text-xl leading-snug text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl border border-gold/40 bg-background px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <h3 className="text-xl text-foreground sm:text-2xl">
              Não sabe qual atendimento é mais adequado para você?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fale comigo pelo WhatsApp e tire suas dúvidas.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full px-8 py-4 text-xs tracking-[0.18em] uppercase text-button-foreground transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--gradient-gold)" }}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
