import { Link, createFileRoute } from "@tanstack/react-router";

const TITLE = "Política de Privacidade | Essenza Terapias";
const DESCRIPTION =
  "Política de Privacidade informativa da Essenza Terapias sobre navegação, contatos, WhatsApp, cookies e direitos do usuário.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <Link
          to="/"
          className="text-sm text-muted-foreground transition-colors duration-300 hover:text-gold-deep active:text-gold-deep"
        >
          Voltar ao site
        </Link>

        <p className="eyebrow mt-12">Essenza Terapias</p>
        <h1 className="mt-4 text-[2rem] leading-tight sm:text-5xl">
          Política de Privacidade
        </h1>
        <div className="gold-rule mt-6" />

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="font-display text-2xl text-foreground">Navegação no site</h2>
            <p className="mt-3">
              Este site tem caráter informativo e apresenta os serviços, canais de contato
              e informações institucionais da Essenza Terapias. Durante a navegação,
              podem ser coletadas informações técnicas básicas necessárias ao funcionamento
              e segurança do site, como páginas acessadas, tipo de dispositivo e dados de
              conexão fornecidos automaticamente pelo navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Dados enviados por contato</h2>
            <p className="mt-3">
              Ao entrar em contato por WhatsApp, e-mail ou Instagram, você poderá enviar
              voluntariamente informações como nome, telefone, endereço de e-mail e o
              conteúdo da mensagem. Essas informações são utilizadas somente para responder
              à solicitação, orientar sobre atendimentos e manter a comunicação iniciada por
              você.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Uso do WhatsApp</h2>
            <p className="mt-3">
              Os botões de WhatsApp direcionam para uma conversa fora deste site. Ao usar
              esse canal, a comunicação passa a seguir também as regras e configurações da
              própria plataforma WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Cookies</h2>
            <p className="mt-3">
              O site pode utilizar cookies ou tecnologias semelhantes apenas quando forem
              necessários para funcionamento, desempenho, segurança ou análise básica de
              navegação. Você pode gerenciar cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Proteção dos dados</h2>
            <p className="mt-3">
              As informações compartilhadas pelos canais de contato devem ser tratadas com
              cuidado e usadas de forma compatível com a finalidade da comunicação. Não são
              inventadas, solicitadas ou exibidas neste documento informações jurídicas ou
              cadastrais que não foram fornecidas publicamente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">Direitos do usuário</h2>
            <p className="mt-3">
              Você pode solicitar informações sobre o uso dos dados enviados, pedir correção
              de dados de contato ou solicitar a interrupção de comunicações futuras pelos
              canais oficiais da Essenza Terapias.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}