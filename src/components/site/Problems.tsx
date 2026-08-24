import { WHATSAPP_URL } from "@/lib/site";

const ITEMS = [
  "Ansiedade",
  "Insegurança",
  "Baixa autoestima",
  "Dependência emocional",
  "Dificuldades nos relacionamentos",
  "Conflitos familiares",
  "Separações",
  "Luto",
  "Sobrecarga emocional",
  "Dificuldade para lidar com sentimentos",
  "Dificuldades de comunicação",
  "Dificuldades de socialização",
  "Regulação emocional",
  "Questões comportamentais",
  "Desenvolvimento pessoal",
  "Questões relacionadas ao TEA",
];

export function Problems() {
  return (
    <section id="problemas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Identificação</p>
          <h2 className="mt-4 text-[1.75rem] leading-tight sm:text-4xl">
            Talvez você esteja passando por uma dessas situações
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Nem sempre é fácil compreender o que sentimos ou encontrar maneiras de
            lidar com aquilo que estamos vivendo. A terapia pode ser um espaço para
            olhar para essas questões com mais cuidado e acolhimento.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card px-5 py-4 transition-all duration-300 hover:border-gold/70 hover:shadow-[var(--shadow-card)]"
            >
              <span
                className="size-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150"
                style={{ background: "var(--gradient-gold)" }}
                aria-hidden
              />
              <span className="text-sm text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-gold/40 bg-cream px-6 py-8 sm:px-10">
          <p className="text-sm leading-relaxed text-foreground/75 sm:text-base">
            Para o público infantil e adolescente, o acompanhamento também atende
            dificuldades de comunicação, socialização, regulação emocional e
            comportamento, especialmente em casos de TEA.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-display text-xl leading-snug text-foreground sm:text-2xl">
            Você não precisa entender ou enfrentar tudo sozinho(a). Existe um espaço
            para você ser ouvido.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-gold px-8 py-4 text-xs tracking-[0.18em] uppercase text-gold-deep transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            Quero conversar
          </a>
        </div>
      </div>
    </section>
  );
}
