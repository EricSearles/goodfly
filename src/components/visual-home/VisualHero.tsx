import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const trustPoints = [
  {
    icon: ShieldCheck,
    label: "Operadores homologados"
  },
  {
    icon: Clock3,
    label: "Atendimento 24h"
  },
  {
    icon: Globe2,
    label: "Cobertura nacional"
  }
];

const missionTags = [
  "Jatos executivos",
  "Helicópteros",
  "UTI aérea",
  "Logística crítica"
];

export function VisualHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef3f5]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jato-executivo.jpg"
          alt="Jato executivo em destaque na pista ao entardecer"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0.94)_5%,rgba(255,255,255,0.78)_35%,rgba(7,28,31,0.18)_100%),linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(7,28,31,0.34)_100%)]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/50 to-transparent" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/65 blur-3xl" />
      <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-gold-500/14 blur-3xl" />

      <Container className="relative z-10 flex min-h-[calc(100vh-4rem)] items-end py-28 sm:py-32">
        <div className="grid w-full gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div className="max-w-3xl">
            <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-tight text-balance text-brand-950 sm:text-5xl lg:text-7xl">
              Aviação executiva sob demanda
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-950/82 sm:text-xl">
              Jatos, helicópteros e soluções aéreas para quem precisa voar com
              segurança, conforto e agilidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contato">Cotar voo agora</Button>
              <Button href={siteConfig.whatsappHref} variant="whatsapp">
                Falar no WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/70 bg-white/76 px-4 py-4 shadow-sm backdrop-blur-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-brand-950/6 p-2 text-gold-500">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-brand-950/86">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 xl:justify-self-end">
            <div className="rounded-[32px] border border-white/70 bg-white/74 p-4 shadow-xl backdrop-blur-md">
              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[280px] overflow-hidden rounded-[26px]">
                  <Image
                    src="/images/aeronaves/avioes/avioes-global-express-img-1.jpg"
                    alt="Aeronave executiva em destaque"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between rounded-[26px] border border-line/70 bg-[#f9fbfc] p-6 text-brand-950">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-brand-900">
                      Atendimento direto
                    </p>
                    <p className="mt-4 text-2xl font-semibold text-brand-950">
                      Jatos, helicópteros e operações especiais.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {missionTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line/80 bg-white px-3 py-2 text-xs uppercase tracking-[0.18em] text-brand-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/aeronaves"
              className="inline-flex items-center gap-2 self-start rounded-full border border-line/80 bg-white/84 px-5 py-3 text-sm font-semibold text-brand-950 shadow-sm transition hover:bg-white"
            >
              Ver aeronaves
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
