import sobreAsset from "@/assets/sobre.png.asset.json";

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="absolute inset-x-6 bottom-0 top-10 rounded-[1.75rem]"
            style={{ background: "var(--gradient-soft)", border: "1px solid var(--gold-light)" }}
            aria-hidden
          />
          <img
            src={sobreAsset.url}
            alt="Eliana Alves, da Essenza Terapias, terapeuta comportamental, psicanalista e aplicadora ABA"
            className="relative w-full object-contain"
          />
        </div>

        <div>
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-4 text-[1.75rem] leading-tight sm:text-4xl">
            Um olhar individualizado para cada história
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-xs tracking-[0.18em] uppercase text-gold-deep">
            Terapeuta Comportamental | Psicanalista | Aplicadora ABA
          </p>

          <div className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Meu trabalho parte da compreensão de que cada pessoa é única e não pode
              ser definida apenas por suas dificuldades, comportamentos ou
              diagnósticos.
            </p>
            <p>
              Na Essenza Terapias, o acompanhamento busca unir conhecimento técnico,
              escuta acolhedora e estratégias que façam sentido para a realidade de
              cada pessoa e de sua família.
            </p>
            <p>
              Minha atuação reúne Terapia Comportamental, Psicanálise e conhecimentos
              em ABA, permitindo olhar tanto para os aspectos emocionais quanto
              comportamentais de crianças, adolescentes e adultos.
            </p>
            <p>
              Mais do que oferecer respostas prontas, o objetivo é construir, junto com
              cada pessoa, caminhos possíveis para desenvolver autoconhecimento,
              equilíbrio emocional, autonomia e qualidade de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
