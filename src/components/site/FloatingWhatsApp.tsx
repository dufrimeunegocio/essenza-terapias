import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="whatsapp-float fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-whatsapp)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-whatsapp/90 active:scale-95 sm:right-7 sm:bottom-7 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}