import logoAsset from "@/assets/logo.png.asset.json";
import { Instagram, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_BASE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";

const LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Problemas", href: "/#problemas" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Sobre Mim", href: "/#sobre" },
  { label: "Perguntas Frequentes", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];

const DUFRI_URL =
  "https://www.instagram.com/dufrimeunegocio?igsi=bDd3N2tyb21qN2Zu&utm_source=qr";

export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-ink-foreground">
      <div
        className="h-px w-full"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.1fr_0.9fr_1.2fr]">
          <div>
            <img
              src={logoAsset.url}
              alt="Essenza Terapias"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>

          <nav className="flex flex-col gap-2.5">
            <p className="mb-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold">
              Navegação
            </p>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-foreground/75 transition-colors duration-300 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <p className="mb-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold">
              Contato
            </p>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink-foreground/75 transition-colors duration-300 hover:text-gold active:text-gold"
            >
              <WhatsAppIcon className="size-4 shrink-0 text-gold" />
              <span>{WHATSAPP_NUMBER}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-sm break-all text-ink-foreground/75 transition-colors duration-300 hover:text-gold active:text-gold"
            >
              <Mail className="size-4 shrink-0 text-gold" strokeWidth={1.7} />
              <span>{EMAIL}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink-foreground/75 transition-colors duration-300 hover:text-gold active:text-gold"
            >
              <Instagram className="size-4 shrink-0 text-gold" strokeWidth={1.7} />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

        <div
          className="mt-12 h-px w-full opacity-60"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden
        />
        <div className="mt-6 flex flex-col items-center gap-3 text-center text-xs text-ink-foreground/60 sm:flex-row sm:justify-center sm:gap-4">
          <p>
            <Link
              to="/politica-de-privacidade"
              className="transition-colors duration-300 hover:text-gold active:text-gold"
            >
              Política de Privacidade
            </Link>{" "}
            <span className="text-ink-foreground/30">|</span> © 2026 Essenza Terapias. Todos os direitos reservados.
          </p>
        </div>
        <p className="mt-3 text-center text-xs text-ink-foreground/60">
          Desenvolvido com ❤️ por{" "}
          <a
            href={DUFRI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gold active:text-gold"
          >
            @Dufrimeunegocio
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
