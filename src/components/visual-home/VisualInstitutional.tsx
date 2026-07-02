import Image from "next/image";
import { Globe2, ShieldCheck, TimerReset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/site";

const institutionalItems = [
  {
    icon: ShieldCheck,
    title: "Operadores homologados"
  },
  {
    icon: Globe2,
    title: "Atendimento nacional"
  },
  {
    icon: TimerReset,
    title: "Resposta rápida"
  }
];

export function VisualInstitutional() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionTitle
              title="Soluções aéreas sob demanda e atendimento direto"
              description={siteConfig.legalPositioning}
            />
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[340px] overflow-hidden rounded-[30px] border border-line/80 shadow-sm">
                <Image
                  src="/images/aeronaves/avioes/avioes-lear-45-img-1.jpg"
                  alt="Aeronave executiva em destaque"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative min-h-[340px] overflow-hidden rounded-[30px] border border-line/80 shadow-sm">
                <Image
                  src="/images/aeronaves/helicopteros/helicoptero-bell-429-img-1.jpg"
                  alt="Helicóptero executivo em destaque"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/58 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="mt-3 text-lg font-semibold leading-7">
                    Atendimento para voos executivos, helicópteros e operações
                    especiais.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {institutionalItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-line/80 bg-white p-5 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl border border-gold-500/25 bg-gold-500/10 p-3 text-gold-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-brand-950">
                      {item.title}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
