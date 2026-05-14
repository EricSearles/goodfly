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
        subtitle="Uma empresa voltada para intermediação e coordenação de soluções aéreas sob demanda, com atendimento ágil, posicionamento responsável e foco em experiências premium."
        image="/images/catalogo-good-fly.jpg"
        imageAlt="Catálogo Good Fly em mesa com atmosfera premium"
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
                A Good Fly nasceu para atender clientes que precisam de uma
                resposta aérea rápida e bem coordenada. Em vez de prometer uma
                operação própria onde isso não está formalmente apresentado, o
                site posiciona a empresa de forma correta: como parceira na
                intermediação, análise e conexão com operadores autorizados.
              </p>
            </div>
            <div className="rounded-[32px] border border-line/80 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-900">
                Como a Good Fly se apresenta
              </p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-600">
                <p>Atendimento consultivo 24 horas.</p>
                <p>Intermediação de voos e soluções especiais sob demanda.</p>
                <p>Conexão com operadores homologados conforme a missão.</p>
                <p>Informação correta antes da contratação.</p>
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
            description="Estrutura pensada para manter o posicionamento premium sem perder objetividade comercial."
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
        description="A Good Fly atende clientes corporativos, missões especiais e proprietários de aeronaves com postura consultiva e comunicação direta."
        primaryLabel="Entrar em contato"
        primaryHref="/contato"
        secondaryLabel="WhatsApp 24h"
        secondaryHref={siteConfig.whatsappHref}
      />
    </>
  );
}
