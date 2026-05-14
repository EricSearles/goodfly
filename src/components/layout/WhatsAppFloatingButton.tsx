import { MessageCircleMore } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 hidden items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-[1.02] md:flex"
      >
        <MessageCircleMore className="h-5 w-5" />
        Fale conosco 24h
      </a>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 md:hidden"
      >
        <MessageCircleMore className="h-6 w-6" />
      </a>
    </>
  );
}
