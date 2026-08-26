import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-border/70 bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="min-w-0" aria-label="Essenza Terapias — início">
          <img
            src={logoAsset.url}
            alt="Essenza Terapias"
            className="h-9 w-auto object-contain sm:h-11"
          />
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-ink/75 transition-colors duration-300 hover:text-gold-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-6 py-2.5 text-xs tracking-[0.16em] uppercase text-ink-foreground transition-colors duration-500 hover:bg-gold hover:text-ink sm:inline-block"
          >
            Agendar atendimento
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="shrink-0 rounded-full border border-border p-2.5 text-gold-deep lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 text-base text-foreground/80 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 rounded-full bg-gold px-6 py-4 text-center text-xs tracking-[0.16em] uppercase text-primary-foreground"
            >
              Agendar atendimento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
