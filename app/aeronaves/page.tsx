import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { InternalHero } from "@/components/sections/InternalHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Aeronaves e Soluções Aéreas | Good Fly",
  description:
    "Conheça as frentes de atuação da Good Fly com jatos executivos, helicópteros e soluções sob demanda em todo o Brasil.",
  path: "/aeronaves",
  keywords: ["Jato executivo", "Helicóptero executivo", "Táxi aéreo"]
});

const aircraftCards = [
  {
    title: "Jatos executivos",
    description:
      "Alternativas para deslocamentos corporativos, roteiros sob medida e viagens com agilidade e discrição.",
    image: "/images/jato-executivo-pista.jpg",
    href: "/voos-executivos"
  },
  {
    title: "Helicópteros executivos",
    description:
      "Soluções rápidas para acessos urbanos, regionais, visitas técnicas e operações especiais.",
    image: "/images/helicoptero-executivo.jpg",
    href: "/helicopteros"
  },
  {
    title: "Missões especiais",
    description:
      "UTI aérea, transporte de órgãos, logística urgente e operações sob demanda que exigem resposta imediata.",
    image: "/images/hero-jato-executivo.jpg",
    href: "/uti-aerea"
  }
];

export default function AeronavesPage() {
  return (
    <>
      <InternalHero
        title="Aeronaves e soluções sob demanda"
        subtitle="A Good Fly conecta cada missão ao perfil de aeronave e operador mais adequado, sempre conforme disponibilidade operacional e necessidade da operação."
        image="/images/jato-executivo-pista.jpg"
        imageAlt="Jatos executivos posicionados em pátio aeroportuário"
        breadcrumbItems={[
          { label: "Início", href: "/" },
          { label: "Aeronaves" }
        ]}
        primaryCta={{ label: "Solicitar cotação agora", href: "/contato" }}
      />

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Visão geral"
            title="Uma operação diferente pede uma solução diferente"
            description="Mais do que listar aeronaves, a proposta aqui é mostrar como a Good Fly estrutura o atendimento para encontrar a alternativa mais aderente a cada missão."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {aircraftCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[32px] border border-line/80 bg-white shadow-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-2xl font-semibold text-brand-950">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-600">
                    {card.description}
                  </p>
                  <div className="mt-6">
                    <Button href={card.href} variant="secondary">
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-line/70">
              <Image
                src="/images/catalogo-good-fly.jpg"
                alt="Material institucional Good Fly com foco em aeronaves e operações"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionTitle
                eyebrow="Atendimento consultivo"
                title="Mais do que aeronaves, coordenação responsável"
                description="A Good Fly não se posiciona como operadora aérea própria nesta apresentação institucional. A atuação é de intermediação e coordenação de soluções aéreas, conectando cliente, missão e disponibilidade operacional."
              />
              <div className="mt-8 space-y-4">
                {[
                  "Análise do tipo de missão e do perfil da rota",
                  "Busca por operadores homologados e alternativas compatíveis",
                  "Clareza comercial sobre prazos, requisitos e condições"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-line/80 bg-white px-5 py-4 text-sm font-medium text-brand-950 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Quer entender qual solução aérea faz mais sentido?"
        description="Envie sua rota, urgência e objetivo da missão. A equipe da Good Fly avalia o cenário e direciona o atendimento."
        primaryLabel="Solicitar análise da missão"
        primaryHref="/contato"
        secondaryLabel="Falar no WhatsApp 24h"
        secondaryHref={siteConfig.whatsappHref}
      />
    </>
  );
}
