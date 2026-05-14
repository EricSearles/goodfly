import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-28 text-white sm:pt-32">
      <Image
        src="/images/hero-jato-executivo.jpg"
        alt="Jato executivo em destaque para operações sob demanda"
        fill
        priority
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <Container className="relative z-10 pb-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
              Atendimento consultivo 24h
            </span>
            <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Voos executivos sob demanda
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Jatos, helicópteros, UTI aérea, transporte de órgãos e soluções
              aéreas especiais com atendimento 24 horas em todo o Brasil.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contato">Solicitar cotação agora</Button>
              <Button href={siteConfig.whatsappHref} variant="whatsapp">
                Falar no WhatsApp 24h
              </Button>
              <Button href="/agregue-sua-aeronave" variant="ghost">
                Agregue sua aeronave
              </Button>
            </div>
          </div>
          <div className="glass-panel rounded-[32px] border border-white/10 p-6 text-brand-950 shadow-2xl lg:translate-y-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-brand-950 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-500">
                  Intermediação premium
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Conectamos sua necessidade à aeronave e ao operador homologado
                  mais adequados para cada missão.
                </p>
              </div>
              <div className="rounded-3xl border border-line/70 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-900">
                  Escopo de atendimento
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-600">
                  Táxi aéreo executivo, remoções aeromédicas, logística aérea,
                  apoio a proprietários e operações especiais.
                </p>
              </div>
            </div>
            <div className="gold-divider mt-6 h-px w-full" />
            <p className="mt-6 text-sm leading-7 text-muted-600">
              {siteConfig.legalPositioning}
            </p>
          </div>
        </div>
        <div className="mt-10">
          <TrustBadges />
        </div>
      </Container>
    </section>
  );
}
