import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function VisualCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-line/80 bg-white px-6 py-12 text-brand-950 shadow-2xl sm:px-10 sm:py-16">
          <div className="absolute inset-0">
            <Image
              src="/images/aeronaves/avioes/avioes-citation-xls-img-1.jpg"
              alt="Aeronave executiva em fundo de chamada final"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_8%,rgba(255,255,255,0.86)_48%,rgba(255,255,255,0.68)_100%)]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-gold-500/25 bg-white/88 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-900">
              Atendimento imediato
            </span>
            <h2 className="mt-5 font-heading text-3xl font-semibold text-balance text-brand-950 sm:text-5xl">
              Precisa voar com urgência, conforto e discrição?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-950/78 sm:text-lg">
              Fale com a Good Fly para cotar sua missão e receber uma alternativa
              aérea compatível com a rota, o perfil do voo e a disponibilidade
              operacional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contato">Solicitar cotação agora</Button>
              <Button href={siteConfig.whatsappHref} variant="whatsapp">
                Falar no WhatsApp 24h
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
