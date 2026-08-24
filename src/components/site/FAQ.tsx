import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Para quem é o atendimento?",
    a: "Os atendimentos são direcionados a crianças, adolescentes e adultos, de acordo com suas necessidades emocionais e comportamentais.",
  },
  {
    q: "A Essenza Terapias atende pessoas com TEA?",
    a: "Sim. A atuação inclui acompanhamento de crianças e adolescentes com Transtorno do Espectro Autista, incluindo aplicação de ABA e orientação às famílias.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "O primeiro contato pode ser realizado pelo WhatsApp. A partir da conversa inicial, será possível compreender melhor a necessidade e orientar sobre o atendimento mais adequado.",
  },
  {
    q: "A terapia é indicada apenas para quem está passando por um problema?",
    a: "Não. A terapia também pode ser um espaço para autoconhecimento, desenvolvimento pessoal, fortalecimento da autoestima, melhoria dos relacionamentos e desenvolvimento emocional.",
  },
  {
    q: "Existe atendimento para crianças e adolescentes?",
    a: "Sim. O acompanhamento pode envolver questões emocionais, comportamentais, comunicação, socialização, regulação emocional e desenvolvimento de habilidades.",
  },
  {
    q: "A família pode participar do acompanhamento?",
    a: "Sim. Especialmente nos atendimentos de crianças e adolescentes, a participação e orientação da família podem fazer parte do processo conforme a necessidade.",
  },
  {
    q: "Como saber qual atendimento é adequado para mim?",
    a: "Cada caso é individual. Entre em contato pelo WhatsApp para conversar sobre sua necessidade e entender qual abordagem pode ser mais adequada.",
  },
  {
    q: "Como faço para agendar?",
    a: "Clique em qualquer botão de WhatsApp disponível no site e envie uma mensagem. A equipe da Essenza Terapias poderá orientar você sobre os próximos passos.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Dúvidas</p>
          <h2 className="mt-4 text-[1.75rem] leading-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="gold-rule mx-auto mt-6" />
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="border-b border-border/70"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg leading-snug text-foreground hover:no-underline data-[state=open]:text-gold-deep">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
