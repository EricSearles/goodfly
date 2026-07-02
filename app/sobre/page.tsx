import type { Metadata } from "next";
import { ShieldCheck, TimerReset, Waypoints } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { InternalHero } from "@/components/sections/InternalHero";
import { ContactCard } from "@/components/ui/ContactCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a Good Fly | Intermediação de Soluções Aéreas",
  description:
    "Conheça a Good Fly, empresa focada em intermediação e coordenação de soluções aéreas sob demanda com atendimento 24 horas em todo o Brasil.",
  path: "/sobre",
  keywords: ["Aviação executiva no Brasil", "Gestão de aeronaves", "Táxi aéreo"]
});

export default function SobrePage() {
  return (
    <>
      <InternalHero
        title="Sobre a Good Fly"
        subtitle="Intermediação e coordenação de soluções aéreas sob demanda, com atendimento ágil em todo o Brasil."
        image="/images/aeronaves/avioes/avioes-jato-legacy-650-img-1.jpg"
        imageAlt="Aeronave executiva da Good Fly em destaque"
        breadcrumbItems={[
          { label: "Início", href: "/" },
          { label: "Sobre" }
        ]}
        primaryCta={{ label: "Falar com a Good Fly", href: "/contato" }}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionTitle
                eyebrow="Quem somos"
                title="Coordenação aérea com agilidade, clareza e discrição"
                description={siteConfig.legalPositioning}
              />
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-600">
                A Good Fly atende clientes que precisam de resposta rápida e
                coordenação eficiente, conectando cada missão a operadores e
                aeronaves compatíveis com a necessidade do voo.
              </p>
            </div>
            <div className="rounded-[32px] border border-line/80 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-900">
                Atendimento
              </p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-600">
                <p>Voos executivos e helicópteros.</p>
                <p>UTI aérea e operações especiais.</p>
                <p>Logística aérea e transporte urgente.</p>
                <p>Gestão, compra e venda de aeronaves.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted-50 py-20">
        <Container>
          <SectionTitle
            eyebrow="Diretrizes de atendimento"
            title="Três pilares para orientar cada missão"
            description="Pontos centrais para analisar cada solicitação."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ContactCard icon={<TimerReset className="h-5 w-5" />} title="Agilidade">
              Briefing rápido, análise objetiva e resposta alinhada ao nível de
              urgência da missão.
            </ContactCard>
            <ContactCard icon={<Waypoints className="h-5 w-5" />} title="Coordenação">
              Integração entre demanda, alternativa aérea, disponibilidade e
              requisitos operacionais.
            </ContactCard>
            <ContactCard icon={<ShieldCheck className="h-5 w-5" />} title="Responsabilidade">
              Clareza sobre intermediação, limites de disponibilidade e
              conformidade antes de qualquer confirmação.
            </ContactCard>
          </div>
        </Container>
      </section>

      <CTASection
        title="Quer falar com uma equipe que entende operações sob demanda?"
        description="A Good Fly atende clientes corporativos, missões especiais e proprietários de aeronaves com comunicação direta."
        primaryLabel="Entrar em contato"
        primaryHref="/contato"
        secondaryLabel="WhatsApp 24h"
        secondaryHref={siteConfig.whatsappHref}
      />
    </>
  );
}
