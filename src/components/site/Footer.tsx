import logoAsset from "@/assets/logo.png.asset.json";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Problemas", href: "#problemas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="Essenza Terapias"
              className="h-10 w-auto object-contain"
            />
            <p className="mt-5 text-sm text-muted-foreground">Essenza Terapias</p>
            <p className="text-sm text-muted-foreground">Toledo – Paraná</p>
          </div>

          <nav className="flex flex-col gap-2.5">
            <p className="eyebrow mb-2">Navegação</p>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-gold-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <p className="eyebrow mb-2">Contato</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-gold-deep"
            >
              WhatsApp: {WHATSAPP_NUMBER}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm break-all text-muted-foreground transition-colors hover:text-gold-deep"
            >
              {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-gold-deep"
            >
              Instagram: {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div
          className="mt-12 h-px w-full opacity-60"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden
        />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Desenvolvido com coração por{" "}
          <a
            href="https://www.instagram.com/dufrimeunegocio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-deep transition-opacity hover:opacity-70"
          >
            DUFRI Meu Negócio
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
